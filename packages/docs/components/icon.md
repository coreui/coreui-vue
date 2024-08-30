---
title: Vue Icon Component
name: Icon
description: Vue icons library is a great resource for Vue developers, who can use its customizable SVG icons in their applications. It offers an extensive library of icons to choose from, which can be easily inserted into projects with just a few lines of code. Not only that, but users are also able to customize the appearance of these icons by setting various props on them. This provides developers with an efficient and flexible way to integrate useful graphical elements into their web pages without doing any extra work.
---

## Installation

To start using CoreUI Vue Icons in your project, you need to install it as a dependency. Follow the instructions below based on your package manager of choice:

### Npm

```bash
// CoreUI Icons library
npm install @coreui/icons

// CIcon component
npm install @coreui/icons-vue 
```

### Yarn

```bash
yarn add @coreui/icons
yarn add @coreui/icons-vue
```

## Usage

Import vue.js icons using one of these two options:

### Single Vue.js icon

To use a single Vue.js icon, import the `<CIcon>` component and the desired icon(s) from the `@coreui/icons` library. Then, include the `<CIcon>` component in your code and specify the icon prop with the imported icon variable. Additionally, you can set the desired size for the icon using the `size` prop.

::: demo
<CIcon :icon="icon.cilList" size="xl"/>
<CIcon :icon="icon.cilShieldAlt" size="xl"/>
:::
```vue
<template>
  <CIcon :icon="cilList" size="xl"/>
  <CIcon :icon="cilShieldAlt" size="xl"/>
</template>
<script setup>
  import { CIcon } from '@coreui/icons-vue';
  import { cilList, cilShieldAlt } from '@coreui/icons';
</script>
```

### All icons

To use all icons available in the CoreUI Vue.js Icons package, import the CIcon component and the entire `@coreui/icons` library using the `* as` syntax. Then, reference the desired icon within the `icon` prop.

```vue
<template>
  <CIcon :icon="icon.cilList" size="xxl"/>
</template>
<script setup>
  import { CIcon } from '@coreui/icons-vue';
  import * as icon from '@coreui/icons';
</script>
```

### Icons object

This way you import your needed Vue.js icons once and pass them to $root object on 'icons' key

```js
// main.js / main.ts
import { CIcon } from '@coreui/icons-vue';
import {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar
} from '@coreui/icons'

const icons = {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar
}

const app = createApp(App)
...
app.provide('icons', icons)
app.component('CIcon', CIcon)
...
app.mount('#app')

```

Later anywhere in the app:

```vue
<CIcon icon="cilArrowBottom" size="xxl"/>
<CIcon icon="cil-arrow-bottom" size="xxl"/>
```

You can pass the name of the icon both in camelCase and kebab-case

### Color

The CoreUI Vue Icon component offers versatile color customization options, empowering you to personalize the icons in multiple ways. You can effortlessly modify the colors by utilizing either class names or CSS variables, providing flexibility and ease in creating visually stunning and cohesive icon designs.

#### Utility classes

With some [color utility classes](https://coreui.io/docs/utilities/colors/), you may use color to convey message.

::: demo
<CIcon :icon="icon.cilList" size="xl" />
<CIcon :icon="icon.cilList" class="text-primary" size="xl" />
<CIcon :icon="icon.cilList" class="text-secondary" size="xl" />
<CIcon :icon="icon.cilList" class="text-success" size="xl" />
<CIcon :icon="icon.cilList" class="text-danger" size="xl" />
<CIcon :icon="icon.cilList" class="text-warning" size="xl" />
<CIcon :icon="icon.cilList" class="text-info" size="xl" />
:::
```vue
<CIcon :icon="cilList" size="xl" />
<CIcon :icon="cilList" class="text-primary" size="xl" />
<CIcon :icon="cilList" class="text-secondary" size="xl" />
<CIcon :icon="cilList" class="text-success" size="xl" />
<CIcon :icon="cilList" class="text-danger" size="xl" />
<CIcon :icon="cilList" class="text-warning" size="xl" />
<CIcon :icon="cilList" class="text-info" size="xl" />
```

#### CSS Variables

CoreUI Vue Icons leverage local CSS variables, such as `--ci-primary-color` and `--ci-secondary-color` (for Duotone icons), to facilitate real-time customization. This allows developers to easily customize the icons by providing their own custom CSS variables.

::: demo
<CIcon :icon="icon.cilList" size="xl" :style="{'--ci-primary-color': 'red'}" />
<CIcon :icon="icon.cilList" size="xl" :style="{'--ci-primary-color': 'green'}" />
:::
```vue
<CIcon :icon="cilList" size="xl" :style="{'--ci-primary-color': 'red'}" />
<CIcon :icon="cilList" size="xl" :style="{'--ci-primary-color': 'green'}" />
```

### Sizing

Set heights of vue icons using size property like `size="lg"` and `size="sm"`.

::: demo
<CIcon :icon="icon.cilList" size="sm" />
<CIcon :icon="icon.cilList" />
<CIcon :icon="icon.cilList" size="lg" />
<CIcon :icon="icon.cilList" size="xl" />
<CIcon :icon="icon.cilList" size="xxl" />
<CIcon :icon="icon.cilList" size="3xl" />
:::
```vue
<CIcon :icon="cilList" size="sm" />
<CIcon :icon="cilList" />
<CIcon :icon="cilList" size="lg" />
<CIcon :icon="cilList" size="xl" />
<CIcon :icon="cilList" size="xxl" />
<CIcon :icon="cilList" size="3xl" />
```

### Custom SVG Icons

The `<CIconSvg`> component allows you to add custom SVG icons to your application. In case you want to use custom SVG icons, this component provides the flexibility to include bespoke SVG graphics that align with your design requirements.

::: demo
<CIconSvg size="4xl">
  <svg
    viewBox="0 0 102 116"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#3C4B64" fillRule="nonzero">
        <path
          d="M96,25.091 L57,2.5743 C53.2871871,0.430706461 48.7128129,0.430706461 45,2.5743 L6,25.091 C2.292246,27.239646 0.00690676667,31.1979678 0,35.4833 L0,80.5167 C0.00688629146,84.8020377 2.29223099,88.760369 6,90.909 L45,113.4256 C48.7127742,115.569338 53.2872258,115.569338 57,113.4256 L96,90.909 C99.707769,88.760369 101.993114,84.8020377 102,80.5167 L102,35.4833 C101.993093,31.1979678 99.707754,27.239646 96,25.091 Z M94,80.5167 C94,81.9457261 93.2375729,83.266187 92,83.9807 L53,106.4974 C51.7623957,107.211931 50.2376043,107.211931 49,106.4974 L10,83.9807 C8.76242713,83.266187 8,81.9457261 8,80.5167 L8,35.4833 C8,34.0542382 8.76239619,32.7337309 10,32.0192 L49,9.5025 C50.2376043,8.78796882 51.7623957,8.78796882 53,9.5025 L92,32.0192 C93.2376038,32.7337309 94,34.0542382 94,35.4833 L94,80.5167 Z"
          id="Shape"
        />
        <path
          d="M74.0216,71.0379 L71.1556,71.0379 C70.4827717,71.0379163 69.8208181,71.2076524 69.231,71.5314 L51.95,81.0167 L32,69.4981 L32,46.5206 L51.95,35.002 L69.2394,44.457 C69.8278903,44.7788245 70.4878603,44.9474965 71.1586,44.9475 L74.0218,44.9475 C75.1263695,44.9475 76.0218,44.0520695 76.0218,42.9475 L76.0218,40.2357 C76.0218,39.5046907 75.6230914,38.8318844 74.9818,38.481 L55.793,27.9854 C53.3404536,26.651551 50.3714915,26.6856213 47.9502,28.0754 L28,39.5929 C25.5282949,41.025705 24.0048155,43.6646378 24,46.5216 L24,69.4976 C24,72.3557593 25.5247614,74.9968204 28,76.4259 L47.95,87.9444 C50.3719491,89.3331078 53.3408366,89.3663802 55.7933,88.0323 L74.9833,77.5012 C75.623333,77.1499602 76.021125,76.4778764 76.0211,75.7478 L76.0211,73.0378 C76.0210448,71.9334648 75.1259352,71.0381761 74.0216,71.0379 L74.0216,71.0379 Z"
          id="Path"
        />
      </g>
    </g>
  </svg>
</CIconSvg>
:::
```vue
<script setup>
  import { CIconSvg } from '@coreui/icons-vue';
</script>
<template>
  <CIconSvg size="4xl">
    <svg
      viewBox="0 0 102 116"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#3C4B64" fillRule="nonzero">
          <path
            d="M96,25.091 L57,2.5743 C53.2871871,0.430706461 48.7128129,0.430706461 45,2.5743 L6,25.091 C2.292246,27.239646 0.00690676667,31.1979678 0,35.4833 L0,80.5167 C0.00688629146,84.8020377 2.29223099,88.760369 6,90.909 L45,113.4256 C48.7127742,115.569338 53.2872258,115.569338 57,113.4256 L96,90.909 C99.707769,88.760369 101.993114,84.8020377 102,80.5167 L102,35.4833 C101.993093,31.1979678 99.707754,27.239646 96,25.091 Z M94,80.5167 C94,81.9457261 93.2375729,83.266187 92,83.9807 L53,106.4974 C51.7623957,107.211931 50.2376043,107.211931 49,106.4974 L10,83.9807 C8.76242713,83.266187 8,81.9457261 8,80.5167 L8,35.4833 C8,34.0542382 8.76239619,32.7337309 10,32.0192 L49,9.5025 C50.2376043,8.78796882 51.7623957,8.78796882 53,9.5025 L92,32.0192 C93.2376038,32.7337309 94,34.0542382 94,35.4833 L94,80.5167 Z"
            id="Shape"
          />
          <path
            d="M74.0216,71.0379 L71.1556,71.0379 C70.4827717,71.0379163 69.8208181,71.2076524 69.231,71.5314 L51.95,81.0167 L32,69.4981 L32,46.5206 L51.95,35.002 L69.2394,44.457 C69.8278903,44.7788245 70.4878603,44.9474965 71.1586,44.9475 L74.0218,44.9475 C75.1263695,44.9475 76.0218,44.0520695 76.0218,42.9475 L76.0218,40.2357 C76.0218,39.5046907 75.6230914,38.8318844 74.9818,38.481 L55.793,27.9854 C53.3404536,26.651551 50.3714915,26.6856213 47.9502,28.0754 L28,39.5929 C25.5282949,41.025705 24.0048155,43.6646378 24,46.5216 L24,69.4976 C24,72.3557593 25.5247614,74.9968204 28,76.4259 L47.95,87.9444 C50.3719491,89.3331078 53.3408366,89.3663802 55.7933,88.0323 L74.9833,77.5012 C75.623333,77.1499602 76.021125,76.4778764 76.0211,75.7478 L76.0211,73.0378 C76.0210448,71.9334648 75.1259352,71.0381761 74.0216,71.0379 L74.0216,71.0379 Z"
            id="Path"
          />
        </g>
      </g>
    </svg>
  </CIconSvg>
</template>
```

## Available icons

CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app.

<CNav variant="tabs" role="tablist">
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPaneActiveKey === 1"
      @click="() => {tabPaneActiveKey = 1}"
    >
      Linear
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPaneActiveKey === 2"
      @click="() => {tabPaneActiveKey = 2}"
    >
      Brand
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPaneActiveKey === 3"
      @click="() => {tabPaneActiveKey = 3}"
    >
      Flags
    </CNavLink>
  </CNavItem>
</CNav>
<CTabContent class="pt-4" style="--cui-light: #f0f4f7">
  <CTabPane role="tabpanel" aria-labelledby="linear-tab" :visible="tabPaneActiveKey === 1">
    <CRow v-if="tabPaneActiveKey === 1" :xs="{ cols: 3 }" :sm="{ cols: 4 }" :lg="{ cols: 5 }">
      <CCol class="mb-4" v-for="(i) in linearIcons">
        <div class="p-3 py-4 mb-2 bg-body-tertiary text-center rounded">
          <CIcon :icon="icon[i]" size="xxl"/>
        </div>
        <div class="text-body-secondary text-center pt-1 small">{{i}}</div>
      </CCol>
    </CRow>
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="brand-tab" :visible="tabPaneActiveKey === 2">
    <CRow v-if="tabPaneActiveKey === 2" :xs="{ cols: 3 }" :sm="{ cols: 4 }" :lg="{ cols: 5 }">
      <CCol class="mb-4" v-for="(i) in brandIcons">
        <div class="p-3 py-4 mb-2 bg-body-tertiary text-center rounded">
          <CIcon :icon="icon[i]" size="xxl"/>
        </div>
        <div class="text-body-secondary text-center pt-1 small">{{i}}</div>
      </CCol>
    </CRow>
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="flags-tab" :visible="tabPaneActiveKey === 3">
    <CRow v-if="tabPaneActiveKey === 3" :xs="{ cols: 3 }" :sm="{ cols: 4 }" :lg="{ cols: 5 }">
      <CCol class="mb-4" v-for="(i) in flagIcons">
        <div class="p-3 py-4 mb-2 bg-body-tertiary text-center rounded">
          <CIcon :icon="icon[i]" size="xxl"/>
        </div>
        <div class="text-body-secondary text-center pt-1 small">{{i}}</div>
      </CCol>
    </CRow>
  </CTabPane>
</CTabContent>

## API

!!!include(./api/coreui-icons-vue/src/CIcon.api.md)!!!

!!!include(./api/coreui-icons-vue/src/CIconSvg.api.md)!!!

<script setup>
  import { ref } from 'vue'
  import { CIcon } from '@coreui/icons-vue';
  import * as icon from '@coreui/icons';

  const linearIcons = ['cilAccountLogout', 'cilActionRedo', 'cilActionUndo', 'cilAddressBook', 'cilAirplaneModeOff', 'cilAirplaneMode', 'cilAirplay', 'cilAlarm', 'cilAlbum', 'cilAlignCenter', 'cilAlignLeft', 'cilAlignRight', 'cilAmericanFootball', 'cilAnimal', 'cilAperture', 'cilApple', 'cilApplicationsSettings', 'cilApplications', 'cilAppsSettings', 'cilApps', 'cilArrowBottom', 'cilArrowCircleBottom', 'cilArrowCircleLeft', 'cilArrowCircleRight', 'cilArrowCircleTop', 'cilArrowLeft', 'cilArrowRight', 'cilArrowThickBottom', 'cilArrowThickFromBottom', 'cilArrowThickFromLeft', 'cilArrowThickFromRight', 'cilArrowThickFromTop', 'cilArrowThickLeft', 'cilArrowThickRight', 'cilArrowThickToBottom', 'cilArrowThickToLeft', 'cilArrowThickToRight', 'cilArrowThickToTop', 'cilArrowThickTop', 'cilArrowTop', 'cilAssistiveListeningSystem', 'cilAsteriskCircle', 'cilAsterisk', 'cilAt', 'cilAudioDescription', 'cilAudioSpectrum', 'cilAudio', 'cilAvTimer', 'cilBabyCarriage', 'cilBaby', 'cilBackspace', 'cilBadge', 'cilBalanceScale', 'cilBan', 'cilBank', 'cilBarChart', 'cilBarcode', 'cilBaseball', 'cilBasket', 'cilBasketball', 'cilBath', 'cilBathroom', 'cilBattery0', 'cilBattery3', 'cilBattery5', 'cilBatteryAlert', 'cilBatteryEmpty', 'cilBatteryFull', 'cilBatterySlash', 'cilBeachAccess', 'cilBeaker', 'cilBed', 'cilBellExclamation', 'cilBell', 'cilBike', 'cilBirthdayCake', 'cilBlind', 'cilBluetooth', 'cilBlurCircular', 'cilBlurLinear', 'cilBlur', 'cilBoatAlt', 'cilBold', 'cilBoltCircle', 'cilBolt', 'cilBook', 'cilBookmark', 'cilBorderAll', 'cilBorderBottom', 'cilBorderClear', 'cilBorderHorizontal', 'cilBorderInner', 'cilBorderLeft', 'cilBorderOuter', 'cilBorderRight', 'cilBorderStyle', 'cilBorderTop', 'cilBorderVertical', 'cilBowling', 'cilBraille', 'cilBriefcase', 'cilBrightness', 'cilBritishPound', 'cilBrowser', 'cilBrushAlt', 'cilBrush', 'cilBug', 'cilBuilding', 'cilBullhorn', 'cilBurger', 'cilBurn', 'cilBusAlt', 'cilCalculator', 'cilCalendarCheck', 'cilCalendar', 'cilCameraControl', 'cilCameraRoll', 'cilCamera', 'cilCarAlt', 'cilCaretBottom', 'cilCaretLeft', 'cilCaretRight', 'cilCaretTop', 'cilCart', 'cilCash', 'cilCasino', 'cilCast', 'cilCat', 'cilCc', 'cilCenterFocus', 'cilChartLine', 'cilChartPie', 'cilChart', 'cilChatBubble', 'cilCheckAlt', 'cilCheckCircle', 'cilCheck', 'cilChevronBottom', 'cilChevronCircleDownAlt', 'cilChevronCircleLeftAlt', 'cilChevronCircleRightAlt', 'cilChevronCircleUpAlt', 'cilChevronDoubleDown', 'cilChevronDoubleLeft', 'cilChevronDoubleRight', 'cilChevronDoubleUp', 'cilChevronLeft', 'cilChevronRight', 'cilChevronTop', 'cilChildFriendly', 'cilChild', 'cilCircle', 'cilClearAll', 'cilClipboard', 'cilClock', 'cilClone', 'cilClosedCaptioning', 'cilCloudDownload', 'cilCloudUpload', 'cilCloud', 'cilCloudy', 'cilCode', 'cilCoffee', 'cilCog', 'cilColorBorder', 'cilColorFill', 'cilColorPalette', 'cilColumns', 'cilCommand', 'cilCommentBubble', 'cilCommentSquare', 'cilCompass', 'cilCompress', 'cilContact', 'cilContrast', 'cilControl', 'cilCopy', 'cilCouch', 'cilCreditCard', 'cilCropRotate', 'cilCrop', 'cilCursorMove', 'cilCursor', 'cilCut', 'cilDataTransferDown', 'cilDataTransferUp', 'cilDeaf', 'cilDelete', 'cilDescription', 'cilDevices', 'cilDialpad', 'cilDiamond', 'cilDinner', 'cilDisabled', 'cilDog', 'cilDollar', 'cilDoor', 'cilDoubleQuoteSansLeft', 'cilDoubleQuoteSansRight', 'cilDrinkAlcohol', 'cilDrink', 'cilDrop', 'cilEco', 'cilEducation', 'cilElevator', 'cilEnvelopeClosed', 'cilEnvelopeLetter', 'cilEnvelopeOpen', 'cilEqualizer', 'cilEthernet', 'cilEuro', 'cilExcerpt', 'cilExitToApp', 'cilExpandDown', 'cilExpandLeft', 'cilExpandRight', 'cilExpandUp', 'cilExposure', 'cilExternalLink', 'cilEyedropper', 'cilFaceDead', 'cilFace', 'cilFactorySlash', 'cilFactory', 'cilFastfood', 'cilFax', 'cilFeaturedPlaylist', 'cilFile', 'cilFilterFrames', 'cilFilterPhoto', 'cilFilterSquare', 'cilFilterX', 'cilFilter', 'cilFindInPage', 'cilFingerprint', 'cilFire', 'cilFlagAlt', 'cilFlightTakeoff', 'cilFlipToBack', 'cilFlipToFront', 'cilFlip', 'cilFlower', 'cilFolderOpen', 'cilFolder', 'cilFont', 'cilFootball', 'cilFork', 'cilFridge', 'cilFrown', 'cilFullscreenExit', 'cilFullscreen', 'cilFunctionsAlt', 'cilFunctions', 'cilGamepad', 'cilGarage', 'cilGem', 'cilGif', 'cilGift', 'cilGlobeAlt', 'cilGolfAlt', 'cilGolf', 'cilGradient', 'cilGrain', 'cilGraph', 'cilGridSlash', 'cilGrid', 'cilGroup', 'cilHamburgerMenu', 'cilHandPointDown', 'cilHandPointLeft', 'cilHandPointRight', 'cilHandPointUp', 'cilHappy', 'cilHd', 'cilHdr', 'cilHeader', 'cilHeadphones', 'cilHealing', 'cilHeart', 'cilHighlighter', 'cilHighligt', 'cilHistory', 'cilHome', 'cilHospital', 'cilHotTub', 'cilHouse', 'cilHttps', 'cilImageBroken', 'cilImagePlus', 'cilImage', 'cilInbox', 'cilIndentDecrease', 'cilIndentIncrease', 'cilIndustrySlash', 'cilIndustry', 'cilInfinity', 'cilInfo', 'cilInputHdmi', 'cilInputPower', 'cilInput', 'cilInstitution', 'cilItalic', 'cilJustifyCenter', 'cilJustifyLeft', 'cilJustifyRight', 'cilKeyboard', 'cilLan', 'cilLanguage', 'cilLaptop', 'cilLayers', 'cilLeaf', 'cilLemon', 'cilLevelDown', 'cilLevelUp', 'cilLibraryAdd', 'cilLibraryBuilding', 'cilLibrary', 'cilLifeRing', 'cilLightbulb', 'cilLineSpacing', 'cilLineStyle', 'cilLineWeight', 'cilLinkAlt', 'cilLinkBroken', 'cilLink', 'cilListFilter', 'cilListHighPriority', 'cilListLowPriority', 'cilListNumberedRtl', 'cilListNumbered', 'cilListRich', 'cilList', 'cilLocationPin', 'cilLockLocked', 'cilLockUnlocked', 'cilLocomotive', 'cilLoop1', 'cilLoopCircular', 'cilLoop', 'cilLowVision', 'cilMagnifyingGlass', 'cilMap', 'cilMediaEject', 'cilMediaPause', 'cilMediaPlay', 'cilMediaRecord', 'cilMediaSkipBackward', 'cilMediaSkipForward', 'cilMediaStepBackward', 'cilMediaStepForward', 'cilMediaStop', 'cilMedicalCross', 'cilMeh', 'cilMemory', 'cilMenu', 'cilMic', 'cilMicrophone', 'cilMinus', 'cilMobileLandscape', 'cilMobile', 'cilMoney', 'cilMonitor', 'cilMoodBad', 'cilMoodGood', 'cilMoodVeryBad', 'cilMoodVeryGood', 'cilMoon', 'cilMouse', 'cilMouthSlash', 'cilMove', 'cilMovie', 'cilMugTea', 'cilMug', 'cilMusicNote', 'cilNewspaper', 'cilNoteAdd', 'cilNotes', 'cilObjectGroup', 'cilObjectUngroup', 'cilOpacity', 'cilOpentype', 'cilOptions', 'cilPaintBucket', 'cilPaint', 'cilPaperPlane', 'cilPaperclip', 'cilParagraph', 'cilPaw', 'cilPenAlt', 'cilPenNib', 'cilPen', 'cilPencil', 'cilPeople', 'cilPhone', 'cilPin', 'cilPizza', 'cilPlant', 'cilPlaylistAdd', 'cilPlus', 'cilPool', 'cilPowerStandby', 'cilPregnant', 'cilPrint', 'cilPushchair', 'cilPuzzle', 'cilQrCode', 'cilRain', 'cilRectangle', 'cilRecycle', 'cilReload', 'cilReportSlash', 'cilResizeBoth', 'cilResizeHeight', 'cilResizeWidth', 'cilRestaurant', 'cilRoom', 'cilRouter', 'cilRowing', 'cilRss', 'cilRuble', 'cilRunning', 'cilSad', 'cilSatelite', 'cilSave', 'cilSchool', 'cilScreenDesktop', 'cilScreenSmartphone', 'cilScrubber', 'cilSearch', 'cilSend', 'cilSettings', 'cilShareAll', 'cilShareAlt', 'cilShareBoxed', 'cilShare', 'cilShieldAlt', 'cilShortText', 'cilShower', 'cilSignLanguage', 'cilSignalCellular0', 'cilSignalCellular3', 'cilSignalCellular4', 'cilSim', 'cilSitemap', 'cilSmilePlus', 'cilSmile', 'cilSmokeFree', 'cilSmokeSlash', 'cilSmoke', 'cilSmokingRoom', 'cilSnowflake', 'cilSoccer', 'cilSofa', 'cilSortAlphaDown', 'cilSortAlphaUp', 'cilSortAscending', 'cilSortDescending', 'cilSortNumericDown', 'cilSortNumericUp', 'cilSpa', 'cilSpaceBar', 'cilSpeak', 'cilSpeaker', 'cilSpeech', 'cilSpeedometer', 'cilSpreadsheet', 'cilSquare', 'cilStarHalf', 'cilStar', 'cilStorage', 'cilStream', 'cilStrikethrough', 'cilSun', 'cilSwapHorizontal', 'cilSwapVertical', 'cilSwimming', 'cilSync', 'cilTablet', 'cilTag', 'cilTags', 'cilTask', 'cilTaxi', 'cilTennisBall', 'cilTennis', 'cilTerminal', 'cilTerrain', 'cilTextShapes', 'cilTextSize', 'cilTextSquare', 'cilTextStrike', 'cilText', 'cilThumbDown', 'cilThumbUp', 'cilToggleOff', 'cilToggleOn', 'cilToilet', 'cilTouchApp', 'cilTransfer', 'cilTranslate', 'cilTrash', 'cilTriangle', 'cilTruck', 'cilTv', 'cilUnderline', 'cilUsb', 'cilUserFemale', 'cilUserFollow', 'cilUserPlus', 'cilUserUnfollow', 'cilUserX', 'cilUser', 'cilVector', 'cilVerticalAlignBottom', 'cilVerticalAlignCenter', 'cilVerticalAlignTop', 'cilVideo', 'cilVideogame', 'cilViewColumn', 'cilViewModule', 'cilViewQuilt', 'cilViewStream', 'cilVoiceOverRecord', 'cilVoice', 'cilVolumeHigh', 'cilVolumeLow', 'cilVolumeOff', 'cilWalk', 'cilWallet', 'cilWallpaper', 'cilWarning', 'cilWatch', 'cilWc', 'cilWeightlifitng', 'cilWheelchair', 'cilWifiSignal0', 'cilWifiSignal1', 'cilWifiSignal2', 'cilWifiSignal3', 'cilWifiSignal4', 'cilWifiSignalOff', 'cilWindowMaximize', 'cilWindowMinimize', 'cilWindowRestore', 'cilWindow', 'cilWrapText', 'cilXCircle', 'cilX', 'cilYen', 'cilZoomIn', 'cilZoomOut', 'cilZoom']

  const brandIcons = ['cib500px5', 'cib500px', 'cibAboutMe', 'cibAbstract', 'cibAcm', 'cibAddthis', 'cibAdguard', 'cibAdobeAcrobatReader', 'cibAdobeAfterEffects', 'cibAdobeAudition', 'cibAdobeCreativeCloud', 'cibAdobeDreamweaver', 'cibAdobeIllustrator', 'cibAdobeIndesign', 'cibAdobeLightroomClassic', 'cibAdobeLightroom', 'cibAdobePhotoshop', 'cibAdobePremiere', 'cibAdobeTypekit', 'cibAdobeXd', 'cibAdobe', 'cibAirbnb', 'cibAlgolia', 'cibAlipay', 'cibAllocine', 'cibAmazonAws', 'cibAmazonPay', 'cibAmazon', 'cibAmd', 'cibAmericanExpress', 'cibAnaconda', 'cibAnalogue', 'cibAndroidAlt', 'cibAndroid', 'cibAngellist', 'cibAngularUniversal', 'cibAngular', 'cibAnsible', 'cibApacheAirflow', 'cibApacheFlink', 'cibApacheSpark', 'cibApache', 'cibAppStoreIos', 'cibAppStore', 'cibAppleMusic', 'cibApplePay', 'cibApplePodcasts', 'cibApple', 'cibAppveyor', 'cibAral', 'cibArchLinux', 'cibArchiveOfOurOwn', 'cibArduino', 'cibArtstation', 'cibArxiv', 'cibAsana', 'cibAtAndT', 'cibAtlassian', 'cibAtom', 'cibAudible', 'cibAurelia', 'cibAuth0', 'cibAutomatic', 'cibAutotask', 'cibAventrix', 'cibAzureArtifacts', 'cibAzureDevops', 'cibAzurePipelines', 'cibBabel', 'cibBaidu', 'cibBamboo', 'cibBancontact', 'cibBandcamp', 'cibBasecamp', 'cibBathasu', 'cibBehance', 'cibBigCartel', 'cibBing', 'cibBit', 'cibBitbucket', 'cibBitcoin', 'cibBitdefender', 'cibBitly', 'cibBlackberry', 'cibBlender', 'cibBloggerB', 'cibBlogger', 'cibBluetoothB', 'cibBluetooth', 'cibBoeing', 'cibBoost', 'cibBootstrap', 'cibBower', 'cibBrandAi', 'cibBrave', 'cibBtc', 'cibBuddy', 'cibBuffer', 'cibBuyMeACoffee', 'cibBuysellads', 'cibBuzzfeed', 'cibC', 'cibCakephp', 'cibCampaignMonitor', 'cibCanva', 'cibCashapp', 'cibCassandra', 'cibCastro', 'cibCcAmazonPay', 'cibCcAmex', 'cibCcApplePay', 'cibCcDinersClub', 'cibCcDiscover', 'cibCcJcb', 'cibCcMastercard', 'cibCcPaypal', 'cibCcStripe', 'cibCcVisa', 'cibCentos', 'cibCevo', 'cibChase', 'cibChef', 'cibChromecast', 'cibCircle', 'cibCircleci', 'cibCirrusci', 'cibCisco', 'cibCivicrm', 'cibClockify', 'cibClojure', 'cibCloudbees', 'cibCloudflare', 'cibCmake', 'cibCoOp', 'cibCodacy', 'cibCodeClimate', 'cibCodecademy', 'cibCodecov', 'cibCodeigniter', 'cibCodepen', 'cibCoderwall', 'cibCodesandbox', 'cibCodeship', 'cibCodewars', 'cibCodio', 'cibCoffeescript', 'cibCommonWorkflowLanguage', 'cibComposer', 'cibCondaForge', 'cibConekta', 'cibConfluence', 'cibCoreuiC', 'cibCoreui', 'cibCoursera', 'cibCoveralls', 'cibCpanel', 'cibCplusplus', 'cibCreativeCommonsBy', 'cibCreativeCommonsNcEu', 'cibCreativeCommonsNcJp', 'cibCreativeCommonsNc', 'cibCreativeCommonsNd', 'cibCreativeCommonsPdAlt', 'cibCreativeCommonsPd', 'cibCreativeCommonsRemix', 'cibCreativeCommonsSa', 'cibCreativeCommonsSamplingPlus', 'cibCreativeCommonsSampling', 'cibCreativeCommonsShare', 'cibCreativeCommonsZero', 'cibCreativeCommons', 'cibCrunchbase', 'cibCrunchyroll', 'cibCss3Shiled', 'cibCss3', 'cibCsswizardry', 'cibD3Js', 'cibDailymotion', 'cibDashlane', 'cibDazn', 'cibDblp', 'cibDebian', 'cibDeepin', 'cibDeezer', 'cibDelicious', 'cibDell', 'cibDeno', 'cibDependabot', 'cibDesignerNews', 'cibDevTo', 'cibDeviantart', 'cibDevrant', 'cibDiaspora', 'cibDigg', 'cibDigitalOcean', 'cibDiscord', 'cibDiscourse', 'cibDiscover', 'cibDisqus', 'cibDisroot', 'cibDjango', 'cibDocker', 'cibDocusign', 'cibDotNet', 'cibDraugiemLv', 'cibDribbble', 'cibDrone', 'cibDropbox', 'cibDrupal', 'cibDtube', 'cibDuckduckgo', 'cibDynatrace', 'cibEbay', 'cibEclipseide', 'cibElasticCloud', 'cibElasticSearch', 'cibElasticStack', 'cibElastic', 'cibElectron', 'cibElementary', 'cibEleventy', 'cibEllo', 'cibElsevier', 'cibEmlakjet', 'cibEmpirekred', 'cibEnvato', 'cibEpicGames', 'cibEpson', 'cibEsea', 'cibEslint', 'cibEthereum', 'cibEtsy', 'cibEventStore', 'cibEventbrite', 'cibEvernote', 'cibEverplaces', 'cibEvry', 'cibExercism', 'cibExpertsExchange', 'cibExpo', 'cibEyeem', 'cibFSecure', 'cibFacebookF', 'cibFacebook', 'cibFaceit', 'cibFandango', 'cibFavro', 'cibFeathub', 'cibFedex', 'cibFedora', 'cibFeedly', 'cibFidoAlliance', 'cibFigma', 'cibFilezilla', 'cibFirebase', 'cibFitbit', 'cibFlask', 'cibFlattr', 'cibFlickr', 'cibFlipboard', 'cibFlutter', 'cibFnac', 'cibFoursquare', 'cibFramer', 'cibFreebsd', 'cibFreecodecamp', 'cibFurAffinity', 'cibFurryNetwork', 'cibGarmin', 'cibGatsby', 'cibGauges', 'cibGenius', 'cibGentoo', 'cibGeocaching', 'cibGerrit', 'cibGg', 'cibGhost', 'cibGimp', 'cibGit', 'cibGitea', 'cibGithub', 'cibGitkraken', 'cibGitlab', 'cibGitpod', 'cibGitter', 'cibGlassdoor', 'cibGlitch', 'cibGmail', 'cibGnuPrivacyGuard', 'cibGnuSocial', 'cibGnu', 'cibGo', 'cibGodotEngine', 'cibGogCom', 'cibGoldenline', 'cibGoodreads', 'cibGoogleAds', 'cibGoogleAllo', 'cibGoogleAnalytics', 'cibGoogleChrome', 'cibGoogleCloud', 'cibGoogleKeep', 'cibGooglePay', 'cibGooglePlay', 'cibGooglePodcasts', 'cibGoogle', 'cibGooglesCholar', 'cibGovUk', 'cibGradle', 'cibGrafana', 'cibGraphcool', 'cibGraphql', 'cibGrav', 'cibGravatar', 'cibGreenkeeper', 'cibGreensock', 'cibGroovy', 'cibGroupon', 'cibGrunt', 'cibGulp', 'cibGumroad', 'cibGumtree', 'cibHabr', 'cibHackaday', 'cibHackerearth', 'cibHackerone', 'cibHackerrank', 'cibHackhands', 'cibHackster', 'cibHappycow', 'cibHashnode', 'cibHaskell', 'cibHatenaBookmark', 'cibHaxe', 'cibHelm', 'cibHere', 'cibHeroku', 'cibHexo', 'cibHighly', 'cibHipchat', 'cibHitachi', 'cibHockeyapp', 'cibHomify', 'cibHootsuite', 'cibHotjar', 'cibHouzz', 'cibHp', 'cibHtml5Shield', 'cibHtml5', 'cibHtmlacademy', 'cibHuawei', 'cibHubspot', 'cibHulu', 'cibHumbleBundle', 'cibIata', 'cibIbm', 'cibIcloud', 'cibIconjar', 'cibIcq', 'cibIdeal', 'cibIfixit', 'cibImdb', 'cibIndeed', 'cibInkscape', 'cibInstacart', 'cibInstagram', 'cibInstapaper', 'cibIntel', 'cibIntellijidea', 'cibIntercom', 'cibInternetExplorer', 'cibInvision', 'cibIonic', 'cibIssuu', 'cibItchIo', 'cibJabber', 'cibJava', 'cibJavascript', 'cibJekyll', 'cibJenkins', 'cibJest', 'cibJet', 'cibJetbrains', 'cibJira', 'cibJoomla', 'cibJquery', 'cibJs', 'cibJsdelivr', 'cibJsfiddle', 'cibJson', 'cibJupyter', 'cibJustgiving', 'cibKaggle', 'cibKaios', 'cibKaspersky', 'cibKentico', 'cibKeras', 'cibKeybase', 'cibKeycdn', 'cibKhanAcademy', 'cibKibana', 'cibKickstarter', 'cibKik', 'cibKirby', 'cibKlout', 'cibKnown', 'cibKoFi', 'cibKodi', 'cibKoding', 'cibKotlin', 'cibKrita', 'cibKubernetes', 'cibLanyrd', 'cibLaravelHorizon', 'cibLaravelNova', 'cibLaravel', 'cibLastFm', 'cibLatex', 'cibLaunchpad', 'cibLeetcode', 'cibLenovo', 'cibLess', 'cibLetsEncrypt', 'cibLetterboxd', 'cibLgtm', 'cibLiberapay', 'cibLibrarything', 'cibLibreoffice', 'cibLine', 'cibLinkedinIn', 'cibLinkedin', 'cibLinuxFoundation', 'cibLinuxMint', 'cibLinux', 'cibLivejournal', 'cibLivestream', 'cibLogstash', 'cibLua', 'cibLumen', 'cibLyft', 'cibMacys', 'cibMagento', 'cibMagisk', 'cibMailRu', 'cibMailchimp', 'cibMakerbot', 'cibManjaro', 'cibMarkdown', 'cibMarketo', 'cibMastercard', 'cibMastodon', 'cibMaterialDesign', 'cibMathworks', 'cibMatrix', 'cibMattermost', 'cibMatternet', 'cibMaxcdn', 'cibMcafee', 'cibMediaTemple', 'cibMediafire', 'cibMediumM', 'cibMedium', 'cibMeetup', 'cibMega', 'cibMendeley', 'cibMessenger', 'cibMeteor', 'cibMicroBlog', 'cibMicrogenetics', 'cibMicrosoftEdge', 'cibMicrosoft', 'cibMinetest', 'cibMinutemailer', 'cibMix', 'cibMixcloud', 'cibMixer', 'cibMojang', 'cibMonero', 'cibMongodb', 'cibMonkeytie', 'cibMonogram', 'cibMonzo', 'cibMoo', 'cibMozillaFirefox', 'cibMozilla', 'cibMusescore', 'cibMxlinux', 'cibMyspace', 'cibMysql', 'cibNativescript', 'cibNec', 'cibNeo4J', 'cibNetflix', 'cibNetlify', 'cibNextJs', 'cibNextcloud', 'cibNextdoor', 'cibNginx', 'cibNim', 'cibNintendo3Ds', 'cibNintendoGamecube', 'cibNintendoSwitch', 'cibNintendo', 'cibNodeJs', 'cibNodeRed', 'cibNodemon', 'cibNokia', 'cibNotion', 'cibNpm', 'cibNucleo', 'cibNuget', 'cibNuxtJs', 'cibNvidia', 'cibOcaml', 'cibOctave', 'cibOctopusDeploy', 'cibOculus', 'cibOdnoklassniki', 'cibOpenAccess', 'cibOpenCollective', 'cibOpenId', 'cibOpenSourceInitiative', 'cibOpenstreetmap', 'cibOpensuse', 'cibOpenvpn', 'cibOpera', 'cibOpsgenie', 'cibOracle', 'cibOrcid', 'cibOrigin', 'cibOsi', 'cibOsmc', 'cibOvercast', 'cibOverleaf', 'cibOvh', 'cibPagekit', 'cibPalantir', 'cibPandora', 'cibPantheon', 'cibPatreon', 'cibPaypal', 'cibPeriscope', 'cibPhp', 'cibPicartoTv', 'cibPinboard', 'cibPingdom', 'cibPingup', 'cibPinterestP', 'cibPinterest', 'cibPivotaltracker', 'cibPlangrid', 'cibPlayerMe', 'cibPlayerfm', 'cibPlaystation', 'cibPlaystation3', 'cibPlaystation4', 'cibPlesk', 'cibPlex', 'cibPluralsight', 'cibPlurk', 'cibPocket', 'cibPostgresql', 'cibPostman', 'cibPostwoman', 'cibPowershell', 'cibPrettier', 'cibPrismic', 'cibProbot', 'cibProcesswire', 'cibProductHunt', 'cibProtoIo', 'cibProtonmail', 'cibProxmox', 'cibPypi', 'cibPython', 'cibPytorch', 'cibQgis', 'cibQiita', 'cibQq', 'cibQualcomm', 'cibQuantcast', 'cibQuantopian', 'cibQuarkus', 'cibQuora', 'cibQwiklabs', 'cibQzone', 'cibR', 'cibRadiopublic', 'cibRails', 'cibRaspberryPi', 'cibReact', 'cibReadTheDocs', 'cibReadme', 'cibRealm', 'cibReason', 'cibRedbubble', 'cibRedditAlt', 'cibReddit', 'cibRedhat', 'cibRedis', 'cibRedux', 'cibRenren', 'cibReverbnation', 'cibRiot', 'cibRipple', 'cibRiseup', 'cibRollupJs', 'cibRoots', 'cibRoundcube', 'cibRss', 'cibRstudio', 'cibRuby', 'cibRubygems', 'cibRunkeeper', 'cibRust', 'cibSafari', 'cibSahibinden', 'cibSalesforce', 'cibSaltstack', 'cibSamsungPay', 'cibSamsung', 'cibSap', 'cibSassAlt', 'cibSass', 'cibSaucelabs', 'cibScala', 'cibScaleway', 'cibScribd', 'cibScrutinizerci', 'cibSeagate', 'cibSega', 'cibSellfy', 'cibSemaphoreci', 'cibSensu', 'cibSentry', 'cibServerFault', 'cibShazam', 'cibShell', 'cibShopify', 'cibShowpad', 'cibSiemens', 'cibSignal', 'cibSinaWeibo', 'cibSitepoint', 'cibSketch', 'cibSkillshare', 'cibSkyliner', 'cibSkype', 'cibSlack', 'cibSlashdot', 'cibSlickpic', 'cibSlides', 'cibSlideshare', 'cibSmashingmagazine', 'cibSnapchat', 'cibSnapcraft', 'cibSnyk', 'cibSociety6', 'cibSocketIo', 'cibSogou', 'cibSolus', 'cibSongkick', 'cibSonos', 'cibSoundcloud', 'cibSourceforge', 'cibSourcegraph', 'cibSpacemacs', 'cibSpacex', 'cibSparkfun', 'cibSparkpost', 'cibSpdx', 'cibSpeakerDeck', 'cibSpectrum', 'cibSpotify', 'cibSpotlight', 'cibSpreaker', 'cibSpring', 'cibSprint', 'cibSquarespace', 'cibStackbit', 'cibStackexchange', 'cibStackoverflow', 'cibStackpath', 'cibStackshare', 'cibStadia', 'cibStatamic', 'cibStaticman', 'cibStatuspage', 'cibSteam', 'cibSteem', 'cibSteemit', 'cibStitcher', 'cibStorify', 'cibStorybook', 'cibStrapi', 'cibStrava', 'cibStripeS', 'cibStripe', 'cibStubhub', 'cibStumbleupon', 'cibStyleshare', 'cibStylus', 'cibSublimeText', 'cibSubversion', 'cibSuperuser', 'cibSvelte', 'cibSvg', 'cibSwagger', 'cibSwarm', 'cibSwift', 'cibSymantec', 'cibSymfony', 'cibSynology', 'cibTMobile', 'cibTableau', 'cibTails', 'cibTapas', 'cibTeamviewer', 'cibTed', 'cibTeespring', 'cibTelegramPlane', 'cibTelegram', 'cibTencentQq', 'cibTencentWeibo', 'cibTensorflow', 'cibTerraform', 'cibTesla', 'cibTheMighty', 'cibTheMovieDatabase', 'cibTidal', 'cibTiktok', 'cibTinder', 'cibTodoist', 'cibToggl', 'cibTopcoder', 'cibToptal', 'cibTor', 'cibToshiba', 'cibTrainerroad', 'cibTrakt', 'cibTravisci', 'cibTreehouse', 'cibTrello', 'cibTripadvisor', 'cibTrulia', 'cibTumblr', 'cibTwilio', 'cibTwitch', 'cibTwitter', 'cibTwoo', 'cibTypescript', 'cibTypo3', 'cibUber', 'cibUbisoft', 'cibUblockOrigin', 'cibUbuntu', 'cibUdacity', 'cibUdemy', 'cibUikit', 'cibUmbraco', 'cibUnity', 'cibUnrealEngine', 'cibUnsplash', 'cibUntappd', 'cibUpwork', 'cibUsb', 'cibV8', 'cibVagrant', 'cibVenmo', 'cibVerizon', 'cibViadeo', 'cibViber', 'cibVim', 'cibVimeoV', 'cibVimeo', 'cibVine', 'cibVirb', 'cibVisa', 'cibVisualStudioCode', 'cibVisualStudio', 'cibVk', 'cibVlc', 'cibVsco', 'cibVueJs', 'cibWattpad', 'cibWeasyl', 'cibWebcomponentsOrg', 'cibWebpack', 'cibWebstorm', 'cibWechat', 'cibWhatsapp', 'cibWhenIWork', 'cibWii', 'cibWiiu', 'cibWikipedia', 'cibWindows', 'cibWire', 'cibWireguard', 'cibWix', 'cibWolframLanguage', 'cibWolframMathematica', 'cibWolfram', 'cibWordpress', 'cibWpengine', 'cibXPack', 'cibXbox', 'cibXcode', 'cibXero', 'cibXiaomi', 'cibXing', 'cibXrp', 'cibXsplit', 'cibYCombinator', 'cibYahoo', 'cibYammer', 'cibYandex', 'cibYarn', 'cibYelp', 'cibYoutube', 'cibZalando', 'cibZapier', 'cibZeit', 'cibZendesk', 'cibZerply', 'cibZillow', 'cibZingat', 'cibZoom', 'cibZorin', 'cibZulip']
    
  const flagIcons = ['cifAd', 'cifAe', 'cifAf', 'cifAg', 'cifAl', 'cifAm', 'cifAo', 'cifAr', 'cifAt', 'cifAu', 'cifAz', 'cifBa', 'cifBb', 'cifBd', 'cifBe', 'cifBf', 'cifBg', 'cifBh', 'cifBi', 'cifBj', 'cifBn', 'cifBo', 'cifBr', 'cifBs', 'cifBt', 'cifBw', 'cifBy', 'cifBz', 'cifCa', 'cifCd', 'cifCf', 'cifCg', 'cifCh', 'cifCi', 'cifCl', 'cifCm', 'cifCn', 'cifCo', 'cifCr', 'cifCu', 'cifCv', 'cifCy', 'cifCz', 'cifDe', 'cifDj', 'cifDk', 'cifDm', 'cifDo', 'cifDz', 'cifEc', 'cifEe', 'cifEg', 'cifEr', 'cifEs', 'cifEt', 'cifFi', 'cifFj', 'cifFm', 'cifFr', 'cifGa', 'cifGb', 'cifGd', 'cifGe', 'cifGh', 'cifGm', 'cifGn', 'cifGq', 'cifGr', 'cifGt', 'cifGw', 'cifGy', 'cifHk', 'cifHn', 'cifHr', 'cifHt', 'cifHu', 'cifId', 'cifIe', 'cifIl', 'cifIn', 'cifIq', 'cifIr', 'cifIs', 'cifIt', 'cifJm', 'cifJo', 'cifJp', 'cifKe', 'cifKg', 'cifKh', 'cifKi', 'cifKm', 'cifKn', 'cifKp', 'cifKr', 'cifKw', 'cifKz', 'cifLa', 'cifLb', 'cifLc', 'cifLi', 'cifLk', 'cifLr', 'cifLs', 'cifLt', 'cifLu', 'cifLv', 'cifLy', 'cifMa', 'cifMc', 'cifMd', 'cifMe', 'cifMg', 'cifMh', 'cifMk', 'cifMl', 'cifMm', 'cifMn', 'cifMr', 'cifMt', 'cifMu', 'cifMv', 'cifMw', 'cifMx', 'cifMy', 'cifMz', 'cifNa', 'cifNe', 'cifNg', 'cifNi', 'cifNl', 'cifNo', 'cifNp', 'cifNr', 'cifNu', 'cifNz', 'cifOm', 'cifPa', 'cifPe', 'cifPg', 'cifPh', 'cifPk', 'cifPl', 'cifPt', 'cifPw', 'cifPy', 'cifQa', 'cifRo', 'cifRs', 'cifRu', 'cifRw', 'cifSa', 'cifSb', 'cifSc', 'cifSd', 'cifSe', 'cifSg', 'cifSi', 'cifSk', 'cifSl', 'cifSm', 'cifSn', 'cifSo', 'cifSr', 'cifSs', 'cifSt', 'cifSv', 'cifSy', 'cifSz', 'cifTd', 'cifTg', 'cifTh', 'cifTj', 'cifTl', 'cifTm', 'cifTn', 'cifTo', 'cifTr', 'cifTt', 'cifTv', 'cifTw', 'cifTz', 'cifUa', 'cifUg', 'cifUs', 'cifUy', 'cifUz', 'cifVa', 'cifVc', 'cifVe', 'cifVn', 'cifWs', 'cifXk', 'cifYe', 'cifZa', 'cifZm', 'cifZw']

  const tabPaneActiveKey = ref(1)
</script> 