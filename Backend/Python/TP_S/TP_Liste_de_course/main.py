
""" dans cette fonction en boucle sur une liste de course qui affiche diverse menu

1. Ajouter un élément à la liste de courses

2. Retirer un élément de la liste de courses

3. Afficher les éléments de la liste de courses

4. Vider la liste de courses

5. Quitter le programme
"""

def liste_de_course():
    menu = """Choisissez parmi les 5 options suivantes:
1: Ajouter un élément à la liste
2: Retirer un élément de la liste
3: Afficher la liste
4: Vider la liste
5: Quitter
👉 Votre choix : """
    list_cours = []
    while True:
        
        choix = input(f"{menu}")
        if choix.isdigit() and (choix in ("1","2","3","4","5")):
            pass
            if choix == "1":
                ajout_element = input("Entrez le nom d'un élément à ajouter à la liste de courses : ")
                
                elements = [element.lower() for element in list_cours]
                if ajout_element.lower() in elements:
                    print(f"L'élement {ajout_element} est déja dans la liste.")
                else:
                    list_cours.append(ajout_element)
                    print(f"L'élément {ajout_element} a bien été ajouté à la liste.")
            elif choix == "2":
                element_retire = input("Entrez le nom d'un élément à retirer de la liste de courses : ")
                if element_retire in list_cours:
                    list_cours.remove(element_retire)
                    print(f"L'élément {element_retire} a bien été retirer de la liste.")
                else:
                    print(f"L'élément {element_retire} n'a pas étais retirer de la liste.")
                    
            elif choix == "3":
                for i, element in enumerate(list_cours,start=1):
                    print( i,element)
            elif choix == "4":
                list_cours =[]
            elif choix == "5":
                break
        else:
            print("Veille respecte le menu merci")

liste_de_course()

