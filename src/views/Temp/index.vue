<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
.c-container {
  @include flexbox(center, stretch);

  .left {
    width: 300px;
    background-color: #f3f3f3;
  }

  .main {
    flex: 1;
    @include flexbox;

    .view {
      width: 375px;
      height: 667px;
      margin: 0 auto;
      border: 1px solid #eee;
    }
  }
  .right {
    width: 300px;

    textarea {
      height: 100%;
      width: 100%;
    }
  }
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
<style lang="scss">
.active {
  border: 1px solid #f00;
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

</style>


<template>
  <div class="c-container">
    <div class="left">
      <h2>组件</h2>
      <draggable
        :list="components"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneComponent"
        :sort="false"
      >
        <dragger-item v-for="element in components" :key="element.id" class="dragger-item">
          <component :is="element.component" v-bind="element.props"></component>
        </dragger-item>
      </draggable>
    </div>

    <div class="main">
      <div class="view">
        <draggable
          v-model="selectComponents"
          group="people"
          @start="drag=true"
          @end="drag=false"
          :animation="200"
          style="position: relative;height:100%;"
        >
          <transition-group
            tag="div"
            style="height: 100%;position: absolute;width: 100%;"
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <dragger-item
              v-for="element in selectComponents"
              :key="element.id"
              class="dragger-item"
            >
              <component :is="element.component" v-bind="element.props" :key="element.id"></component>
            </dragger-item>
          </transition-group>
        </draggable>
      </div>
    </div>
    <div class="right">
      <textarea v-model="modelValue"></textarea>
    </div>
  </div>
</template>



<script>
import draggable from "vuedraggable";
import draggerItem from "./dragger-item";
import Vue from "vue";


Vue.component("c-component", {
  template: `
  <template><template>
    <component is="c-button"></component>
  `
});
let id = 0;
export default {
  components: {
    draggable,
    draggerItem
  },
  computed: {
    modelValue: {
      get() {
        return JSON.stringify(this.selectComponents);
      },
      set(value) {
        this.selectComponents = JSON.parse(value);
      }
    }
  },
  data() {
    return {
      activeId: null,
      components: [
        { component: "c-button" },
        { component: "c-upload" },
        { component: "c-number-input" },
        { component: "c-checkbox" },
        { component: "c-radio" }
      ],
      selectComponents: [
        // { id:-1, component: "c-button" },
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
    },
    cloneComponent({ component }) {
      return {
        id: id++,
        component,
        props: {}
      };
    }
  }
};
</script>
