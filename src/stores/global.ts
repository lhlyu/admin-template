import { defineStore } from 'pinia'

// 全局配置
const useGlobalStore = defineStore({
    id: 'global',
    state: () => ({
        theme: 'dark'
    }),
    getters: {},
    actions: {
        // 设置主题
        setTheme(theme: 'dark' | 'light') {
            this.theme = theme
        }
    },
    // 启用持久化
    persist: {
        enabled: true,
        storage: window.localStorage
    }
})

export default useGlobalStore
