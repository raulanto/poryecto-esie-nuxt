<script setup lang="ts">
definePageMeta({
  layout: 'dasboradlyt'
});
</script>

<template>
  <body>
  <div id="wrapper">
    <header>
      <div class="container">Reach: http://www.reachsos.com/</div>
    </header>
    <div class="container">
      Visita, comenta y comparte ;)!
    </div>
    <footer>
      <div class="container">Blog: http://blog.epicalsoft.com/</div>
    </footer>
  </div>
  </body>
</template>

<style >
html{
  margin: 0px;
  padding: 0px;
  height: 100%;
}
#wrapper{
  padding-bottom: 81px;
  min-height: calc(100% - 81px);
  position: relative;
}

header {
  color: white;
  background-color: #0086CD;
}

footer {
  color: white;
  background-color: #1A1A1A;
  width: 100%;
  height: 81px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.container {
  padding:12px;
}
</style>