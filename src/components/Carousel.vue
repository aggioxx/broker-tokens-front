<template>
  <div class="card">
    <Carousel :value="items" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2  p-3">
          <div class="mb-3 font-medium">{{ slotProps.data.key }}</div>
          <div class="mt-0 font-semibold text-xl">{{ slotProps.data.value }}</div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { key: 'bit', value: 1.0 },
  { key: 'Key2', value: 2.0 },
  { key: 'Key3', value: 3.0 },
]);

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>