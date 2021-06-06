<template>
   <main class="view-main">
      <masonry
         :cols="{ default: 4, '1000.5': 3, 700: 2, 400: 1 }"
         :gutter="{ default: '30px', 700: '20px' }"
      >
         <transition-group>
            <div v-for="(index) in 20" :key="index" class="item">
               {{ data[generateRandom()] }}
            </div>
         </transition-group>
      </masonry>
   </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'App',
   data() {
      return {
         data: []
      };
   },

   created() {
      fetch('https://baconipsum.com/api/?type=meat-and-filler')
         .then((data) => data.json())
         .then((data) => {
            this.data = data;
         });
   },

   methods: {
      generateRandom() {
         return Number(Math.random().toFixed(0));
      }
   }
});
</script>

<style>
body {
   margin: 20px;
   font-weight: 400;
   font-family: Inter, 'Google Sans', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;

   color: rgb(255, 255, 255, 0.87);
   background: #121212;
}

.item {
   padding: 2vw;
   margin-bottom: 30px;

   background: #242424;
   box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
}
</style>
