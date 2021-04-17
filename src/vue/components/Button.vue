<template lang="pug">
    div(v-on:click="bool = !bool" class="pseudo-button") {{ bool }}
</template>

<script>

export default {
    data: () => ({
        bool: false
    })
}
</script>


<style lang="scss" scoped>
.pseudo-button {
    border: 1px solid black;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    max-width: 100px;
}
</style>