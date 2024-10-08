# honkai-guide

## Project setup

Note: This project may not build on a Windows environment.  Prior to August 2024 it was working; it doesn't work now and I'm not going to waste time trying to fix it.

Install Node.js v20.17.0.

To install dependencies, run:

```
npm install
```

You may need to use `--force` as the project uses fairly old dependencies.

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

If you get `ERR_OSSL_EVP_UNSUPPORTED` errors, check out solutions here:
https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported

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
