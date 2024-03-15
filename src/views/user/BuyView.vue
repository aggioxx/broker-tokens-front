<script setup>
import MenuBar from '../../components/user/MenuBar.vue'
import Marquee from '../../components/user/MenuMarquee.vue'
import MenuHeader from '../../components/user/MenuHeader.vue'
import 'primeicons/primeicons.css'
//import PageForm from '@/components/user/PageForm.vue'
</script>
<template>
  <main>
    <div class="menu">
      <MenuBar />
      <Marquee />
      <MenuHeader label="Comprar"/>
    </div>
<!--    <PageForm/>-->
  </main>
</template>

<style>
.menu {
  padding: 0;
  margin: 0;
}
</style>
