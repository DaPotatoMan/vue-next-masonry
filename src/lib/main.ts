import { App } from 'vue';
import component from './component';

const componentName = 'masonry';

export default {
   install(app: App, options: any): void {
      if (options && options.name) {
         app.component(options.name || componentName, component);
      } else {
         app.component(componentName, component);
      }
   }
};
