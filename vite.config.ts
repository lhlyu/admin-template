import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import PluginVueJsx from '@vitejs/plugin-vue-jsx'
import PluginSetupExtend from 'vite-plugin-vue-setup-extend'

const envDir = __dirname + '/config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, envDir)
    return {
        base: env.VITE_BUILD_BASE,
        plugins: [vue(), PluginVueJsx(), PluginSetupExtend()],
        envDir: envDir,
        build: {
            target: 'es2015',
            cssTarget: 'chrome61'
        }
    }
})
