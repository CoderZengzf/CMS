export const contentTableConfig = {
  title: '菜单管理',
  propList: [
    { prop: 'name', label: '菜单名称' },
    { prop: 'type', label: '类型' },
    { prop: 'url', label: '菜单url' },
    { prop: 'icon', label: '菜单icon' },
    { prop: 'permission', label: '按钮权限', width: '100',slotName:'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      width: '220',
      slotName: 'updateAt'
    }
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
