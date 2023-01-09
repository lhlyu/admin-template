import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import PluginVueJsx from '@vitejs/plugin-vue-jsx'
import PluginSetupExtend from 'vite-plugin-vue-setup-extend'
import externalGlobals from 'rollup-plugin-external-globals'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, './config')
    return {
        base: env.VITE_BUILD_BASE,
        plugins: [vue(), PluginVueJsx(), PluginSetupExtend()],
        envDir: './config',
        build: {
            target: 'es2015',
            cssTarget: 'chrome61'
            // rollupOptions: {
            //     external: ['vue', 'vue-demi', 'pinia', 'vue-router'],
            //     plugins: [
            //         externalGlobals({
            //             vue: 'Vue',
            //             'vue-demi': 'VueDemi',
            //             pinia: 'Pinia',
            //             'vue-router': 'VueRouter'
            //         })
            //     ]
            // }
        }
    }
})
