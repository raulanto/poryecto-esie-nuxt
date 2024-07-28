import {computed} from 'vue';

interface Dataobj {
    carrera: number;
    periodo: number;
    hombres: number[];
    mujeres: number[];
    hombresRango: number[];
    mujeresRango: number[];
    modalidad: number;
}

interface DataCarrera {
    value: number;
    label: string;
    nombreCort: string;
}

// @ts-ignore
export function useDataTremap(data: Dataobj[], selectedModalidadTremap: { value: number }, selectedPeriodoTremap: {
    value: number
}, carreras: DataCarrera[],) {


    const filteredDataTremap = computed(() => {
        return data.filter(item =>
            item.modalidad === selectedModalidadTremap.value &&
            item.periodo === selectedPeriodoTremap.value);
    });

    const carrerasArray = computed(() => {
        const carrerasSet = new Set<number>();
        filteredDataTremap.value.forEach(item => {
            carrerasSet.add(item.carrera);
        });
        return Array.from(carrerasSet).map(carreraId => {
            const carrera = carreras.find(c => c.value === carreraId);
            return carrera ? carrera.label : '';
        }).filter(label => label !== '');
    });

    const totalSumByCarrera = computed(() => {
        const data = carrerasArray.value.map(carreraLabel => {
            const carreraId = carreras.find(c => c.label === carreraLabel)?.value;
            if (!carreraId) return {x: carreraLabel, y: 0};

            const filteredByCarrera = filteredDataTremap.value.filter(item => item.carrera === carreraId);

            const totalHombres = filteredByCarrera.reduce((sum, item) => {
                return sum + item.hombres.reduce((a, b) => a + b, 0);
            }, 0);

            const totalMujeres = filteredByCarrera.reduce((sum, item) => {
                return sum + item.mujeres.reduce((a, b) => a + b, 0);
            }, 0);

            return {x: carreraLabel, y: totalHombres + totalMujeres};
        });

        return [{data}];
    });


    const totalHombres = computed(() => {
        return filteredDataTremap.value.map(item => {
            const totalHombres = item.hombres.reduce((sum, value) => sum + value, 0);
            return totalHombres;
        });
    });
    const totalMujeres = computed(() => {
        return filteredDataTremap.value.map(item => {
            const totalMujeres = item.mujeres.reduce((sum, value) => sum + value, 0);
            return totalMujeres;
        });
    });


    return {
        filteredDataTremap,
        carrerasArray,
        totalHombres,
        totalMujeres,
        totalSumByCarrera
    };
}
