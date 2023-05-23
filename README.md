# honkai-guide

## Project setup

To install dependencies, run:

```
npm install
```

### Setting up Cloud Firestore

The site uses Cloud Firestore to save gear comparisons to allow users to share via URL. To set up Firestore for local development, perform the following steps:

1. Follow the "Create a Cloud Firestore database" step here: https://firebase.google.com/docs/firestore/quickstart#create
2. Create a `firebase_config.ts` file inside the /src folder of the project.
3. Follow the "Get config object for your web app" step here: https://support.google.com/firebase/answer/7015592. Copy the firebaseConfig object into the `firebase_config.ts` file.
4. Add `export default firebaseConfig;` to `firebase_config.ts`.

Afterwards, your `firebase_config.ts` will look something like this:

```ts
const firebaseConfig = {
  apiKey: "###",
  authDomain: "###",
  databaseURL: "###",
  projectId: "###",
  storageBucket: "###",
  messagingSenderId: "###",
  appId: "###",
};

export default firebaseConfig;
```

## Building and running

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
