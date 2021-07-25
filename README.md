<div align="center">
<h2>This is a port of <a href="https://github.com/paulcollett/vue-masonry-css">vue-masonry-css</a> for Vue 3</h2>
<br/>
<a href="https://npmjs.org/package/vue-next-masonry">
	<img src="https://img.shields.io/npm/v/vue-next-masonry.svg?style=for-the-badge"  alt="npm version">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/vue-next-masonry?style=for-the-badge">
	<img src="https://img.shields.io/snyk/vulnerabilities/npm/vue-next-masonry?style=for-the-badge" alt="vulnerabilities">
	<img src="https://img.shields.io/npm/dm/vue-next-masonry?style=for-the-badge" alt="npm downloads">
</a>
</div>

### Usage

```TS
import { createApp } from 'vue';
import masonry from 'vue-next-masonry';

createApp(...)
  .use(masonry)
  .mount(...);

```

In your Vue template...

```HTML
<masonry :cols="3" :gutter="30">
  <div v-for="(number, index) in 20" :key="index">
    {{ number }}
  </div>
</masonry>
```

Here's a codesandbox [example](https://codesandbox.io/s/vue-next-masonry-0kwxd)

### Config

Everything is similar to the original component. You can learn more about props/config [here](https://github.com/paulcollett/vue-masonry-css).

### Slot support

If you are using a `<slot />` to load child items, use the prop `:resolve-slot="true"`.

```HTML
<masonry :resolve-slot="true">
   <slot />
</masonry>
```
