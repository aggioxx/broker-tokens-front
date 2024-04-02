<template>
  <div class="form-container">
    <div class="card flex justify-content-center">
      <FloatLabel class="w-full md:w-14rem">
        <Dropdown v-model="selectedCoin" :options="coins" optionLabel="name" class="input-field p-dropdown-item" />
        <label for="dd-coin">Token</label>
      </FloatLabel>
    </div>
    <div class="card flex flex-wrap justify-content-center gap-3">
      <FloatLabel>
        <InputNumber class="input-field" v-model="value" inputId="currency-brl" mode="currency" currency="BRL" locale="pt-BR" />
        <label for="currency-brl">Valor</label>
      </FloatLabel>
    </div>
    <div class="card flex justify-content-center">
      <FloatLabel>
        <Password v-model="value" inputId="password" class="input-field"
                  placeholder="Digite sua senha" toggleMask
                  promptLabel="Digite uma senha" weakLabel="Senha fraca" mediumLabel="Senha media"
                  strongLabel="Senha Forte" />
          <label for="password" class="FloatLabel">Senha</label>
      </FloatLabel>
    </div>
    <button class="button">Comprar</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Password from 'primevue/password'
import Dropdown from 'primevue/dropdown'
import FloatLabel from 'primevue/floatlabel'

export default {
  components: {
    InputNumber,
    Password,
    Dropdown,
    FloatLabel
  },
  setup() {
    const selectedCoin = ref()
    const coins = ref([
      { name: 'Bitcoin' },
      { name: 'BitBroker' },
      { name: 'Ethereum' },
      { name: 'Dogecoin' }
    ])

    const value = ref(null)

    return {
      selectedCoin,
      coins,
      value
    }
  }
}
</script>

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
  overflow-y: auto;
  max-height: 100vh;
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
  outline: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-field .p-dropdown-item {
  text-align: center;
}

.FloatLabel {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>