<template>
  <CNav variant="tabs" role="tablist">
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 1"
        @click="
          () => {
            tabPaneActiveKey = 1
          }
        "
      >
        Home
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 2"
        @click="
          () => {
            tabPaneActiveKey = 2
          }
        "
      >
        Profile
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 3"
        @click="
          () => {
            tabPaneActiveKey = 3
          }
        "
      >
        Contact
      </CNavLink>
    </CNavItem>
  </CNav>
  <CTabContent>
    <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPaneActiveKey === 1">
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
      aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
      helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
      qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis
      cardigan american apparel, butcher voluptate nisi qui.
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPaneActiveKey === 2">
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
      Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four
      loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer
      mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore
      aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
      labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts
      beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr
      butcher vero sint qui sapiente accusamus tattooed echo park.
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="contact-tab" :visible="tabPaneActiveKey === 3">
      Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
      lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed
      craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth
      PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever
      gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you
      probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu
      synth chambray yr.
    </CTabPane>
  </CTabContent>
</template>

<script setup>
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/vue'
import { ref } from 'vue'
const tabPaneActiveKey = ref(1)
</script>
