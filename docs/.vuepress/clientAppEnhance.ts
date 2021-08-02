import type { ClientAppEnhance } from '@vuepress/client'

import {
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionCollapse,
  CAccordionHeader,
  CAccordionItem,
} from '../../src/components/accordion'

import { CAlert, CAlertHeading, CAlertLink } from '../../src/components/alert'
import { CAvatar } from '../../src/components/avatar'
import { CBackdrop } from '../../src/components/backdrop'
import { CBadge } from '../../src/components/badge'
import { CBreadcrumb, CBreadcrumbItem } from '../../src/components/breadcrumb'
import { CButton } from '../../src/components/button'
import { CButtonToolbar, CButtonGroup } from '../../src/components/button-group'
import { CCallout } from '../../src/components/callout'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardImageOverlay,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
} from '../../src/components/card'

import { CCarousel, CCarouselCaption, CCarouselItem } from '../../src/components/carousel'

import { CCloseButton } from '../../src/components/close-button'

import { CCollapse } from '../../src/components/collapse'

import {
  CDropdown,
  CDropdownItem,
  CDropdownHeader,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
} from '../../src/components/dropdown'

import { CFooter } from '../../src/components/footer'

import {
  CForm,
  CFormCheck,
  CFormControl,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormRange,
  CFormSelect,
  CFormSwitch,
  CFormText,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
} from '../../src/components/form'

import { CCol, CContainer, CRow } from '../../src/components/grid'

import {
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderText,
  CHeaderToggler,
} from '../../src/components/header'

import { CImage } from '../../src/components/image'

import { CLink } from '../../src/components/link'

import { CListGroup, CListGroupItem } from '../../src/components/list-group'

import { CLoadingButton } from '../../src/components/loading-button'

import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '../../src/components/modal'

import {
  CMultiSelect,
  CMultiSelectGroup,
  CMultiSelectGroupLabel,
  CMultiSelectGroupOption,
} from '../../src/components/multi-select'

import {
  CNav,
  CNavGroup,
  CNavGroupItems,
  CNavItem,
  CNavLink,
  CNavTitle,
} from '../../src/components/nav'

import {
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarText,
  CNavbarToggler,
} from '../../src/components/navbar'

import {
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '../../src/components/offcanvas'

import { CPagination, CPaginationItem } from '../../src/components/pagination'

import { CProgress, CProgressBar } from '../../src/components/progress'

import {
  CCreateNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
} from '../../src/components/sidebar'

import { CSpinner } from '../../src/components/spinner'

import {
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '../../src/components/table'

import { CTabContent, CTabPane } from '../../src/components/tabs'

import { CToast, CToastBody, CToastClose, CToaster, CToastHeader } from '../../src/components/toast'

import { CTooltip, CPopover, CClickaway } from '../../src/directives'

import '@coreui/coreui/scss/coreui.scss'

//import CIcon from '@coreui/icons-vue/src/CIconRaw.vue'
//import CIcon from '../../node_modules/@coreui/icons-vue/src/CIconRaw.vue'
//import { CIcon, CIconTestIcon } from '../../src/components/icon'
//import { cilPencil, cilSettings, cilAsterisk, cilUser } from '@coreui/icons'
//import { freeSet } from '@coreui/icons'

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  /* eslint-disable vue/match-component-file-name */
  //app.component('CIcon', CIcon)
  //app.component('CIconTestIcon', CIconTestIcon)

  app.component('CAccordion', CAccordion)
  app.component('CAccordionBody', CAccordionBody)
  app.component('CAccordionButton', CAccordionButton)
  app.component('CAccordionCollapse', CAccordionCollapse)
  app.component('CAccordionHeader', CAccordionHeader)
  app.component('CAccordionItem', CAccordionItem)
  app.component('CAlert', CAlert)
  app.component('CAlertHeading', CAlertHeading)
  app.component('CAlertLink', CAlertLink)
  app.component('CAvatar', CAvatar)

  app.component('CBackdrop', CBackdrop)

  app.component('CBadge', CBadge)
  app.component('CBreadcrumb', CBreadcrumb)
  app.component('CBreadcrumbItem', CBreadcrumbItem)
  app.component('CButton', CButton)
  app.component('CButtonToolbar', CButtonToolbar)
  app.component('CButtonGroup', CButtonGroup)
  app.component('CCallout', CCallout)
  app.component('CCard', CCard)
  app.component('CCardBody', CCardBody)
  app.component('CCardFooter', CCardFooter)
  app.component('CCardGroup', CCardGroup)
  app.component('CCardHeader', CCardHeader)
  app.component('CCardImage', CCardImage)
  app.component('CCardImageOverlay', CCardImageOverlay)
  app.component('CCardLink', CCardLink)
  app.component('CCardSubtitle', CCardSubtitle)
  app.component('CCardText', CCardText)
  app.component('CCardTitle', CCardTitle)
  app.component('CCarousel', CCarousel)
  app.component('CCarouselCaption', CCarouselCaption)
  app.component('CCarouselItem', CCarouselItem)
  app.component('CCloseButton', CCloseButton)
  app.component('CCollapse', CCollapse)
  app.component('CDropdown', CDropdown)
  app.component('CDropdownItem', CDropdownItem)
  app.component('CDropdownHeader', CDropdownHeader)
  app.component('CDropdownDivider', CDropdownDivider)
  app.component('CDropdownMenu', CDropdownMenu)
  app.component('CDropdownToggle', CDropdownToggle)
  app.component('CFooter', CFooter)
  app.component('CForm', CForm)
  app.component('CFormCheck', CFormCheck)
  app.component('CFormFloating', CFormFloating)
  app.component('CFormInput', CFormInput)
  app.component('CFormControl', CFormControl)
  app.component('CFormLabel', CFormLabel)
  app.component('CFormRange', CFormRange)
  app.component('CFormSelect', CFormSelect)
  app.component('CFormSwitch', CFormSwitch)
  app.component('CFormText', CFormText)
  app.component('CFormTextarea', CFormTextarea)
  app.component('CInputGroup', CInputGroup)
  app.component('CInputGroupText', CInputGroupText)
  app.component('CCol', CCol)
  app.component('CContainer', CContainer)
  app.component('CRow', CRow)
  app.component('CHeader', CHeader)
  app.component('CHeaderBrand', CHeaderBrand)
  app.component('CHeaderDivider', CHeaderDivider)
  app.component('CHeaderNav', CHeaderNav)
  app.component('CHeaderText', CHeaderText)
  app.component('CHeaderToggler', CHeaderToggler)
  app.component('CImage', CImage)
  app.component('CLink', CLink)
  app.component('CListGroup', CListGroup)
  app.component('CListGroupItem', CListGroupItem)

  app.component('CLoadingButton', CLoadingButton)

  app.component('CModal', CModal)
  app.component('CModalBody', CModalBody)
  app.component('CModalFooter', CModalFooter)
  app.component('CModalHeader', CModalHeader)
  app.component('CModalTitle', CModalTitle)
  app.component('CMultiSelect', CMultiSelect)
  app.component('CMultiSelectGroup', CMultiSelectGroup)
  app.component('CMultiSelectGroupLabel', CMultiSelectGroupLabel)
  app.component('CMultiSelectGroupOption', CMultiSelectGroupOption)
  app.component('CNav', CNav)
  app.component('CNavGroup', CNavGroup)
  app.component('CNavGroupItems', CNavGroupItems)
  app.component('CNavItem', CNavItem)
  app.component('CNavLink', CNavLink)
  app.component('CNavTitle', CNavTitle)
  app.component('CNavbar', CNavbar)
  app.component('CNavbarBrand', CNavbarBrand)
  app.component('CNavbarNav', CNavbarNav)
  app.component('CNavbarText', CNavbarText)
  app.component('CNavbarToggler', CNavbarToggler)

  app.component('COffcanvas', COffcanvas)
  app.component('COffcanvasBody', COffcanvasBody)
  app.component('COffcanvasHeader', COffcanvasHeader)
  app.component('COffcanvasTitle', COffcanvasTitle)

  app.component('CPagination', CPagination)
  app.component('CPaginationItem', CPaginationItem)
  app.component('CProgress', CProgress)
  app.component('CProgressBar', CProgressBar)
  app.component('CCreateNavItem', CCreateNavItem)
  app.component('CSidebar', CSidebar)
  app.component('CSidebarBrand', CSidebarBrand)
  app.component('CSidebarFooter', CSidebarFooter)
  app.component('CSidebarHeader', CSidebarHeader)
  app.component('CSidebarNav', CSidebarNav)
  app.component('CSidebarToggler', CSidebarToggler)
  app.component('CSpinner', CSpinner)

  app.component('CTable', CTable)
  app.component('CTableBody', CTableBody)
  app.component('CTableCaption', CTableCaption)
  app.component('CTableDataCell', CTableDataCell)
  app.component('CTableFoot', CTableFoot)
  app.component('CTableHead', CTableHead)
  app.component('CTableHeaderCell', CTableHeaderCell)
  app.component('CTableRow', CTableRow)

  app.component('CTabContent', CTabContent)
  app.component('CTabPane', CTabPane)
  app.component('CToast', CToast)
  app.component('CToastBody', CToastBody)
  app.component('CToastClose', CToastClose)
  app.component('CToaster', CToaster)
  app.component('CToastHeader', CToastHeader)

  app.directive('CTooltip', CTooltip)
  app.directive('CPopover', CPopover)
  app.directive('CClickaway', CClickaway)
}

export default clientAppEnhance
