# Lane Vector and TruVector working papers

Edition: 8 October 2026. Author: Michael Brandon Lane, InTellMe AI.

The collection comprises WP-01 (signal direction, rate, and source structure), WP-02 (source dependence and decisions from model readings), WP-03 (the research in plain language), and the companion validation framework. Both research websites publish identical PDFs.

## Files

The Markdown files in this folder are the authoring sources and the searchable text. Figures are in `figures/`, drawn from the same arithmetic the papers state. The published PDFs are in `public/working-papers/`, and `manifest.json` there records their SHA-256 digests and sizes.

## Building the PDFs

`scripts/build_working_paper_pdfs.py` renders each Markdown source to PDF: pandoc converts the Markdown (formulas typeset with the KaTeX copy in the site's development dependencies) to HTML against `scripts/working-paper.css`, and the headless Chromium already present on the build machine prints the HTML to PDF with embedded figures. The script then rewrites `manifest.json`. It installs nothing. Inspect every rendered page before publishing, and copy the identical PDFs and manifest to the Lane Vector site repository.

## Editing rules

Every number in the papers is recomputed in the calculation appendices. Results are stated with the record files that hold them and with the caveat that belongs beside them. Planned measurements are described by what they measure and by the result that would disprove them, never by a stage. The vocabulary is the sites' vocabulary: statement, story, retrieved material, reader, origin, working prototype.
