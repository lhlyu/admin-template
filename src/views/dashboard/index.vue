<template>
    <div>
        <h1>dashboard</h1>
        <div>
            <input type="text" />
        </div>
        <p>{{ route.fullPath }}</p>
    </div>
</template>

<script setup lang="ts" name="dashboard">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
