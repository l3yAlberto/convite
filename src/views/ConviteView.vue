<template>
  <div class="text-center EBGaramond">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 envelope-container" @click="abrir = true">
        <div class="d-flex mx-auto flex-column fundo-estendido mt-3">
          <div class="m-b">
            <div class="line-height m-y p-x">
              "O amor é paciente, é bondoso. O amor tudo crê, tudo espera, tudo suporta. O amor jamais acabará!”
              <div>1 Co 13:4-8</div>
            </div>
            
            <div class="mb-5">
              COM A BENÇÃO DE DEUS E DE SEUS PAIS
            </div>
            
            <div class="d-flex justify-content-evenly line-height mb-5">
              <div>
                Alberto Luiz Silva<br>
                Juciane Maria C. Silva
              </div>
              <div>
                João Galberto Cabral<br>
                Luciana R. Cabral
              </div>
            </div>
            
            <div class="Slight m-y">
              Alberto<br>
              e Silvia
            </div>
            
            <div class="mb-3">CONVIDAM PARA O SEU CASAMENTO</div>

            <div class="f-s" style="color: #4d84c8">SETEMBRO</div>
            
            <div class="d-flex justify-content-center align-items-center" style="color: #4d84c8">         
              
              <div class="line-height f-s">
                <hr class="linha-bolinhas">
                <div>SÁBADO</div>
                <hr class="linha-bolinhas">
              </div>
              
              <div class="m-x pb-1 dia">27</div>
              
              <div class="line-height f-s">
                <hr class="linha-bolinhas">
                <div>18H30</div>
                <hr class="linha-bolinhas">
              </div>
              
            </div>
            
            <div class="fs-2 mb-3" style="color: #4d84c8">2025</div>
            
            <div class="icone-link mb-3 d-flex justify-content-evenly">
              <a class="align-content-center" target="_blank" href="https://maps.app.goo.gl/yQcf36iWZiVCHtbU8?g_st=iw">
                <img src="@/assets/img/local.png" />
              </a>
              <a class="align-content-center" target="_blank" href="https://flaxen-wildflower-e3f.notion.site/Lista-de-Presente-23043ae5559f80b49100cdc6c0c78bba">
                <img src="@/assets/img/presente.png" />
              </a>
              <a class="align-content-center" target="_blank" href="https://wa.me/5563991034819?text=Ol%C3%A1,%20gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20casamento%20de%20Alberto%20e%20Silvia">
                <img src="@/assets/img/confirme.png" />
              </a>
              
              <a class="align-content-center" target="_blank" href="https://drive.google.com/file/d/1FEY-bQOHHmZ0pSg7qvqTPMejU59MXWgo/view">
                <img src="@/assets/img/manual.png" />
              </a>
            </div>
            
            <div class="interagir mb-5">
              <img  src="@/assets/img/click.png">
              CLIQUE NOS ÍCONES PARA INTERAGIR
            </div>
          </div>
        </div>

        <!-- Aba esquerda -->
        <div 
          class="envelope-flap flap-left" 
          :class="{ 'left-open': abrir }"
        >
          <img src="@/assets/borda-esquerda.png" />
          <div class="flor button">
            <img src="@/assets/flor-button-esquerdo.png" />  
          </div>
        </div>

        <!-- Aba direita -->
        <div 
          class="envelope-flap flap-right" 
          :class="{ 'right-open': abrir }"
        >
          <img src="@/assets/borda-direita.png" />
          <div class="flor top">
            <img src="@/assets/flor-top-direita.png" />  
          </div>
        </div>

        <div 
          class="envelope-flap selo" 
          :class="{ 'selo-open': abrir }"
        >
          <img src="@/assets/selo.png" />
          <div class="abrir-click">
            <img  src="@/assets/img/click.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const abrir = ref(false);

// onMounted(() => {
//   setInterval(() => { abrir.value = !abrir.value }, 2e3)
// })
</script>

<style scoped>
.envelope-container {
  position: relative;
  /* cursor: pointer;   */
}

/* Base comum das abas */
.envelope-flap {
  position: absolute;
  width: 50%;
  height: 100%;
  /* background: #ffa200; */
  border-bottom: none;
  top: 0;
  z-index: 3;
  transition: transform 1s ease-in-out;
}

.flor {
  position: absolute;
  z-index: 6;
  width: 70%;
}

.abrir-click {
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  top: -20%;
  opacity: .4;
  width: 10%;
}

.button {
  bottom: 0;
}

.top {
  top: 0;
  right: 0;
}

.selo {
  position: absolute;
  width: 100%;
  /* top: 0; */
  z-index: 4;
  transition: display 0.8s ease-in-out;
}

.selo img {
  object-fit: contain;
}

.envelope-flap img {
  height: 100%;
  width: 100%;
}

.selo-open {
  display: none;
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
  /* border-top-right-radius: 4px; */
}

/* Estado aberto: gira cada flap para fora */
.left-open {
  transform: rotateY(-90deg);
}
.right-open {
  transform: rotateY(90deg);
}


.Slight {
  font-family: 'Slight-Regular', sans-serif;
  font-size: 3rem;
  color: #0e58a6;
}

.EBGaramond {
  font-family: 'EBGaramond-Regular', serif;
  font-size: .79rem;
  color: #808080;
}

.line-height {
  line-height: 1.2;
}

.margin-top {
  margin-top: 5rem;
}

.linha-bolinhas {
  width: 7rem;
  border: none;         
  height: 0.3rem;         
  background-image: 
    radial-gradient(circle, #4d84c8 50%, transparent 50%);
  background-size: .29rem .25rem;
  background-repeat: repeat-x;
  margin: 0 0;      
  opacity: 1;
}

.linha-top {
  width: 7rem;
  /* border-bottom: 0.2rem dotted #4d84c8; */
}

.linha-button {
  width: 7rem;
  border-top: 0.2rem dotted #4d84c8;
}

.dia {
  font-size: 4rem;
  color: #0e57a6;
  line-height: 1;
}

.fundo-estendido {
  height: auto;
  background-image: 
    url('@/assets/flores-baixo.png'),
    url('@/assets/img/arco.png');
  background-size: 95%, 90%;
  background-repeat: no-repeat, no-repeat;
  background-position: bottom center, top center;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
}

.icone-link img {
  height: 4rem;
  object-fit: contain;
}

.p-x {
  padding-left: 1.7rem;
  padding-right: 1.7rem;
}

.interagir img {
  width: 1rem;
  object-fit: contain;
}

.interagir {
  font-size: 0.6rem;
}

.f-s {
  font-size: 1.2rem;
}

.m-y {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.m-x {
  margin-left: 0.5rem;  
  margin-right: 0.5rem;
}

.m-b {
  margin-bottom: 3rem;
}

@media (min-width: 576px) {  
  .fundo-estendido {
    padding-top: 3rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .m-b {
    margin-bottom: 7rem;
  }

  .EBGaramond {
    font-size: 1.7rem;
  }

  .f-s {
    font-size: 2.5rem;
  }

  .linha-bolinhas {
    width: 9.8rem;
    background-size: .39rem .37rem;
  }

  .linha-top {
    width: 14rem;
  }

  .linha-button {
    width: 14rem;
  }

  .dia {
    font-size: 7rem;
  }

  .Slight {
    font-size: 6rem;
  }

  .icone-link img {
    width: 8rem;
    height: 8rem;
  }

  .interagir img{
    width: 1.5rem;
  }
}

@media (min-width: 576px) {
  .linha-top {
    width: 10rem;
  }

  .linha-button {
    width: 10rem;
  }

  .icone-link img {
    width: 7rem;
  }

  .interagir img{
    width: 1.5rem;
  }

  .interagir {
    font-size: 1.15rem;
  }

  .Slight {
    font-size: 5rem;
  }
}
</style>
