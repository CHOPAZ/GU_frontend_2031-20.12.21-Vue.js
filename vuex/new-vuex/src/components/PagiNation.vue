<template>
  <div class="wrap">
    <div>
      <i @click="click(currentPage - 1)" class="arrow left"></i>
    </div>
    <div
      v-for="page in amountPages"
      :key="page"
      @click="click(page)"
      :class="{active: page === currentPage}"
    >
      {{ page }}
    </div>
    <div>
      <i @click="click(currentPage + 1)" class="arrow right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagiNation',
  props: {
    // кол-во всех элементов, для деления кол-ва всех элементов на кол-во выводимых элементов на страницу = кол-во страниц
    length: [],
    // кол-во выводимое на страницу
    amountPage: Number,
    // текущая страница
    currentPage: Number
  },
  computed: {
    // получение кол-ва страниц
    amountPages () {
      const { length, amountPage } = this
      return Math.ceil(length / amountPage)
    }
  },
  methods: {
    // проверка на какой мы странице
    click (numberPage) {
      if (numberPage < 1 || numberPage > this.amountPages) {
        return
      }
      this.$emit('pagination', numberPage)
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

i {
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
