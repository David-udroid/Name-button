<script setup>
import { ref } from 'vue'
import NewPage from './newpage.vue'
import { useRouter } from 'vue-router'

const isShaking = ref(false)
const showPage = ref(false)
const router = useRouter()

function shakeButton() {
  isShaking.value =  false 
  requestAnimationFrame(() => {
    isShaking.value = true
  })
  router.push('/newpage')
}
function gotoNewPage() {
  // window.location.href = './newpage'
    shakeButton()
  showPage.value = true
}
</script>

<template>
<!-- <NewPage v-if="showPage" @go-back="showPage = false" />    -->
<!-- <router-link to="./newpage"> -->
<button 

class="name-button" 
onclick="gotoNewPage" 
:class=" { shake: isShaking }" 

@click="gotoNewPage">
DAVID</button>
<router-view />
<!-- </router-link> -->
</template>

<style scoped>
.name-button {
  padding: 18px 36px;
  border: none;
  cursor: pointer;
  color: whitesmoke;
  border-radius: 10px;
  background-color: rgb(203, 178, 36);
  font-size: 25px;
  font-weight: 600;
}
.name-button.shake {
  animation: shake 0.5s ease-in-out;
}
.name-button:hover {
  background-color: black;
  color: rgb(203, 136, 36);
  box-shadow: 0px 0px 10px rgb(235, 206, 44);
}
@keyframes shake {
  0% { transform: translate(1px, 1px); }
  20% { transform: translate(-1px); }
  40% { transform: translate(1px, -1px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(1px, 6px); }
  100% { transform: translate(0, 0); }
}  

</style>
