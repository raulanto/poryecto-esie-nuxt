<script lang="ts" setup>

import Presentacion from "~/components/profile/presentacion.vue";
import user from "~/assets/json/user.json"
import PersonalIfno from "~/components/profile/personalIfno.vue";
definePageMeta({
  layout: 'dasboradlyt'
});

</script>

<template>

  <div class="">
    <Presentacion :user="user"></Presentacion>

    <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
      <div class="flex flex-col w-full 2xl:w-2/3">
        <personal-ifno :user="user"/>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>