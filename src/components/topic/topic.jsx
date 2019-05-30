import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';

class  Topic  extends  Component{
  render(){
    let {item} = this.props
    return (<View className='topic-list'>
      <Image className='topic-avatar' src={item ? item.author.avatar_url : ''} />
      <View className='topic-center'>
        <View className='topic-header'>
          <Text className='topic-header-tag'>置顶</Text>
          <Text className='topic-header-title'>{item? item.title: ''}</Text>
        </View>
        <Text className='topic-number'>{item? item.reply_count + '/' + item.visit_count: '0/0'}</Text>
      </View>
      <Text className='topic-date'>5天前</Text>
    </View>)
  }
}
export default Topic;
