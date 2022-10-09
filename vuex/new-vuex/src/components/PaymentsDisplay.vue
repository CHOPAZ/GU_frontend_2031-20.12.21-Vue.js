<template>
  <div class="paymentsContent">
    <v-row class="mt-4">
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row>
      <v-col><v-display-item class="paymets-display__item"
        v-for="(item, idx) in paymentsList"
        :key="idx"
        :item="item"
        @edit="$emit('edit', item.id)"
      />
      </v-col>
    </v-row>
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
.paymentsContent{
  height: 300px;
}

.fa-solid{
  cursor: pointer;
}

</style>
