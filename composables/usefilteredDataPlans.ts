import {computed} from "vue";
// @ts-ignore
export function usefilteredDataPlans(plan,selectedPlan){
    const dataFilter = computed(() => {
        // @ts-ignore
        return plan?.find(d =>
            d.value === Number(selectedPlan.value)
        );
    });
    const hombresPlan = computed(() => {
        return dataFilter.value ? dataFilter.value.hombres : [];
    });

    const mujeresPlan = computed(() => {
        return dataFilter.value ? dataFilter.value.mujeres : [];
    });

    return{
        dataFilter,
        hombresPlan,
        mujeresPlan
    }

}