import Vue from 'vue'
export declare class CAlert extends Vue {
  color?: string
  closeButton?: boolean
  show?: boolean
  fade?: boolean
}

export declare class CBadge extends CLink {
  tag?: string
  color?: string
  shape?: string
}

export declare class CBreadcrumb extends Vue {
  items?: Array<any>
  addClasses?: string | Array<any> | object
  addLinkClasses?: string | Array<any> | object
  addLastItemClasses?: string | Array<any> | object
}

export declare class CBreadcrumbRouter extends Vue {
  addClasses?: string | Array<any> | object
  addLinkClasses?: string | Array<any> | object
  addLastItemClasses?: string | Array<any> | object
}

export declare class CButton extends CLink {
  block?: boolean
  shape?: string
  variant?: string
  size?: string
  color?: string
  type?: string
  pressed?: boolean
}

export declare class CButtonClose extends Vue {
  buttonClasses?: string | Array<any> | object
}

export declare class CButtonGroup extends Vue {
  vertical?: boolean
  size?: string
}

export declare class CButtonToolbar extends Vue {
  justify?: boolean
}

export declare class CCallout extends Vue {
  color?: string
}

declare class CardSharedClasses extends Vue {
  tag?: string
  color?: string
  borderColor?: string
  textColor?: string
  align?: string
}

export declare class CCard extends CardSharedClasses {
  bodyWrapper?: boolean
  accentColor?: string
}

export declare class CCardBody extends CardSharedClasses {}

export declare class CCardFooter extends CardSharedClasses {}

export declare class CCardHeader extends CardSharedClasses {}

export declare class CCardImg extends CImg { 
  variant?: string
}

export declare class CCardImgOverlay extends Vue {
  tag?: string
}

export declare class CCardLink extends CLink {}

export declare class CCardSubtitle extends Vue {
  tag?: string
}

export declare class CCardTitle extends Vue {
  tag?: string
}

export declare class CCardtext extends Vue {
  tag?: string
}

export declare class CCardGroup extends Vue {
  tag?: string
  deck?: boolean
  columns?: boolean
}

export declare class CCarousel extends Vue {
  interval?: number
  animate?: boolean
  indicators?: boolean
  arrows?: boolean
  indicatorClasses?: string | Array<any> | object
  height?: string
}

export declare class CCarouselItem extends Vue {
  image?: string | object
  captionHeader?: string
  captionText?: string
  active?: boolean
}

export declare class CCollapse extends Vue {
  duration?: number | { show: number, hide: number }
  transition?: string
  show?: boolean
  navbar?: boolean
}

export declare class CDropdown extends Vue {
  togglerText?: string
  show?: boolean
  disabled?: boolean
  addMenuClasses?: string | Array<any> | object
  addTogglerClasses?: string | Array<any> | object
  inNav?: boolean
  caret?: boolean
  color?: string
  size?: string
  split?: boolean
  offset?: [number, number]
  placement?: string
  flip?: boolean
  customPopperOptions?: object
}

export declare class CDropdownDivider extends Vue {
  tag?: string
}

export declare class CDropdownHeader extends Vue {
  tag?: string
}

export declare class CDropdownItem extends CLink {}

export declare class CElementCover extends Vue {
  boundaries?: Array<{sides: string[], query: string }>
  center?: boolean
  opacity?: number
}


export declare class CEmbed extends Vue {
  type?: string
  ratio?: string
  tag?: string
}

export declare class CFooter extends Vue {
  tag?: string
  fixed?: boolean
}

declare class formSharedProps extends Vue {
  validFeedback?: string
  invalidFeedback?: string
  tooltipFeedback?: boolean
  description?: string
}

export declare class CInputFile extends formSharedProps {
  label?: string
  wasValidated?: boolean
  isValid?: boolean | Function
  addInputClasses?: string | Array<any> | object
  addLabelClasses?: string | Array<any> | object
  horizontal?: boolean | object
  size?: string
  addWrapperClasses?: string | Array<any> | object

  custom?: boolean
  placeholder?: string
  multiple?: boolean
}
export declare class CForm extends formSharedProps {
  inline?: boolean
  wasValidated?: boolean
}

export declare class CFormGroup extends formSharedProps {
  append?: string
  prepend?: string
  wrapperClasses?: string | Array<any> | object
}

export declare class CInput extends formSharedProps {
  type?: string
  append?: string
  prepend?: string
  readonly?: boolean
  plaintext?: boolean
  value?: string
  lazy?: boolean | number
  label?: string
  wasValidated?: boolean
  isValid?: boolean | Function
  addInputClasses?: string | Array<any> | object
  addLabelClasses?: string | Array<any> | object
  horizontal?: boolean | object
  size?: string
  addWrapperClasses?: string | Array<any> | object
}

export declare class CInputRadio extends formSharedProps {
  append?: string
  prepend?: string

  label?: string
  wasValidated?: boolean
  isValid?: boolean | Function
  addInputClasses?: string | Array<any> | object
  addLabelClasses?: string | Array<any> | object

  checked?: boolean
  custom?: boolean
  inline?: boolean
}

export declare class CInputRadioGroup extends Vue {
  name?: string
  options: [string | { label: string, value: string, props?: object }]
  checked?: string
  custom?: boolean
  inline?: boolean
}

export declare class CInputCheckbox extends CInputRadio {}

export declare class CSelect extends formSharedProps {
  append?: string
  prepend?: string

  label?: string
  wasValidated?: boolean
  isValid?: boolean | Function
  addInputClasses?: string | Array<any> | object
  addLabelClasses?: string | Array<any> | object
  horizontal?: boolean | object
  size?: string
  addWrapperClasses?: string | Array<any> | object

  options?: Array<any>
  value?: string | number | boolean | Array<any>
  plaintext?: boolean
  placeholder?: string
  custom?: boolean
}

export declare class CTextarea extends formSharedProps {
  append?: string
  prepend?: string
  readonly?: boolean
  plaintext?: boolean
  value?: string
  lazy?: boolean | number
  label?: string
  wasValidated?: boolean
  isValid?: boolean | Function
  addInputClasses?: string | Array<any> | object
  addLabelClasses?: string | Array<any> | object
  horizontal?: boolean | object
  size?: string
  addWrapperClasses?: string | Array<any> | object
}

export declare class CCol extends Vue {
  col?:  boolean | string | number | object 
  xs?:  boolean | string | number | object 
  sm?:  boolean | string | number | object 
  md?:  boolean | string | number | object 
  lg?:  boolean | string | number | object 
  xl?:  boolean | string | number | object 
  xxl?:  boolean | string | number | object
  tag?: string
}

export declare class CContainer extends Vue {
  fluid?: boolean
  tag?: string
}

export declare class CRow extends Vue {
  tag?: string
  gutters?: boolean
  alignVertical?: string
  alignHorizontal?: string
  form?: boolean
}

export declare class CHeader extends Vue {
  fixed?: boolean
  tag?: string
  colorScheme?: string
  withSubheader?: boolean
}

export declare class CHeaderBrand extends CLink {
  tag?: string
}

export declare class CHeaderNav extends Vue {}

export declare class CHeaderNavItem extends CLink {}

export declare class CHeaderNavLink extends CLink {}

export declare class CSubheader extends CLink {
  tag?: string
}

export declare class CIcon extends Vue {
  name?: string
  content?: string | Array<string>
  size?: string
  customClasses?: string | Array<any> | object
  src?: string
  use?: string
}

export declare class CImg extends Vue {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  block?: boolean
  fluid?: boolean
  fluidGrow?: boolean
  rounded?: boolean | string
  thumbnail?: boolean
  align?: string
  placeholderColor?: string
}

export declare class CJumbotron extends Vue {
  tag?: string
  fluid?: boolean
  color?: string
  borderColor?: string
  textColor?: string
}

export declare class CLink extends Vue {
  href?: string
  rel?: string
  target?: string
  disabled?: boolean
  active?: boolean
  activeClass?: string
  append?: boolean
  event?: string | Array<any>
  exact?: boolean
  exactActiveClass?: string
  replace?: boolean
  routerTag?: string
  to?: string | object
}

export declare class CListGroup extends Vue {
  tag?: string
  flush?: boolean
  horizontal?: string | boolean
  accent?: boolean
}

export declare class CListGroupItem extends CLink {
  tag?: string
  action?: boolean
  color?: string
  accent?: string
}

export declare class CListGroupItemDivider extends Vue {}

export declare class CMedia extends Vue {
  addAsideMargin?: boolean
  addAsideClasses?: string | Array<any> | object
  addBodyClasses?: string | Array<any> | object
  asideRight?: boolean
  asideImageProps?: object
  asideVerticalPosition?: string
}

export declare class CModal extends Vue {
  show?: boolean
  centered?: boolean
  title?: string
  size?: string
  color?: string
  borderColor?: string
  fade?: boolean
  backdrop?: boolean
  closeOnBackdrop?: boolean
  addContentClasses?: string | Array<any> | object
  onKey?: Function
}

export declare class CNav extends Vue {
  fill?: boolean
  justified?: boolean
  variant?: string
  vertical?: boolean
  inCard?: boolean
  tag?: boolean
}

export declare class CNavItem extends CLink {}

export declare class CNavbar extends Vue {
  tag?: string
  light?: boolean
  color?: string
  expandable?: boolean | string
  fixed?: string
  sticky?: boolean
}

export declare class CNavbarBrand extends CLink {
  tag?: string
}
export declare class CNavbarText extends Vue {
  tag?: string
}

export declare class CNavbarNav extends Vue {
  tag?: string
}

export declare class CPagination extends Vue {
  activePage?: number
  pages?: number
  size?: string
  align?: string
  limit?: number
  dots?: boolean
  arrows?: boolean
  doubleArrows?: boolean
  responsive?: boolean
}

export declare class CProgressBar extends Vue {
  color?: string
  striped?: boolean
  animated?: boolean
  precision?: number
  showPercentage?: boolean
  showValue?: boolean
  max?: number
  value?: number
}

export declare class CProgress extends CProgressBar {
  height?: string
  size?: string
}


type ContentFlat = [NodeFlat]
declare interface NodeFlat {
  _name: string;
  _children?: Array<string | NodeFlat>;
  [key: string]: any;
}

type ContentNotFlat = [
  string,
  object,
  NodeNotFlat
]
declare interface NodeNotFlat extends Array<ContentNotFlat | string | { slot: string }> { }

type ContentToRender = ContentFlat | ContentNotFlat

export declare class CRenderFunction extends Vue {
  contentToRender: ContentToRender
  flat?: boolean
}

export declare class CScrollbar extends Vue {
  settings?: object
  switcher?: boolean
  tag?: string
}

export declare class CSidebar extends Vue {
  fixed?: boolean
  unfoldable?: boolean
  overlaid?: boolean
  breakpoint?: string | boolean
  minimize?: boolean
  show?: boolean | string
  size?: string
  hideOnMobileClick?: boolean
  aside?: boolean
  colorScheme?: string
  dropdownMode?: string
}

export declare class CSidebarBrand extends CLink { 
  tag?: string
}


export declare class CSidebarClose extends Vue { }

export declare class CSidebarFooter extends Vue {}

export declare class CSidebarForm extends Vue {}

export declare class CSidebarHeader extends Vue {}

export declare class CSidebarMinimizer extends Vue {}

export declare class CSidebarNav extends Vue {}

export declare class CSidebarNavDivider extends Vue {}

export declare class CSidebarNavDropdown extends Vue {
  name?: string
  route?: string
  icon?: string | object
  fontIcon?: string
  show?: boolean
  items?: Array<object>
}

export declare class CSidebarNavItem extends CLink {
  name?: string
  icon?: string | object
  fontIcon?: string
  badge?: object
  addLinkClasses?: string
  label?: boolean
  color?: string
}

export declare class CSidebarNavTitle extends Vue {}

export declare class CSpinner extends Vue {
  grow?: boolean
  color?: string
  size?: string
  tag?: string
}

export declare class CSwitch extends Vue {
  color?: string
  outline?: boolean | string
  size?: string
  shape?: string
  checked?: boolean
  labelOn?: string
  labelOff?: string
  type?: string
}

export declare class CDataTable extends Vue {
  items?: Array<any>
  fields?: Array<any>
  itemsPerPage?: number
  activePage?: number
  filterRow?: boolean
  pagination?: boolean | object
  addTableClasses?: string | Array<any> | object
  responsive?: boolean
  small?: boolean
  dark?: boolean
  striped?: boolean
  fixed?: boolean
  hover?: boolean
  border?: boolean
  outlined?: boolean
  itemsPerPageSelect?: boolean | {
    label?: string, values?: number[], external?: boolean 
  }
  sorter?: boolean | { external?: boolean, resetable?: boolean }
  columnFilter?: boolean | { external?: boolean, lazy?: boolean}
  tableFilter?: boolean | { 
    external?: boolean, lazy?: boolean, label?: string, placeholder?: string
  }
  sorterValue?: { column: string, asc?: boolean }
  tableFilterValue?: string
  columnFilterValue?: object
  header?: boolean
  footer?: boolean
  loading?: boolean
  clickableRows?: boolean
  noItemsView?: {
    noItems?: string, noResults?: string
  }
  cleaner?: boolean
}

export declare class CTabs extends Vue {
  fill?: boolean
  justified?: boolean
  variant?: string
  fade?: boolean
  vertical?: boolean | object
  addNavWrapperClasses?: string | Array<any> | object
  addNavClasses?: string | Array<any> | object
  addTabsWrapperClasses?: string | Array<any> | object
  addTabsClasses?: string | Array<any> | object
  addTabClasses?: string | Array<any> | object
  activeTab?: number
}

export declare class CTab extends CLink {
  title?: string
}

declare class ToastProps extends Vue {
  position?: string
  autohide?: number
  closeButton?: boolean
  fade?: boolean
}

export declare class CToast extends ToastProps {
  show?: boolean
  header?: string
  color?: string
}

export declare class CToaster extends ToastProps {
  reverse?: boolean
}

export declare class CToggler extends Vue {
  tag?: string
  inNavbar?: boolean
  inHeader?: boolean
}

export declare class CTreeGenerator extends Vue {
  items?: object
  components?: object
}

export declare class CTreeGeneratorItem extends Vue {
  item?: string | object
  name?: string
  components?: object
}

export declare class CWidgetBrand extends Vue {
  color?: string
  rightHeader?: string
  rightFooter?: string
  leftHeader?: string
  leftFooter?: string
  addHeaderClasses?: string | Array<any> | object
}

export declare class CWidgetDropdown extends Vue {
  color?: string
  header?: string
  text?: string
}

export declare class CWidgetIcon extends Vue {
  header?: string
  text?: string
  iconPadding?: boolean
  color?: string
}

export declare class CWidgetProgress extends Vue {
  header?: string
  text?: string
  footer?: string
  color?: string
  inverse?: boolean
  value?: number
}

export declare class CWidgetProgressIcon extends Vue {
  header?: string
  text?: string
  color?: string
  inverse?: boolean
  value?: number
}

export declare class CWidgetSimple extends Vue {
  header?: string
  text?: string
}

export declare class CWrapper extends Vue {
  fluid?: boolean
  tag?: string
}
