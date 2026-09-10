<template>
  <div class="newpage">
    David Davis.
  </div>
  <router-link to="./">
    <button class="back" 
    @click="$emit('go-back')">
      Back
    </button>
  </router-link>
</template>

<style scoped>
.newpage {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: 600;
  color: rgb(36, 61, 203);
  text-align: center;
}
.back {
  position: absolute;
  padding: 10px 20px;
  bottom: 50px; 
  border: none;
  cursor: pointer;
  color: rgb(230, 139, 139);
  border-radius: 10px;
  background-color: rgb(36, 92, 203);
  font-size: 18px;
}
</style>

<script setup>
  defineEmits(['go-back'])
</script>