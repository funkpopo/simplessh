import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import customEnUS from './locale/en-US'
import customZhCN from './locale/zh-CN'

const app = createApp(App)

// 合并 Arco Design 的语言包和自定义语言包
const messages = {
  'en-US': {
    ...enUS,
    ...customEnUS
  },
  'zh-CN': {
    ...zhCN,
    ...customZhCN
  }
}

// 设置默认语言
const defaultLocale = localStorage.getItem('language') || 'zh-CN'

// 创建 i18n 实例
const i18n = {
  locale: defaultLocale,
  messages,
  t(key, params = {}) {
    const keys = key.split('.')
    let value = this.messages[this.locale]
    
    for (const k of keys) {
      if (!value || typeof value !== 'object') {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
      value = value[k]
    }

    if (typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (_, key) => params[key] || '')
    }

    console.warn(`Translation value is not a string: ${key}`)
    return key
  }
}

// 添加全局属性
app.config.globalProperties.$t = (key, params) => i18n.t(key, params)

// 提供 i18n 实例
app.provide('i18n', i18n)

// 使用 Arco Design Vue
app.use(ArcoVue, {
  locale: i18n.locale === 'zh-CN' ? zhCN : enUS
})

app.mount('#app')

// 导出 i18n 实例以供其他组件使用
export { i18n }
