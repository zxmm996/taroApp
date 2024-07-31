import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('PageAloaded.')
  })

  return (
    <View className='index'>
      <Text>PageA Show!</Text>
    </View>
  )
}
