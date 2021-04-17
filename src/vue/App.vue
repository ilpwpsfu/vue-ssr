<template>
    <div>
        <Button/>
        <router-view></router-view>
    </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
    components: {
        Button
    }
}
</script>