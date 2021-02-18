<template>
    <a :href="url">
        <slot :slotData="website">
            {{website.subTitle}}
        </slot>
    </a>
</template>

<script>
export default {
    props: ['url'],
    data() {
        return {
            website: {
                url: 'http://baidu.com',
                title: 'baidu',
                subTitle: 'search engine'
            }
        }
    }
}
</script>