<template>
    <div>
        <span>Some data: <b>{{ fetchedData }}</b></span>
        <button v-on:click="fetchData">Fetch the data</button>
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