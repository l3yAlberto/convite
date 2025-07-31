<template>
  <div class="text-center">
    <div class="row justify-content-center ">
      <div class="col-sm-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6">
        <div class="d-flex mx-auto flex-column">
          <div class="mx-3">
            <div class="d-flex justify-content-between mx-3">
              <img class="logo-festane my-auto" src="@/assets/logo-festanne.png" />
              <div class="end">
                <div class="Slight mt-5">Cerimônia</div>
                <div class="EBGaramond">
                  <div>ESPAÇO FESTANNE</div>
                  <div>Rua Antônio Nunes da Silva, Quadra 01</div>
                  <div>Residencial Park dos Buritis</div>
                  <div>Gurupi - Tocantins</div>
                </div>
              </div>
            </div>
            <img  src="@/assets/frente-festane.jpeg" class="img-fluid w-100 rounded my-3">
            <iframe class="rounded" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4847.495561559791!2d-49.10699162494371!3d-11.73111108848169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQzJzUyLjAiUyA0OcKwMDYnMTUuOSJX!5e1!3m2!1spt-PT!2sbr!4v1753914361332!5m2!1spt-PT!2sbr" width="100%" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.end {
  width: 70%;
}

.logo-festane {
  width: 30%;
  object-fit: contain;
}

.envelope-container {
  position: relative;
  /* cursor: pointer;   */
}

/* Base comum das abas */
.envelope-flap {
  position: absolute;
  width: 50%;
  height: 100%;
  /* background: #fff; */
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
  font-size: 2rem;
  color: #0e58a6;
  /* color: #808080; */
}

.EBGaramond {
  font-family: 'EBGaramond-Regular', serif;
  font-size: .79rem;
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
    font-size: 4rem;
  }
}
</style>
