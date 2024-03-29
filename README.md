### Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite](https://github.com/vitejs/vite) - latest, cutting-edge techologies

- 🏎️ [Pnpm](https://pnpm.io) - Fast OOTB

- 📂 File-based routing

- 📦 Components and composables auto importing

- 📥 APIs and types auto importing

- 🎨 [UnoCSS](https://github.com/unocss/unocss)

- 🔥 [\<script setup\>](https://github.com/vuejs/rfcs/pull/227)

- 🦾 Typescript

### UI Frameworks

- [UnoCSS](https://github.com/unocss/unocss) (The instant on-demand atomic CSS engine)
- [SCSS](https://sass-lang.com/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-vue-components) - APIs auto import and composables auto import
- [@vueuse/core](https://github.com/antfu/vueuse) - useful composition APIs
- [@vueuse/head](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [TS ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)

### Clone to local

```sh
npx degit NicolaSpadari/vite-vue-template my-app
cd my-app
```

### Development

Run and visit http://localhost:3000.
<br>
[@antfu/ni](https://github.com/antfu/ni) is recommended for the installation.

Install packages:

```sh
$ ni
```

Start project:

```sh
$ nr dev
```

### Build

To build, run

```sh
$ nr build
```

Will create the `dist` folder ready to be uploaded
