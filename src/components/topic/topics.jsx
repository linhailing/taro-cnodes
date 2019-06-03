import  Taro,{Component} from '@tarojs/taro';
import  {View,Text, ScrollView} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopis, getTopicNext} from "../../actions/topics";
import Topic from './topic'

@connect(function (store) {
  return {...store.topics,currMenu:store.menu.currMenu}
},function (dispatch) {
  return {
    getTopics(params){
      dispatch(getTopis(params))
    },
    getTopicNext(params){
      dispatch(getTopicNext(params))
    }
  }
})


class Topics extends   Component{
  componentWillMount() {
    let {page, limit,currMenu} = this.props
    this.props.getTopics && this.props.getTopics({page: page, limit:limit,tab:currMenu.key})
  }
  onScrollToLower(){
    let {page, limit, currMenu} = this.props
    this.props.getTopicNext && this.props.getTopicNext({page: (page + 1), limit: limit, tab: currMenu.key})
  }
  render(){
    let {list} = this.props
    let vStyleB = {
      height: '650PX'
    }
    return (<ScrollView scrollY='true' style={vStyleB} onScrollToLower={this.onScrollToLower.bind(this)}>{ list.map( (item)=> <Topic item={item} /> )
    }</ScrollView>)
  }
}
export default  Topics;
