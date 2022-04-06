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
</script>
