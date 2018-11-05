import CoreuiVueModule, * as LibraryComponents from "./index";

// Automatically register components if Vue is available globally
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(CoreuiVueModule);
}

export default LibraryComponents;
