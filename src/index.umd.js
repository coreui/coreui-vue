import CoreuiVue, * as LibraryComponents from "./index";

// Automatically register components if Vue is available globally
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(CoreuiVue);
}

export default LibraryComponents;
