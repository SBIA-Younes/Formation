import flet


def main(page: flet.page):

    # btn = flet.ElevatedButton("Click me !")
    # page.add(btn)

    page.title = "Flet counter example"
    page.vertical_alignment = "center"

    txt_number = flet.TextField(value="0", text_align="right", width=100)

    def minus_click(e):
        txt_number.value = int(txt_number.value) - 1
        page.update()

    def plus_click(e):
        txt_number.value = int(txt_number.value) + 1
        page.update()

    page.add(flet.Row([
        flet.IconButton(flet.icons.REMOVE, on_click=minus_click),
        txt_number,
        flet.IconButton(flet.icons.ADD, on_click=plus_click),
    ],
        alignment="center",
    ))


flet.app(target=main, port=8180)
