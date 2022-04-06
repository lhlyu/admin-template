import { watch } from 'vue'
import { _ActionsTree, _GettersTree, PiniaPluginContext, StateTree } from 'pinia'

export interface PersistOptions {
    // 启用
    enabled: true | false
    // 存储方式, 没有则用sessionStorage
    storage?: Storage
    // 存储的名字, 没有则用id
    storeKey?: string
}

declare module 'pinia' {
    export interface DefineStoreOptions<Id extends string = string, S extends StateTree = StateTree, G = _GettersTree<S>, A = _ActionsTree> {
        persist?: PersistOptions
    }
}

// pinia持久化插件
export default ({ options, store }: PiniaPluginContext): void => {
    if (options.persist?.enabled) {
        // 存储策略
        const storage = options.persist?.storage || sessionStorage
        // 存储的名字
        const storeKey = options.persist?.storeKey || 'admin_' + store.$id

        const storageResult = storage.getItem(storeKey)

        if (storageResult) {
            store.$patch(JSON.parse(storageResult))
            storage.setItem(storeKey, JSON.stringify(store.$state))
        }

        watch(
            () => store.$state,
            () => {
                storage.setItem(storeKey, JSON.stringify(store.$state))
            },
            { deep: true }
        )
    }
}
