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
<!--  <section class="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
    <article class="">
      <CardText :text2="text2" :text3="text3" :text="text" :text4="text4"/>
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
  </section>-->

   <div class="parent mb-4">
      <div class="div1 ">
         <CardText :text2="text2" :text3="text3" :text="text" :text4="text4"/>
      </div>
      <div class="div2 ">
         <Card :color="'#1d4ed8'" :name="'Hombres'" :series="rangoEdadHombre"></Card>
      </div>
      <div class="div3 ">
         <Card :color="'#fcd34d'" :name="'Mujeres'" :series="rangoEdadMujer"></Card>

      </div>
      <div class="div4 " >

         <Card :color="'#29c937'" :name="'Total'" :series="rangoTotal"></Card>
      </div>

   </div>

</template>
<style scoped>
.parent {
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 1rem;
   grid-row-gap:1rem;
}

.div1 { grid-area: 1 / 1 / 2 / 3; }
.div2 { grid-area: 1 / 3 / 2 / 4; }
.div3 { grid-area: 1 / 4 / 2 / 5; }
.div4 { grid-area: 1 / 5 / 2 / 6; }
.div5 { grid-area: 2 / 1 / 4 / 3; }
.div6 { grid-area: 4 / 1 / 6 / 4; }
.div7 { grid-area: 2 / 3 / 4 / 6; }
.div8 { grid-area: 4 / 4 / 6 / 6; }

</style>
