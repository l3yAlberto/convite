<template>
  <div class="text-center EBGaramond">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 mt-3">
        <div class="d-flex mx-auto flex-column m-b">
          <div>
            <div class="Slight">Manual</div>
            <div>Do Convidado</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.Slight {
  font-family: 'Slight-Regular', sans-serif;
  font-size: calc(var(--font-base) * 4);
}

.EBGaramond {
  font-family: 'EBGaramond-Regular', serif;
  font-size: .79rem;
  color: var(--cor-cinza);
}

.fundo-estendido {
  height: auto;
  background-image: 
    url('@/assets/flor-fundo.png'),
    url('@/assets/flor-top.png');
  background-size: 95%, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: bottom center, top center;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.icone-link img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.p-x {
  padding-left: 1.7rem;
  padding-right: 1.7rem;
}

.interagir img{
  width: 1rem;
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
