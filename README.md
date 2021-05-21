### This is a port of [`vue-masonry-css`](https://github.com/paulcollett/vue-masonry-css) for Vue 3

### Usage

```TS
import { createApp } from 'vue';
import masonry from '~/lib/main';

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

### Config

Everything is similar to the original component. You can learn more about props/config [here](https://github.com/paulcollett/vue-masonry-css).
