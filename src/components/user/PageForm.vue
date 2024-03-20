<template>
  <div class="form-container">
    <div class="card flex justify-content-center input-field">
      <FloatLabel class="w-full md:w-14rem">
        <Dropdown v-model="selectedCoin" :options="coins" optionLabel="name" class="input-field" />
        <label for="dd-coin">Token</label>
      </FloatLabel>
    </div>
    <div class="card flex flex-wrap justify-content-center gap-3">
      <FloatLabel>
        <div class="flex-auto">
          <InputNumber class="input-field" v-model="value2" inputId="currency-germany" mode="currency" currency="BRL" locale="pt-BR" />
          <label for="number-input">Number</label>
        </div>
      </FloatLabel>
    </div>
    <div class="card flex justify-content-center">
      <FloatLabel>
        <Password v-model="value" inputId="password" class="input-field" placeholder="Digite sua senha" toggleMask
                  promptLabel="Choose a password" weakLabel="Senha fraca" mediumLabel="Senha media"
                  strongLabel="Senha Forte" />
        <label for="password">Senha</label>
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

    const selectOpt = ref([
      { key: '1', label: 'Bitcoin' },
      { key: '2', label: 'Ethereum' },
      { key: '3', label: 'Litecoin' },
      { key: '4', label: 'Ripple' }
    ])
    const value = ref(null)

    const numberInput = ref(null)
    return {
      numberInput,
      selectOpt,
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