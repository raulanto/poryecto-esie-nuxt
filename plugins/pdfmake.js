// plugins/pdfmake.js
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('pdfMake', pdfMake);
});
