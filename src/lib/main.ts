import { PluginOption } from 'vite';
import { App } from 'vue';
import component from './component';

const componentName = 'masonry';

export default {
   install(app: App, options: PluginOption): void {
      if (options && options.name) {
         app.component(options.name || componentName, component);
      } else {
         app.component(componentName, component);
      }
   }
};
