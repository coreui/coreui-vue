import { mixin } from 'vue-clickaway';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { Bar, Line } from 'vue-chartjs';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedOptions, generatedPointHoverBackgroundColor } from '@/mixins/charts/chartMixins';

//
//
//
//
//
//
//
//
//

var script = {
  name: 'Breadcrumb',
  props: {
    list: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    getName: function getName(item) {
      return item.meta && item.meta.label ? item.meta.label : item.name || null;
    },
    isLast: function isLast(index) {
      return index === this.list.length - 1;
    }
  },
  computed: {
    routeRecords: function routeRecords() {
      return this.list.filter(function (route) {
        return route.name || route.meta.label;
      });
    }
  }
};

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ol", { staticClass: "breadcrumb" }, _vm._l(_vm.routeRecords, function (routeObject, index) {
    return _c("li", { key: index, staticClass: "breadcrumb-item" }, [_vm.isLast(index) ? _c("span", { staticClass: "active" }, [_vm._v(_vm._s(_vm.getName(routeObject)))]) : _c("router-link", { attrs: { to: routeObject } }, [_vm._v(_vm._s(_vm.getName(routeObject)))])], 1);
  }));
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Breadcrumb\\Breadcrumb.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Breadcrumb = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

//
//
//
//
//
//

var script$1 = {
  name: 'Callout',
  props: {
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['callout', this.calloutVariant];
    },
    calloutVariant: function calloutVariant() {
      return this.variant ? 'callout-' + this.variant : '';
    }
  }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classList }, [_vm._t("default", [_vm._v("Callout")])], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Callout\\Callout.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Callout = __vue_normalize__$1({ render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

//
//
//
//
//
//

var script$2 = {
  name: 'Footer',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.isFixed();
  },
  computed: {
    classList: function classList() {
      return ['app-footer'];
    }
  },
  methods: {
    isFixed: function isFixed() {
      this.fixed ? document.body.classList.add('footer-fixed') : document.body.classList.remove('footer-fixed');
    }
  }
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("footer", { class: _vm.classList }, [_vm._t("default", [_vm._v("Footer")])], 2);
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

/* style */
var __vue_inject_styles__$2 = undefined;
/* scoped */
var __vue_scope_id__$2 = undefined;
/* module identifier */
var __vue_module_identifier__$2 = undefined;
/* functional template */
var __vue_is_functional_template__$2 = false;
/* component normalizer */
function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Footer\\Footer.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Footer = __vue_normalize__$2({ render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
  name: 'Switch',
  model: {
    prop: 'modelChecked',
    event: 'change'
  },
  data: function data() {
    return {
      checkedData: this.isChecked ? this.value : this.uncheckedValue
    };
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'switch-id-' + this._uid;
      }
    },
    color: {
      type: String,
      default: 'secondary'
    },
    label: {
      type: Boolean,
      default: null
    },
    outline: {
      type: [Boolean, String],
      default: null,
      validator: function validator(value) {
        return [false, true, '', 'alt'].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['', 'lg', 'sm'].indexOf(value) !== -1;
      }
    },
    checked: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    modelChecked: {
      default: undefined
    },
    value: {
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
    },
    uncheckedValue: {
      default: false
    },
    variant: {
      type: String,
      default: null,
      validator: function validator(value) {
        return [null, '3d', 'pill'].indexOf(value) !== -1;
      }
    },
    dataOn: {
      type: String,
      default: 'On'
    },
    dataOff: {
      type: String,
      default: 'Off'
    }
  },
  computed: {
    classList: function classList() {
      return ['switch', this.label ? 'switch-label' : '', this.size ? 'switch-' + this.size : '', this.variant ? 'switch-' + this.variant : '', 'switch' + (this.outline ? '-outline' : '') + '-' + this.color + (this.outline === 'alt' ? '-alt' : ''), 'form-check-label'];
    },
    isChecked: function isChecked() {
      if (this.modelChecked === undefined) {
        return this.checkedData === this.value;
      }
      return this.modelChecked === this.value;
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      this.toggle(event.target.checked);
    },
    toggle: function toggle(checked) {
      this.checkedData = checked ? this.value : this.uncheckedValue;
      this.$emit('change', this.checkedData);
    }
  },
  mounted: function mounted() {
    this.toggle(this.defaultChecked || this.checked || this.isChecked);
  }
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { class: _vm.classList }, [_c("input", {
    staticClass: "switch-input form-check-input",
    attrs: {
      id: _vm.id,
      disabled: _vm.disabled,
      required: _vm.required,
      name: _vm.name,
      type: "checkbox",
      "true-value": "value",
      "false-value": "uncheckedValue"
    },
    domProps: { checked: _vm.isChecked, value: _vm.value },
    on: { change: _vm.handleChange }
  }), _vm._v(" "), _vm.label ? [_c("span", {
    staticClass: "switch-slider",
    attrs: {
      "data-checked": _vm.dataOn,
      "data-unchecked": _vm.dataOff
    }
  })] : [_c("span", { staticClass: "switch-slider" })]], 2);
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

/* style */
var __vue_inject_styles__$3 = undefined;
/* scoped */
var __vue_scope_id__$3 = undefined;
/* module identifier */
var __vue_module_identifier__$3 = undefined;
/* functional template */
var __vue_is_functional_template__$3 = false;
/* component normalizer */
function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Switch\\Switch.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Switch = __vue_normalize__$3({ render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

//
//
//
//
//
//

var script$4 = {
  name: 'AppAside',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    display: {
      type: String,
      default: ''
    },
    offCanvas: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
  },
  methods: {
    isFixed: function isFixed(fixed) {
      fixed ? document.body.classList.add('aside-menu-fixed') : document.body.classList.remove('aside-menu-fixed');
      return fixed;
    },
    isOffCanvas: function isOffCanvas(offCanvas) {
      offCanvas ? document.body.classList.add('aside-menu-off-canvas') : document.body.classList.remove('aside-menu-off-canvas');
    }
  }
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("aside", { staticClass: "aside-menu" }, [_vm._t("default", [_vm._v("Aside")])], 2);
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

/* style */
var __vue_inject_styles__$4 = undefined;
/* scoped */
var __vue_scope_id__$4 = undefined;
/* module identifier */
var __vue_module_identifier__$4 = undefined;
/* functional template */
var __vue_is_functional_template__$4 = false;
/* component normalizer */
function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Aside\\Aside.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Aside = __vue_normalize__$4({ render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];

var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];

var validBreakpoints = ['sm', 'md', 'lg', 'xl'];

function checkBreakpoint(breakpoint, list) {
  return list.indexOf(breakpoint) > -1;
}

function toggleClasses(toggleClass, classList, force) {
  var level = classList.indexOf(toggleClass);
  var removeClassList = classList.slice(0, level);
  removeClassList.map(function (className) {
    return document.body.classList.remove(className);
  });
  document.body.classList.toggle(toggleClass, force);
}

//

var script$5 = {
  name: 'AsideToggler',
  props: {
    defaultOpen: {
      type: Boolean,
      default: false
    },
    display: {
      type: String,
      default: 'lg'
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['navbar-toggler'];
    }
  },
  mounted: function mounted() {
    this.toggle(this.defaultOpen);
  },
  methods: {
    toggle: function toggle(force) {
      var _ref = [this.display, this.mobile],
          display = _ref[0],
          mobile = _ref[1];

      var cssClass = asideMenuCssClasses[0];
      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = 'aside-menu-' + display + '-show';
      }
      toggleClasses(cssClass, asideMenuCssClasses, force);
    },
    asideToggle: function asideToggle(e) {
      e.preventDefault();
      this.toggle();
    }
  }
};

/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    class: _vm.classList,
    attrs: { display: _vm.display, mobile: _vm.mobile, type: "button" },
    on: { click: _vm.asideToggle }
  }, [_c("span", { staticClass: "navbar-toggler-icon" })]);
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

/* style */
var __vue_inject_styles__$5 = undefined;
/* scoped */
var __vue_scope_id__$5 = undefined;
/* module identifier */
var __vue_module_identifier__$5 = undefined;
/* functional template */
var __vue_is_functional_template__$5 = false;
/* component normalizer */
function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Aside\\AsideToggler.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var AsideToggler = __vue_normalize__$5({ render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

//
//
//
//
//
//
//

var script$6 = {
  name: 'AppHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['app-header', 'navbar'];
    }
  },
  mounted: function mounted() {
    this.isFixed(this.fixed);
  },
  methods: {
    isFixed: function isFixed(fixed) {
      fixed ? document.body.classList.add('header-fixed') : document.body.classList.remove('header-fixed');
      return fixed;
    }
  }
};

/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("header", { class: _vm.classList }, [_vm._t("default", [_vm._v("Header")])], 2);
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

/* style */
var __vue_inject_styles__$6 = undefined;
/* scoped */
var __vue_scope_id__$6 = undefined;
/* module identifier */
var __vue_module_identifier__$6 = undefined;
/* functional template */
var __vue_is_functional_template__$6 = false;
/* component normalizer */
function __vue_normalize__$6(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Header\\Header.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Header = __vue_normalize__$6({ render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
  name: 'HeaderDropdown',
  props: {
    right: {
      type: Boolean,
      default: false
    },
    noCaret: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-nav-item-dropdown", { attrs: { right: _vm.right, "no-caret": _vm.noCaret } }, [_c("template", { slot: "button-content" }, [_vm._t("header", [_vm._v("\n      ❔\n    ")])], 2), _vm._v(" "), _vm._t("dropdown", [_c("div", { style: { right: "auto", height: "200px" } }, [_c("span", { staticClass: "text-center" }, [_vm._v("dropdown")])])])], 2);
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

/* style */
var __vue_inject_styles__$7 = undefined;
/* scoped */
var __vue_scope_id__$7 = undefined;
/* module identifier */
var __vue_module_identifier__$7 = undefined;
/* functional template */
var __vue_is_functional_template__$7 = false;
/* component normalizer */
function __vue_normalize__$7(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Header\\HeaderDropdown.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var HeaderDropdown = __vue_normalize__$7({ render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 }, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, undefined, undefined);

var hideMobile = {
  methods: {
    hideMobile: function hideMobile() {
      if (document.body.classList.contains('sidebar-show')) {
        document.body.classList.toggle('sidebar-show');
      }
    }
  }
};

//

var script$8 = {
  name: 'sidebar',
  mixins: [mixin, hideMobile],
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.isFixed();
  },
  methods: {
    isFixed: function isFixed() {
      this.fixed ? document.body.classList.add('sidebar-fixed') : document.body.classList.remove('sidebar-fixed');
      return this.fixed;
    }
  }
};

/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    directives: [{
      name: "on-clickaway",
      rawName: "v-on-clickaway",
      value: _vm.hideMobile,
      expression: "hideMobile"
    }],
    staticClass: "sidebar"
  }, [_vm._t("default", [_vm._v("Sidebar")])], 2);
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

/* style */
var __vue_inject_styles__$8 = undefined;
/* scoped */
var __vue_scope_id__$8 = undefined;
/* module identifier */
var __vue_module_identifier__$8 = undefined;
/* functional template */
var __vue_is_functional_template__$8 = false;
/* component normalizer */
function __vue_normalize__$8(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\Sidebar.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Sidebar = __vue_normalize__$8({ render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 }, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, undefined, undefined);

//
//
//
//
//
//

var script$9 = {
  name: 'sidebar-footer',
  computed: {
    hasSlotDefault: function hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
};

/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasSlotDefault ? _c("div", { staticClass: "sidebar-footer" }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

/* style */
var __vue_inject_styles__$9 = undefined;
/* scoped */
var __vue_scope_id__$9 = undefined;
/* module identifier */
var __vue_module_identifier__$9 = undefined;
/* functional template */
var __vue_is_functional_template__$9 = false;
/* component normalizer */
function __vue_normalize__$9(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarFooter.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarFooter = __vue_normalize__$9({ render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 }, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, undefined, undefined);

//
//
//
//
//


var script$a = {
  name: 'sidebar-form',
  computed: {
    hasSlotDefault: function hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
};

/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasSlotDefault ? _c("div", { staticClass: "sidebar-form" }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

/* style */
var __vue_inject_styles__$a = undefined;
/* scoped */
var __vue_scope_id__$a = undefined;
/* module identifier */
var __vue_module_identifier__$a = undefined;
/* functional template */
var __vue_is_functional_template__$a = false;
/* component normalizer */
function __vue_normalize__$a(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarForm.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarForm = __vue_normalize__$a({ render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a }, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, undefined, undefined);

//
//
//
//
//


var script$b = {
  name: 'sidebar-header',
  computed: {
    hasSlotDefault: function hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
};

/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hasSlotDefault ? _c("div", { staticClass: "sidebar-header" }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

/* style */
var __vue_inject_styles__$b = undefined;
/* scoped */
var __vue_scope_id__$b = undefined;
/* module identifier */
var __vue_module_identifier__$b = undefined;
/* functional template */
var __vue_is_functional_template__$b = false;
/* component normalizer */
function __vue_normalize__$b(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarHeader.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarHeader = __vue_normalize__$b({ render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b }, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, undefined, undefined);

var togglePs = {
  methods: {
    togglePs: function togglePs(toggle) {
      var sidebar = document.querySelector('.sidebar-nav section');
      if (sidebar) {
        // sidebar.classList.toggle('ps', toggle);
        // sidebar.classList.toggle('ps-container', toggle);
        // sidebar.classList.toggle('ps--active-y', toggle);
        if (toggle) {
          sidebar.classList.add('ps', 'ps-container', 'ps--active-y');
        } else {
          sidebar.classList.remove('ps', 'ps-container', 'ps--active-y');
        }
      }
    }
  }
};

//

var script$c = {
  name: 'sidebar-minimizer',
  mixins: [togglePs],
  mounted: function mounted() {
    var isMinimized = document.body.classList.contains('sidebar-minimized');
    this.togglePs(!isMinimized);
  },
  methods: {
    onClick: function onClick() {
      this.sidebarMinimize();
      this.brandMinimize();
    },
    sidebarMinimize: function sidebarMinimize() {
      var isMinimized = document.body.classList.toggle('sidebar-minimized');
      this.$emit('cui-sidebar-minimize', isMinimized);
      this.togglePs(!isMinimized);
    },
    brandMinimize: function brandMinimize() {
      document.body.classList.toggle('brand-minimized');
    }
  }
};

/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    staticClass: "sidebar-minimizer",
    attrs: { type: "button" },
    on: {
      click: function click($event) {
        _vm.onClick();
      }
    }
  });
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

/* style */
var __vue_inject_styles__$c = undefined;
/* scoped */
var __vue_scope_id__$c = undefined;
/* module identifier */
var __vue_module_identifier__$c = undefined;
/* functional template */
var __vue_is_functional_template__$c = false;
/* component normalizer */
function __vue_normalize__$c(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarMinimizer.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarMinimizer = __vue_normalize__$c({ render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c }, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, undefined, undefined);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var $JSON = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

var stringify$1 = createCommonjsModule(function (module) {
module.exports = { "default": stringify, __esModule: true };
});

unwrapExports(stringify$1);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: 'pure',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": assign, __esModule: true };
});

unwrapExports(assign$1);

var _extends = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

var _extends$1 = unwrapExports(_extends);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _redefine = _hide;

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from_1 = _core.Array.from;

var from_1$1 = createCommonjsModule(function (module) {
module.exports = { "default": from_1, __esModule: true };
});

unwrapExports(from_1$1);

var toConsumableArray = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _from2 = _interopRequireDefault(from_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

//
//
//
//

var script$d = {
  name: 'sidebar-nav-divider',
  props: {
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['divider'].concat(_toConsumableArray(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      return this.classes ? this.classes.split(' ') : '';
    }
  }
};

/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classList });
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

/* style */
var __vue_inject_styles__$d = undefined;
/* scoped */
var __vue_scope_id__$d = undefined;
/* module identifier */
var __vue_module_identifier__$d = undefined;
/* functional template */
var __vue_is_functional_template__$d = false;
/* component normalizer */
function __vue_normalize__$d(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavDivider.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavDivider = __vue_normalize__$d({ render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d }, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, undefined, undefined);

//
//
//
//
//
//
//
//
//

var script$e = {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classIcon: function classIcon() {
      return ['nav-icon', this.icon];
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    }
  }
};

var __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("router-link", {
    staticClass: "nav-item nav-dropdown",
    attrs: { tag: "li", to: _vm.url, disabled: "" }
  }, [_c("div", {
    staticClass: "nav-link nav-dropdown-toggle",
    on: { click: _vm.handleClick }
  }, [_c("i", { class: _vm.classIcon }), _vm._v(" " + _vm._s(_vm.name))]), _vm._v(" "), _c("ul", { staticClass: "nav-dropdown-items" }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

/* style */
var __vue_inject_styles__$e = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-01a16de4_0", { source: "\n.nav-link[data-v-01a16de4] {\n  cursor:pointer;\n}\n", map: { "version": 3, "sources": ["C:\\xampp\\htdocs\\coreui-vue/C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavDropdown.vue"], "names": [], "mappings": ";AA2CA;EACA,eAAA;CACA", "file": "SidebarNavDropdown.vue", "sourcesContent": ["<template>\r\n  <router-link tag=\"li\" class=\"nav-item nav-dropdown\" :to=\"url\" disabled>\r\n    <div class=\"nav-link nav-dropdown-toggle\" @click=\"handleClick\"><i :class=\"classIcon\"></i> {{name}}</div>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <slot></slot>\r\n    </ul>\r\n  </router-link>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    name: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    url: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    icon: {\r\n      type: String,\r\n      default: ''\r\n    }\r\n  },\r\n  computed: {\r\n    classIcon () {\r\n      return [\r\n        'nav-icon',\r\n        this.icon\r\n      ]\r\n    }\r\n  },\r\n  methods: {\r\n    handleClick (e) {\r\n      e.preventDefault()\r\n      e.target.parentElement.classList.toggle('open')\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped lang=\"css\">\r\n  .nav-link {\r\n    cursor:pointer;\r\n  }\r\n</style>\r\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__$e = "data-v-01a16de4";
/* module identifier */
var __vue_module_identifier__$e = undefined;
/* functional template */
var __vue_is_functional_template__$e = false;
/* component normalizer */
function __vue_normalize__$e(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavDropdown.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SidebarNavDropdown = __vue_normalize__$e({ render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e }, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, __vue_create_injector__, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$f = {
  name: 'sidebar-nav-link',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    badge: {
      type: Object,
      default: function _default() {}
    },
    variant: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-link', this.linkVariant].concat(_toConsumableArray(this.itemClasses));
    },
    classIcon: function classIcon() {
      return ['nav-icon', this.icon];
    },
    linkVariant: function linkVariant() {
      return this.variant ? 'nav-link-' + this.variant : '';
    },
    itemClasses: function itemClasses() {
      return this.classes ? this.classes.split(' ') : [];
    },
    isExternalLink: function isExternalLink() {
      if (this.url.substring(0, 4) === 'http') {
        return true;
      } else {
        return false;
      }
    }
  }
};

/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.isExternalLink ? _c("div", [_c("a", { class: _vm.classList, attrs: { href: _vm.url } }, [_c("i", { class: _vm.classIcon }), _vm._v(" " + _vm._s(_vm.name) + "\n    "), _vm.badge && _vm.badge.text ? _c("b-badge", { attrs: { variant: _vm.badge.variant } }, [_vm._v(_vm._s(_vm.badge.text))]) : _vm._e()], 1)]) : _c("div", [_c("router-link", { class: _vm.classList, attrs: { to: _vm.url } }, [_c("i", { class: _vm.classIcon }), _vm._v(" " + _vm._s(_vm.name) + "\n    "), _vm.badge && _vm.badge.text ? _c("b-badge", { attrs: { variant: _vm.badge.variant } }, [_vm._v(_vm._s(_vm.badge.text))]) : _vm._e()], 1)], 1);
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

/* style */
var __vue_inject_styles__$f = undefined;
/* scoped */
var __vue_scope_id__$f = undefined;
/* module identifier */
var __vue_module_identifier__$f = undefined;
/* functional template */
var __vue_is_functional_template__$f = false;
/* component normalizer */
function __vue_normalize__$f(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavLink.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavLink = __vue_normalize__$f({ render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f }, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//

var script$g = {
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    wrapper: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-title'].concat(_toConsumableArray(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      return this.classes ? this.classes.split(' ') : '';
    }
  }
};

/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classList }, [_vm.wrapper && _vm.wrapper.element ? [_c(_vm.wrapper.element, _vm._b({ tag: "component" }, "component", _vm.wrapper.attributes, false), [_vm._v("\n      " + _vm._s(_vm.name) + "\n    ")])] : [_vm._v("\n    " + _vm._s(_vm.name) + "\n  ")]], 2);
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

/* style */
var __vue_inject_styles__$g = undefined;
/* scoped */
var __vue_scope_id__$g = undefined;
/* module identifier */
var __vue_module_identifier__$g = undefined;
/* functional template */
var __vue_is_functional_template__$g = false;
/* component normalizer */
function __vue_normalize__$g(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavTitle.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavTitle = __vue_normalize__$g({ render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g }, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, undefined, undefined);

var script$h = {
  name: 'sidebar-nav-item',
  mixins: [hideMobile],
  props: {
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList: function classList() {
      return ['nav-item'].concat(_toConsumableArray(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      return this.classes ? this.classes.split(' ') : '';
    }
  }
};

/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classList, on: { click: _vm.hideMobile } }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

/* style */
var __vue_inject_styles__$h = undefined;
/* scoped */
var __vue_scope_id__$h = undefined;
/* module identifier */
var __vue_module_identifier__$h = undefined;
/* functional template */
var __vue_is_functional_template__$h = false;
/* component normalizer */
function __vue_normalize__$h(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavItem.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavItem = __vue_normalize__$h({ render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h }, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, undefined, undefined);

var script$i = {
  name: 'sidebar-nav-label',
  components: {
    SidebarNavItem: SidebarNavItem,
    SidebarNavLink: SidebarNavLink
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: 'fa fa-circle'
    },
    classes: {
      type: String,
      default: ''
    },
    label: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  computed: {
    classList: function classList() {
      var classes = {
        navItem: ['hidden-cn'].concat(_toConsumableArray(this.getClasses(this.classes))).join(' '),
        navLink: 'nav-label',
        icon: [this.icon ? this.icon : 'fa fa-circle', this.label.variant ? 'text-' + this.label.variant : '', this.label.class ? this.label.class : ''].join(' ')
      };
      return classes;
    }
  },
  methods: {
    getClasses: function getClasses(classes) {
      return classes ? classes.split(' ') : [];
    }
  }
};

/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("SidebarNavItem", { attrs: { classes: _vm.classList.navItem } }, [_c("a", { class: _vm.classList.navLink, attrs: { href: _vm.url } }, [_c("i", { class: _vm.classList.icon }), _vm._v(" " + _vm._s(_vm.name))])]);
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

/* style */
var __vue_inject_styles__$i = undefined;
/* scoped */
var __vue_scope_id__$i = undefined;
/* module identifier */
var __vue_module_identifier__$i = undefined;
/* functional template */
var __vue_is_functional_template__$i = false;
/* component normalizer */
function __vue_normalize__$i(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNavLabel.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarNavLabel = __vue_normalize__$i({ render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i }, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, undefined, undefined);

var script$j = {
  name: 'SidebarNav',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    SidebarNavDivider: SidebarNavDivider,
    SidebarNavDropdown: SidebarNavDropdown,
    SidebarNavLink: SidebarNavLink,
    SidebarNavTitle: SidebarNavTitle,
    SidebarNavItem: SidebarNavItem,
    SidebarNavLabel: SidebarNavLabel,
    VuePerfectScrollbar: VuePerfectScrollbar
  },
  data: function data() {
    return {};
  },

  computed: {
    psSettings: function psSettings() {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false,
        interceptRailY: function interceptRailY(styles) {
          return _extends$1({}, styles, { height: 0 });
        }
      };
    }
  },
  methods: {
    scrollHandle: function scrollHandle(evt) {
      // console.log(evt)
    }
  }
};

var __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("nav", { staticClass: "sidebar-nav" }, [_c("VuePerfectScrollbar", {
    staticClass: "scroll-area",
    attrs: { settings: _vm.psSettings },
    on: { "ps-scroll-y": _vm.scrollHandle }
  }, [_c("ul", { staticClass: "nav" }, [_vm._l(_vm.navItems, function (item, index) {
    return [item.title ? [_c("SidebarNavTitle", {
      key: index,
      attrs: {
        name: item.name,
        classes: item.class,
        wrapper: item.wrapper
      }
    })] : item.divider ? [_c("SidebarNavDivider", {
      key: index,
      attrs: { classes: item.class }
    })] : item.label ? [_c("SidebarNavLabel", {
      key: index,
      attrs: {
        name: item.name,
        url: item.url,
        icon: item.icon,
        label: item.label,
        classes: item.class
      }
    })] : [item.children ? [_c("SidebarNavDropdown", {
      key: index,
      attrs: {
        name: item.name,
        url: item.url,
        icon: item.icon
      }
    }, [_vm._l(item.children, function (childL1, index1) {
      return [childL1.children ? [_c("SidebarNavDropdown", {
        key: index1,
        attrs: {
          name: childL1.name,
          url: childL1.url,
          icon: childL1.icon
        }
      }, _vm._l(childL1.children, function (childL2, index2) {
        return _c("li", {
          key: index2,
          staticClass: "nav-item"
        }, [_c("SidebarNavLink", {
          attrs: {
            name: childL2.name,
            url: childL2.url,
            icon: childL2.icon,
            badge: childL2.badge,
            variant: item.variant
          }
        })], 1);
      }))] : [_c("SidebarNavItem", {
        key: index1,
        attrs: {
          classes: item.class
        }
      }, [_c("SidebarNavLink", {
        attrs: {
          name: childL1.name,
          url: childL1.url,
          icon: childL1.icon,
          badge: childL1.badge,
          variant: item.variant
        }
      })], 1)]];
    })], 2)] : [_c("SidebarNavItem", {
      key: index,
      attrs: { classes: item.class }
    }, [_c("SidebarNavLink", {
      attrs: {
        name: item.name,
        url: item.url,
        icon: item.icon,
        badge: item.badge,
        variant: item.variant
      }
    })], 1)]]];
  })], 2), _vm._v(" "), _vm._t("default")], 2)], 1);
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

/* style */
var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-132b24bc_0", { source: "\n.scroll-area[data-v-132b24bc] {\n  position: absolute;\n  height: 100%;\n  margin: auto;\n}\n", map: { "version": 3, "sources": ["C:\\xampp\\htdocs\\coreui-vue/C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNav.vue"], "names": [], "mappings": ";AAmGA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;CACA", "file": "SidebarNav.vue", "sourcesContent": ["<template>\r\n  <nav class=\"sidebar-nav\">\r\n    <VuePerfectScrollbar class=\"scroll-area\" :settings=\"psSettings\" @ps-scroll-y=\"scrollHandle\">\r\n      <ul class=\"nav\">\r\n        <template v-for=\"(item, index) in navItems\">\r\n          <template v-if=\"item.title\">\r\n            <SidebarNavTitle :key=\"index\" :name=\"item.name\" :classes=\"item.class\" :wrapper=\"item.wrapper\"/>\r\n          </template>\r\n          <template v-else-if=\"item.divider\">\r\n            <SidebarNavDivider :key=\"index\" :classes=\"item.class\"/>\r\n          </template>\r\n          <template v-else-if=\"item.label\">\r\n            <SidebarNavLabel :key=\"index\" :name=\"item.name\" :url=\"item.url\" :icon=\"item.icon\" :label=\"item.label\" :classes=\"item.class\"/>\r\n          </template>\r\n          <template v-else>\r\n            <template v-if=\"item.children\">\r\n              <!-- First level dropdown -->\r\n              <SidebarNavDropdown :key=\"index\" :name=\"item.name\" :url=\"item.url\" :icon=\"item.icon\">\r\n                <template v-for=\"(childL1, index1) in item.children\">\r\n                  <template v-if=\"childL1.children\">\r\n                    <!-- Second level dropdown -->\r\n                    <SidebarNavDropdown :key=\"index1\" :name=\"childL1.name\" :url=\"childL1.url\" :icon=\"childL1.icon\">\r\n                      <li :key=\"index2\" class=\"nav-item\" v-for=\"(childL2, index2) in childL1.children\">\r\n                        <SidebarNavLink :name=\"childL2.name\" :url=\"childL2.url\" :icon=\"childL2.icon\" :badge=\"childL2.badge\" :variant=\"item.variant\"/>\r\n                      </li>\r\n                    </SidebarNavDropdown>\r\n                  </template>\r\n                  <template v-else>\r\n                    <SidebarNavItem :key=\"index1\" :classes=\"item.class\">\r\n                      <SidebarNavLink :name=\"childL1.name\" :url=\"childL1.url\" :icon=\"childL1.icon\" :badge=\"childL1.badge\" :variant=\"item.variant\"/>\r\n                    </SidebarNavItem>\r\n                  </template>\r\n                </template>\r\n              </SidebarNavDropdown>\r\n            </template>\r\n            <template v-else>\r\n              <SidebarNavItem :key=\"index\" :classes=\"item.class\">\r\n                <SidebarNavLink :name=\"item.name\" :url=\"item.url\" :icon=\"item.icon\" :badge=\"item.badge\" :variant=\"item.variant\"/>\r\n              </SidebarNavItem>\r\n            </template>\r\n          </template>\r\n        </template>\r\n      </ul>\r\n      <slot></slot>\r\n    </VuePerfectScrollbar>\r\n  </nav>\r\n</template>\r\n\r\n<script>\r\nimport SidebarNavDivider from './SidebarNavDivider'\r\nimport SidebarNavDropdown from './SidebarNavDropdown'\r\nimport SidebarNavLink from './SidebarNavLink'\r\nimport SidebarNavTitle from './SidebarNavTitle'\r\nimport SidebarNavItem from './SidebarNavItem'\r\nimport SidebarNavLabel from './SidebarNavLabel'\r\nimport VuePerfectScrollbar from 'vue-perfect-scrollbar'\r\n\r\nexport default {\r\n  name: 'SidebarNav',\r\n  props: {\r\n    navItems: {\r\n      type: Array,\r\n      required: true,\r\n      default: () => []\r\n    }\r\n  },\r\n  components: {\r\n    SidebarNavDivider,\r\n    SidebarNavDropdown,\r\n    SidebarNavLink,\r\n    SidebarNavTitle,\r\n    SidebarNavItem,\r\n    SidebarNavLabel,\r\n    VuePerfectScrollbar\r\n  },\r\n  data () {\r\n    return {}\r\n  },\r\n  computed: {\r\n    psSettings: () => {\r\n      // ToDo: find better rtl fix\r\n      return {\r\n        maxScrollbarLength: 200,\r\n        minScrollbarLength: 40,\r\n        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',\r\n        wheelPropagation: false,\r\n        interceptRailY: styles => ({ ...styles, height: 0 })\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    scrollHandle (evt) {\r\n      // console.log(evt)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped lang=\"css\">\r\n  .scroll-area {\r\n    position: absolute;\r\n    height: 100%;\r\n    margin: auto;\r\n  }\r\n</style>\r\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__$j = "data-v-132b24bc";
/* module identifier */
var __vue_module_identifier__$j = undefined;
/* functional template */
var __vue_is_functional_template__$j = false;
/* component normalizer */
function __vue_normalize__$j(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarNav.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$1() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SidebarNav = __vue_normalize__$j({ render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j }, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, __vue_create_injector__$1, undefined);

//

var script$k = {
  name: 'SidebarToggler',
  props: {
    defaultOpen: {
      type: Boolean,
      default: true
    },
    display: {
      type: String,
      default: 'lg'
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['navbar-toggler'];
    }
  },
  mounted: function mounted() {
    this.toggle(this.defaultOpen);
  },
  methods: {
    toggle: function toggle(force) {
      var _ref = [this.display, this.mobile],
          display = _ref[0],
          mobile = _ref[1];

      var cssClass = sidebarCssClasses[0];
      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = 'sidebar-' + display + '-show';
      }
      toggleClasses(cssClass, sidebarCssClasses, force);
    },
    sidebarToggle: function sidebarToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    }
  }
};

/* script */
var __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {
    class: _vm.classList,
    attrs: { display: _vm.display, mobile: _vm.mobile, type: "button" },
    on: { click: _vm.sidebarToggle }
  }, [_c("span", { staticClass: "navbar-toggler-icon" })]);
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

/* style */
var __vue_inject_styles__$k = undefined;
/* scoped */
var __vue_scope_id__$k = undefined;
/* module identifier */
var __vue_module_identifier__$k = undefined;
/* functional template */
var __vue_is_functional_template__$k = false;
/* component normalizer */
function __vue_normalize__$k(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Sidebar\\SidebarToggler.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var SidebarToggler = __vue_normalize__$k({ render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k }, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, undefined, undefined);

//
//
//
//
//
//
//
//
//
//

var script$l = {
  name: 'CuiWidget01',
  data: function data() {
    return {
      backgroundColor: '',
      styleClasses: ''
    };
  },
  created: function created() {
    if (this.variant.includes('background')) {
      this.backgroundColor = this.variant.replace('background-', '');
      this.styleClasses = 'text-white bg-' + this.backgroundColor;
    }
  },

  props: {
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    variant: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: 'footer:string'
    },
    value: {
      type: Number,
      default: 25
    }
  }
};

/* script */
var __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-card", { class: _vm.styleClasses }, [_c("div", { staticClass: "h4 m-0" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c("b-progress", {
    class: [_vm.backgroundColor ? "progress-white" : "", "progress-xs my-3 mb-0"],
    attrs: { height: "{}", variant: _vm.variant, value: _vm.value }
  }), _vm._v(" "), _c("small", { staticClass: "text-muted" }, [_vm._v(_vm._s(_vm.footer))])], 1);
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

/* style */
var __vue_inject_styles__$l = undefined;
/* scoped */
var __vue_scope_id__$l = undefined;
/* module identifier */
var __vue_module_identifier__$l = undefined;
/* functional template */
var __vue_is_functional_template__$l = false;
/* component normalizer */
function __vue_normalize__$l(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget01.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget01 = __vue_normalize__$l({ render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l }, __vue_inject_styles__$l, __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//

var script$m = {
  name: 'CuiWidget02',
  props: {
    iconClasses: {
      type: String,
      default: 'fa fa-cogs bg-primary'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    showLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '#'
    }
  }
};

/* script */
var __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-card", { attrs: { "no-body": true, "footer-class": "px-3 py-2" } }, [_c("b-card-body", { staticClass: "p-3 clearfix" }, [_c("i", {
    staticClass: "fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left",
    class: _vm.iconClasses
  }), _vm._v(" "), _c("div", { staticClass: "h5 text-primary mb-0 mt-2" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c("div", { staticClass: "text-muted text-uppercase font-weight-bold font-xs" }, [_vm._v(_vm._s(_vm.text))])]), _vm._v(" "), _vm.showLink ? _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [_c("b-link", {
    staticClass: "font-weight-bold font-xs btn-block text-muted",
    attrs: { href: _vm.link }
  }, [_vm._v("View More "), _c("i", {
    staticClass: "fa fa-angle-right float-right font-lg"
  })])], 1) : _vm._e()], 1);
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

/* style */
var __vue_inject_styles__$m = undefined;
/* scoped */
var __vue_scope_id__$m = undefined;
/* module identifier */
var __vue_module_identifier__$m = undefined;
/* functional template */
var __vue_is_functional_template__$m = false;
/* component normalizer */
function __vue_normalize__$m(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget02.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget02 = __vue_normalize__$m({ render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m }, __vue_inject_styles__$m, __vue_script__$m, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, undefined, undefined);

//
//
//
//
//
//
//
//
//
//

var script$n = {
  name: 'CuiWidget03',
  props: {
    iconClasses: {
      type: String,
      default: 'fa fa-cogs bg-primary'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
};

/* script */
var __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-card", { attrs: { "no-body": true } }, [_c("b-card-body", { staticClass: "p-0 clearfix" }, [_c("i", {
    staticClass: "p-4 font-2xl mr-3 float-left",
    class: _vm.iconClasses
  }), _vm._v(" "), _c("div", { staticClass: "h5 text-primary mb-0 pt-3" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c("div", { staticClass: "text-muted text-uppercase font-weight-bold font-xs" }, [_vm._v(_vm._s(_vm.text))])])], 1);
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

/* style */
var __vue_inject_styles__$n = undefined;
/* scoped */
var __vue_scope_id__$n = undefined;
/* module identifier */
var __vue_module_identifier__$n = undefined;
/* functional template */
var __vue_is_functional_template__$n = false;
/* component normalizer */
function __vue_normalize__$n(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget03.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget03 = __vue_normalize__$n({ render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n }, __vue_inject_styles__$n, __vue_script__$n, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$o = {
  name: 'CuiWidget04',
  props: {
    type: {
      type: String,
      default: 'facebook'
    },
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    }
  }
};

/* script */
var __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "brand-card" }, [_c("div", { staticClass: "brand-card-header", class: "bg-" + _vm.type }, [_c("i", { staticClass: "fa", class: "fa-" + _vm.type }), _vm._v(" "), _c("div", { staticClass: "chart-wrapper" }, [_vm._t("default")], 2)]), _vm._v(" "), _c("div", { staticClass: "brand-card-body" }, [_c("div", [_c("div", { staticClass: "text-value" }, [_vm._v(_vm._s(_vm.rightHeader))]), _vm._v(" "), _c("div", { staticClass: "text-uppercase text-muted small" }, [_vm._v(_vm._s(_vm.rightFooter))])]), _vm._v(" "), _c("div", [_c("div", { staticClass: "text-value" }, [_vm._v(_vm._s(_vm.leftHeader))]), _vm._v(" "), _c("div", { staticClass: "text-uppercase text-muted small" }, [_vm._v(_vm._s(_vm.leftFooter))])])])]);
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

/* style */
var __vue_inject_styles__$o = undefined;
/* scoped */
var __vue_scope_id__$o = undefined;
/* module identifier */
var __vue_module_identifier__$o = undefined;
/* functional template */
var __vue_is_functional_template__$o = false;
/* component normalizer */
function __vue_normalize__$o(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget04.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget04 = __vue_normalize__$o({ render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o }, __vue_inject_styles__$o, __vue_script__$o, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//

var script$p = {
  name: 'CuiWidget05',
  data: function data() {
    return {
      backgroundColor: '',
      styleClasses: ''
    };
  },
  created: function created() {
    if (this.variant.includes('background')) {
      this.backgroundColor = this.variant.replace('background-', '');
      this.styleClasses = 'text-white bg-' + this.backgroundColor;
    }
  },

  props: {
    iconClasses: {
      type: String,
      default: 'icon-people'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    variant: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 25
    }
  }
};

/* script */
var __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-card", { class: _vm.styleClasses }, [_c("div", { staticClass: "h1 text-muted text-right mb-4" }, [_c("i", { class: _vm.iconClasses })]), _vm._v(" "), _c("div", { staticClass: "h4 mb-0" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c("small", { staticClass: "text-muted text-uppercase font-weight-bold" }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c("b-progress", {
    class: [_vm.backgroundColor ? "progress-white" : "", "progress-xs my-3 mb-0"],
    attrs: { height: "{}", variant: _vm.variant, value: _vm.value }
  })], 1);
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

/* style */
var __vue_inject_styles__$p = undefined;
/* scoped */
var __vue_scope_id__$p = undefined;
/* module identifier */
var __vue_module_identifier__$p = undefined;
/* functional template */
var __vue_is_functional_template__$p = false;
/* component normalizer */
function __vue_normalize__$p(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget05.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget05 = __vue_normalize__$p({ render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p }, __vue_inject_styles__$p, __vue_script__$p, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//

var script$q = {
  name: 'CuiWidget06',
  data: function data() {
    return {
      backgroundColor: ''
    };
  },
  created: function created() {},

  props: {
    cardClasses: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
};

/* script */
var __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-card", { class: _vm.cardClasses, attrs: { "no-body": "" } }, [_c("b-card-body", { staticClass: "pb-0" }, [_vm._t("dropdown"), _vm._v(" "), _c("h4", { staticClass: "mb-0" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.text))])], 2), _vm._v(" "), _c("div", { staticClass: "chart-wrapper" }, [_vm._t("chart")], 2)], 1);
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

/* style */
var __vue_inject_styles__$q = undefined;
/* scoped */
var __vue_scope_id__$q = undefined;
/* module identifier */
var __vue_module_identifier__$q = undefined;
/* functional template */
var __vue_is_functional_template__$q = false;
/* component normalizer */
function __vue_normalize__$q(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget06.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget06 = __vue_normalize__$q({ render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q }, __vue_inject_styles__$q, __vue_script__$q, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$r = {
  name: 'CuiWidget07',
  props: {
    cardClasses: {
      type: String,
      default: 'bg-primary'
    },
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    }
  }
};

/* script */
var __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card" }, [_c("div", { staticClass: "card-header", class: _vm.cardClasses }, [_c("div", { staticClass: "font-weight-bold" }, [_c("span", [_vm._v(_vm._s(_vm.rightHeader))]), _vm._v(" "), _c("span", { staticClass: "float-right" }, [_vm._v(_vm._s(_vm.leftHeader))])]), _vm._v(" "), _c("div", [_c("span", [_c("small", [_vm._v(_vm._s(_vm.rightFooter))])]), _vm._v(" "), _c("span", { staticClass: "float-right" }, [_c("small", [_vm._v(_vm._s(_vm.leftFooter))])])]), _vm._v(" "), _c("div", { staticClass: "chart-wrapper" }, [_vm._t("default")], 2)])]);
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

/* style */
var __vue_inject_styles__$r = undefined;
/* scoped */
var __vue_scope_id__$r = undefined;
/* module identifier */
var __vue_module_identifier__$r = undefined;
/* functional template */
var __vue_is_functional_template__$r = false;
/* component normalizer */
function __vue_normalize__$r(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget07.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget07 = __vue_normalize__$r({ render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r }, __vue_inject_styles__$r, __vue_script__$r, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//

var script$s = {
  name: 'CuiWidget08',
  props: {
    cardClasses: {
      type: String,
      default: 'bg-primary'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
};

/* script */
var __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card" }, [_c("div", { staticClass: "card-body text-center" }, [_c("div", { staticClass: "text-muted small text-uppercase font-weight-bold" }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c("div", { staticClass: "h2 py-3" }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c("div", { staticClass: "chart-wrapper" }, [_vm._t("default")], 2)])]);
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

/* style */
var __vue_inject_styles__$s = undefined;
/* scoped */
var __vue_scope_id__$s = undefined;
/* module identifier */
var __vue_module_identifier__$s = undefined;
/* functional template */
var __vue_is_functional_template__$s = false;
/* component normalizer */
function __vue_normalize__$s(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Widgets\\CuiWidget08.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiWidget08 = __vue_normalize__$s({ render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s }, __vue_inject_styles__$s, __vue_script__$s, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, undefined, undefined);

var script$t = {
  name: 'CuiSimpleBarChart',
  extends: Bar,
  mixins: [generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedOptions],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    height: {
      type: Number,
      default: 40
    },
    label: {
      type: String,
      default: 'label|string'
    },
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0,0,0,.2)'
    },
    labels: Array,
    options: Object,
    finalOptions: {
      type: Object,
      default: function _default() {
        return {
          tooltips: {
            enabled: false,
            custom: CustomTooltips
          },
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.5
            }],
            yAxes: [{
              display: false
            }]
          }
        };
      }
    }
  },
  mounted: function mounted() {
    var dataset = [{
      label: this.label,
      backgroundColor: this.generatedBackgroundColor,
      borderColor: this.generatedBorderColor,
      data: this.data
    }];
    this.renderChart({
      labels: this.generatedLabels,
      datasets: dataset
    }, this.generatedOptions);
  }
};

/* script */
var __vue_script__$t = script$t;

/* template */

/* style */
var __vue_inject_styles__$t = undefined;
/* scoped */
var __vue_scope_id__$t = undefined;
/* module identifier */
var __vue_module_identifier__$t = undefined;
/* functional template */
var __vue_is_functional_template__$t = undefined;
/* component normalizer */
function __vue_normalize__$t(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Charts\\CuiSimpleBarChart.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiSimpleBarChart = __vue_normalize__$t({}, __vue_inject_styles__$t, __vue_script__$t, __vue_scope_id__$t, __vue_is_functional_template__$t, __vue_module_identifier__$t, undefined, undefined);

var script$u = {
  name: 'CuiSimpleLineChart',
  extends: Line,
  mixins: [generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedPointHoverBackgroundColor, generatedOptions],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    height: {
      type: Number,
      default: 40
    },
    label: {
      type: String,
      default: 'label|string'
    },
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    labels: Array,
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    pointHoverBackgroundColor: {
      type: String,
      default: 'transparent'
    },
    options: Object,
    finalOptions: {
      type: Object,
      default: function _default() {
        return {
          tooltips: {
            enabled: false,
            custom: CustomTooltips
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          },
          elements: {
            line: {
              borderWidth: 2
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        };
      }
    }
  },
  mounted: function mounted() {
    var datasets = [{
      label: this.label,
      borderColor: this.generatedBorderColor,
      backgroundColor: this.generatedBackgroundColor,
      pointHoverBackgroundColor: this.generatedPointHoverBackgroundColor,
      data: this.data
    }];
    this.renderChart({
      labels: this.generatedLabels,
      datasets: datasets
    }, this.generatedOptions);
  }
};

/* script */
var __vue_script__$u = script$u;

/* template */

/* style */
var __vue_inject_styles__$u = undefined;
/* scoped */
var __vue_scope_id__$u = undefined;
/* module identifier */
var __vue_module_identifier__$u = undefined;
/* functional template */
var __vue_is_functional_template__$u = undefined;
/* component normalizer */
function __vue_normalize__$u(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Charts\\CuiSimpleLineChart.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiSimpleLineChart = __vue_normalize__$u({}, __vue_inject_styles__$u, __vue_script__$u, __vue_scope_id__$u, __vue_is_functional_template__$u, __vue_module_identifier__$u, undefined, undefined);

var script$v = {
  name: 'CuiSimplePointedChart',
  extends: Line,
  mixins: [generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedPointHoverBackgroundColor, generatedOptions],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    height: {
      type: Number,
      default: 40
    },
    label: {
      type: String,
      default: 'label|string'
    },
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    labels: Array,
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    pointHoverBackgroundColor: {
      type: String,
      default: 'transparent'
    },
    options: Object
  },
  computed: {
    finalOptions: function finalOptions() {
      return {
        tooltips: {
          enabled: false,
          custom: CustomTooltips
        },
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, this.data) - 5,
              max: Math.max.apply(Math, this.data) + 5
            }
          }]
        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      };
    }
  },
  mounted: function mounted() {
    var datasets1 = [{
      label: this.label,
      borderColor: this.generatedBorderColor,
      backgroundColor: this.generatedBackgroundColor,
      pointHoverBackgroundColor: this.generatedPointHoverBackgroundColor,
      data: this.data
    }];
    this.renderChart({
      labels: this.generatedLabels,
      datasets: datasets1
    }, this.generatedOptions);
  }
};

/* script */
var __vue_script__$v = script$v;

/* template */

/* style */
var __vue_inject_styles__$v = undefined;
/* scoped */
var __vue_scope_id__$v = undefined;
/* module identifier */
var __vue_module_identifier__$v = undefined;
/* functional template */
var __vue_is_functional_template__$v = undefined;
/* component normalizer */
function __vue_normalize__$v(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "C:\\xampp\\htdocs\\coreui-vue\\src\\components\\Charts\\CuiSimplePointedChart.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var CuiSimplePointedChart = __vue_normalize__$v({}, __vue_inject_styles__$v, __vue_script__$v, __vue_scope_id__$v, __vue_is_functional_template__$v, __vue_module_identifier__$v, undefined, undefined);



var Components = /*#__PURE__*/Object.freeze({
  Breadcrumb: Breadcrumb,
  Callout: Callout,
  Footer: Footer,
  Switch: Switch,
  Aside: Aside,
  AsideToggler: AsideToggler,
  Header: Header,
  HeaderDropdown: HeaderDropdown,
  Sidebar: Sidebar,
  SidebarFooter: SidebarFooter,
  SidebarForm: SidebarForm,
  SidebarHeader: SidebarHeader,
  SidebarMinimizer: SidebarMinimizer,
  SidebarNav: SidebarNav,
  SidebarNavDivider: SidebarNavDivider,
  SidebarNavItem: SidebarNavItem,
  SidebarNavDropdown: SidebarNavDropdown,
  SidebarNavLabel: SidebarNavLabel,
  SidebarNavLink: SidebarNavLink,
  SidebarNavTitle: SidebarNavTitle,
  SidebarToggler: SidebarToggler,
  CuiWidget01: CuiWidget01,
  CuiWidget02: CuiWidget02,
  CuiWidget03: CuiWidget03,
  CuiWidget04: CuiWidget04,
  CuiWidget05: CuiWidget05,
  CuiWidget06: CuiWidget06,
  CuiWidget07: CuiWidget07,
  CuiWidget08: CuiWidget08,
  CuiSimpleBarChart: CuiSimpleBarChart,
  CuiSimpleLineChart: CuiSimpleLineChart,
  CuiSimplePointedChart: CuiSimplePointedChart
});

/*eslint import/namespace: [2, { allowComputed: true }]*/

var CoreuiVueModule = {
  install: function install(Vue) {
    for (var plugin in Components) {
      var comp = Components[plugin];
      if (comp.name) Vue.component(comp.name, comp);
    }
  }
};

export default CoreuiVueModule;
export { Breadcrumb, Callout, Footer, Switch, Aside, AsideToggler, Header, HeaderDropdown, Sidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, SidebarNavDivider, SidebarNavItem, SidebarNavDropdown, SidebarNavLabel, SidebarNavLink, SidebarNavTitle, SidebarToggler, CuiWidget01, CuiWidget02, CuiWidget03, CuiWidget04, CuiWidget05, CuiWidget06, CuiWidget07, CuiWidget08, CuiSimpleBarChart, CuiSimpleLineChart, CuiSimplePointedChart };
