export default {
   tag: {
      type: [String],
      default: 'div'
   },
   cols: {
      type: [Object, Number, String],
      default: 2
   },
   gutter: {
      type: [Object, Number, String],
      default: 0
   },
   css: {
      type: [Boolean],
      default: true
   },
   columnTag: {
      type: [String],
      default: 'div'
   },
   columnClass: {
      type: [String, Array, Object],
      default: () => []
   },
   columnAttr: {
      type: [Object],
      default: () => {}
   },

   resolveSlot: {
      type: Boolean,
      default: false
   }
};
