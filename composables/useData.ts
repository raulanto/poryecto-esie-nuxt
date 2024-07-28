import {computed} from 'vue';

interface DataPersona {
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
export function useData(data: DataPersona[], selectedModalidad: {
    value: number
    // @ts-ignore

}, carreras: DataCarrera[], modalidades) {
    const filteredData = computed(() => {
        return data.filter(item => item.modalidad === selectedModalidad.value);
    });

    const sumArrayValues = (arrays: number[][]) => {
        const maxLength = Math.max(...arrays.map(arr => arr.length));
        const result = Array(maxLength).fill(0);

        arrays.forEach(arr => {
            arr.forEach((value, index) => {
                result[index] += value;
            });
        });

        return result;
    };


    const combinedHombres = computed(() => {
        const hombresArrays = filteredData.value.map(item => item.hombres);
        return sumArrayValues(hombresArrays);
    });

    const combinedMujeres = computed(() => {
        const mujeresArrays = filteredData.value.map(item => item.mujeres);
        return sumArrayValues(mujeresArrays);
    });

    // funcion que me saque de bolsa xd
    const combinedData = computed(() => {
        const careerData: {
            [key: number]: {
                periodos: { [key: number]: { hombres: number[], mujeres: number[] } }
            }
        } = {};

        filteredData.value.forEach(item => {
            if (!careerData[item.carrera]) {
                careerData[item.carrera] = {periodos: {}};
            }

            if (!careerData[item.carrera].periodos[item.periodo]) {
                careerData[item.carrera].periodos[item.periodo] = {hombres: [], mujeres: []};
            }

            careerData[item.carrera].periodos[item.periodo].hombres.push(...item.hombres);
            careerData[item.carrera].periodos[item.periodo].mujeres.push(...item.mujeres);
        });

        const allPeriodos = new Set<number>();
        filteredData.value.forEach(item => allPeriodos.add(item.periodo));

        return Object.keys(careerData).map(carreraId => {
            const carreraInfo = carreras.find(c => c.value === Number(carreraId));
            if (!carreraInfo) return null;
            // @ts-ignore

            const periodosData = Object.keys(careerData[carreraId].periodos).map(periodoId => {
                // @ts-ignore

                const periodo = careerData[carreraId].periodos[Number(periodoId)];
                return {
                    x: `Periodo ${periodoId}`,
                    y: sumArrayValues([periodo.hombres, periodo.mujeres]).reduce((sum, val) => sum + val, 0)
                };
            });

            allPeriodos.forEach(periodo => {
                if (!periodosData.find(p => p.x === `Periodo ${periodo}`)) {
                    periodosData.push({x: `Periodo ${periodo}`, y: 0});
                }
            });


            periodosData.sort((a, b) => {
                const aPeriodo = parseInt(a.x.split(' ')[1], 10);
                const bPeriodo = parseInt(b.x.split(' ')[1], 10);
                return aPeriodo - bPeriodo;
            });

            return {
                name: carreraInfo.label,
                data: periodosData
            };
        }).filter(Boolean);
    });
    const selectedModalidadName = computed(() => {
        // @ts-ignore
        const modalidad = modalidades?.find(m => m.value === Number(selectedModalidad.value));
        return modalidad ? modalidad.label : '';
    });

    return {
        selectedModalidadName,
        filteredData,
        combinedData,
        combinedHombres,
        combinedMujeres
    };
}
