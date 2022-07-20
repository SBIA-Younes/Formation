import flet


def main(page: flet.page):

    t = flet.Text(
        value="C'est un simple controleur de text",
        size=40,
        color="white",
        # bgcolor='pink',
        weight="bold",
        # selectable=True,
        italic=True,
    )
    page.add(t)


flet.app(target=main, port=8180)
