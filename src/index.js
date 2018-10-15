import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import Callout from './components/Callout/Callout'
import Footer from './components/Footer/Footer'
import Switch from './components/Switch/Switch'
import { Aside, AsideToggler } from './components/Aside'
import { Header, HeaderDropdown } from './components/Header'
import { Sidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, SidebarNavDivider, SidebarNavItem, SidebarNavDropdown, SidebarNavLabel, SidebarNavLink, SidebarNavTitle, SidebarToggler } from './components/Sidebar'
import { CuiWidget01, CuiWidget02, CuiWidget03, CuiWidget04, CuiWidget05, CuiWidget06, CuiWidget07, CuiWidget08 } from './components/Widgets'
import { CuiSimpleBarChart, CuiSimpleLineChart, CuiSimplePointedChart } from './components/Charts'

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
  CuiWidget01,
  CuiWidget02,
  CuiWidget03,
  CuiWidget04,
  CuiWidget05,
  CuiWidget06,
  CuiWidget07,
  CuiWidget08,
  CuiSimpleBarChart,
  CuiSimpleLineChart,
  CuiSimplePointedChart,


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
    Vue.component("Switch", Switch)
    Vue.component("CuiWidget01", CuiWidget01)
    Vue.component("CuiWidget02", CuiWidget02)
    Vue.component("CuiWidget03", CuiWidget03)
    Vue.component("CuiWidget04", CuiWidget04)
    Vue.component("CuiWidget05", CuiWidget05)
    Vue.component("CuiWidget06", CuiWidget06)
    Vue.component("CuiWidget07", CuiWidget07)
    Vue.component("CuiWidget08", CuiWidget08)
    Vue.component("CuiSimpleLineChart", CuiSimpleLineChart)
    Vue.component("CuiSimpleBarChart", CuiSimpleBarChart)
    Vue.component("CuiSimplePointedChart", CuiSimplePointedChart)
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
  Switch,
  CuiWidget01,
  CuiWidget02,
  CuiWidget03,
  CuiWidget04,
  CuiWidget05,
  CuiWidget06,
  CuiWidget07,
  CuiWidget08,
  CuiSimpleBarChart,
  CuiSimpleLineChart,
  CuiSimplePointedChart
};
