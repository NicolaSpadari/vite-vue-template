### Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite) - latest, cutting-edge techologies

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [Windi CSS](https://github.com/windicss/windicss)

- 🔥 [\<script setup\> syntax](https://github.com/vuejs/rfcs/pull/227)

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand, faster [TailwindCSS](https://tailwindcss.com/))
- [Bootstrap 5 grid](https://github.com/windicss/windicss) (debloated grid, container - row - responsive cols ONLY)
- [SCSS](https://sass-lang.com/) (nest classes for better organization)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [vite-plugin-windicss](https://github.com/antfu/vite-plugin-windicss) - Windi CSS Integration
- [@vueuse/core](https://github.com/antfu/vueuse) - useful composition APIs
- [@vueuse/head](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@spada/eslint-config](https://github.com/NicolaSpadari/eslint-config)

> Use Node >= 14

### Clone to local

```sh
npx degit NicolaSpadari/vite-vue-template my-app
cd my-app
npm i
```

### Development

Run and visit http://localhost:3000

```sh
npm run dev
```

### Build

To build, run

```sh
npm run build
```

Will create the `dist` folder ready to be uploaded.