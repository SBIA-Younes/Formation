import flet


def main(page: flet.page):
    prenom = flet.TextField(label="الاسم")
    nom = flet.TextField(label="اللقب")
    # prenom.disabled = True
    # nom.disabled = True
    page.add(prenom, nom)


flet.app(port=8180, target=main)
