<script setup>
import MenuBar from '../../components/user/MenuBar.vue'
import Marquee from '../../components/user/Marquee.vue'
import MenuHeader from '../../components/user/MenuHeader.vue'
import 'primeicons/primeicons.css'
</script>
<template>
  <main>
    <div class="container">
      <MenuBar />
      <Marquee />
      <MenuHeader label="Meu Perfil" icon="pi pi-apple"/>
    </div>
  </main>
</template>

<style>
.container {
  padding: 0;
  margin: 0;
}
</style>
