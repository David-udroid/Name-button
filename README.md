# What I built
 A button displaying my name, centered on the page that shakes when clicked.

# what I did:   
1. created a vue project.
2. Built a centered button
3. Installed dependencies
4. Added a click animation to make it shake.

## Project Setup
 ```sh
 npm create vue@latest
 cd name-button
 npm install
 npm run dev
 ```
## The HMTL Section:
 <template>
   <button class="name-button" :class=" {shake: isShaking}" @click = "shakeButton">
   DAVID</button>
  </template>

## The CSS:
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

## The Script:
<script setup>
  import { ref } from 'vue'
  const isShaking = ref(false)

  function shakeButton() {
    isShaking.value =  false 
    requestAnimationFrame(() => {
      isShaking.value = true
    })
  }
</script>

### Installed Dependencies
```sh
"dependencies": {
    "vue": "^3.5.40"
  }
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.8",
    "vite": "^8.1.5",
    "vite-plugin-vue-devtools": "^8.1.5"
  }
```

#### The Animation
``` sh
 @keyframes shake {
    0% { transform: translate(1px, 1px); }
    20% { transform: translate(-1px); }
    40% { transform: translate(1px, -1px); }
    60% { transform: translate(-1px, 1px); }
    80% { transform: translate(1px, 6px); }
    100% { transform: translate(0, 0); }
  }  
```



