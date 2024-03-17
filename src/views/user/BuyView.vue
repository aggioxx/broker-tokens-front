<script setup>
import MenuBar from '../../components/user/MenuBar.vue'
import MenuMarquee from '../../components/user/MenuMarquee.vue'
import MenuHeader from '../../components/user/MenuHeader.vue'
import 'primeicons/primeicons.css'
import PageForm from '@/components/user/PageForm.vue'
</script>
<template>
  <main class="main-container-buy-view">
    <div class="menu-buy-view">
      <MenuBar class="menu-bar-buy"/>
      <MenuMarquee />
      <MenuHeader label="Comprar"/>
    </div>
    <div class="page-form-container">
    <PageForm class="page-form"/>
    </div>
  </main>
</template>

<style>
.main-container-buy-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
}

.menu-buy-view {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

}

.page-form-container {
  flex: 1;
  overflow-y: auto;
}
</style>
