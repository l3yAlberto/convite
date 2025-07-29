<template>
  <div class="envelope-container" @click="abrir = !abrir">
    <!-- Convite sempre visível -->
    <div class="pt-3">
      <slot name="convite"></slot>
    </div>

    <!-- Aba esquerda -->
    <div 
      class="envelope-flap flap-left" 
      :class="{ 'left-open': abrir }"
    ></div>

    <!-- Aba direita -->
    <div 
      class="envelope-flap flap-right" 
      :class="{ 'right-open': abrir }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const abrir = ref(false);

onMounted(() => {
  setInterval(() => { abrir.value = !abrir.value }, 1e3)
})
</script>

<style scoped>
.envelope-container {
  position: relative;
  cursor: pointer;  
}

/* Base comum das abas */
.envelope-flap {
  position: absolute;
  width: 50%;
  height: 100%;
  background: #ffa200;
  border: 2px solid #ccc;
  border-bottom: none;
  top: 0;
  z-index: 3;
  transition: transform 0.8s ease-in-out;
}

/* Flap esquerda */
.flap-left {
  left: 0;
  transform-origin: left center;
  transform: rotateY(0deg);
  border-right: none;
  border-top-left-radius: 4px;
}

/* Flap direita */
.flap-right {
  right: 0;
  transform-origin: right center;
  transform: rotateY(0deg);
  border-left: none;
  border-top-right-radius: 4px;
}

/* Estado aberto: gira cada flap para fora */
.left-open {
  transform: rotateY(-90deg);
}
.right-open {
  transform: rotateY(90deg);
}
</style>
