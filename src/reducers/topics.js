const INIT_STATE = {
  page: 1,
  limit: 20,
  list: []
}

export default function topics(state=INIT_STATE,action) {
  switch (action.type) {
    //获取数据
    case 'getTopics':
      return {...state, list: action.list,page: 1}
    case 'getTopicsNext':
      return {...state, list: state.list.concat(action.list), page: action.page}
    default:
      return {...state}
  }
}
