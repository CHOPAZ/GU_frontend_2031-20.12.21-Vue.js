<template>
  <div class="main">
    <div class="error"
      v-show="error">
      {{ error }}
    </div>
    <v-row>
      <v-col cols="4">
        <v-text-field type="number"
          v-model.number="op1"
          name="op1"
          label="Operand 1">
        </v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field type="number"
          v-model.number="op2"
          name="op2"
          label="Operand 2">
        </v-text-field>
      </v-col>
      <v-col cols="4">
        = {{ result }}
      </v-col>
    </v-row>
    <div class="keyboard">
      <button
        v-for="operation of operations"
        @click="calculate(operation)"
        :key="operation"
        :name="operation"
      >
        {{ operation }}
      </button>
    </div>
    <div class="screenKeyboard">
      <div>
        <input type="checkbox"
          id="displayKeyboard"
          v-model="showScreenKeyboards">
        <label for="displayKeyboard">  Show screen keyboard</label>
      </div>
      <div v-show="showScreenKeyboards">
        <div class="screenKeyboard__buttons">
          <button
            v-for="Keyboard of digits"
            @click="keyboardClick(Keyboard)"
            :key="Keyboard"
            :name="Keyboard"
          >
            {{ Keyboard }}
          </button>
          <button @click="backSpace"
            name="backSpace"
          >
            BackSpace</button>
        </div>
        <input type="radio"
          id="operand1"
          value="op1"
          name="operands"
          v-model="activeOperand">
        <label for="operand1">Operand 1</label>
        <input type="radio"
          id="operand2"
          value="op2"
          name="operands"
          v-model="activeOperand">
        <label for="operand2">Operand 2</label>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'VCalc',
  data: () => ({
    op1: Number,
    op2: Number,
    result: Number(),
    error: '',
    operations: ['+', '-', '/', '*', 'Exponentiation', 'Integer division'],
    digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    showScreenKeyboards: false,
    activeOperand: 'op1'
  }),

  methods: {
    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+':
          return this.sum()
        case '-':
          return this.sub()
        case '/':
          return this.div()
        case '*':
          return this.mult()
        case 'Exponentiation':
          return this.expon()
        case 'Integer division':
          return this.trunc()
      }
    },
    sum () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = ' Sorry bro, you cant divide by zero :('
        return
      }
      this.result = op1 / op2
    },
    mult () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    expon () {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    trunc () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = ' Sorry bro, you cant divide by zero :('
        return
      }
      this.result = Math.trunc(op1 / op2)
    },
    keyboardClick (screenKeyboards) {
      const selectedOperandValue = this[this.activeOperand]

      if (typeof selectedOperandValue === 'number') {
        this[this.activeOperand] = Number(`${selectedOperandValue}${screenKeyboards}`)
      }
    },
    backSpace () {
      const selectedOperandsValue = this[this.activeOperand]

      if (typeof selectedOperandsValue === 'number') {
        this[this.activeOperand] = Math.trunc(selectedOperandsValue / 10)
      }
    }
  }
}
</script>

<style lang="scss">
.main {
  margin-top: 15px;
}
.error {
  margin-bottom: 10px;
  color: red;
}

.keyboard {
  padding-top: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  button:not(:last-child) {
    margin-right: 5px;
  }
}

.screenKeyboard {
  margin-top: 45px;
}

.screenKeyboard__buttons {
  margin-top: 5px;
  margin-bottom: 5px;

  button:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
