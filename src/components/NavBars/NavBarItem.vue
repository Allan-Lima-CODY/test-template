<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';


export default defineComponent({
    components:{
        RouterLink
    },
    props: {
        label: String,
        route: {
            type: String,
            required: true
        },
        active: Boolean,
  },
});
</script>
<template>
        <RouterLink :to="route" :class="['text-white', active ? 'bg-primary' : 'bg-slate-500']">
            {{ label }}
        </RouterLink>
</template>