<script lang="ts" setup>
import Card from '@/components/global/Card.vue'
import CardText from '@/components/global/CardText.vue'

defineProps({
    rangoEdadHombre: {
        type: Array,
        required: true
    },
    rangoEdadMujer: {
        type: Array,
        required: true
    },
    rangoTotal: {
        type: Array,
        required: true
    },
    valorCarrera: {
        type: String,
        required: true
    },
    valorperiodo: {
        type: String,
        required: true
    }

})


</script>

<template>
    <article class="">
        <CardText :carrera="valorCarrera" :name="'Carrera'" :periodo="valorperiodo"></CardText>
    </article>
    <article class="">
        <Card :color="'#1d4ed8'" :name="'Hombres'" :series="rangoEdadHombre"></Card>
    </article>
    <div class="">
        <Card :color="'#fcd34d'" :name="'Mujeres'" :series="rangoEdadMujer"></Card>
    </div>
    <div class="">
        <Card :color="'#29c937'" :name="'Total'" :series="rangoTotal"></Card>
    </div>
</template>

