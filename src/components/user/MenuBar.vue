<template>
  <div class="card">
    <Menubar :model="pages" class="menu">
      <template #start>
        <Img id="logo" src="/logobranca.png" alt="Logo" />
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" :to="item.route">
          <a style="color: #f9fbf8" class="flex align-items-center label-items" v-bind="props.action">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <div class="avatar-container" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
            <Avatar class="p-avatar-text p-avatar-circle avatar-front" label="P" size="xlarge" shape="circle" />
            <Menu class="dropdown-menu" ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../../assets/user.css'
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu'
import '@mdi/font/css/materialdesignicons.min.css'

const pages = ref([
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Compra',
    route: '/comprar'
  },
  {
    label: 'Venda',
    route: '/vender'
  },
  {
    label: 'Extrato',
    route: '/conta'
  }
])

const menu = ref(false)
const menuItems = ref([
  {
    items: [
      {
        label: 'Meu Perfil',
        icon: 'mdi mdi-account'
      },
      {
        label: 'Conta Bancária',
        icon: 'mdi mdi-bank'
      },
      {
        label: 'Alterar Senha',
        icon: 'mdi mdi-lock-outline'
      },
      {
        label: 'Sair',
        icon: 'mdi mdi-logout'
      }
    ]
  }
])

const toggle = (event) => {
  menu.value.toggle(event)
}

defineExpose({ pages, menuItems, toggle })
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
  display: flex;
  justify-content: space-between;
}

.label-items {
  margin-right: 1rem;
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

.dropdown-menu {
  position: relative;
  width: max-content;
  height: auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 11.9px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 20px 15px;
}
</style>