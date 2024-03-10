<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a class="menu-items" v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import { useRouter } from 'vue-router';

//const router = useRouter();

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

  /*  {
    label: 'Router',
    icon: 'pi pi-palette',
    items: [
      {
        label: 'Styled',
        route: '/theming'
      },
      {
        label: 'Unstyled',
        route: '/unstyled'
      }
    ]
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction');
    }
  },
  {
    label: 'External',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        url: 'https://vuejs.org/'
      }
    ]
  }*/
]);
defineExpose({ items });
</script>

