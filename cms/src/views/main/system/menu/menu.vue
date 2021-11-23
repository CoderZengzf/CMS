<template>
  <div class="menu">
    <!-- <h2>menu</h2> -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '../../../../components/page-content/page-content.vue'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { pageContent },
  name: 'menu',
  setup() {

    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
