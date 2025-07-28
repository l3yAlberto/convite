<template>
  <div class="text-center EBGaramond">
    <div class="row w-100 d-flex justify-content-center">
      <div class="col col-sm-8 col-lg-9 mt-3 border fundo-estendido">
        <div class="d-flex mx-auto tamanho flex-column">
          <div class="line-height my-5">
            "O amor é paciente, é bondoso. O amor tudo crê,
            tudo espera, tudo suporta. O amor jamais acabará!”
            1 Co 13:4-8
          </div>
          
          <div class="mb-5">
            COM A BENÇÃO DE DEUS E DE SEUS PAIS
          </div>
          
          <div class="d-flex justify-content-center line-height mb-5">
            <div class="me-5">
              Alberto Luiz Silva<br>
              Juciane Maria C. Silva
            </div>
            <div class="ms-5">
              João Galberto Cabral<br>
              Luciana R. Cabral
            </div>
          </div>
          
          <div class="Slight mb-5">
            Alberto<br>
            e Silvia
          </div>
          
          <div class="mb-3">CONVIDAM PARA O SEU CASAMENTO</div>
          
          <div class="fs-1" style="color: #4d84c8">SETEMBRO</div>
          
          <div class="d-flex justify-content-center align-items-center me-3" style="color: #4d84c8">         
            
            <div class="line-height fs-1">
              <div class="linha-top"></div>
              <div>SÁBADO</div>
              <div class="linha-button"></div>
            </div>
            
            <div class="mx-3 pb-1 dia">27</div>
            
            <div class="line-height fs-1">
              <div class="linha-top"></div>
              <div>18H30</div>
              <div class="linha-button"></div>
            </div>
            
          </div>
          <!-- 

          <div class="fs-2 mb-3" style="color: #4d84c8">2025</div>
          
          <div class="icone-link mb-3 d-flex justify-content-center">
            <a target="_blank" class="h-100" href="https://maps.app.goo.gl/yQcf36iWZiVCHtbU8?g_st=iw">
              <img width="135rem" src="@/assets/img/local.png">
            </a>
            <a target="_blank" class="h-100" href="https://flaxen-wildflower-e3f.notion.site/Lista-de-Presente-23043ae5559f80b49100cdc6c0c78bba">
              <img width="135rem" src="@/assets/img/presente.png">
            </a>
            <a target="_blank" class="h-100" href="https://wa.me/5563991034819?text=Ol%C3%A1,%20gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20casamento%20de%20Alberto%20e%20Silvia">
              <img width="135rem" src="@/assets/img/confirme.png">
            </a>
            <img width="135rem" class="h-100" src="@/assets/img/manual.png">
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.Slight {
  font-family: 'Slight-Regular', sans-serif;
  font-size: 5.6rem;
  color: #0e58a6;
}

.EBGaramond {
  font-family: 'EBGaramond-Regular', serif;
  font-size: 1.55rem;
  color: #808080;
}

.line-height {
  line-height: 1.2;
}

.linha-top {
  width: 12rem;
  border-bottom: 0.3rem dotted #4d84c8;
}

.margin-top {
  margin-top: 5rem;
}

.linha-button {
  width: 12rem;
  border-top: 0.3rem dotted #4d84c8;
}

.dia {
  font-size: 7rem;
  color: #0e57a6;
  line-height: 1;
}

.fundo-estendido {
  background-image: url('@/assets/img/arco.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  padding-top: 3.5rem;
  padding-left: 8rem;
  padding-right: 8rem;
}

@media (max-width: 700px) {  
  .fundo-estendido {
    padding-top: 1rem;
    padding-left: 2.2rem;
    padding-right: 2.2rem;
  }

  .Slight {
    font-size: 3.5rem;
  }

  .dia {
    font-size: 1rem;
  }

  .fs-1 {
    font-size: 0rem;
  }

  .linha-top {
    width: 0rem;
    /* border-top: 0.1rem dotted #4d84c8; */
  }

  .linha-button {
    width: 0rem;
    /* border-top: 0.1rem dotted #4d84c8; */
  }
}
</style>
