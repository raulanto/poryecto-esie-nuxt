<script lang="ts" setup>
import ImputCheckbox from "~/components/herramienta/imputCheckbox.vue";

const cicloEscolar = ref("2022-2024")


</script>

<template>
    <section class="bg-white min-h-[6345] min-w-screen-[1136] flex flex-col">
        <header>
            <nav class="w-full  text-white bg-secundary-50 h-28 flex items-center justify-between px-8">
                <div class="">
                    <img alt="logo" class="140" src="../../../assets/herramienta/logo.png" width="440">
                </div>
                <div class="text-center w-full">
                    <h3 class="text-xl">
                        Estadísticas de Educación Superior <br/> por Carrera
                    </h3>
                    <h4 class="text-xl">
                        Ciclo escolar, <span class="text-secundary-100">{{ cicloEscolar }}</span>
                    </h4>
                </div>
                <h2 class="text-4xl text-left font-bold text-secundary-100 mt-2 w-[440px]">
                    911.9A
                </h2>
            </nav>

        </header>
        <nav class="bg-secundary-100  py-2">
            <h4 class="text-white font-bold w-full text-center">DATOS DE IDENTIFICACIÓN</h4>
        </nav>
        <article class="flex-grow ">

            <section class="mx-14 mt-2 flex gap-x-4">
                <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center">
                    <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                        Clave de la Institución:
                    </label>
                    <div class="flex">
                        <input
                            class=" w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                    </div>
                </div>
                <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center">
                    <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                        Clave de la escuela:
                    </label>
                    <div class="flex">
                        <input
                            class=" w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                        <input
                            class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                            maxlength="1" type="text"/>
                    </div>
                </div>
            </section>
            <section class="mx-14 my-2 ">

                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Nombre de la escuela:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Vialidad principal:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex justify-center items-center">
                        <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                            Vialidad principal:
                        </label>
                        <input id="small-input"
                               class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                               type="text">
                    </div>
                    <div class="flex justify-center items-center">
                        <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                            Número Interior:                        </label>
                        <input id="small-input"
                               class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                               type="text">
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Vialidad izquierda:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Vialidad posterior:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="grid grid-cols-2 justify-center my-2">
                    <div class="flex justify-center items-center w-full">
                        <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                            Asentamiento humano:
                        </label>
                        <input id="small-input"
                               class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                               type="text">
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center max-w-screen-[320px]">
                        <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                            Clave de la Institución:
                        </label>
                        <div class="flex">
                            <input
                                class=" w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                        </div>
                    </div>

                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Localidad:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Municipio o alcaldía:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Entidad federativa:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <section class="mx-14 mt-2 flex gap-x-4">
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center">
                        <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                            Teléfono:
                        </label>
                        <div class="flex">
                            <input
                                class=" w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                        </div>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center">
                        <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                            Extensión
                        </label>
                        <div class="flex">
                            <input
                                class=" w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50  "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                            <input
                                class="w-10 h-10  p-1.5  font-bold  text-xl  text-center  order border-secundary-50 "
                                maxlength="1" type="text"/>
                        </div>
                    </div>
                </section>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Nombre de la institución a la que pertenece:
                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="flex justify-center items-center">
                    <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                        Nombre del director de la escuela:                    </label>
                    <input id="small-input"
                           class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                           type="text">
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex justify-center items-center">
                        <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                            Página web de la escuela:
                        </label>
                        <input id="small-input"
                               class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                               type="text">
                    </div>
                    <div class="flex justify-center items-center">
                        <label class="block  text-sm text-secundary-50 font-bold w-48 ">
                            Correo electrónico del responsable de llenado:
                        </label>
                        <input id="small-input"
                               class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                               type="text">
                    </div>
                </div>

            </section>

        </article>
        <footer class="bg-secundary-100 h-fit px-4 py-2">
            <p class="text-sm text-white mx-8">
                <span class="font-bold">IMPORTANTE:</span> La información estadística es una herramienta fundamental
                para la
                planeación y la toma acertada de decisiones. Los cuestionarios 911 son los medios para recopilar la
                información básica de educación superior.
                <br/>
                Los cuestionarios impresos son apoyos para contestar el cuestionario electrónico, o bien, para que sean
                utilizados por las instituciones que manifiestan no estar en la posibilidad de
                contestar el cuestionario electrónico.
            </p>
        </footer>
    </section>

</template>

<style scoped></style>