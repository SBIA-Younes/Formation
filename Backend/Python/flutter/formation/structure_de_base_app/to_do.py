
import flet


def main(page: flet.Page):
    # t = flet.Text()
    # page.controls.append(t)
    # page.add(t)

    # for i in range(10):
    #     t.value = f"Step {i}"
    #     page.update()
    #     sleep(1)
    ''' 
    page.add(
        flet.Row(controls=[
            # Text("A"),
            # Text("B"),
            # Text("C"),
            flet.TextField(label="Votre Nom"),
            flet.ElevatedButton(text="Dite Mon Nom")
        ])
    ) '''

    ''' 
    for i in range(10):
        page.add(flet.Text(f"Line {i}"))
        if i > 4:
            page.controls.pop(0)
        page.update()
        flet.sleep(0.3) '''

    ''' 
    def button_clicked(e):
        page.add(flet.Text("Clicked!"))

    page.add(flet.ElevatedButton(text="Clicke me", on_click=button_clicked)) '''

    def add_clicked(e):
        page.add(flet.Checkbox(label=new_task.value))

    new_task = flet.TextField(
        hint_text="Qu'est-ce qui doit être fait?", width=300)
    page.add(
        flet.Row([new_task, flet.ElevatedButton("Add", on_click=add_clicked)]))


# flet.app(target=main, view=flet.WEB_BROWSER)
flet.app(port=8081, target=main)
