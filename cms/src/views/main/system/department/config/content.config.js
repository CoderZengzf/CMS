export const contentTableConfig = {
  title: '部门管理',
  propList: [
    { prop: 'name', label: '部门名称' },
    { prop: 'leader', label: '领导名称' },
    { prop: 'createAt', label: '创建时间', width: '300', slotName: 'createAt' },
    { prop: 'updateAt', label: '修改时间', width: '300', slotName: 'updateAt' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
