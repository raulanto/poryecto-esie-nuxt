import { ref, watch, onMounted } from 'vue';
import { useFlowbite } from 'flowbite';

function sumArrays(array1: number[], array2: number[]): number[] {
    return array1.map((num, idx) => num + (array2[idx] || 0));
}

function generateDataMap(
    jsonData1: any[],
    jsonData2: any[],
    carreras: any[],
    periodos: any[]
): Record<string, any> {
    const dataMap: Record<string, any> = {};
    const carreraMap: Record<number, string> = {};
    const periodoMap: Record<number, string> = {};

    carreras.forEach((carrera) => {
        carreraMap[carrera.value] = carrera.label;
    });

    periodos.forEach((periodo) => {
        periodoMap[periodo.value] = periodo.label;
    });

    jsonData1.forEach((data1) => {
        const carreraLabel = carreraMap[data1.carrera] || 'Unknown';
        const periodoLabel = periodoMap[data1.periodo] || 'Unknown';

        const key1 = `${data1.carrera}_${data1.periodo}`;

        if (!dataMap[key1]) {
            dataMap[key1] = {
                series1: data1.hombres,
                series2: data1.mujeres,
                series3: sumArrays(data1.hombres, data1.mujeres),
                carrera: carreraLabel,
                periodo: periodoLabel,
            };
        }
    });

    jsonData2.forEach((data2) => {
        const key1 = `${data2.carrera}_${data2.periodo}`;

        if (dataMap[key1]) {
            dataMap[key1].series4 = data2.hombres;
            dataMap[key1].series5 = data2.mujeres;
        }
    });

    return dataMap;
}

export function useDataMap(jsonData1: any[], jsonData2: any[], carreras: any[], periodos: any[]) {
    const dataMap = generateDataMap(jsonData1, jsonData2, carreras, periodos);

    const selectedCareer = ref<{ value: number } | null>(null);
    const selectedPeriod = ref<{ value: number } | null>(null);
    const rangoEdadHombre = ref<number[]>([]);
    const rangoEdadMujer = ref<number[]>([]);
    const edadMujer = ref<number[]>([]);
    const edadHombre = ref<number[]>([]);
    const rangoTotal = ref<number[]>([]);
    const valorCarrera = ref<string>('');
    const valorperiodo = ref<string>('');

    function updateData() {
        const key = `${selectedCareer.value?.value}_${selectedPeriod.value?.value}`;
        const data = dataMap[key];

        if (data) {
            rangoEdadHombre.value = data.series1 || [];
            rangoEdadMujer.value = data.series2 || [];
            edadMujer.value = data.series5 || [];
            edadHombre.value = data.series4 || [];
            rangoTotal.value = data.series3 || [];
            valorCarrera.value = data.carrera;
            valorperiodo.value = data.periodo;
        }
    }

    onMounted(() => {
        useFlowbite(() => {
            initFlowbite();
        });
        updateData();
    });

    watch([selectedCareer, selectedPeriod], updateData);

    return {
        selectedCareer,
        selectedPeriod,
        rangoEdadHombre,
        rangoEdadMujer,
        edadMujer,
        edadHombre,
        rangoTotal,
        valorCarrera,
        valorperiodo,
        updateData,
    };
}
