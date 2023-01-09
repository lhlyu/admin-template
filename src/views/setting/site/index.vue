<template>
    <div>
        <h1>setting/site</h1>
        <div>
            <pre><code>{{ JSON.stringify(route, null, '  ')}}</code></pre>
        </div>
    </div>
</template>

<script setup lang="ts" name="site">
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

onMounted(() => {})
</script>
