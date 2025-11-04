import * as components from "./index";

// Vue 3 plugin pattern
export default {
  install(app) {
    for (const name in components) {
      app.component(name, components[name]);
    }
  }
};

// Auto-register for browser builds (if Vue is available globally)
if (typeof window !== "undefined" && window.Vue) {
  const Vue = window.Vue;
  if (Vue.createApp) {
    // Vue 3 - create a temporary app to register components
    const app = Vue.createApp({});
    for (const name in components) {
      app.component(name, components[name]);
    }
    // Make components available globally
    window.VuePhotoCollage = { components };
  } else if (Vue.component) {
    // Vue 2 fallback (for backward compatibility)
    for (const name in components) {
      Vue.component(name, components[name]);
    }
  }
}
