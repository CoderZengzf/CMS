<template>
  <div class="department">
    <!-- <h2>department</h2> -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="department">
    </page-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import pageContent from '../../../../components/page-content/page-content.vue'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'department',
  components:{
    pageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
