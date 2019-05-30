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
  }
}
