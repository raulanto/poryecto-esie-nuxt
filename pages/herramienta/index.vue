<script setup>
import { ref } from 'vue';
import Pag1 from "~/pages/herramienta/9119A/pag1.vue";
import carreras from "assets/json/carrera.json";
import Tabla from "~/components/herramienta/tabla.vue";
import VueHtml2pdf from 'vue-html2pdf';

definePageMeta({
  layout: 'dasboradlyt'
});

// Reference for the pdf generator component
const html2Pdf = ref(null);

// PDF generation options
const pdfOptions = {
  margin: 1,
  filename: 'myfile.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// Content to print
const contentToPrint = ref(null);

const onProgress = (event) => {
  console.log(`Processed: ${event} / 100`);
};

const hasGenerated = () => {
  alert("PDF generated successfully!");
};

const generatePDF = () => {
  if (html2Pdf.value) {
    html2Pdf.value.generatePdf();
  }
};
</script>

<template>
  <client-only>
    <div id="app">
      <div @click="generatePDF()" class="np-btn">Generate PDF</div>

      <vue-html2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="1400"
          filename="nightprogrammerpdf"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-format="a4"
          :pdf-margin="10"
          pdf-orientation="portrait"
          pdf-content-width="800px"
          @progress="onProgress($event)"
          ref="html2Pdf"
      >
        <section slot="pdf-content">
          <Pag1 />
        </section>
      </vue-html2pdf>
      <div>
        <Pag1 />
      </div>
    </div>
  </client-only>

</template>
