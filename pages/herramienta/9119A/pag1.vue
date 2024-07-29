<script lang="ts" setup>
const cicloEscolar = ref("2022-2024")


</script>

<template>
  <section class="bg-white min-h-screen flex flex-col">
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

      <section class="mx-14 my-2">
        <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center">
          <label class="block mb-2 text-sm text-secundary-50 font-bold " >
            Clave de la Institución:
          </label>
          <div class="flex">
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                maxlength="1"
                required
                type="text"/>
          </div>
        </div>
        <div>
          <label class="block mb-1 text-sm text-secundary-50 font-bold " >
            Nombre de la institución a la que pertenece
          </label>
          <input id="small-input"
                 class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                 type="text">
        </div>
      </section>
      <section class="mx-14 my-2">
        <div class="flex mb-1 space-x-2 rtl:space-x-reversen items-center">
          <label class="block mb-1 text-sm text-secundary-50 font-bold " >
            Clave de la Escuela:
          </label>
          <div class="flex">
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                maxlength="1"
                required
                type="text"/>
          </div>
        </div>
        <div>
          <label class="block mb-1 text-sm text-secundary-50 font-bold " >
            Nombre de la facultad, escuela, centro, división, departamento, etcétera:
          </label>
          <input id="small-input"
                 class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                 type="text">
        </div>
      </section>
      <section class="mx-14 my-2">
        <div class="flex mb-1 space-x-2 rtl:space-x-reversen items-center">
          <label class="block mb-1 text-sm text-secundary-50 font-bold " >
            Clave de la Carrera </label>
          <div class="flex">
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                maxlength="1"
                required
                type="text"/>
            <input
                class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                maxlength="1"
                required
                type="text"/>
          </div>
        </div>
        <div>
          <label class="block mb-2 text-sm text-secundary-50 font-bold " >
            Nombre de la carrera: </label>
          <input id="small-input"
                 class="block w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                 type="text">
        </div>
      </section>
      <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-2">
        <section class="my-8">
          <label class="block mb-2 text-sm text-secundary-50 font-bold ">
            Modalidad de la Carrera (Marque con una x)
          </label>
          <div class="flex justify-between items-center mx-14 my-8">
            <div class="flex items-start mb-6 ">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">Escolarizada</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <div class="flex items-start mb-6">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">Mixta</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border  border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <div class="flex items-start mb-6">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">Dual</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
          </div>
        </section>
        <section class="my-8">
          <h4 class=" bg-secundary-50 text-white text-center">No Escolarizada</h4>
          <div class="flex justify-between items-center  my-2">
            <div class="flex items-start mb-6 ">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">Escolarizada</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <div class="flex items-start mb-6">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">En linea o virtual</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border  border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <div class="flex items-start mb-6">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">A distancia</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
          </div>
          <label class="block mb-2 text-sm text-secundary-50 font-bold ">
            Confirme o actualice la opción educativa
          </label>
          <div class="flex justify-between items-center  my-4">
            <div class="flex items-start mb-6 ">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">Escolarizada</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <div class="flex items-start mb-6">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">En linea o virtual</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border  border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <div class="flex items-start mb-6">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " for="remember">A distancia</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
          </div>

        </section>
      </section>
      <section>
        <h4 class="bg-secundary-50 mx-14 my-2 text-white text-center font-bold">Sólo para Instituciones Particulares</h4>
        <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-2">

          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              Reconocimiento de Validez Oficial de Estudios (RVOE)

            </label>
            <div class="flex items-center">
              <label class="text-sm text-secundary-50 font-bold w-80" >
                Dependencia que lo otorga*
              </label>
              <input id="small-input"
                     class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                     type="text">
            </div>
            <div class="flex items-center">
              <label class=" mb-1 text-sm text-secundary-50 font-bold w-80" >
                Número de RVOE

              </label>
              <input id="small-input"
                     class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                     type="text">
            </div>
            <div class="flex items-center">
              <label class=" mb-1 text-sm text-secundary-50 font-bold w-80" >
                Fecha de expedición del RVOE

              </label>
              <input id="small-input"
                     class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                     type="text">
            </div>
            <div class="flex items-start mb-6 mt-4">
              <label class="block  text-sm text-secundary-50 font-bold " for="remember">En Tramite</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>
            <label class="block  text-sm text-secundary-50 font-bold ">
              *Federal, Estatal u otro

            </label>
          </section>
          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              Autorización Federal
            </label>
            <div class="flex items-center">
              <label class="text-sm text-secundary-50 font-bold w-80" >
                Institución que la otorga

              </label>
              <input id="small-input"
                     class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                     type="text">
            </div>
            <div class="flex items-center">
              <label class=" mb-1 text-sm text-secundary-50 font-bold w-80" >
                Número de Incorporación
              </label>
              <input id="small-input"
                     class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                     type="text">
            </div>
            <div class="flex items-center">
              <label class=" mb-1 text-sm text-secundary-50 font-bold w-80" >
                Fecha
              </label>
              <input id="small-input"
                     class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                     type="text">
            </div>
            <div class="flex items-start mb-6 mt-4">
              <label class="block  text-sm text-secundary-50 font-bold " for="remember">En Tramite</label>
              <div class="flex items-center h-5">
                <input id="remember"
                       class="w-4 h-4 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                       required
                       type="checkbox"
                       value=""/>
              </div>
            </div>


          </section>
        </section>

      </section>

    </article>
    <footer class="bg-secundary-100 h-fit px-4 py-2">
      <p class="text-sm text-white mx-8">
        <span class="font-bold">IMPORTANTE:</span> La información estadística es una herramienta fundamental para la
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

<style scoped>

</style>