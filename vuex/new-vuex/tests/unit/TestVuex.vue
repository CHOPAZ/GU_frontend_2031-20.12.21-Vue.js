<template>
  <div>
    <input type="text"
      name=""
      id=""
      v-model="prop">
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  name: 'TestVuex',
  data () {
    return {
      prop: String
    }
  },
  methods: {
    save () {
      this.$store.dispatch('addItem', this.prop)
    }
  }
}
</script>

<style>

</style>
