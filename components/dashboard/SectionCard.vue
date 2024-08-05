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
   text2: {
      type: String,

   },
   text3: {
      type: String,

   },
   text4: {
      type: String,

   },
   text: {
      type: String,

   }

})

</script>

<template>


   <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
      <div
          class=" lg:col-span-2"
      >
         <CardText :text2="text2" :text3="text3" :text="text" :text4="text4"/>
      </div>
      <div
          class=" lg:col-span-1"
      >
         <Card :color="'#1d4ed8'" :name="'Hombres'" :series="rangoEdadHombre"></Card>
      </div>
      <div
          class=" lg:col-span-1"
      >
         <Card :color="'#fcd34d'" :name="'Mujeres'" :series="rangoEdadMujer"></Card>
      </div>
      <div
          class=" lg:col-span-1"
      >
         <Card :color="'#29c937'" :name="'Total'" :series="rangoTotal"></Card>
      </div>
   </div>

</template>
<style scoped>

</style>
