import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image} from '@tarojs/components'
import Menu from '../../components/menu/menu'
import Topics from '../../components/topic/topics'
import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Menu />
        <Topics />
      </View>
    )
  }
}
export default Index
