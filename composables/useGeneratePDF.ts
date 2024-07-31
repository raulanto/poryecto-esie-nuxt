import html2canvas from 'html2canvas';

export function useGeneratePDF() {


    const generatePDF = async (sections, pageSize = { width: 1805, height: 1290 },pdfMake) => {
        if (!sections || sections.length === 0) return;
        const images = [];

        // Captura cada sección individualmente
        for (const section of sections) {
            if (!section) continue;

            const canvas = await html2canvas(section, { scale: 2 }); // Aumenta la escala para mejor calidad
            const imgData = canvas.toDataURL('image/png');
            images.push(imgData);
        }

        // Define el documento PDF con imágenes en páginas separadas
        const docDefinition = {
            pageSize: {
                width: pageSize.width,
                height: pageSize.height
            },
            pageMargins: [0, 0, 0, 0],
            content: images.map(imgData => ({
                image: imgData,
                width: pageSize.width,
                height: pageSize.height
            }))
        };

        // Genera y descarga el PDF
        pdfMake.createPdf(docDefinition).download('sample.pdf');
    };

    return {
        generatePDF
    };
}
