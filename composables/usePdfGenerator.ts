import { useNuxtApp } from '#app'

export default function usePdfGenerator() {
    const { $pdfeasy } = useNuxtApp()

    const generatePdf = async (elementId: string, options = {}) => {
        const element = document.getElementById(elementId)
        if (!element) {
            console.error(`Element with id "${elementId}" not found.`)
            return
        }

        const defaultOptions = {
            filename: 'documento.pdf',
            ...options
        }

        await $pdfeasy().from(element).set(defaultOptions).save()
    }

    return {
        generatePdf
    }
}
