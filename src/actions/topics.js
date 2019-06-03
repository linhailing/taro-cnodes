import { getJSON, postJSON}  from "../utils/request";
import Api from '../constants/api'

export function getTopis(params) {
  return async (dispatch)=>{
    let result = await getJSON(Api.apiTopics, params)
    if (result && result.data) {
      if (result.data.success) dispatch({type:'getTopics', list:result.data.data})
    }
  }
}

export function getTopicNext(params) {
  return async (dispatch) => {
    let result = await getJSON(Api.apiTopics, params)
    if (result && result.data){
      if (result.data.success){
        if (result.data.data.length > 0){
          dispatch({type: 'getTopicsNext', list: result.data.data, page: params.page})
        }
      }
    }
  }
}
