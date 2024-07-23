import { computed } from 'vue'
// @ts-ignore
import { ComputedRef } from 'vue'

// Definición de tipos
interface Props {
    hombres: number[];
    mujeres: number[];
    rows: string[];
    cols: string[];
}

// Composable
export default function useTableUtils(props: Props) {
    // Función para sumar hombres y mujeres por índice
    const suma = (index: number): ComputedRef<number> => computed(() => {
        return props.hombres.length && props.mujeres.length
            ? props.hombres[index] + props.mujeres[index]
            : 0
    })

    // Computados para totales
    const totalHombres = computed(() => props.hombres.reduce((acc, curr) => acc + curr, 0))
    const totalMujeres = computed(() => props.mujeres.reduce((acc, curr) => acc + curr, 0))
    const total = computed(() => totalHombres.value + totalMujeres.value)

    // Función para copiar la tabla al portapapeles
    const copyTableToClipboard = async (tableId: string) => {
        const table = document.getElementById(tableId) as HTMLTableElement
        if (!table) return

        let tableContent = ''
        for (const row of table.rows) {
            for (const cell of row.cells) {
                tableContent += cell.innerText + '\t'
            }
            tableContent += '\n'
        }

        try {
            await navigator.clipboard.writeText(tableContent)
            alert('Tabla copiada al portapapeles!')
        } catch (err) {
            alert('Error al copiar la tabla.')
        }
    }

    // Función para descargar CSV
    const downloadCSV = (fileName: string = 'poblacion_escolar.csv') => {
        const rows = props.rows
        const cols = [...props.cols, 'Total Hombres', 'Total Mujeres', 'Total']
        const data = rows.map((row, index) => [row, props.hombres[index], props.mujeres[index], suma(index).value])

        const csvContent = [cols.join(','), ...data.map((row) => row.join(','))].join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', fileName)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return {
        suma,
        totalHombres,
        totalMujeres,
        total,
        copyTableToClipboard,
        downloadCSV
    }
}
