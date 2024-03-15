<template>
  <div class="frame-436">
    <div class="frame-485">
      <form class="frame-535">
        <div class="frame-233">
          <div class="frame-223">
            <label class="selecione">Selecione</label>
            <span class="token">Token</span>
          </div>
        </div>
        <div class="frame-485">
          <div class="frame-223">
            <label class="r$">R$</label>
            <span class="0,00">0,00</span>
            <label class="valor">Valor</label>
          </div>
        </div>
        <div class="frame-486">
          <div class="frame-223">
            <label class="digite">Digite</label>
            <label class="senha">Senha</label>
          </div>
        </div>
        <div class="component-8">
          <button class="frame-7 entrar">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.frame-436 {
  box-sizing: border-box;
  position: absolute;
  width: 404px;
  height: 471px;
  left: calc(50% - 404px/2 + 1px);
  top: calc(50% - 471px/2 + 132.5px);
  border: 2px solid #214A00;
  border-radius: 20px;
}

.frame-485 {
  position: absolute;
  width: 294px;
  height: 376px;
  left: 54px;
  top: 52px;
}

.frame-535 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 294px;
  height: 276px;
  left: calc(50% - 294px/2);
  top: calc(50% - 276px/2 - 49px);
}

.frame-233, .frame-485, .frame-486 {
  width: 294px;
  height: 80px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.frame-223 {
  position: absolute;
  width: 293px;
  height: 55px;
  left: 1px;
  top: 25px;
  background: #F9FBF8;
  box-shadow: -2px 6px 23px rgba(145, 145, 145, 0.15);
  border-radius: 20px;
}

.selecione, .r$, .digite {
  position: absolute;
  width: 87px;
  height: 22px;
  left: 17.69px;
  top: calc(50% - 22px/2 - 0.5px);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 121.9%;
  color: #000000;
  opacity: 0.5;
}

.vector-28 {
  position: absolute;
  width: 14.7px;
  height: 8px;
  left: calc(50% - 14.7px/2 + 120.85px);
  top: calc(50% - 8px/2 + 0.5px);
  border: 2px solid #193800;
}

.token, .valor, .senha {
  position: absolute;
  width: 45px;
  height: 20px;
  left: 0px;
  top: 0px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 121.9%;
  color: #221D21;
}

.component-8 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 293px;
  height: 48px;
  left: 1px;
  top: 317px;
}

.frame-7 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 30px;
  gap: 7.5px;
  width: 293px;
  height: 48px;
  background: #214A00;
  border: 4px solid #214A00;
  box-shadow: 7px 8px 21px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.entrar {
  width: 91px;
  height: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #F9FBF8;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>