<template>
  <div>
    <table>
      <tr>
        <td>#</td>
        <td>Date</td>
        <td>Category</td>
        <td>Value</td>
      </tr>
      <tr v-for="({ date, category, value}, index) in paymentsList" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          {{ date }}
        </td>
        <td>
          {{ category }}
        </td>
        <td>
          {{ value }}
        </td>
      </tr>

    </table>
  </div>

</template>

<script>
export default {
  name: 'PaymentsDisplay',
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

table {
  width: 500px;
  margin: 10px auto;
  border-spacing: 0 10px;

  td {
    text-align: center;
    border-bottom: 1px solid green;

  }
}

</style>
