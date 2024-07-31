import VConsole from 'vconsole'
import { useLaunch } from '@tarojs/taro'

import './app.less'

function App({ children }) {
  useLaunch(() => {
    console.log('App launched.')
    new VConsole();
  })

  // children 是将要会渲染的页面
  return children
}
  


export default App
