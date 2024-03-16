<template>
  <div class="form-container">
    <label class="input-label">Token</label>
    <select class="input-field">
      <option value="" disabled selected>Selecione</option>
      <option value="1">Bitcoin</option>
      <option value="2">Ethereum</option>
      <option value="3">Litecoin</option>
      <option value="4">Ripple</option>
    </select>
    <label class="input-label">Valor</label>
    <div class="input-wrapper">
      <label class="dollar-label">R$</label>
      <input type="number" class="input-field" placeholder="0,00" step="0.01">
    </div>
    <label class="input-label">Senha</label>
    <input type="password" class="input-field" placeholder="Digite sua senha">
    <button class="button">Comprar</button>
  </div>
</template>

<style>
.form-container {
  box-sizing: border-box;
  width: 25.25rem;
  height: 29.4375rem;
  border: 0.125rem solid #214A00;
  border-radius: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-label {
  margin-left: 3.5rem;
  margin-bottom: 0.625rem;
  align-self: flex-start;
  font-weight: 900;
}

.input-field {
  width: 18.375rem;
  height: 3.4375rem;
  background: #F9FBF8;
  box-shadow: -0.125rem 0.375rem 1.4375rem rgba(145, 145, 145, 0.15);
  border-radius: 1.25rem;
  margin-bottom: 1.25rem;
  align-self: center;
  padding: 0.625rem 0.625rem 0.625rem 1.5rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.dollar-label {
  position: absolute;
  left: 0.625rem;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
}

.button {
  width: 18.3125rem;
  height: 3rem;
  background: #214A00;
  border: 0.25rem solid #214A00;
  box-shadow: 0.4375rem 0.5rem 1.3125rem rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  color: #F9FBF8;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
  padding: 0.75rem 0;
}
</style>