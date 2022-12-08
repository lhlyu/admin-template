import { h, defineComponent } from 'vue'

export const hicon = (name: string) => {
    return h('i', { class: `admin-icon admin-icon-${name}` })
}

export const icon = defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        return (
            <>
                <i class={`admin-icon admin-icon-${props.name}`}></i>
            </>
        )
    }
})
