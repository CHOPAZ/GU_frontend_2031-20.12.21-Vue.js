<template>
  <div class="wrapper">
    <div class="content">
      <div class="header modalHeader">
        <h3>{{ settings.title }}</h3>
        <div class="modalHeader-close"
          @click="onCloseClick"></div>
      </div>
      <component :is="settings.content"
        @add-payment="addPayment"
        :payment="settings.payment"
        @edit-payment="editPayment">
      </component>
    </div>
  </div>
</template>

<script>
import EditPayment from '@/components/EditPayment'
import AddPaymentsList from '@/components/AddPaymentsList'
export default {
  name: 'ModalWindow',
  props: {
    settings: {
      type: Object,
      default: null
    }
  },
  components: {
    AddPaymentsList,
    EditPayment
  },
  methods: {
    addPayment (data) {
      this.$store.dispatch('addItem', { payment: data })
      this.$modal.hide()
    },
    editPayment (data) {
      this.$store.dispatch('editItem', { payment: data })
      this.$modal.hide()
    },
    onCloseClick () {
      this.$modal.hide()
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}

.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
}

.modalHeader {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  &>div {
    background-image: url(/src/assets/clear.png);
    background-size: contain;
    width: 25px;
    height: 25px;
    margin-top: 16px;
    cursor: pointer;
  }

}
</style>
