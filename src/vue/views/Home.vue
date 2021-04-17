<template>
    <div>
        <span>CHECK: {{ fetchedData }}</span>
        <button v-on:click="fetchData">Получить с сервера</button>
    </div>
</template>

<script>
import universalAPIExample from '../modules/universalAPIExample'

export default {
    computed: {
        fetchedData() {
            return this.$store.state.fetchedData
        }
    },
    serverPrefetch() {
        return this.fetchData()
    },
    methods: {
        async fetchData() {
            const data = await universalAPIExample.getData()
            this.$store.dispatch('fetchTest', data.text)
        }
    }
}
</script>