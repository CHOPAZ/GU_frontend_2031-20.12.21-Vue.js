<template>
  <div class="display-item">
    <div class="display-item__field">{{item.id}}</div>
    <div class="display-item__field">{{item.date}}</div>
    <div class="display-item__field">{{item.category}}</div>
    <div class="display-item__field">{{item.value}}</div>
    <div class="display-item__field"
      v-click-outside="hide">
      <i class="fa-solid fa-ellipsis-vertical"
        @click="d_showControls = !d_showControls"/>
    </div>
    <transition name="fade" >
      <ul class="display-item__dropdown"
        v-if="d_showControls">
        <li class="display-item__dropdown-item edit"
          @click="edit"><i class="fa-solid fa-pencil"></i>Edit</li>
        <li class="display-item__dropdown-item remove"
          @click="remove"><i class="fa-solid fa-trash-can"></i>Remove</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'VDisplayItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      active: false,
      d_showControls: false
    }
  },
  methods: {
    edit () {
      this.$modal.show({ title: 'Edit', payment: { ...this.item }, content: 'AddPaymentsList' })
      this.d_showControls = false
    },
    remove () {
      this.$store.dispatch('removeItem', this.item.id)
      this.$emit('remove')
      this.d_showControls = false
    },
    hide () {
      this.d_showControls = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.display-item {
  display: grid;
  grid-template-columns: 10px 1fr 1fr 1fr auto;
  gap: 20px;
  position: relative;
  .display-item__field {
    padding: 10px 0;
    display: flex;
    align-items: flex-start;
  }
}
.display-item__dropdown {
  list-style: none;
  border: 1px solid black;
  border-radius: 10px;
  position: absolute;
  margin: 0;
  right: -20px;
  top: 100%;
  background: white;
  z-index: 100;
  padding: 0;
  box-shadow: 0 0 17px 0 #e7e7e7;
  .edit:hover {
    cursor: pointer;
    background-color: aquamarine;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .remove:hover {
    cursor: pointer;
    background-color: aquamarine;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .display-item__dropdown-item {
    //width: 100%;
    width: 100px;
    text-align: start;
    padding: 10px;
    //&:hover {
    //  cursor: pointer;
    //  background-color: aquamarine;
    //  border-bottom-left-radius: 10px;
    //  border-bottom-right-radius: 10px;
    //}
  }
}
.fa-pencil, .fa-trash-can {
  padding-right: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
