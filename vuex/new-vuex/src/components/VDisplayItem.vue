<template>
  <v-row class="display-item">
    <v-col cols="1">{{item.id}}</v-col>
    <v-col cols="4">{{item.date}}</v-col>
    <v-col cols="4">{{item.category}}</v-col>
    <v-col cols="2">{{item.value}}</v-col>
    <v-col cols="1">
      <div class="display-item__field"
        v-click-outside="hide">
        <i class="fa-solid fa-ellipsis-vertical"
          @click="d_showControls = !d_showControls"/>
      </div>
    </v-col>
    <transition name="fade" >
      <ul class="display-item__dropdown"
        v-if="d_showControls">
        <li class="display-item__dropdown-item edit"
          @click="edit"
        >
          <i class="fa-solid fa-pencil"></i>Edit</li>
        <li class="display-item__dropdown-item remove"
          @click="remove"><i class="fa-solid fa-trash-can"></i>Remove</li>
      </ul>
    </transition>
  </v-row>
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
      this.$emit('edit')
      this.d_showControls = false
    },
    remove () {
      this.$store.dispatch('removeItem', this.item.id)
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
  position: relative;
}
.display-item__dropdown {
  list-style: none;
  border: 1px solid black;
  border-radius: 10px;
  position: absolute;
  margin: -10px;
  right: 15px;
  top: 100%;
  background: white;
  z-index: 100;
  box-shadow: 0 0 17px 0 #e7e7e7;
  .edit:hover {
    cursor: pointer;
    background-color: #009688;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .remove:hover {
    cursor: pointer;
    background-color: #009688;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .display-item__dropdown-item {
    width: 100%;
    text-align: start;
    padding: 10px;
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
.v-application ul {
  padding: 0;
}
</style>
