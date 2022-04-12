<template>
    <main>
        <aside ref="aside">
            <button class="collapsed" @click="collapsedFn" aria-label="collapse-btn">
                <ChevronLeft v-show="!store.collapsed" class="collapsed-icon"></ChevronLeft>
                <ChevronRight v-show="store.collapsed" class="collapsed-icon"></ChevronRight>
            </button>
            <AAside></AAside>
        </aside>
        <section>
            <h3>一个简单的admin项目模板，仅实现了左侧菜单功能，可以搭配其他ui框架使用</h3>
            <div v-if="store.theme === 'dark'" class="moon" @click="toggleTheme"></div>
            <div v-else class="sun" @click="toggleTheme"></div>
            <router-view></router-view>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import AAside from './aside.vue'
import { ChevronLeft, ChevronRight } from '@vicons/carbon'
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
