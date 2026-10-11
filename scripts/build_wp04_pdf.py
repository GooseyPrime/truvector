"""Render WP-04 from its Markdown source to public/working-papers/WP-04.pdf.

Usage: python3 scripts/build_wp04_pdf.py [--edition YYYY-MM-DD]

This is a second, dependency-light route to the same page design as
scripts/working-paper.css (Letter, the same margins, serif body, sans
headings, ruled tables). It uses reportlab with the standard PDF fonts and no
stream compression, so the output is a plain-text PDF that is identical on
every run. It handles only the Markdown that WP-04 uses: one title, a byline,
second-level headings, paragraphs with **bold**, bullet lists, and pipe
tables. It then adds or replaces the WP-04.pdf entry in manifest.json and
leaves the other entries alone.

scripts/build_working_paper_pdfs.py also lists WP-04 and renders it with
pandoc and Chromium along with the rest of the collection.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path

from reportlab import rl_config
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs" / "working-papers" / "WP-04-word-overlap-vs-meaning.md"
PUBLIC = ROOT / "public" / "working-papers"
TARGET = PUBLIC / "WP-04.pdf"

BODY = ParagraphStyle("body", fontName="Times-Roman", fontSize=10.5, leading=14.9, alignment=TA_JUSTIFY, spaceAfter=2.6 * mm)
HEAD = ParagraphStyle("head", fontName="Helvetica", fontSize=8, textColor=colors.HexColor("#555555"), alignment=TA_RIGHT, spaceAfter=10 * mm)
H1 = ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=20, leading=24, alignment=TA_CENTER, spaceAfter=6 * mm)
BYLINE = ParagraphStyle("byline", fontName="Helvetica", fontSize=9.5, leading=12, textColor=colors.HexColor("#333333"), alignment=TA_CENTER, spaceAfter=9 * mm)
H2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=12.5, leading=15, spaceBefore=7 * mm, spaceAfter=2.5 * mm, keepWithNext=1)
CELL = ParagraphStyle("cell", fontName="Helvetica", fontSize=9, leading=11)
CELL_HEAD = ParagraphStyle("cellhead", parent=CELL, fontName="Helvetica-Bold")
BULLET = ParagraphStyle("bullet", parent=BODY, spaceAfter=1 * mm)


def inline(text: str) -> str:
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)


def table(lines: list[str]) -> Table:
    rows = [[c.strip() for c in line.strip().strip("|").split("|")] for line in lines]
    rows = [rows[0]] + rows[2:]  # drop the separator row
    data = [[Paragraph(inline(c), CELL_HEAD if i == 0 else CELL) for c in row] for i, row in enumerate(rows)]
    flow = Table(data, repeatRows=1, splitByRow=0, hAlign="LEFT", spaceBefore=3 * mm, spaceAfter=4 * mm)
    flow.setStyle(TableStyle([
        ("LINEABOVE", (0, 0), (-1, -1), 0.5, colors.HexColor("#999999")),
        ("LINEBELOW", (0, -1), (-1, -1), 0.5, colors.HexColor("#999999")),
        ("LINEBELOW", (0, 0), (-1, 0), 1, colors.HexColor("#333333")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 1.8 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 1.8 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 1.4 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.4 * mm),
    ]))
    return flow


def story(markdown: str, edition: str) -> list:
    out: list = [Paragraph(f"InTellMe AI | Lane Vector and TruVector | {edition}", HEAD)]
    blocks = [b for b in re.split(r"\n\s*\n", markdown.strip()) if b.strip()]
    after_title = False
    for block in blocks:
        lines = block.splitlines()
        if block.startswith("# "):
            out.append(Paragraph(inline(block[2:]), H1))
            after_title = True
            continue
        if after_title:
            out.append(Paragraph(inline(block), BYLINE))
            after_title = False
        elif block.startswith("## "):
            out.append(Paragraph(inline(block[3:]), H2))
        elif lines[0].startswith("|"):
            out.append(table(lines))
        elif lines[0].startswith("- "):
            items = [ListItem(Paragraph(inline(line[2:]), BULLET), leftIndent=6 * mm) for line in lines]
            out.append(ListFlowable(items, bulletType="bullet", bulletFontSize=7, leftIndent=6 * mm))
        else:
            out.append(Paragraph(inline(" ".join(lines)), BODY))
    return out


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--edition", default="2026-10-11")
    args = parser.parse_args()
    rl_config.invariant = 1
    rl_config.pageCompression = 0
    doc = SimpleDocTemplate(
        str(TARGET), pagesize=letter, topMargin=22 * mm, rightMargin=20 * mm, bottomMargin=24 * mm, leftMargin=20 * mm,
        title="TruVector: counting shared words against reading meaning (WP-04)", author="Michael Brandon Lane",
        subject="Study TV-001", creator="scripts/build_wp04_pdf.py", pageCompression=0, invariant=1,
    )
    doc.build(story(SOURCE.read_text(encoding="utf-8"), args.edition))
    # The second line of a PDF is a comment of four high bytes that marks the
    # file as binary. This file is not, so the comment is replaced by the same
    # number of plain characters and every byte offset stays where it was.
    raw = TARGET.read_bytes()
    first, rest = raw.split(b"\n", 1)
    second, rest = rest.split(b"\n", 1)
    second = bytes(b if b < 128 else ord("-") for b in second)
    data = first + b"\n" + second + b"\n" + rest
    data.decode("ascii")
    TARGET.write_bytes(data)
    manifest_path = PUBLIC / "manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    manifest["files"]["WP-04.pdf"] = {"sha256": hashlib.sha256(data).hexdigest(), "bytes": len(data), "edition": args.edition}
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"WP-04.pdf: {len(data)} bytes")


if __name__ == "__main__":
    main()
