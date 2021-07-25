<template>
   <main class="view-main">
      <h1>Normal</h1>
      <masonry
         :cols="{ default: 4, '1000.5': 3, 700: 2, 400: 1 }"
         :gutter="{ default: '30px', 700: '20px' }"
      >
         <transition-group>
            <div v-for="index in 10" :key="index" class="item">
               {{ data[generateRandom()] }}
            </div>
         </transition-group>
      </masonry>

      <br>
      <h1>Using Slots</h1>
      <MasonrySlot :resolve-slot="true">
         <div v-for="index in 10" :key="index" class="item">
            {{ data[generateRandom()] }}
         </div>
      </MasonrySlot>
   </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MasonrySlot from './MasonrySlot.vue';

export default defineComponent({
   name: 'App',
   components: { MasonrySlot },
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
   padding: 10px 2vw;
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
