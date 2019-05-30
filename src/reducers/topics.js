const INIT_STATE = {
  page: 1,
  limit: 20,
  list: []
}

export default function topics(state=INIT_STATE,action) {
  switch (action.type) {
    //获取数据
    case 'getTopics':
      return {...state, list: action.list}
    default:
      return {...state}
  }
}
