// composables/useFilteredPlans.js
import { ref, computed } from 'vue';

export function useFilteredPlans(plan, selectedCareer, selectedPeriod, selectedModalidad) {
    const selectedPlan = ref('');

    const filteredPlans = computed(() => {
        return plan.filter(p =>
            p.carrera === Number(selectedCareer.value) &&
            p.periodo === Number(selectedPeriod.value) &&
            p.modalidad === Number(selectedModalidad.value)
        );
    });

    return {
        selectedPlan,
        filteredPlans
    };
}
