<template>
  <div class="card">
    <Menubar :model="items" class="menu">
      <template #start>
        <Img id="logo" src="/logobranca.png" alt="Logo" />
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" :to="item.route" custom>
          <a style="color: #f9fbf8" class="flex align-items-center" v-bind="props.action">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
          <Avatar class="p-avatar-text p-avatar-circle" label="P" size="xlarge" shape="circle" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../../assets/user.css'
import Avatar from 'primevue/avatar'

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

.menu {
  background-color: #163100;
  color: #f9fbf8;
  padding-top: 2.8125rem;
  padding-left: 3.375rem;
  padding-bottom: 2.375rem;
}

.p-avatar-text {
  font-size: 1.8125rem;
  color: #1a2551;
  background-color: #f9fbf8;
}

.p-avatar-circle {
  background-color: #f9fbf8;
  margin-right: 1.5rem;
}
</style>
