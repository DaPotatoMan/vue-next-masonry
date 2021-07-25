<template>
   <masonry
      :cols="{ default: 4, '1000.5': 3, 700: 2, 400: 1 }"
      :gutter="{ default: '30px', 700: '20px' }"
   >
      <slot />
   </masonry>
</template>
