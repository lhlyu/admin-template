<template>
    <section class="layout">
        <aside class="layout-aside" :style="{ width: store.getClientHeight }">
            <button class="collapsed" @click="store.triggleCollapsed">
                <svg
                    class="collapsed-icon"
                    :style="{ transform: store.collapsed ? 'rotateZ(180deg)' : 'none' }"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <section class="aside">
                <Lander></Lander>
                <AppMenu></AppMenu>
            </section>
        </aside>
        <section class="layout-container">
            <header>
                <Breadcrumb></Breadcrumb>
                <!--                <Tabsbar></Tabsbar>-->
            </header>
            <main>
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <keep-alive>
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </main>
        </section>
    </section>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { Lander, AppMenu, Tabsbar, Breadcrumb } from './components/index'
import useSiteStore from '../stores/site'
import useClientHeight from '../hooks/useClientHeight'

const store = useSiteStore()

const { clientHeight } = useClientHeight()

onBeforeMount(() => {
    store.setTheme(store.theme)
})
</script>

<style lang="scss" scoped>
.layout {
    width: 100vw;
    height: v-bind(clientHeight);
    overflow: auto;
    display: flex;

    .layout-aside {
        position: relative;
        height: 100%;
        will-change: width;
        background: rgb(var(--admin-aside-bg));
        transition: all 0.4s linear;

        &::-webkit-scrollbar {
            display: none;
        }

        .collapsed {
            position: absolute;
            top: calc(50% - 35px);
            right: -25px;
            width: 25px;
            height: 70px;
            clip-path: polygon(100% 10%, 100% 90%, 0 100%, 0 0);
            z-index: 1;
            outline: none;
            border: 0;
            cursor: pointer;
            background: rgb(var(--admin-aside-bg));
            transition: all 0.4s linear;

            .collapsed-icon {
                color: rgb(var(--admin-collapse-color));
                transition: all 0.4s linear;
            }
        }

        .aside {
            width: 100%;
            overflow: hidden;
        }
    }

    .layout-container {
        flex: 1;
        overflow: auto;
        background-color: rgb(var(--admin-bg));
        transition: all 0.4s linear;

        header {
            display: flex;
            flex-direction: column;
            height: 80px;
            width: 100%;
        }

        main {
            padding: 20px;
            box-sizing: border-box;
            width: 100%;
            overflow: auto;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
