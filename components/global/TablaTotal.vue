<script lang="ts" setup>
import { computed, onMounted } from 'vue'

const suma = (index: number) => {
  return computed(() => {
    return props.hombres.length && props.mujeres.length
      ? props.hombres[index] + props.mujeres[index]
      : 0
  })
}

const props = defineProps({
  hombres: {
    type: Array,
    required: true
  },
  mujeres: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  cols: {
    type: Array,
    required: true
  }
})

const totalHombres = computed(() => {
  return props.hombres.reduce((acc, curr) => acc + curr, 0)
})

const totalMujeres = computed(() => {
  return props.mujeres.reduce((acc, curr) => acc + curr, 0)
})

const total = computed(() => {
  return totalHombres.value + totalMujeres.value
})

const downloadCSV = () => {
  const rows = props.rows
  const cols = [...props.cols]
  const data = rows.map((row, index) => [row, props.hombres[index], props.mujeres[index]])

  const csvContent = [cols.join(','), ...data.map((row) => row.join(','))].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', 'poblacion_escolar.csv')
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
<template>
  <section class="relative overflow-x-auto sm:rounded-lg select-none ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        <div class="flex-row items-center justify-between sm:flex sm:space-y-0 sm:space-x-4">
          <div>
            <h5 class="mr-3 font-semibold dark:text-white">Poblacion Escolar por edades</h5>
            <!--                        <p class="text-gray-500 dark:text-gray-400">Manage all your existing users or add a new one</p>-->
          </div>
          <button
            class="flex items-center justify-center px-2 transition ease-in-out delay-150  text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  py-1.5 text-center me-2 mb-2 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800"
            type="button"
            @click="downloadCSV"
          >

            Descargar
          </button>
        </div>
      </caption>
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th
            v-for="(col, index) in cols"
            :key="index"
            class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
          >
            {{ col }}
          </th>
          <th class="px-6 py-3 bg-gray-50 dark:bg-gray-800">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
          class="group hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:font-bold"
        >
          <td class="px-6 py-4 group-hover:text-blue-700">{{ row }}</td>
          <td class="px-6 py-4 group-hover:text-orange-400">{{ hombres[index] }}</td>
          <td class="px-6 py-4 group-hover:text-amber-400">{{ mujeres[index] }}</td>
          <td class="px-6 py-4 group-hover:text-green-400">{{ suma(index) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 font-bold"
        >
          <td class="px-6 py-4 text-end">
            <span
              class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              Total
            </span>
          </td>
          <td class="px-6 py-4 text-orange-400">{{ totalHombres }}</td>
          <td class="px-6 py-4 text-amber-400">{{ totalMujeres }}</td>
          <td class="px-6 py-4 text-green-400">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>
