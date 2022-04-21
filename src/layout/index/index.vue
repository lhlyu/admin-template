<template>
    <main>
        <aside ref="aside">
            <button class="collapsed" @click="collapsedFn" aria-label="collapse-btn">
                <svg v-show="!store.collapsed" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="collapsed-icon">
                    <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" fill="currentColor"></path>
                </svg>
                <svg v-show="store.collapsed" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="collapsed-icon">
                    <path d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" fill="currentColor"></path>
                </svg>
            </button>
            <AAside></AAside>
        </aside>
        <section>
            <div v-if="store.theme === 'dark'" class="moon" @click="toggleTheme"></div>
            <div v-else class="sun" @click="toggleTheme"></div>
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component"/>
                </keep-alive>
            </router-view>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import AAside from './aside.vue'
import useSiteStore from '../../stores/site'

const aside = ref<HTMLElement>()

const store = useSiteStore()

onBeforeMount(() => {
    document.documentElement.setAttribute('theme', store.theme)
})

onMounted(() => {
    if (store.collapsed) {
        aside.value?.classList.add('aside-collapsed')
    } else {
        aside.value?.classList.remove('aside-collapsed')
    }
})

// 菜单是否折叠
const collapsedFn = () => {
    if (store.collapsed) {
        aside.value?.classList.remove('aside-collapsed')
    } else {
        aside.value?.classList.add('aside-collapsed')
    }
    const timer = setTimeout(() => {
        store.triggleCollapsed()
        clearTimeout(timer)
    }, 200)
}

// 切换主题
const toggleTheme = () => {
    if (store.theme === 'light') {
        store.setTheme('dark')
    } else {
        store.setTheme('light')
    }
    document.documentElement.setAttribute('theme', store.theme)
}
</script>

<style lang="scss" scoped>
.moon {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 30px;
    height: 30px;
    background: yellow;
    border-radius: 50%;
    box-shadow: 0 0 30px 0px yellow, 0 0 100px 0 white;
    cursor: pointer;
}
.sun {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 30px;
    height: 30px;
    background: orangered;
    border-radius: 50%;
    box-shadow: 0 0 30px 0px orangered, 0 0 100px 0 #f7f7f7;
    cursor: pointer;
}
</style>
