import { defineComponent, h as createElement } from 'vue';
import type { SlotWrapper } from './types';
import { breakpointValue } from './helpers';
import props from './props';

export default defineComponent({
   props,

   data() {
      return {
         wrapperWidth: 0,
         displayColumns: 2,
         displayGutter: 0
      };
   },

   activated() {
      this.$nextTick(this.render);
   },

   mounted() {
      window.addEventListener('resize', this.render);
      this.$nextTick(this.render);
   },

   updated() {
      this.$nextTick(this.render);
   },

   unmounted() {
      window.removeEventListener('resize', this.render);
   },

   methods: {
      // Recalculate how many columns to display based on window width
      // and the value of the passed `:cols=` prop
      render() {
         const windowWidth = window?.innerWidth || Infinity;
         const { wrapperWidth } = this;

         if (wrapperWidth !== windowWidth) {
            this.wrapperWidth = windowWidth;

            this.calculateColumnCount(this.wrapperWidth);
            this.calculateGutterSize(this.wrapperWidth);
         }
      },

      calculateGutterSize(width: number) {
         this.displayGutter = breakpointValue(this.gutter, width);
      },

      calculateColumnCount(width: number) {
         let columnLength = breakpointValue(this.cols, width) || 0;

         // Make sure we can return a valid value
         columnLength = Math.max(1, Number(columnLength));

         this.displayColumns = columnLength;
      },

      getColumnsWithChildItems(): [] {
         const columns: any = [];

         const slot = this.$slots.default?.() as SlotWrapper;
         let children = [];

         if (slot.length > 1) {
            children = slot;
         } else {
            children = slot[0].children as any[];

            if (children.length === 1 && this.resolveSlot) {
               children = children[0]?.children || [];
            }
         }

         if (children.length === 0) return [];

         for (
            let i = 0, visibleItemI = 0;
            i < children.length;
            i++, visibleItemI++
         ) {
            if (!children[i].type) visibleItemI--;

            const columnIndex = visibleItemI % this.displayColumns;

            if (!columns[columnIndex]) {
               columns[columnIndex] = [];
            }

            columns[columnIndex].push(children[i]);
         }

         return columns;
      }
   },

   render() {
      const { displayGutter } = this;

      const columnsContainingChildren = this.getColumnsWithChildItems();
      const isGutterSizeUnitless = parseInt(displayGutter.toString(), 10) === displayGutter * 1;
      const gutterSize = isGutterSizeUnitless
         ? `${displayGutter}px`
         : displayGutter;

      const containerConfig = {
         style: {
            display: ['-webkit-box', '-ms-flexbox', 'flex'],
            marginLeft: `-${gutterSize}`
         }
      };

      const columnStyle = {
         boxSizing: 'border-box',
         backgroundClip: 'padding-box',
         width: `${100 / this.displayColumns}%`,
         border: '0px solid transparent',
         borderLeftWidth: gutterSize
      };

      const columns = columnsContainingChildren.map((children, index) => {
         const config = {
            key: `${index}-${columnsContainingChildren.length}`,
            style: this.css ? columnStyle : null,
            class: this.columnClass,
            attrs: this.columnAttr
         };

         // Create column element and inject the children
         return createElement(this.columnTag, config, children);
      });

      // Return wrapper with columns
      // @ts-ignore
      return createElement(this.tag, this.css && containerConfig, columns);
   }
});
