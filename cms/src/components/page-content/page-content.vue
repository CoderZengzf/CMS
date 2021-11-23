<template>
  <div class="content">
    <zzf-table :listData="dataList"   
      v-bind="contentTableConfig">
      <!-- header中的插槽 -->
      <!-- <template #handler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template> -->

      <!-- 列表中的插槽 -->
      <template #status="scope">
        <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #image="scope">
        <img class="image" :src="scope.row.imgUrl" alt="" />
      </template>
      <template #handle="scope">
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text">编辑</el-button>
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
    </zzf-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="dataCount"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import zzfTable from '@/base-ui/table/src/Table.vue'
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { zzfTable },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    },
    queryInfos: {
      type: Object
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    let offset = ref(0)
    let info = ref()
    const getDataList = (queryInfo) => {
      info = queryInfo
      store.dispatch(`system/getPageListAction`, {
        pageName: props.pageName,
        queryInfo: {
          offset: offset.value,
          size: 10,
          ...queryInfo
        }
      })
    }
    getDataList()

    // watch(props.queryInfo, () => {
    //   getDataList()
    // })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 当前页
    const currentChange = (event) => {
      offset.value = event - 1
      getDataList(info)
    }

    // 删除
    const handleDeleteClick = (item) => {
      // console.log(item)
      store.dispatch(`system/delPageDataAction`, {
        pageName: props.pageName,
        id: item.id
      })
    }

    return {
      dataList,
      getDataList,
      dataCount,
      currentChange,
      handleDeleteClick
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
  .el-pagination {
    margin-top: 20px;
  }
  .image {
    width: 60px;
    height: 60px;
  }
}
</style>
