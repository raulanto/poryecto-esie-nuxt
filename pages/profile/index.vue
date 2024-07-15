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
        <personal-ifno :user="user"/>
  </div>

</template>

<style scoped>

</style>