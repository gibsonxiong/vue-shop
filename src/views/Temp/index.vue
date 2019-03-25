<style scoped lang="scss">
.temp-page {
}
.item {
  // width: 100%;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}


</style>
<style>
.active {
  border: 1px solid #f00;
}
</style>


<template>
  <div class="temp-page page">
    <draggable v-model="arr" group="people" @start="drag=true" @end="drag=false">
      <template v-for="element in arr">
        <img
          :class="{ 'active ':activeId == element.id }"
          @click="activeId = element.id"
          v-if="element.component === 'img'"
          :src="element.props.src"
          :key="element.id"
        >
        <component
          :class="{ 'active ':activeId == element.id }"
          @click="activeId = element.id"
          v-else
          :is="element.component"
          v-bind="element.props"
          :key="element.id"
        >{{element.name}}</component>
      </template>
    </draggable>
    {{activeId}}
    <textarea v-model="modelValue" style="width:100%;height:200px;"></textarea>
  </div>
</template>



<script>
import draggable from "vuedraggable";
import Vue from "vue";

Vue.component("c-component", {
  template: `
  <template><template>
    <component is="c-button"></component>
  `
});

export default {
  components: {
    draggable
  },
  computed: {
    modelValue: {
      get() {
        return JSON.stringify(this.arr);
      },
      set(value) {
        this.arr = JSON.parse(value);
      }
    }
  },
  data() {
    return {
      activeId: null,
      arr: [
        {
          name: "A",
          id: 0,
          component: "img",
          props: { src: "https://cn.vuejs.org/images/logo.png" }
        },
        { name: "B", id: 1, component: "c-button", props: { ghost: true } },
        { name: "C", id: 2, component: "c-button", props: { ghost: true } },
        { name: "D", id: 3, component: "c-button", props: { ghost: true } },
        { name: "E", id: 4, component: "c-button", props: { ghost: true } },
        { name: "F", id: 5, component: "c-button", props: { ghost: true } },
        { name: "G", id: 6, component: "c-button", props: { ghost: true } },
      ],
      drag: false
    };
  },
  methods: {
    submit() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 4000);
    }
  }
};
</script>
