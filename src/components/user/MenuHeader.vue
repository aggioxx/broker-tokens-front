<template>
  <div class="menu-header">
    <i v-if="icon" :class="icon"></i>
    <div class="header-label">{{ label }}</div>
  </div>
</template>


<script>
export default {
  name: 'MenuHeader',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.menu-header {
  width: 100%;
  height: 6.25rem;
  background-color: #163100;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 3rem;
}

.header-label, .menu-header i {
  color: white;
  font-size: 1.8rem;
}

.menu-header i {
  margin-right: 0.5rem;
}

</style>