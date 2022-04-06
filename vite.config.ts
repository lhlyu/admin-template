import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import PluginVueJsx from '@vitejs/plugin-vue-jsx'

const envDir = __dirname + '/config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, envDir)
    return {
        base: env.VITE_BUILD_BASE,
        plugins: [vue(), PluginVueJsx()],
        envDir: envDir,
        build: {
            cssTarget: 'chrome61'
        }
    }
})
