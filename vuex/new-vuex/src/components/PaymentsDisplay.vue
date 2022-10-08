<template>
  <div class="paymets-display">
    <div class="paymets-display__header">
      <div class="paymets-display__header-item">#</div>
      <div class="paymets-display__header-item">Date</div>
      <div class="paymets-display__header-item">Category</div>
      <div class="paymets-display__header-item">Value</div>
      <div class="paymets-display__header-item"></div>
    </div>
    <v-display-item class="paymets-display__item"
      v-for="(item, idx) in paymentsList"
      :key="idx"
      :item="item"
      @remove="$emit('remove')"
    />
  </div>

</template>

<script>
import VDisplayItem from '@/components/VDisplayItem'
export default {
  name: 'PaymentsDisplay',
  components: { VDisplayItem },
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss">
.dataTable {
  margin-top: 10px;
}
.paymets-display {
  margin-top: 30px;
  margin-bottom: 10px;
  .paymets-display__header {
    display: grid;
    grid-template-columns: 10px 1fr 1fr 1fr auto;
    margin-bottom: 5px;
    gap: 20px;
  }
  .paymets-display__header-item {
    display: flex;
    align-items: flex-start;
  }
}

.hatTable {
  display: none;
}
.fa-solid{
  cursor: pointer;
}

</style>
