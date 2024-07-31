import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const openPageA = () => {
    Taro.navigateTo({
      url: '/pages/pageA/index'
    })
  }

  return (
    <View className='index'>
      <View>Page Index Show!</View>
      <View onClick={openPageA}>go to pageA</View>
    </View>
  )
}
