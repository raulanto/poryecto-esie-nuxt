<script setup>
import { ref } from 'vue';
import { useDataFilter } from '~/composables/useDataFilter.ts';
import carreras from 'assets/json/carrera.json';
import periodos from 'assets/json/periodo.json';
import modalidades from 'assets/json/modalidad.json';
import plan from 'assets/json/planCarrera.json'; // Importando el plan desde el archivo JSON

const data = ref([
      {
        "carrera": 1,
        "periodo": 1,
        "hombres": [],
        "mujeres": [],
        "hombresRango": [],
        "mujeresRango": [],
        "modalidad": 1
      },
      {
        "carrera": 1,
        "periodo": 1,
        "hombres": [1, 31, 30, 22, 22, 13, 11, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, 4],
        "mujeres": [0, 26, 27, 23, 23, 15, 10, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 5],
        "hombresRango": [55, 60, 4, 0, 3],
        "mujeresRango": [27, 22, 1, 0, 4],
        "modalidad": 2
      },
      {
        "carrera": 1,
        "periodo": 2,
        "hombres": [0, 30, 10, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "mujeres": [0, 7, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "hombresRango": [40, 7, 0, 0, 1],
        "mujeresRango": [10, 2, 0, 0, 1],
        "modalidad": 1

      },
      {
        "carrera": 2,
        "periodo": 1,
        "hombres": [1, 31, 30, 22, 22, 13, 11, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, 4],
        "mujeres": [0, 27, 29, 21, 20, 13, 11, 4, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2],
        "hombresRango": [55, 60, 4, 0, 3],
        "mujeresRango": [27, 22, 1, 0, 4],
        "modalidad": 1
      },
      {
        "carrera": 4,
        "periodo": 1,
        "hombres": [1, 31, 30, 22, 22, 13, 11, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, 4],
        "mujeres": [0, 26, 27, 23, 23, 15, 10, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 5],
        "hombresRango": [0, 0, 0, 0, 0],
        "mujeresRango": [0, 0, 0, 0, 0],
        "modalidad": 1
      },
      {
        "carrera": 1,
        "periodo": 2,
        "hombres": [0, 30, 10, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "mujeres": [0, 7, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "hombresRango": [50, 65, 3, 0, 2],
        "mujeresRango": [30, 18, 3, 1, 2],
        "modalidad": 1
      },
      {
        "carrera": 2,
        "periodo": 2,
        "hombres": [0, 30, 10, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "mujeres": [0, 7, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "hombresRango": [58, 62, 5, 0, 4],
        "mujeresRango": [25, 21, 1, 0, 4],
        "modalidad": 1
      },
      {
        "carrera": 4,
        "periodo": 2,
        "hombres": [1, 31, 30, 22, 22, 13, 11, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, 4],
        "mujeres": [0, 26, 27, 23, 23, 15, 10, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 5],
        "hombresRango": [55, 72, 4, 0, 3],
        "mujeresRango": [32, 17, 4, 2, 1],
        "modalidad": 1
      }
    ]
);

const selectedCareer = ref('');
const selectedPeriod = ref('');
const selectedModalidad = ref('');

const {
  filteredData,
  selectedCareerName,
  selectedPeriodName,
  selectedModalidadName,
  hombres,
  mujeres,
  hombresRango,
  mujeresRango
} = useDataFilter(data, carreras, periodos, modalidades, selectedCareer, selectedPeriod, selectedModalidad);

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
  <section v-if="hombres.length || mujeres.length">
    <h1>Carrera: {{ selectedCareerName }}</h1>
    <h1>Periodo: {{ selectedPeriodName }}</h1>
    <h3>Mujeres: {{ mujeres.join(', ') }}</h3>
    <h3>Hombres: {{ hombres.join(', ') }}</h3>
    <h3>Hombres Rango: {{ hombresRango.join(', ') }}</h3>
    <h3>Mujeres Rango: {{ mujeresRango.join(', ') }}</h3>
    <h3>Modalidad: {{ selectedModalidadName }}</h3>
  </section>
  <section v-else>
    <p>No se encontraron datos para la combinación seleccionada.</p>
  </section>
</template>
