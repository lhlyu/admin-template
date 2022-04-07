<template>
    <main>
        <aside ref="aside">
            <button class="collapsed" @click="collapsedFn" aria-label="collapse-btn">
                <ChevronLeft v-show="!collapsed" class="collapsed-icon"></ChevronLeft>
                <ChevronRight v-show="collapsed" class="collapsed-icon"></ChevronRight>
            </button>
            <AAside></AAside>
        </aside>
        <section>
            <div v-if='theme === "dark"' class='moon' @click='changeTheme'></div>
            <div v-else class='sun' @click='changeTheme'></div>
            <router-view></router-view>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AAside from './aside.vue'
import { ChevronLeft, ChevronRight } from '@vicons/carbon'

const aside = ref<HTMLElement>()

// 菜单是否折叠
const collapsed = ref<boolean>(false)
const collapsedFn = () => {
    if (collapsed.value) {
        aside.value?.classList.remove('aside-collapsed')
    } else {
        aside.value?.classList.add('aside-collapsed')
    }
    const timer = setTimeout(() => {
        collapsed.value = !collapsed.value
        clearTimeout(timer)
    }, 200)
}


// 切换主题
const theme = ref<'dark' | 'light'>('dark')
const changeTheme = () => {
    if (theme.value === 'dark') {
        theme.value = 'light'
        document.documentElement.setAttribute('theme', theme.value)
        return
    }
    theme.value = 'dark'
    document.documentElement.setAttribute('theme', theme.value)
}

</script>

<style lang='scss' scoped>
.moon {
    position: absolute;
    right: 100px;
    top: 100px;
    width: 100px;
    height: 100px;
    background: yellow;
    border-radius: 50%;
    box-shadow: 0 0 30px 0px yellow, 0 0 100px 0 white;
    cursor: pointer;
}
.sun {
    position: absolute;
    right: 100px;
    top: 100px;
    width: 100px;
    height: 100px;
    background: orangered;
    border-radius: 50%;
    box-shadow: 0 0 30px 0px orangered, 0 0 100px 0 white;
    cursor: pointer;
}
</style>
