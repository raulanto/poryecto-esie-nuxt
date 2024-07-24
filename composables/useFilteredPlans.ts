// composables/useFilteredPlans.js
import { ref, computed } from 'vue';
// @ts-ignore
export function useFilteredPlans(plan, selectedCareer, selectedPeriod, selectedModalidad) {

    // fILTRADO DE LOS PLANES
    const filteredPlans = computed(() => {
        // Filtrado por carrera perido y modalidad
        // @ts-ignore
        return plan?.filter(p =>
            p.carrera === Number(selectedCareer.value) &&
            p.periodo === Number(selectedPeriod.value) &&
            p.modalidad === Number(selectedModalidad.value)
        );
    });

    return {
        filteredPlans
    };
}
