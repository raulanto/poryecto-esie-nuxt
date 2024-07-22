// composables/useDataHandler.ts

import {onMounted, ref, watch} from 'vue';
import {sumArrays} from "~/utils/sumaArrays";

export function useDataHandler(
    jsonData1: any[],
    jsonData2: any[],
    carreras: any[],
    periodos: any[],
    modalidades: any[]
) {
    const selectedCareer = ref('1');
    const selectedPeriod = ref('1');
    const selectedModalidad = ref('1');
    const rangoEdadHombre = ref<number[]>([]);
    const rangoEdadMujer = ref<number[]>([]);
    const edadHombre = ref<number[]>([]);
    const edadMujer = ref<number[]>([]);
    const rangoTotal = ref<number[]>([]);
    const valorCarrera = ref('');
    const valorperiodo = ref('');
    const valormodalidad = ref('');


    function generateDataMap(
        jsonData1: any[],
        jsonData2: any[],
        carreras: any[],
        periodos: any[],
        modalidades: any[]
    ): Record<string, any> {
        const dataMap: Record<string, any> = {};
        const carreraMap: Record<number, string> = {};
        const periodoMap: Record<number, string> = {};
        const modalidadMap: Record<number, string> = {};

        carreras.forEach((carrera) => {
            carreraMap[carrera.value] = carrera.label;
        });

        periodos.forEach((periodo) => {
            periodoMap[periodo.value] = periodo.label;
        });

        modalidades.forEach((modalidad) => {
            modalidadMap[modalidad.value] = modalidad.label;
        });

        jsonData1.forEach((data1) => {
            const carreraLabel = carreraMap[data1.carrera] || 'Unknown';
            const periodoLabel = periodoMap[data1.periodo] || 'Unknown';
            const modalidadLabel = modalidadMap[data1.modalidad] || 'Unknown';

            const key1 = `${data1.carrera}_${data1.periodo}_${data1.modalidad}`;

            if (!dataMap[key1]) {
                dataMap[key1] = {
                    series1: data1.hombres,
                    series2: data1.mujeres,
                    series3: sumArrays(data1.hombres, data1.mujeres),
                    carrera: carreraLabel,
                    periodo: periodoLabel,
                    modalidad: modalidadLabel
                };
            }
        });

        jsonData2.forEach((data2) => {
            const key1 = `${data2.carrera}_${data2.periodo}_${data2.modalidad}`;

            if (dataMap[key1]) {
                dataMap[key1].series4 = data2.hombres;
                dataMap[key1].series5 = data2.mujeres;
            }
        });

        return dataMap;
    }

    const dataMap = generateDataMap(jsonData1, jsonData2, carreras, periodos, modalidades);
    console.log(dataMap)

    function updateData() {
        let key = `${selectedCareer.value}_${selectedPeriod.value}_${selectedModalidad.value}`;
        let data = dataMap[key];

        if (data) {
            rangoEdadHombre.value = data.series1 || [];
            rangoEdadMujer.value = data.series2 || [];
            edadMujer.value = data.series5 || [];
            edadHombre.value = data.series4 || [];
            rangoTotal.value = data.series3 || [];
            valorCarrera.value = data.carrera;
            valorperiodo.value = data.periodo;
            valormodalidad.value= data.modalidad;
        }
    }

    onMounted(() => {
        updateData();
    });

    watch([selectedCareer, selectedPeriod, selectedModalidad], updateData);

    return {
        selectedCareer,
        selectedPeriod,
        selectedModalidad,
        rangoEdadHombre,
        rangoEdadMujer,
        edadHombre,
        edadMujer,
        rangoTotal,
        valorCarrera,
        valorperiodo,
        valormodalidad,
        updateData
    };

}
