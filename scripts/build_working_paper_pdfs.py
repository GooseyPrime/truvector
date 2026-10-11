"""Render the working papers from their Markdown sources to the published PDFs.

Usage: python3 scripts/build_working_paper_pdfs.py [--chromium PATH]

pandoc converts each Markdown file to HTML against scripts/working-paper.css,
with figures embedded as data URIs and the formulas typeset by the KaTeX copy
in node_modules (MathML if KaTeX is absent), and a headless Chromium prints
that HTML to PDF with no browser header or footer. The script
then rewrites public/working-papers/manifest.json with the SHA-256 digest and
size of every PDF. It installs nothing: pandoc and a Chromium binary must
already be present on the machine.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import mimetypes
import os
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "docs" / "working-papers"
PUBLIC = ROOT / "public" / "working-papers"
CSS = ROOT / "scripts" / "working-paper.css"
KATEX = ROOT / "node_modules" / "katex" / "dist"

PAPERS = {
    "WP-01-lane-vector-framework.md": "WP-01.pdf",
    "WP-02-source-independence.md": "WP-02.pdf",
    "WP-03-plain-language.md": "WP-03.pdf",
    "WP-04-word-overlap-vs-meaning.md": "WP-04.pdf",
    "Validation-framework.md": "Validation-framework.pdf",
}

RUNNING_HEAD = "InTellMe AI | Lane Vector and TruVector | {edition}"


def find_chromium(explicit: str | None) -> str:
    candidates = [explicit, os.environ.get("CHROMIUM"), shutil.which("chromium"), shutil.which("chromium-browser"),
                  shutil.which("google-chrome"), shutil.which("chrome")]
    browsers = os.environ.get("PLAYWRIGHT_BROWSERS_PATH")
    if browsers:
        for path in sorted(Path(browsers).glob("chromium-*/chrome-linux/chrome")):
            candidates.append(str(path))
    for candidate in candidates:
        if candidate and Path(candidate).exists():
            return candidate
    raise SystemExit("No Chromium binary found; pass --chromium PATH.")


def embed_images(html: str, base: Path) -> str:
    def repl(match: re.Match[str]) -> str:
        src = match.group(1)
        path = (base / src).resolve()
        if not path.exists():
            raise SystemExit(f"Missing figure: {path}")
        mime = mimetypes.guess_type(str(path))[0] or "application/octet-stream"
        data = base64.b64encode(path.read_bytes()).decode("ascii")
        return f'src="data:{mime};base64,{data}"'
    return re.sub(r'src="([^"]+)"', repl, html)


def render(markdown: Path, pdf: Path, chromium: str, edition: str, workdir: Path) -> None:
    use_katex = (KATEX / "katex.min.js").exists()
    math_flag = f"--katex={KATEX.as_uri()}/" if use_katex else "--mathml"
    body = subprocess.run(
        ["pandoc", str(markdown), "--from", "markdown+tex_math_dollars-implicit_figures", "--to", "html5", math_flag],
        check=True, capture_output=True, text=True,
    ).stdout
    body = embed_images(body, markdown.parent)
    head = RUNNING_HEAD.format(edition=edition)
    katex_head = (
        f"<link rel=\"stylesheet\" href=\"{KATEX.as_uri()}/katex.min.css\">"
        f"<script src=\"{KATEX.as_uri()}/katex.min.js\"></script>"
        "<script>document.addEventListener('DOMContentLoaded',function(){"
        "document.querySelectorAll('span.math').forEach(function(el){"
        "katex.render(el.textContent,el,{displayMode:el.classList.contains('display'),throwOnError:false});});});</script>"
        if use_katex else ""
    )
    html = (
        "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">"
        f"<title>{markdown.stem}</title>{katex_head}<style>{CSS.read_text(encoding='utf-8')}</style></head>"
        f"<body><p class=\"running-head\">{head}</p>{body}</body></html>"
    )
    page = workdir / (markdown.stem + ".html")
    page.write_text(html, encoding="utf-8")
    subprocess.run(
        [chromium, "--headless=new", "--disable-gpu", "--no-sandbox", "--no-pdf-header-footer",
         "--run-all-compositor-stages-before-draw", "--virtual-time-budget=10000", "--allow-file-access-from-files",
         f"--print-to-pdf={pdf}", page.as_uri()],
        check=True, capture_output=True,
    )
    if not pdf.exists() or pdf.stat().st_size < 10_000:
        raise SystemExit(f"Render failed for {markdown.name}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--chromium")
    parser.add_argument("--edition", default=date.today().isoformat())
    args = parser.parse_args()
    chromium = find_chromium(args.chromium)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    manifest = {"edition": args.edition, "author": "Michael Brandon Lane", "files": {}}
    with tempfile.TemporaryDirectory() as tmp:
        for source, target in PAPERS.items():
            pdf = PUBLIC / target
            render(SOURCES / source, pdf, chromium, args.edition, Path(tmp))
            data = pdf.read_bytes()
            manifest["files"][target] = {"sha256": hashlib.sha256(data).hexdigest(), "bytes": len(data)}
            print(f"{target}: {len(data)} bytes")
    (PUBLIC / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print("Manifest written. Inspect every page before publishing.")


if __name__ == "__main__":
    sys.exit(main())
