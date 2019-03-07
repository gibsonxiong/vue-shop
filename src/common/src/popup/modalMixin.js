function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Object],
      default: ''
    },
    actions: {
      default: Object,
      default () {
        return {};
      }
    },
    beforeClose: Function,
    hasInput:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      lived: true,
      visible: false,
      stash: false,
      resolve: null
    }
  },
  methods: {
    open() {
      this.visible = true;

      if(this.hasInput){
        this.$nextTick(()=>{
          this.focusInput();
        });
      }

      return new Promise((resolve) => {
        this.resolve = resolve;
      });
    },

    async close(type) {
      if (this.beforeClose) {
        let result = await this.beforeClose(type);

        if (result === false) return;
      }

      this.visible = false;

      setTimeout(() => {
        this.lived = false;
      }, 5000);

      this.resolve(type);
    },

    stashModal() {
      this.stash = true;
    },

    cancelStashModal() {
      this.stash = false;
    },

    focusInput(){
      this.$refs.input.focus();
    }
  },
  created() {
    if (isVNode(this.content)) {
      this.$slots.default = [this.content];
      this.content = null;
    } 
  },

}
