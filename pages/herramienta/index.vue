<script setup>
import {onMounted, ref, computed} from 'vue'
import carreras from "assets/json/carrera.json";
import periodos from "assets/json/periodo.json";
import modalidades from "assets/json/modalidad.json";
import plan from "assets/json/planCarrera.json"; // Importando el plan desde el archivo JSON

const selectedCareer = ref('1');
const selectedPeriod = ref('1');
const selectedModalidad = ref('1');
const selectedPlan = ref('');

const filteredPlans = computed(() => {
  return plan.filter(p =>
      p.carrera === Number(selectedCareer.value) &&
      p.periodo === Number(selectedPeriod.value) &&
      p.modalidad === Number(selectedModalidad.value)
  );
});

definePageMeta({
  layout: 'dasboradlyt'
});
</script>

<template>
  <section id="opcion1" class="section-card">
    <SelectInput v-model="selectedCareer" :options="carreras" inputId="career" label="Carrera"/>
    <SelectInput v-model="selectedPeriod" :options="periodos" inputId="period" label="Periodo"/>
    <SelectInput v-model="selectedModalidad" :options="modalidades" inputId="modad" label="Modalidad"/>
  </section>
  <section class="section-card">
    <SelectInput v-model="selectedPlan" :options="filteredPlans" inputId="plan" label="Plan"/>
  </section>
</template>
