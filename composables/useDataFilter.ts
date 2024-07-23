// composables/useDataFilter.js
import {computed} from 'vue';
// @ts-ignore
export function useDataFilter(data, carreras, periodos, modalidades, selectedCareer, selectedPeriod, selectedModalidad) {

    const filteredData = computed(() => {
        // @ts-ignore
        return data?.find(d =>
            d.carrera === Number(selectedCareer.value) &&
            d.periodo === Number(selectedPeriod.value) &&
            d.modalidad === Number(selectedModalidad.value)
        );
    });

    const selectedCareerName = computed(() => {
        // @ts-ignore
        const career = carreras?.find(c => c.value === Number(selectedCareer.value));
        return career ? career.label : '';
    });

    const selectedPeriodName = computed(() => {
        // @ts-ignore
        const period = periodos?.find(p => p.value === Number(selectedPeriod.value));
        return period ? period.label : '';
    });

    const selectedModalidadName = computed(() => {
        // @ts-ignore
        const modalidad = modalidades?.find(m => m.value === Number(selectedModalidad.value));
        return modalidad ? modalidad.label : '';
    });

    const hombres = computed(() => {
        return filteredData.value ? filteredData.value.hombres : [];
    });

    const mujeres = computed(() => {
        return filteredData.value ? filteredData.value.mujeres : [];
    });

    const hombresRango = computed(() => {
        return filteredData.value ? filteredData.value.hombresRango : [];
    });

    const mujeresRango = computed(() => {
        return filteredData.value ? filteredData.value.mujeresRango : [];
    });

    return {
        filteredData,
        selectedCareerName,
        selectedPeriodName,
        selectedModalidadName,
        hombres,
        mujeres,
        hombresRango,
        mujeresRango
    };
}
