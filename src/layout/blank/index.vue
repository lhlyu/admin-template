<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" :key="$route.name"/>
        </keep-alive>
    </router-view>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
