# Faire tourner le front sur votre VM

Git clone le repo front : https://github.com/O-clock-Lucy/projet-12-recettes-healthy-front

installer les dépendances du projet avec le terminal : yarn

Se déplacer sur la branch dev avec le terminal : git checkout dev

Se déplacer dans le dossier goodfood : cd goodfood

lancer le serveur front : yarn start

le serveur tourne sur le localhost3000



test de requette add recipe :

{
      "recipe": {
        "name": "Infusion aux feuilles de laitue",
        "description": "Pour concocter votre infusion de laitue bio, lavez deux feuilles de laitue issue de l'agriculture biologique puis placez-les dans une tasse. Par-dessus, versez de l'eau bouillante puis laissez infuser 10 minutes. Si besoin, ajoutez un sachet de menthe poivrée pour donner une saveur agréable à votre boisson.",
        "duration": 10,
        "heatTime": 10,
        "prepTime": 5,
        "portion": 3,
        "picture": "images\/recette\/infussionLaitue.jpg",
				"compositions":[{
            "food": {
              "id": 1,
              "name": "laitue",
              "picture": "images\/food\/laitue.jpg"
            },
            "unity": null,
            "quantity": "1"
          }],
				 "virtue": {
          "id": 8,
          "name": "Sommeil"
        },
				"category": [],
        "user": {
          "id": 1
        },
        "steps": [    {
            "id": 1,
            "name": 1,
            "content": "Lavez quelques feuilles de laitue"
          }]
			}
}