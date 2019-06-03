import { getTopis } from './topics'


export function showDrawer() {
  return (dispatch)=>{
    dispatch({type:'showDrawer'})
  }
}

export function hideDrawer() {
  return (dispatch)=>{
    dispatch({type:'hideDrawer'})
  }
}

export function changeCate(cate) {
  return (dispatch)=>{
    dispatch({type:'changeCate', currMenu: cate})
    dispatch(getTopis({page: 1, limit:20,tab:cate.key}))
  }
}
