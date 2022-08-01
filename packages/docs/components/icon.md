---
title: Vue Icon Component
name: Icon
description: Official Vue.js component for CoreUI Icons and CoreUI Icons PRO.
---

## Installation

If you want to use our icon component and our icons library you have to install two additional packages.

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

### Single icon

::: demo
<CIcon :icon="icon.cilList" size="xl"/>
<CIcon :icon="icon.cilShieldAlt" size="xl"/>
:::
```vue
<template>
  <CIcon :icon="cilList" size="xl"/>
  <CIcon :icon="cilShieldAlt" size="xl"/>
</template>
<script>
import { CIcon } from '@coreui/icons-vue';
import { cilList, cilShieldAlt } from '@coreui/icons';
export default {
  components: {
    CIcon
  },
  setup() {
    return {
      cilList,
      cilShieldAlt,
    }
  }
}
</script>
```

### All icons

```vue
<template>
  <CIcon :icon="icon.cilList" size="xxl"/>
</template>
<script>
import { CIcon } from '@coreui/icons-vue';
import * as icon from '@coreui/icons';
export default {
  components: {
    CIcon
  },
  setup() {
    return {
      icon,
    }
  }
}
</script>
```

### Icons object

This way you import your needed icons once and pass them to $root object on 'icons' key

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
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <CIcon :icon="icon[i]" size="xxl"/>
        </div>
        <div class="text-medium-emphasis text-center pt-1 small">{{i}}</div>
      </CCol>
    </CRow>
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="brand-tab" :visible="tabPaneActiveKey === 2">
    <CRow v-if="tabPaneActiveKey === 2" :xs="{ cols: 3 }" :sm="{ cols: 4 }" :lg="{ cols: 5 }">
      <CCol class="mb-4" v-for="(i) in brandIcons">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <CIcon :icon="icon[i]" size="xxl"/>
        </div>
        <div class="text-medium-emphasis text-center pt-1 small">{{i}}</div>
      </CCol>
    </CRow>
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="flags-tab" :visible="tabPaneActiveKey === 3">
    <CRow v-if="tabPaneActiveKey === 3" :xs="{ cols: 3 }" :sm="{ cols: 4 }" :lg="{ cols: 5 }">
      <CCol class="mb-4" v-for="(i) in flagIcons">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <CIcon :icon="icon[i]" size="xxl"/>
        </div>
        <div class="text-medium-emphasis text-center pt-1 small">{{i}}</div>
      </CCol>
    </CRow>
  </CTabPane>
</CTabContent>

<script>
import { ref } from 'vue'
import { CIcon } from '@coreui/icons-vue';
import * as icon from '@coreui/icons';
export default {
  components: {
    CIcon
  },
  setup() {
    const linearIcons = ['cilAccountLogout', 'cilActionRedo', 'cilActionUndo', 'cilAddressBook', 'cilAirplaneModeOff', 'cilAirplaneMode', 'cilAirplay', 'cilAlarm', 'cilAlbum', 'cilAlignCenter', 'cilAlignLeft', 'cilAlignRight', 'cilAmericanFootball', 'cilAnimal', 'cilAperture', 'cilApple', 'cilApplicationsSettings', 'cilApplications', 'cilAppsSettings', 'cilApps', 'cilArrowBottom', 'cilArrowCircleBottom', 'cilArrowCircleLeft', 'cilArrowCircleRight', 'cilArrowCircleTop', 'cilArrowLeft', 'cilArrowRight', 'cilArrowThickBottom', 'cilArrowThickFromBottom', 'cilArrowThickFromLeft', 'cilArrowThickFromRight', 'cilArrowThickFromTop', 'cilArrowThickLeft', 'cilArrowThickRight', 'cilArrowThickToBottom', 'cilArrowThickToLeft', 'cilArrowThickToRight', 'cilArrowThickToTop', 'cilArrowThickTop', 'cilArrowTop', 'cilAssistiveListeningSystem', 'cilAsteriskCircle', 'cilAsterisk', 'cilAt', 'cilAudioDescription', 'cilAudioSpectrum', 'cilAudio', 'cilAvTimer', 'cilBabyCarriage', 'cilBaby', 'cilBackspace', 'cilBadge', 'cilBalanceScale', 'cilBan', 'cilBank', 'cilBarChart', 'cilBarcode', 'cilBaseball', 'cilBasket', 'cilBasketball', 'cilBath', 'cilBathroom', 'cilBattery0', 'cilBattery3', 'cilBattery5', 'cilBatteryAlert', 'cilBatteryEmpty', 'cilBatteryFull', 'cilBatterySlash', 'cilBeachAccess', 'cilBeaker', 'cilBed', 'cilBellExclamation', 'cilBell', 'cilBike', 'cilBirthdayCake', 'cilBlind', 'cilBluetooth', 'cilBlurCircular', 'cilBlurLinear', 'cilBlur', 'cilBoatAlt', 'cilBold', 'cilBoltCircle', 'cilBolt', 'cilBook', 'cilBookmark', 'cilBorderAll', 'cilBorderBottom', 'cilBorderClear', 'cilBorderHorizontal', 'cilBorderInner', 'cilBorderLeft', 'cilBorderOuter', 'cilBorderRight', 'cilBorderStyle', 'cilBorderTop', 'cilBorderVertical', 'cilBowling', 'cilBraille', 'cilBriefcase', 'cilBrightness', 'cilBritishPound', 'cilBrowser', 'cilBrushAlt', 'cilBrush', 'cilBug', 'cilBuilding', 'cilBullhorn', 'cilBurger', 'cilBurn', 'cilBusAlt', 'cilCalculator', 'cilCalendarCheck', 'cilCalendar', 'cilCameraControl', 'cilCameraRoll', 'cilCamera', 'cilCarAlt', 'cilCaretBottom', 'cilCaretLeft', 'cilCaretRight', 'cilCaretTop', 'cilCart', 'cilCash', 'cilCasino', 'cilCast', 'cilCat', 'cilCc', 'cilCenterFocus', 'cilChartLine', 'cilChartPie', 'cilChart', 'cilChatBubble', 'cilCheckAlt', 'cilCheckCircle', 'cilCheck', 'cilChevronBottom', 'cilChevronCircleDownAlt', 'cilChevronCircleLeftAlt', 'cilChevronCircleRightAlt', 'cilChevronCircleUpAlt', 'cilChevronDoubleDown', 'cilChevronDoubleLeft', 'cilChevronDoubleRight', 'cilChevronDoubleUp', 'cilChevronLeft', 'cilChevronRight', 'cilChevronTop', 'cilChildFriendly', 'cilChild', 'cilCircle', 'cilClearAll', 'cilClipboard', 'cilClock', 'cilClone', 'cilClosedCaptioning', 'cilCloudDownload', 'cilCloudUpload', 'cilCloud', 'cilCloudy', 'cilCode', 'cilCoffee', 'cilCog', 'cilColorBorder', 'cilColorFill', 'cilColorPalette', 'cilColumns', 'cilCommand', 'cilCommentBubble', 'cilCommentSquare', 'cilCompass', 'cilCompress', 'cilContact', 'cilContrast', 'cilControl', 'cilCopy', 'cilCouch', 'cilCreditCard', 'cilCropRotate', 'cilCrop', 'cilCursorMove', 'cilCursor', 'cilCut', 'cilDataTransferDown', 'cilDataTransferUp', 'cilDeaf', 'cilDelete', 'cilDescription', 'cilDevices', 'cilDialpad', 'cilDiamond', 'cilDinner', 'cilDisabled', 'cilDog', 'cilDollar', 'cilDoor', 'cilDoubleQuoteSansLeft', 'cilDoubleQuoteSansRight', 'cilDrinkAlcohol', 'cilDrink', 'cilDrop', 'cilEco', 'cilEducation', 'cilElevator', 'cilEnvelopeClosed', 'cilEnvelopeLetter', 'cilEnvelopeOpen', 'cilEqualizer', 'cilEthernet', 'cilEuro', 'cilExcerpt', 'cilExitToApp', 'cilExpandDown', 'cilExpandLeft', 'cilExpandRight', 'cilExpandUp', 'cilExposure', 'cilExternalLink', 'cilEyedropper', 'cilFaceDead', 'cilFace', 'cilFactorySlash', 'cilFactory', 'cilFastfood', 'cilFax', 'cilFeaturedPlaylist', 'cilFile', 'cilFilterFrames', 'cilFilterPhoto', 'cilFilterSquare', 'cilFilterX', 'cilFilter', 'cilFindInPage', 'cilFingerprint', 'cilFire', 'cilFlagAlt', 'cilFlightTakeoff', 'cilFlipToBack', 'cilFlipToFront', 'cilFlip', 'cilFlower', 'cilFolderOpen', 'cilFolder', 'cilFont', 'cilFootball', 'cilFork', 'cilFridge', 'cilFrown', 'cilFullscreenExit', 'cilFullscreen', 'cilFunctionsAlt', 'cilFunctions', 'cilGamepad', 'cilGarage', 'cilGem', 'cilGif', 'cilGift', 'cilGlobeAlt', 'cilGolfAlt', 'cilGolf', 'cilGradient', 'cilGrain', 'cilGraph', 'cilGridSlash', 'cilGrid', 'cilGroup', 'cilHamburgerMenu', 'cilHandPointDown', 'cilHandPointLeft', 'cilHandPointRight', 'cilHandPointUp', 'cilHappy', 'cilHd', 'cilHdr', 'cilHeader', 'cilHeadphones', 'cilHealing', 'cilHeart', 'cilHighlighter', 'cilHighligt', 'cilHistory', 'cilHome', 'cilHospital', 'cilHotTub', 'cilHouse', 'cilHttps', 'cilImageBroken', 'cilImagePlus', 'cilImage', 'cilInbox', 'cilIndentDecrease', 'cilIndentIncrease', 'cilIndustrySlash', 'cilIndustry', 'cilInfinity', 'cilInfo', 'cilInputHdmi', 'cilInputPower', 'cilInput', 'cilInstitution', 'cilItalic', 'cilJustifyCenter', 'cilJustifyLeft', 'cilJustifyRight', 'cilKeyboard', 'cilLan', 'cilLanguage', 'cilLaptop', 'cilLayers', 'cilLeaf', 'cilLemon', 'cilLevelDown', 'cilLevelUp', 'cilLibraryAdd', 'cilLibraryBuilding', 'cilLibrary', 'cilLifeRing', 'cilLightbulb', 'cilLineSpacing', 'cilLineStyle', 'cilLineWeight', 'cilLinkAlt', 'cilLinkBroken', 'cilLink', 'cilListFilter', 'cilListHighPriority', 'cilListLowPriority', 'cilListNumberedRtl', 'cilListNumbered', 'cilListRich', 'cilList', 'cilLocationPin', 'cilLockLocked', 'cilLockUnlocked', 'cilLocomotive', 'cilLoop1', 'cilLoopCircular', 'cilLoop', 'cilLowVision', 'cilMagnifyingGlass', 'cilMap', 'cilMediaEject', 'cilMediaPause', 'cilMediaPlay', 'cilMediaRecord', 'cilMediaSkipBackward', 'cilMediaSkipForward', 'cilMediaStepBackward', 'cilMediaStepForward', 'cilMediaStop', 'cilMedicalCross', 'cilMeh', 'cilMemory', 'cilMenu', 'cilMic', 'cilMicrophone', 'cilMinus', 'cilMobileLandscape', 'cilMobile', 'cilMoney', 'cilMonitor', 'cilMoodBad', 'cilMoodGood', 'cilMoodVeryBad', 'cilMoodVeryGood', 'cilMoon', 'cilMouse', 'cilMouthSlash', 'cilMove', 'cilMovie', 'cilMugTea', 'cilMug', 'cilMusicNote', 'cilNewspaper', 'cilNoteAdd', 'cilNotes', 'cilObjectGroup', 'cilObjectUngroup', 'cilOpacity', 'cilOpentype', 'cilOptions', 'cilPaintBucket', 'cilPaint', 'cilPaperPlane', 'cilPaperclip', 'cilParagraph', 'cilPaw', 'cilPenAlt', 'cilPenNib', 'cilPen', 'cilPencil', 'cilPeople', 'cilPhone', 'cilPin', 'cilPizza', 'cilPlant', 'cilPlaylistAdd', 'cilPlus', 'cilPool', 'cilPowerStandby', 'cilPregnant', 'cilPrint', 'cilPushchair', 'cilPuzzle', 'cilQrCode', 'cilRain', 'cilRectangle', 'cilRecycle', 'cilReload', 'cilReportSlash', 'cilResizeBoth', 'cilResizeHeight', 'cilResizeWidth', 'cilRestaurant', 'cilRoom', 'cilRouter', 'cilRowing', 'cilRss', 'cilRuble', 'cilRunning', 'cilSad', 'cilSatelite', 'cilSave', 'cilSchool', 'cilScreenDesktop', 'cilScreenSmartphone', 'cilScrubber', 'cilSearch', 'cilSend', 'cilSettings', 'cilShareAll', 'cilShareAlt', 'cilShareBoxed', 'cilShare', 'cilShieldAlt', 'cilShortText', 'cilShower', 'cilSignLanguage', 'cilSignalCellular0', 'cilSignalCellular3', 'cilSignalCellular4', 'cilSim', 'cilSitemap', 'cilSmilePlus', 'cilSmile', 'cilSmokeFree', 'cilSmokeSlash', 'cilSmoke', 'cilSmokingRoom', 'cilSnowflake', 'cilSoccer', 'cilSofa', 'cilSortAlphaDown', 'cilSortAlphaUp', 'cilSortAscending', 'cilSortDescending', 'cilSortNumericDown', 'cilSortNumericUp', 'cilSpa', 'cilSpaceBar', 'cilSpeak', 'cilSpeaker', 'cilSpeech', 'cilSpeedometer', 'cilSpreadsheet', 'cilSquare', 'cilStarHalf', 'cilStar', 'cilStorage', 'cilStream', 'cilStrikethrough', 'cilSun', 'cilSwapHorizontal', 'cilSwapVertical', 'cilSwimming', 'cilSync', 'cilTablet', 'cilTag', 'cilTags', 'cilTask', 'cilTaxi', 'cilTennisBall', 'cilTennis', 'cilTerminal', 'cilTerrain', 'cilTextShapes', 'cilTextSize', 'cilTextSquare', 'cilTextStrike', 'cilText', 'cilThumbDown', 'cilThumbUp', 'cilToggleOff', 'cilToggleOn', 'cilToilet', 'cilTouchApp', 'cilTransfer', 'cilTranslate', 'cilTrash', 'cilTriangle', 'cilTruck', 'cilTv', 'cilUnderline', 'cilUsb', 'cilUserFemale', 'cilUserFollow', 'cilUserPlus', 'cilUserUnfollow', 'cilUserX', 'cilUser', 'cilVector', 'cilVerticalAlignBottom', 'cilVerticalAlignCenter', 'cilVerticalAlignTop', 'cilVideo', 'cilVideogame', 'cilViewColumn', 'cilViewModule', 'cilViewQuilt', 'cilViewStream', 'cilVoiceOverRecord', 'cilVoice', 'cilVolumeHigh', 'cilVolumeLow', 'cilVolumeOff', 'cilWalk', 'cilWallet', 'cilWallpaper', 'cilWarning', 'cilWatch', 'cilWc', 'cilWeightlifitng', 'cilWheelchair', 'cilWifiSignal0', 'cilWifiSignal1', 'cilWifiSignal2', 'cilWifiSignal3', 'cilWifiSignal4', 'cilWifiSignalOff', 'cilWindowMaximize', 'cilWindowMinimize', 'cilWindowRestore', 'cilWindow', 'cilWrapText', 'cilXCircle', 'cilX', 'cilYen', 'cilZoomIn', 'cilZoomOut', 'cilZoom']

    const brandIcons = ['cib500px5', 'cib500px', 'cibAboutMe', 'cibAbstract', 'cibAcm', 'cibAddthis', 'cibAdguard', 'cibAdobeAcrobatReader', 'cibAdobeAfterEffects', 'cibAdobeAudition', 'cibAdobeCreativeCloud', 'cibAdobeDreamweaver', 'cibAdobeIllustrator', 'cibAdobeIndesign', 'cibAdobeLightroomClassic', 'cibAdobeLightroom', 'cibAdobePhotoshop', 'cibAdobePremiere', 'cibAdobeTypekit', 'cibAdobeXd', 'cibAdobe', 'cibAirbnb', 'cibAlgolia', 'cibAlipay', 'cibAllocine', 'cibAmazonAws', 'cibAmazonPay', 'cibAmazon', 'cibAmd', 'cibAmericanExpress', 'cibAnaconda', 'cibAnalogue', 'cibAndroidAlt', 'cibAndroid', 'cibAngellist', 'cibAngularUniversal', 'cibAngular', 'cibAnsible', 'cibApacheAirflow', 'cibApacheFlink', 'cibApacheSpark', 'cibApache', 'cibAppStoreIos', 'cibAppStore', 'cibAppleMusic', 'cibApplePay', 'cibApplePodcasts', 'cibApple', 'cibAppveyor', 'cibAral', 'cibArchLinux', 'cibArchiveOfOurOwn', 'cibArduino', 'cibArtstation', 'cibArxiv', 'cibAsana', 'cibAtAndT', 'cibAtlassian', 'cibAtom', 'cibAudible', 'cibAurelia', 'cibAuth0', 'cibAutomatic', 'cibAutotask', 'cibAventrix', 'cibAzureArtifacts', 'cibAzureDevops', 'cibAzurePipelines', 'cibBabel', 'cibBaidu', 'cibBamboo', 'cibBancontact', 'cibBandcamp', 'cibBasecamp', 'cibBathasu', 'cibBehance', 'cibBigCartel', 'cibBing', 'cibBit', 'cibBitbucket', 'cibBitcoin', 'cibBitdefender', 'cibBitly', 'cibBlackberry', 'cibBlender', 'cibBloggerB', 'cibBlogger', 'cibBluetoothB', 'cibBluetooth', 'cibBoeing', 'cibBoost', 'cibBootstrap', 'cibBower', 'cibBrandAi', 'cibBrave', 'cibBtc', 'cibBuddy', 'cibBuffer', 'cibBuyMeACoffee', 'cibBuysellads', 'cibBuzzfeed', 'cibC', 'cibCakephp', 'cibCampaignMonitor', 'cibCanva', 'cibCashapp', 'cibCassandra', 'cibCastro', 'cibCcAmazonPay', 'cibCcAmex', 'cibCcApplePay', 'cibCcDinersClub', 'cibCcDiscover', 'cibCcJcb', 'cibCcMastercard', 'cibCcPaypal', 'cibCcStripe', 'cibCcVisa', 'cibCentos', 'cibCevo', 'cibChase', 'cibChef', 'cibChromecast', 'cibCircle', 'cibCircleci', 'cibCirrusci', 'cibCisco', 'cibCivicrm', 'cibClockify', 'cibClojure', 'cibCloudbees', 'cibCloudflare', 'cibCmake', 'cibCoOp', 'cibCodacy', 'cibCodeClimate', 'cibCodecademy', 'cibCodecov', 'cibCodeigniter', 'cibCodepen', 'cibCoderwall', 'cibCodesandbox', 'cibCodeship', 'cibCodewars', 'cibCodio', 'cibCoffeescript', 'cibCommonWorkflowLanguage', 'cibComposer', 'cibCondaForge', 'cibConekta', 'cibConfluence', 'cibCoreuiC', 'cibCoreui', 'cibCoursera', 'cibCoveralls', 'cibCpanel', 'cibCplusplus', 'cibCreativeCommonsBy', 'cibCreativeCommonsNcEu', 'cibCreativeCommonsNcJp', 'cibCreativeCommonsNc', 'cibCreativeCommonsNd', 'cibCreativeCommonsPdAlt', 'cibCreativeCommonsPd', 'cibCreativeCommonsRemix', 'cibCreativeCommonsSa', 'cibCreativeCommonsSamplingPlus', 'cibCreativeCommonsSampling', 'cibCreativeCommonsShare', 'cibCreativeCommonsZero', 'cibCreativeCommons', 'cibCrunchbase', 'cibCrunchyroll', 'cibCss3Shiled', 'cibCss3', 'cibCsswizardry', 'cibD3Js', 'cibDailymotion', 'cibDashlane', 'cibDazn', 'cibDblp', 'cibDebian', 'cibDeepin', 'cibDeezer', 'cibDelicious', 'cibDell', 'cibDeno', 'cibDependabot', 'cibDesignerNews', 'cibDevTo', 'cibDeviantart', 'cibDevrant', 'cibDiaspora', 'cibDigg', 'cibDigitalOcean', 'cibDiscord', 'cibDiscourse', 'cibDiscover', 'cibDisqus', 'cibDisroot', 'cibDjango', 'cibDocker', 'cibDocusign', 'cibDotNet', 'cibDraugiemLv', 'cibDribbble', 'cibDrone', 'cibDropbox', 'cibDrupal', 'cibDtube', 'cibDuckduckgo', 'cibDynatrace', 'cibEbay', 'cibEclipseide', 'cibElasticCloud', 'cibElasticSearch', 'cibElasticStack', 'cibElastic', 'cibElectron', 'cibElementary', 'cibEleventy', 'cibEllo', 'cibElsevier', 'cibEmlakjet', 'cibEmpirekred', 'cibEnvato', 'cibEpicGames', 'cibEpson', 'cibEsea', 'cibEslint', 'cibEthereum', 'cibEtsy', 'cibEventStore', 'cibEventbrite', 'cibEvernote', 'cibEverplaces', 'cibEvry', 'cibExercism', 'cibExpertsExchange', 'cibExpo', 'cibEyeem', 'cibFSecure', 'cibFacebookF', 'cibFacebook', 'cibFaceit', 'cibFandango', 'cibFavro', 'cibFeathub', 'cibFedex', 'cibFedora', 'cibFeedly', 'cibFidoAlliance', 'cibFigma', 'cibFilezilla', 'cibFirebase', 'cibFitbit', 'cibFlask', 'cibFlattr', 'cibFlickr', 'cibFlipboard', 'cibFlutter', 'cibFnac', 'cibFoursquare', 'cibFramer', 'cibFreebsd', 'cibFreecodecamp', 'cibFurAffinity', 'cibFurryNetwork', 'cibGarmin', 'cibGatsby', 'cibGauges', 'cibGenius', 'cibGentoo', 'cibGeocaching', 'cibGerrit', 'cibGg', 'cibGhost', 'cibGimp', 'cibGit', 'cibGitea', 'cibGithub', 'cibGitkraken', 'cibGitlab', 'cibGitpod', 'cibGitter', 'cibGlassdoor', 'cibGlitch', 'cibGmail', 'cibGnuPrivacyGuard', 'cibGnuSocial', 'cibGnu', 'cibGo', 'cibGodotEngine', 'cibGogCom', 'cibGoldenline', 'cibGoodreads', 'cibGoogleAds', 'cibGoogleAllo', 'cibGoogleAnalytics', 'cibGoogleChrome', 'cibGoogleCloud', 'cibGoogleKeep', 'cibGooglePay', 'cibGooglePlay', 'cibGooglePodcasts', 'cibGoogle', 'cibGooglesCholar', 'cibGovUk', 'cibGradle', 'cibGrafana', 'cibGraphcool', 'cibGraphql', 'cibGrav', 'cibGravatar', 'cibGreenkeeper', 'cibGreensock', 'cibGroovy', 'cibGroupon', 'cibGrunt', 'cibGulp', 'cibGumroad', 'cibGumtree', 'cibHabr', 'cibHackaday', 'cibHackerearth', 'cibHackerone', 'cibHackerrank', 'cibHackhands', 'cibHackster', 'cibHappycow', 'cibHashnode', 'cibHaskell', 'cibHatenaBookmark', 'cibHaxe', 'cibHelm', 'cibHere', 'cibHeroku', 'cibHexo', 'cibHighly', 'cibHipchat', 'cibHitachi', 'cibHockeyapp', 'cibHomify', 'cibHootsuite', 'cibHotjar', 'cibHouzz', 'cibHp', 'cibHtml5Shield', 'cibHtml5', 'cibHtmlacademy', 'cibHuawei', 'cibHubspot', 'cibHulu', 'cibHumbleBundle', 'cibIata', 'cibIbm', 'cibIcloud', 'cibIconjar', 'cibIcq', 'cibIdeal', 'cibIfixit', 'cibImdb', 'cibIndeed', 'cibInkscape', 'cibInstacart', 'cibInstagram', 'cibInstapaper', 'cibIntel', 'cibIntellijidea', 'cibIntercom', 'cibInternetExplorer', 'cibInvision', 'cibIonic', 'cibIssuu', 'cibItchIo', 'cibJabber', 'cibJava', 'cibJavascript', 'cibJekyll', 'cibJenkins', 'cibJest', 'cibJet', 'cibJetbrains', 'cibJira', 'cibJoomla', 'cibJquery', 'cibJs', 'cibJsdelivr', 'cibJsfiddle', 'cibJson', 'cibJupyter', 'cibJustgiving', 'cibKaggle', 'cibKaios', 'cibKaspersky', 'cibKentico', 'cibKeras', 'cibKeybase', 'cibKeycdn', 'cibKhanAcademy', 'cibKibana', 'cibKickstarter', 'cibKik', 'cibKirby', 'cibKlout', 'cibKnown', 'cibKoFi', 'cibKodi', 'cibKoding', 'cibKotlin', 'cibKrita', 'cibKubernetes', 'cibLanyrd', 'cibLaravelHorizon', 'cibLaravelNova', 'cibLaravel', 'cibLastFm', 'cibLatex', 'cibLaunchpad', 'cibLeetcode', 'cibLenovo', 'cibLess', 'cibLetsEncrypt', 'cibLetterboxd', 'cibLgtm', 'cibLiberapay', 'cibLibrarything', 'cibLibreoffice', 'cibLine', 'cibLinkedinIn', 'cibLinkedin', 'cibLinuxFoundation', 'cibLinuxMint', 'cibLinux', 'cibLivejournal', 'cibLivestream', 'cibLogstash', 'cibLua', 'cibLumen', 'cibLyft', 'cibMacys', 'cibMagento', 'cibMagisk', 'cibMailRu', 'cibMailchimp', 'cibMakerbot', 'cibManjaro', 'cibMarkdown', 'cibMarketo', 'cibMastercard', 'cibMastodon', 'cibMaterialDesign', 'cibMathworks', 'cibMatrix', 'cibMattermost', 'cibMatternet', 'cibMaxcdn', 'cibMcafee', 'cibMediaTemple', 'cibMediafire', 'cibMediumM', 'cibMedium', 'cibMeetup', 'cibMega', 'cibMendeley', 'cibMessenger', 'cibMeteor', 'cibMicroBlog', 'cibMicrogenetics', 'cibMicrosoftEdge', 'cibMicrosoft', 'cibMinetest', 'cibMinutemailer', 'cibMix', 'cibMixcloud', 'cibMixer', 'cibMojang', 'cibMonero', 'cibMongodb', 'cibMonkeytie', 'cibMonogram', 'cibMonzo', 'cibMoo', 'cibMozillaFirefox', 'cibMozilla', 'cibMusescore', 'cibMxlinux', 'cibMyspace', 'cibMysql', 'cibNativescript', 'cibNec', 'cibNeo4J', 'cibNetflix', 'cibNetlify', 'cibNextJs', 'cibNextcloud', 'cibNextdoor', 'cibNginx', 'cibNim', 'cibNintendo3Ds', 'cibNintendoGamecube', 'cibNintendoSwitch', 'cibNintendo', 'cibNodeJs', 'cibNodeRed', 'cibNodemon', 'cibNokia', 'cibNotion', 'cibNpm', 'cibNucleo', 'cibNuget', 'cibNuxtJs', 'cibNvidia', 'cibOcaml', 'cibOctave', 'cibOctopusDeploy', 'cibOculus', 'cibOdnoklassniki', 'cibOpenAccess', 'cibOpenCollective', 'cibOpenId', 'cibOpenSourceInitiative', 'cibOpenstreetmap', 'cibOpensuse', 'cibOpenvpn', 'cibOpera', 'cibOpsgenie', 'cibOracle', 'cibOrcid', 'cibOrigin', 'cibOsi', 'cibOsmc', 'cibOvercast', 'cibOverleaf', 'cibOvh', 'cibPagekit', 'cibPalantir', 'cibPandora', 'cibPantheon', 'cibPatreon', 'cibPaypal', 'cibPeriscope', 'cibPhp', 'cibPicartoTv', 'cibPinboard', 'cibPingdom', 'cibPingup', 'cibPinterestP', 'cibPinterest', 'cibPivotaltracker', 'cibPlangrid', 'cibPlayerMe', 'cibPlayerfm', 'cibPlaystation', 'cibPlaystation3', 'cibPlaystation4', 'cibPlesk', 'cibPlex', 'cibPluralsight', 'cibPlurk', 'cibPocket', 'cibPostgresql', 'cibPostman', 'cibPostwoman', 'cibPowershell', 'cibPrettier', 'cibPrismic', 'cibProbot', 'cibProcesswire', 'cibProductHunt', 'cibProtoIo', 'cibProtonmail', 'cibProxmox', 'cibPypi', 'cibPython', 'cibPytorch', 'cibQgis', 'cibQiita', 'cibQq', 'cibQualcomm', 'cibQuantcast', 'cibQuantopian', 'cibQuarkus', 'cibQuora', 'cibQwiklabs', 'cibQzone', 'cibR', 'cibRadiopublic', 'cibRails', 'cibRaspberryPi', 'cibReact', 'cibReadTheDocs', 'cibReadme', 'cibRealm', 'cibReason', 'cibRedbubble', 'cibRedditAlt', 'cibReddit', 'cibRedhat', 'cibRedis', 'cibRedux', 'cibRenren', 'cibReverbnation', 'cibRiot', 'cibRipple', 'cibRiseup', 'cibRollupJs', 'cibRoots', 'cibRoundcube', 'cibRss', 'cibRstudio', 'cibRuby', 'cibRubygems', 'cibRunkeeper', 'cibRust', 'cibSafari', 'cibSahibinden', 'cibSalesforce', 'cibSaltstack', 'cibSamsungPay', 'cibSamsung', 'cibSap', 'cibSassAlt', 'cibSass', 'cibSaucelabs', 'cibScala', 'cibScaleway', 'cibScribd', 'cibScrutinizerci', 'cibSeagate', 'cibSega', 'cibSellfy', 'cibSemaphoreci', 'cibSensu', 'cibSentry', 'cibServerFault', 'cibShazam', 'cibShell', 'cibShopify', 'cibShowpad', 'cibSiemens', 'cibSignal', 'cibSinaWeibo', 'cibSitepoint', 'cibSketch', 'cibSkillshare', 'cibSkyliner', 'cibSkype', 'cibSlack', 'cibSlashdot', 'cibSlickpic', 'cibSlides', 'cibSlideshare', 'cibSmashingmagazine', 'cibSnapchat', 'cibSnapcraft', 'cibSnyk', 'cibSociety6', 'cibSocketIo', 'cibSogou', 'cibSolus', 'cibSongkick', 'cibSonos', 'cibSoundcloud', 'cibSourceforge', 'cibSourcegraph', 'cibSpacemacs', 'cibSpacex', 'cibSparkfun', 'cibSparkpost', 'cibSpdx', 'cibSpeakerDeck', 'cibSpectrum', 'cibSpotify', 'cibSpotlight', 'cibSpreaker', 'cibSpring', 'cibSprint', 'cibSquarespace', 'cibStackbit', 'cibStackexchange', 'cibStackoverflow', 'cibStackpath', 'cibStackshare', 'cibStadia', 'cibStatamic', 'cibStaticman', 'cibStatuspage', 'cibSteam', 'cibSteem', 'cibSteemit', 'cibStitcher', 'cibStorify', 'cibStorybook', 'cibStrapi', 'cibStrava', 'cibStripeS', 'cibStripe', 'cibStubhub', 'cibStumbleupon', 'cibStyleshare', 'cibStylus', 'cibSublimeText', 'cibSubversion', 'cibSuperuser', 'cibSvelte', 'cibSvg', 'cibSwagger', 'cibSwarm', 'cibSwift', 'cibSymantec', 'cibSymfony', 'cibSynology', 'cibTMobile', 'cibTableau', 'cibTails', 'cibTapas', 'cibTeamviewer', 'cibTed', 'cibTeespring', 'cibTelegramPlane', 'cibTelegram', 'cibTencentQq', 'cibTencentWeibo', 'cibTensorflow', 'cibTerraform', 'cibTesla', 'cibTheMighty', 'cibTheMovieDatabase', 'cibTidal', 'cibTiktok', 'cibTinder', 'cibTodoist', 'cibToggl', 'cibTopcoder', 'cibToptal', 'cibTor', 'cibToshiba', 'cibTrainerroad', 'cibTrakt', 'cibTravisci', 'cibTreehouse', 'cibTrello', 'cibTripadvisor', 'cibTrulia', 'cibTumblr', 'cibTwilio', 'cibTwitch', 'cibTwitter', 'cibTwoo', 'cibTypescript', 'cibTypo3', 'cibUber', 'cibUbisoft', 'cibUblockOrigin', 'cibUbuntu', 'cibUdacity', 'cibUdemy', 'cibUikit', 'cibUmbraco', 'cibUnity', 'cibUnrealEngine', 'cibUnsplash', 'cibUntappd', 'cibUpwork', 'cibUsb', 'cibV8', 'cibVagrant', 'cibVenmo', 'cibVerizon', 'cibViadeo', 'cibViber', 'cibVim', 'cibVimeoV', 'cibVimeo', 'cibVine', 'cibVirb', 'cibVisa', 'cibVisualStudioCode', 'cibVisualStudio', 'cibVk', 'cibVlc', 'cibVsco', 'cibVueJs', 'cibWattpad', 'cibWeasyl', 'cibWebcomponentsOrg', 'cibWebpack', 'cibWebstorm', 'cibWechat', 'cibWhatsapp', 'cibWhenIWork', 'cibWii', 'cibWiiu', 'cibWikipedia', 'cibWindows', 'cibWire', 'cibWireguard', 'cibWix', 'cibWolframLanguage', 'cibWolframMathematica', 'cibWolfram', 'cibWordpress', 'cibWpengine', 'cibXPack', 'cibXbox', 'cibXcode', 'cibXero', 'cibXiaomi', 'cibXing', 'cibXrp', 'cibXsplit', 'cibYCombinator', 'cibYahoo', 'cibYammer', 'cibYandex', 'cibYarn', 'cibYelp', 'cibYoutube', 'cibZalando', 'cibZapier', 'cibZeit', 'cibZendesk', 'cibZerply', 'cibZillow', 'cibZingat', 'cibZoom', 'cibZorin', 'cibZulip']
    
    const flagIcons = ['cifAd', 'cifAe', 'cifAf', 'cifAg', 'cifAl', 'cifAm', 'cifAo', 'cifAr', 'cifAt', 'cifAu', 'cifAz', 'cifBa', 'cifBb', 'cifBd', 'cifBe', 'cifBf', 'cifBg', 'cifBh', 'cifBi', 'cifBj', 'cifBn', 'cifBo', 'cifBr', 'cifBs', 'cifBt', 'cifBw', 'cifBy', 'cifBz', 'cifCa', 'cifCd', 'cifCf', 'cifCg', 'cifCh', 'cifCi', 'cifCl', 'cifCm', 'cifCn', 'cifCo', 'cifCr', 'cifCu', 'cifCv', 'cifCy', 'cifCz', 'cifDe', 'cifDj', 'cifDk', 'cifDm', 'cifDo', 'cifDz', 'cifEc', 'cifEe', 'cifEg', 'cifEr', 'cifEs', 'cifEt', 'cifFi', 'cifFj', 'cifFm', 'cifFr', 'cifGa', 'cifGb', 'cifGd', 'cifGe', 'cifGh', 'cifGm', 'cifGn', 'cifGq', 'cifGr', 'cifGt', 'cifGw', 'cifGy', 'cifHk', 'cifHn', 'cifHr', 'cifHt', 'cifHu', 'cifId', 'cifIe', 'cifIl', 'cifIn', 'cifIq', 'cifIr', 'cifIs', 'cifIt', 'cifJm', 'cifJo', 'cifJp', 'cifKe', 'cifKg', 'cifKh', 'cifKi', 'cifKm', 'cifKn', 'cifKp', 'cifKr', 'cifKw', 'cifKz', 'cifLa', 'cifLb', 'cifLc', 'cifLi', 'cifLk', 'cifLr', 'cifLs', 'cifLt', 'cifLu', 'cifLv', 'cifLy', 'cifMa', 'cifMc', 'cifMd', 'cifMe', 'cifMg', 'cifMh', 'cifMk', 'cifMl', 'cifMm', 'cifMn', 'cifMr', 'cifMt', 'cifMu', 'cifMv', 'cifMw', 'cifMx', 'cifMy', 'cifMz', 'cifNa', 'cifNe', 'cifNg', 'cifNi', 'cifNl', 'cifNo', 'cifNp', 'cifNr', 'cifNu', 'cifNz', 'cifOm', 'cifPa', 'cifPe', 'cifPg', 'cifPh', 'cifPk', 'cifPl', 'cifPt', 'cifPw', 'cifPy', 'cifQa', 'cifRo', 'cifRs', 'cifRu', 'cifRw', 'cifSa', 'cifSb', 'cifSc', 'cifSd', 'cifSe', 'cifSg', 'cifSi', 'cifSk', 'cifSl', 'cifSm', 'cifSn', 'cifSo', 'cifSr', 'cifSs', 'cifSt', 'cifSv', 'cifSy', 'cifSz', 'cifTd', 'cifTg', 'cifTh', 'cifTj', 'cifTl', 'cifTm', 'cifTn', 'cifTo', 'cifTr', 'cifTt', 'cifTv', 'cifTw', 'cifTz', 'cifUa', 'cifUg', 'cifUs', 'cifUy', 'cifUz', 'cifVa', 'cifVc', 'cifVe', 'cifVn', 'cifWs', 'cifXk', 'cifYe', 'cifZa', 'cifZm', 'cifZw']


    const tabPaneActiveKey = ref(1)
    
    return {
      tabPaneActiveKey,
      linearIcons,
      brandIcons,
      flagIcons,
      icon,
    }
  }
}
</script> 


## API

### CIcon

```js
import { CIcon } from '@coreui/icons-vue'
```

| Prop name             | Description                                                                                       | Type                  | Values | Default |
| --------------------- | ------------------------------------------------------------------------------------------------- | --------------------- | ------ | ------- |
| **content**           | Use `:icon="..."` instead of<br/>`@deprecated` since version 3.0                                  | string\|array         | -      | -       |
| **custom-class-name** | Use for replacing default CIcon component classes. Prop is overriding the 'size' prop.            | string\|array\|object | -      | -       |
| **icon**              | Name of the icon placed in Vue object or SVG content.                                           | string \| string[]    | -      | -       |
| **name**              | Use `icon="..."` instead of<br/>`@deprecated` since version 3.0                                   | string                | -      | -       |
| **size**              | Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'. | string                | -      | -       |
| **title**             | Title tag content.                                                                                | string                | -      | -       |
| **use**               | If defined component will be rendered using 'use' tag.                                            | string                | -      | -       |