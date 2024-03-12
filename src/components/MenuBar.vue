<template>
  <div class="card">
    <Menubar :model="items" class="menu">
      <template #start>
        <Img id="logo" src="src/assets/logobranca.png" alt="Logo"/>
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" :to="item.route" custom>
          <a style="color: #F9FBF8" class="flex align-items-center" v-bind="props.action">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <!--      <template #end>
              <div class="flex align-items-center gap-2">
                <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
              </div>
            </template>-->
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/user.css'

const items = ref([
  {
    label: 'Inicio',
    route: '/inicio'
  },
  {
    label: 'Compra',
    route: '/compra'
  },
  {
    label: 'Venda',
    route: '/venda'
  },
  {
    label: 'Extrato',
    route: '/extrato'
  }
])
defineExpose({ items })
</script>
<style>
#logo {
  width: 11.1rem;
  height: 2.79rem;
  margin-right: 3rem;
}
.menu{
  background-color: #163100;
  color: #F9FBF8;
  padding-top: 45px;
  padding-left: 54px;
  padding-bottom: 38px;
}
</style>

