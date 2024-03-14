<!--
<template>
  <div>
    <vue-marquee-slider
      class="my-marquee-slider _marqueeSliderContainerVertical_1htck_27 _marqueeSlider_1htck_3 _marqueeSliderContainer_1htck_11"
      :items="newItems"
      :speed="speed"
      :pauseOnHover="pauseOnHover"
    >
      <template v-slot="{ item }">
        <div v-if="item">
          <img :src="item.image" alt="Item image" />
          <component :is="item.icon.tag" :class="item.icon.class"></component>
          {{ item.key }}
        </div>
      </template>
    </vue-marquee-slider>
  </div>
</template>

<script>
import { ref } from 'vue'
import { VueMarqueeSlider } from 'vue3-marquee-slider'
import 'primeicons/primeicons.css'

export default {
  components: {
    VueMarqueeSlider
  },
  setup() {
    const newItems = ref([
      {
        id: 1,
        key: 'BTC',
        value: '562,11',
        image: '/bitcoin.png',
        icon: { tag: 'i', class: 'pi pi-chevron-up' }
      },
      {
        id: 2,
        title: 'BitBroker',
        value: '888,21',
        image: '/bitcoin.png',
        icon: { tag: 'i', class: 'pi pi-chevron-up' }
      },
      {
        id: 3,
        title: 'BRL',
        value: '1123,22',
        image: '/bitcoin.png',
        icon: { tag: 'i', class: 'pi pi-chevron-up' }
      }
    ])

    const speed = ref(15000)
    const pauseOnHover = ref(true)

    return {
      newItems,
      speed,
      pauseOnHover
    }
  }
}
</script>

-->
<template>
  <div>
    <vue-marquee-slider
      class="my-marquee-slider _marqueeSliderContainerVertical_1htck_27 _marqueeSlider_1htck_3 _marqueeSliderContainer_1htck_11"
      id="marquee-slider-text"
      :space="space"
      :speed="speed"
      :width="width"
      :pauseOnHover="pauseOnHover"
    >
      <div v-for="(item, index) in items" :key="index" class="item-container">
        <img class="item-image" :src="item.image" alt="Item image" />
        <span class="key-value">
          {{ item.key }} {{ item.value }}
        </span>
        <component :is="item.icon.tag" :class="item.isPositive ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"></component>
      </div>
    </vue-marquee-slider>
  </div>
</template>

<script>
import { ref } from 'vue'
import { VueMarqueeSlider } from 'vue3-marquee-slider'
import 'primeicons/primeicons.css'

export default {
  components: {
    VueMarqueeSlider
  },
  setup() {
    const speed = ref(15000)
    const pauseOnHover = ref(true)
    const space = ref(150)
    const width = ref(200)
    const items = ref([
      {
        key: 'Bitcoin',
        value: '122,32',
        image: '/bitcoin.png',
        icon: { tag: 'i'},
        isPositive: true
      },
      {
        key: 'BitBroker',
        value: '122,32',
        image: '/bitcoin.png',
        icon: { tag: 'i'},
        isPositive: false
      },
      {
        key: 'Token FC2',
        value: '122,32',
        image: '/bitcoin.png',
        icon: { tag: 'i'},
        isPositive: false
      }
    ])
    return {
      items,
      speed,
      width,
      space,
      pauseOnHover
    }
  }
}
</script>


<style>
._marqueeSlider_1htck_3 {
  overflow: hidden
}

._marqueeSliderContainer_1htck_11 {
  width: 100%;
  animation-name: _horizontalAnimation_1htck_1;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  display: flex
}

._marqueeSliderContainerVertical_1htck_27 {
  height: fit-content;
  animation-name: _verticalAnimation_1htck_1;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  display: flex;
  flex-direction: column
}

@keyframes _horizontalAnimation_1htck_1 {
  0% {
    transform: translate(0)
  }
  to {
    transform: translate(-100%)
  }
}

@keyframes _verticalAnimation_1htck_1 {
  0% {
    transform: translateY(0)
  }
  to {
    transform: translateY(-100%)
  }
}

.my-marquee-slider {
  background-color: #163100;
  color: #f9fbf8;
  font-size: 16px;
  padding: 10px;
}

.item-image {
  width: 39px;
  height: auto;
}

.item-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.key-value {
  white-space: nowrap;
}

</style>
