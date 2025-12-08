# 📘 Guide du Portfolio - Chance TOSSOU

Ce document est votre manuel de référence pour comprendre, modifier et mettre en ligne votre portfolio.

---

## 1. Structure du Projet (Comment ça marche ?)

Ce projet est une application **React** moderne utilisant **TypeScript** et **Tailwind CSS**.

### Les Fichiers Clés
*   **`data.tsx` (IMPORTANT)** : C'est votre "Centre de Contrôle". C'est le **seul** fichier que vous avez besoin de toucher pour changer le texte, les projets, les compétences ou vos coordonnées.
*   **`App.tsx`** : Le squelette de votre site. Il décide de l'ordre des sections (Hero, Compétences, Expérience...).
*   **`types.ts`** : Le "gendarme" du code. Il s'assure que vous n'oubliez pas d'informations importantes (ex: une date pour un diplôme).
*   **`index.html`** : Le fichier de base qui définit les couleurs (thème marron/noir) et charge les polices.

---

## 2. Comment modifier le contenu ?

Ouvrez le fichier `data.tsx`. Vous verrez une structure simple :

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Votre Nom", // Changez ici
    // ...
  },
  projects: [
    // ... vos projets
  ]
}
```

*   **Pour changer une image :** Dans `App.tsx`, cherchez la balise `<img>` dans la section header et remplacez le lien `src` par l'URL de votre photo.
*   **Pour ajouter une certification :** Dans `data.tsx`, dupliquez un bloc dans la liste `certifications` et remplissez les nouvelles infos.

---

## 3. Guide d'Hébergement Gratuit (Méthode Recommandée)

En tant qu'étudiant en génie logiciel, la méthode la plus professionnelle et gratuite est d'utiliser **GitHub** couplé à **Vercel** ou **Netlify**.

### Étape 1 : Préparer le code
Si vous êtes en local sur votre machine (VS Code) :
1.  Assurez-vous d'avoir **Node.js** installé.
2.  Dans le dossier du projet, lancez `npm install`.

### Étape 2 : Mettre sur GitHub
1.  Créez un nouveau dépôt (repository) sur [GitHub.com](https://github.com).
2.  Envoyez vos fichiers sur ce dépôt :
    ```bash
    git init
    git add .
    git commit -m "Mon premier portfolio"
    git branch -M main
    git remote add origin <LIEN_DE_VOTRE_REPO>
    git push -u origin main
    ```

### Étape 3 : Mettre en ligne avec Vercel (Gratuit & Automatique)
1.  Créez un compte sur [Vercel.com](https://vercel.com) (connectez-vous avec GitHub).
2.  Cliquez sur **"Add New..."** > **"Project"**.
3.  Vous verrez votre dépôt GitHub "portfolio" apparaître. Cliquez sur **"Import"**.
4.  Vercel va détecter que c'est du "Vite" ou "React". Laissez les réglages par défaut.
5.  Cliquez sur **"Deploy"**.

**C'est fini !** Vercel va vous donner un lien du type `chance-tossou-portfolio.vercel.app`.
À chaque fois que vous ferez une modification et un `git push`, le site se mettra à jour tout seul.

---

## 4. Personnalisation Avancée

Si vous souhaitez changer les couleurs principales (le Marron et le Noir), allez dans le fichier `index.html` ou `tailwind.config.js` (si vous êtes en local) et modifiez la section `colors`:

*   `brand-brown` : Votre couleur principale.
*   `brand-dark` : La couleur de fond sombre.

Bonne chance pour votre carrière !
