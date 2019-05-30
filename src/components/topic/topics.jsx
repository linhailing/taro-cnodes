import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopis} from "../../actions/topics";
import Topic from './topic'

@connect(function (store) {
  return {...store.topics,currMenu:store.menu.currMenu}
},function (dispatch) {
  return {
    getTopics(params){
      dispatch(getTopis(params))
    }
  }
})


class Topics extends   Component{
  componentWillMount() {
    let {page, limit,currMenu} = this.props
    this.props.getTopics && this.props.getTopics({page: page, limit:limit,tab:currMenu.key})
  }
  render(){
    let {list} = this.props
    return (<View>{ list.map( (item)=> <Topic item={item} /> )
    }</View>)
  }
}
export default  Topics;
