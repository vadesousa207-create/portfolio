# Portfolio BTS SIO SLAM — Guide d'utilisation

Ce projet est une structure de portfolio professionnelle personnalisable dédiée aux étudiants en BTS SIO (Option SLAM).

## 🚀 Comment lancer le projet dans VS Code ?

1. Ouvrez VS Code.
2. Allez dans `Fichier` > `Ouvrir le dossier` et sélectionnez le dossier racine du portfolio.
3. Installez l'extension VS Code nommée **Live Server** (par Ritwick Dey) si ce n'est pas déjà fait.
4. Effectuez un clic droit sur le fichier `index.html` et choisissez **"Open with Live Server"**.
5. Votre navigateur s'ouvre automatiquement avec le portfolio fonctionnel !

## ✏️ Guide de personnalisation (Où modifier quoi ?)

### 1. Fichier `js/content.js` (CENTRAL)
C'est dans ce fichier que vous devez ajouter la quasi-totalité de vos données personnelles :
* **Compétences** : Ajustez les langages et vos niveaux (*Débutant*, *En cours d'apprentissage*, *À l'aise*).
* **Projets** : Ajoutez vos projets d'AP ou E4 en dupliquant simplement les objets JavaScript dans `projectsData`.
* **Stages** : Complétez le nom de vos entreprises, vos dates et vos missions.
* **Veilles (Tech & Cyber)** : Mettez à jour les thématiques, articles analysés et liens sources.

### 2. Fichier `index.html`
Modifiez uniquement :
* Votre Nom / Prénom dans les titres et la section Accueil.
* La section "À propos" (`[À COMPLÉTER]`).
* Vos adresses e-mail, liens GitHub / LinkedIn dans la section Contact.

### 3. Fichiers médias (`/assets/`)
* **Photo de profil** : Placez votre photo sous le nom `profile.jpg` dans `assets/images/`.
* **Captures de projets** : Déposez vos images dans `assets/images/projects/` et ajustez les chemins dans `js/content.js`.
* **CV PDF** : Ajoutez votre fichier sous le nom `cv.pdf` dans `assets/documents/`.