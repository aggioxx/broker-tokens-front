<script setup>
import MenuBar from '../../components/user/MenuBar.vue'
import Marquee from '../../components/user/MenuMarquee.vue'
import MenuHeader from '../../components/user/MenuHeader.vue'
import 'primeicons/primeicons.css'
</script>
<template>
  <main>
    <div class="container">
      <MenuBar />
      <Marquee />
      <MenuHeader label="Conta bancária" icon="mdi mdi-bank"/>
    </div>
  </main>
</template>

<style>
.container {
  padding: 0;
  margin: 0;
}
</style>
