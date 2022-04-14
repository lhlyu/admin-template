import { h, defineComponent } from 'vue'

export const hicon = (name: string, size: number = 20) => {
    return h('i', { class: `admin-icon admin-icon-${name}`, style: { width: `${size}px`, height: `${size}px` } })
}

export const icon = defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 20
        }
    },
    setup(props) {
        return (
            <>
                <i class={`admin-icon admin-icon-${props.name}`} style={{ width: `${props.size}px`, height: `${props.size}px` }}></i>
            </>
        )
    }
})
