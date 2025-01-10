## Architecture POM (Page Object Model)

- Chaque fichier TypeScript représente une page ou un ensemble de fonctionnalités (ex. `element.page.ts`, `demoqa.page.ts`, `form.page.ts`…)
- Chaque classe contient des méthodes ciblant des éléments précis (click, fill, check…) et des fonctions de navigation (`gotoHome`, `gotoTextBox`…)

### Exemples de fonctionnalités

- Navigation entre différentes sections (Éléments, Formulaires, Widgets…)
- Interaction avec des champs : clic, double-clic, clic droit…
- Remplissage de formulaires (Text Box, Practice Form…)
- Vérification des URL attendues
- Redimensionnement d’éléments
- Déplacement d’un slider à une valeur donnée
