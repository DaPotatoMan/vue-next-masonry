export function breakpointValue(mixed: any, width: any): number {
   const valueAsNum = parseInt(mixed, 10);

   if (valueAsNum > -1) {
      return mixed;
   }
   if (typeof mixed !== 'object') {
      return 0;
   }

   let matchedBreakpoint = Infinity;
   let matchedValue = mixed.default || 0;

   const entries = Object.entries(mixed);
   entries.forEach(([key, value]) => {
      const breakpoint = parseInt(key, 10);
      const breakpointValRaw = value as string;
      const breakpointVal = parseInt(breakpointValRaw, 10);

      if (Number.isNaN(breakpoint) || Number.isNaN(breakpointVal)) {
         return;
      }

      const isNewBreakpoint = width <= breakpoint && breakpoint < matchedBreakpoint;

      if (isNewBreakpoint) {
         matchedBreakpoint = breakpoint;
         matchedValue = breakpointValRaw;
      }
   });

   return matchedValue;
}
