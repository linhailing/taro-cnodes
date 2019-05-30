import  Taro,{Component} from '@tarojs/taro'
import { connect } from "@tarojs/redux";
import  {View,Image, Text} from  '@tarojs/components'
import {showDrawer,hideDrawer, changeCate} from "../../actions/menu";

import menuImg from '../../assets/images/cata.png'
import loginImg from '../../assets/images/login.png'

import './menu.less'

import { AtDrawer } from 'taro-ui';


@connect(function (state) {
  return {...state.menu}
}, function (dispatch) {
  return {
    showMenu(){
      dispatch(showDrawer())
    },
    hideMenu(){
      dispatch(hideDrawer())
    },
    changeCate(cate){
      dispatch(changeCate(cate))
    }
  }
})


class  Menu extends  Component{
  showDrawer(){
    this.props.showMenu && this.props.showMenu()
  }
  clickCate(index){
    let { cateMenu } = this.props
    let clickCata = cateMenu[index]
    if (clickCata.key !== this.props.currMenu.key){
      this.props.changeCate && this.props.changeCate(clickCata)
    }
  }
  getItems(cataData){
    return  cataData.map(item=>item.value);
  }
  clickClose(){
    this.props.hideMenu && this.props.hideMenu()
  }
  render(){
    let { showDrawer,cateMenu } = this.props
    let items = this.getItems(cateMenu)
    let style = {position: 'absolute', bottom: 0, right: 0,width: 260, flex: 1}
    return (
      <View>
        <View className='header'>
          <AtDrawer onClose={this.clickClose.bind(this)} mask style={style} onItemClick={this.clickCate.bind(this)} show={showDrawer}  items={items}/>
          <Image onClick={this.showDrawer.bind(this)} className='header-menu' src={menuImg} />
          <Text className='header-title'>{this.props.currMenu ? this.props.currMenu.value : ''}</Text>
          <Image className='header-login' src={loginImg} />
        </View>
      </View>
    )
  }
}

export default  Menu;
