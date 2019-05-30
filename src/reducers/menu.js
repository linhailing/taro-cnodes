const INIT_STATE = {
  cateMenu : [
    {'key': 'all', value: '全部'},
    {'key': 'good', value: '精华'},
    {'key': 'share', value: '分享'},
    {'key': 'ask', value: '问答'},
    {'key': 'job', value: '招聘'},
    {'key': 'dev', value: '客户端测试'}],
  currMenu: {'key': 'all', value: '全部'},
  showDrawer: false
}

export default function menu(state = INIT_STATE, action) {
  switch (action.type){
    //显示分类抽屉
    case 'showDrawer':
      return {...state, showDrawer:true}
    //隐藏抽屉
    case 'hideDrawer':
      return {...state, showDrawer:false}
    case 'changeCate':
      return {...state, currMenu:action.currMenu}
    default:
      return {...state}
  }
}
