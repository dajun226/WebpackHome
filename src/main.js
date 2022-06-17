import './styles/index.css'
import './styles/index.less'
// 引入图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
// 引入字体样式
import './assets/fonts/iconfont.css'
// 引入vue
import App from './app.vue'
import Vue from 'vue'

// 创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')
// 给节点的src属性赋值
gif.src = gifSrc
png.src = pngSrc
// 插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

// 高级函数
const fn=()=>{
    console.log('我是一个好人啊');
}
fn()