<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import MenuBar from '@/components/MenuBar.vue'

</script>

<template>
  <header>
    <div class="container">

<!--      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>-->
      <MenuBar/>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
