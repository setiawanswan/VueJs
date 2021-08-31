<template>
    <div>
        PAGE
    </div>
</template>

<script>
export default {
    destroyed() {
        console.log('destroyed')
    },
    activated() {
        console.log('ACTIVATED')
    },
    deactivated() {
        console.log('DE-ACTIVATED')
    }
}
</script>