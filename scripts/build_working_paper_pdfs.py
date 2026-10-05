"""Export authoritative Word sources without substituting a different typesetting engine."""
from pathlib import Path
import os, shutil, subprocess, sys

root=Path(__file__).resolve().parents[1]
folder=root/'public'/'working-papers'
if len(sys.argv)!=2: raise SystemExit('Usage: build_working_paper_pdfs.py PRIVATE_SOURCE_FOLDER')
source=Path(sys.argv[1]).resolve()
if source.is_relative_to(root): raise SystemExit('Editable sources must remain outside the repository.')
files=sorted(source.glob('*.docx'))
if not files: raise SystemExit('No publication Word sources found.')
if os.name=='nt':
    # Word is an existing installation; no runtime or application is installed here.
    ps="""$ErrorActionPreference='Stop';$word=New-Object -ComObject Word.Application;$word.Visible=$false;$word.DisplayAlerts=0;try{foreach($f in Get-ChildItem -LiteralPath $env:AUTHORING_FOLDER -Filter '*.docx'){$doc=$word.Documents.Open($f.FullName,$false,$true,$false);try{$doc.Repaginate();$doc.ExportAsFixedFormat((Join-Path $env:PUBLICATION_FOLDER ([IO.Path]::ChangeExtension($f.Name,'.pdf'))),17)}finally{$doc.Close(0)}}}finally{$word.Quit()}"""
    subprocess.run(['powershell','-NoProfile','-NonInteractive','-Command',ps],env={**os.environ,'PUBLICATION_FOLDER':str(folder),'AUTHORING_FOLDER':str(source)},check=True)
else:
    converter=shutil.which('libreoffice') or shutil.which('soffice')
    if not converter: raise SystemExit('Export requires an existing Microsoft Word or LibreOffice installation.')
    subprocess.run([converter,'--headless','--convert-to','pdf','--outdir',str(folder),*[str(f) for f in files]],check=True)
print('Export complete. Inspect all pages and update manifest.json before publication.')
