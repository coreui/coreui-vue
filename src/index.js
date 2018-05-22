import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import Callout from './components/Callout/Callout'
import Footer from './components/Footer/Footer'
import Switch from './components/Switch/Switch'
import { Aside, AsideToggler } from './components/Aside'
import { Header, HeaderDropdown } from './components/Header'
import { Sidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, SidebarNavDivider, SidebarNavItem, SidebarNavDropdown, SidebarNavLabel, SidebarNavLink, SidebarNavTitle, SidebarToggler } from './components/Sidebar'


const LibraryModule = {
  Aside,
  AsideToggler,
  Breadcrumb,
  Callout,
  Footer,
  Header,
  HeaderDropdown,
  Sidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  SidebarNavDivider,
  SidebarNavDropdown,
  SidebarNavItem,
  SidebarNavLabel,
  SidebarNavLink,
  SidebarNavTitle,
  SidebarToggler,
  Switch,

  install(Vue) {
    // Register components with vue
    Vue.component("Aside", Aside)
    Vue.component("AsideToggler", AsideToggler)
    Vue.component("Breadcrumb", Breadcrumb)
    Vue.component("Callout", Callout)
    Vue.component("Footer", Footer);
    Vue.component("Header", Header)
    Vue.component("HeaderDropdown", HeaderDropdown)
    Vue.component("Sidebar", Sidebar)
    Vue.component("SidebarFooter", SidebarFooter)
    Vue.component("SidebarForm", SidebarForm)
    Vue.component("SidebarHeader", SidebarHeader)
    Vue.component("SidebarMinimizer", SidebarMinimizer)
    Vue.component("SidebarNav", SidebarNav)
    Vue.component("SidebarNavDivider", SidebarNavDivider)
    Vue.component("SidebarNavDropdown", SidebarNavDropdown)
    Vue.component("SidebarNavItem", SidebarNavItem)
    Vue.component("SidebarNavLabel", SidebarNavLabel)
    Vue.component("SidebarNavLink", SidebarNavLink)
    Vue.component("SidebarNavTitle", SidebarNavTitle)
    Vue.component("SidebarToggler", SidebarToggler)
    Vue.component("Switch", Switch);
  }
};

// Export library
export default LibraryModule

// Export components
export {
  Aside,
  AsideToggler,
  Breadcrumb,
  Callout,
  Footer,
  Header,
  HeaderDropdown,
  Sidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  SidebarNavDivider,
  SidebarNavItem,
  SidebarNavDropdown,
  SidebarNavLabel,
  SidebarNavLink,
  SidebarNavTitle,
  SidebarToggler,
  Switch
};

