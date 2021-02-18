<template>
    <div class="container">
        <header>
            <slot name="header" />
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    props:['url'],
    data() {
        return {}
    }
}
</script>