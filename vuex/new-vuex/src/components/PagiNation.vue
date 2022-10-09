<template>
  <div class="wrap">
    <div>
      <i @click="onClick(currentPage - 1)"
        class="arrow left"></i>
    </div>
    <div
      v-for="page in amountPages"
      :key="page"
      @click="onClick(page)"
      :class="{active: page === currentPage}"
    >
      {{ page }}
    </div>
    <div>
      <i @click="onClick(currentPage + 1)"
        class="arrow right"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PagiNation',
  props: {
    // кол-во всех элементов, для деления кол-ва всех элементов на кол-во выводимых элементов на страницу = кол-во страниц
    length: {
      type: Number,
      default: 0
    },
    // кол-во выводимое на страницу
    perPage: {
      type: Number,
      default: 3
    },
    // Текущая страница
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    // получение кол-ва страниц
    amountPages () {
      const { length, perPage } = this
      return Math.ceil(length / perPage)
    }
  },
  methods: {
    // проверка на какой мы странице
    onClick (numberPage) {
      if (numberPage < 1 || numberPage > this.amountPages) {
        return
      }

      this.$emit('change-page', numberPage)
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
      background-color: #009688;
      border-radius: 5px;
      color: white;
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
