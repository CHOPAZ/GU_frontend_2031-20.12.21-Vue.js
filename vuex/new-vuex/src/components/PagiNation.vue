<template>
  <div class="wrap">
    <div>
      <i @click="onClick(curPage - 1)" class="arrow left"></i>
    </div>
    <div
      v-for="page in amountPages"
      :key="page"
      @click="onClick(page)"
      :class="{active: page === curPage}"
    >
      {{ page }}
    </div>
    <div>
      <i @click="onClick(curPage + 1)" class="arrow right"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PagiNation',
  props: {
    // кол-во всех элементов, для деления кол-ва всех элементов на кол-во выводимых элементов на страницу = кол-во страниц
    length: {
      type: Number,
      default: 0
    },
    // кол-во выводимое на страницу
    amountPage: {
      type: Number,
      default: 3
    },
    // текущая страница
    currentPage: {
      type: Number,
      default: 1
    },
    value: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // для правильного отображения текущей страницы
      curPage: this.currentPage
    }
  },
  computed: {
    // получение кол-ва страниц
    amountPages () {
      const { length, amountPage } = this
      return Math.ceil(length / amountPage)
    },
    c_value: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    ...mapGetters(['paymentsList'])
  },
  beforeMount () {
    this.currentElements()
  },
  methods: {
    // проверка на какой мы странице
    onClick (numberPage) {
      if (numberPage < 1 || numberPage > this.amountPages) {
        return
      }
      this.curPage = numberPage
      this.currentElements()
    },
    currentElements () {
      const { amountPage, curPage } = this
      this.c_value = this.paymentsList.slice(
        amountPage * (curPage - 1),
        amountPage * (curPage - 1) + amountPage)
    }

  }
}
</script>

<style lang="scss">
.wrap{
  display: flex;
  justify-content: center;
  & > div {
    padding: 10px;
    cursor: pointer;
    &.active {
      background-color: aquamarine;
      border-radius: 5px;
    }
  }

}

.arrow {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  cursor: pointer;
}

.left {
  transform: rotate(135deg);
}
.right {
  transform: rotate(-45deg);
}
</style>
