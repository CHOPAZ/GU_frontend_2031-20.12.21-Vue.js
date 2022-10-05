<template>
  <div class="editPayment">
    <AddPaymentsList/>
  </div>
</template>

<script>
import AddPaymentsList from '@/components/AddPaymentsList'
export default {
  name: 'EditPayment',
  components: { AddPaymentsList }
}
</script>

<style scoped lang="scss">
.editPayment{
  display: flex;
  flex-direction: column;
  align-items: start;
  & :hover {
    background-color: aqua;
  }
}
.editPayment-editing {
  margin-bottom: 10px;
}
.fa-pen, .fa-trash-can {
  padding-right: 10px;
}
</style>
