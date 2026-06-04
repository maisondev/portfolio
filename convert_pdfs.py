from pdf2image import convert_from_path
from pathlib import Path
import os

docs_path = Path(r"C:\Users\maiso\WebstormProjects\portfolio\public\documents\contests")

pdfs = {
    str(docs_path / "edital-tecnico-municipal-2010.pdf"): "edital-tecnico-municipal-2010",
    str(docs_path / "dom-tecnico-municipal-2010.pdf"): "dom-tecnico-municipal-2010"
}

for pdf_path, name in pdfs.items():
    try:
        print(f"Convertendo {name}...")
        images = convert_from_path(pdf_path, first_page=1, last_page=2, dpi=150)
        for idx, img in enumerate(images, 1):
            out = docs_path / f"{name}-page{idx}.jpg"
            img.save(str(out), 'JPEG', quality=85)
            print(f"  OK - Pagina {idx}: {out.name}")
    except Exception as e:
        print(f"  ERRO: {str(e)[:100]}")

print("Conversao concluida!")
