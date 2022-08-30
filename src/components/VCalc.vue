<template>
  <div class="main">
    <input type="number" v-model.number="op1">
    <input type="number" v-model.number="op2">
    = {{ result }}
    <div class="keyboard">
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
      <button @click="expon">Возведение в степень</button>
      <button @click="trunc">Целочисленное деление</button>

    </div>
  </div>

</template>

<script>
export default {
  name: 'VCalc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),

  methods: {
    sum () {
      this.result = this.op1 + this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    expon () {
      this.result = Math.pow(this.op1, this.op2)
    },
    trunc () {
      this.result = Math.trunc(this.op1 / this.op2)
    }

  }
}
</script>
