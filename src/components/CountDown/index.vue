

<style lang="scss" scoped>
@import "~@/css/var";
.t {
  font-weight: bold;
  background: #444;
  color: #fff;
  padding: 0.02rem 0.03rem;
      margin: 0 0.02rem;
  border-radius: 0.02rem;
  font-size: 0.12rem;
}
</style>
<template>
  <span class="count-down">
      <span class="t hour">{{hh| padZero(2)}}</span><b>:</b><span class="t min">{{mm | padZero(2)}}</span><b>:</b><span class="t sec">{{ss| padZero(2)}}</span>
  </span>
</template>
<script>
import utils from "@/utils";

export default {
  props: {
    endTime: {
      type: Date
    }
  },
  data() {
    return {
      hh: "00",
      mm: "00",
      ss: "00"
    };
  },
  methods: {
    countdonw() {
      if (!this.endTime) return;
      let { h, m, s } = utils.countdown(this.endTime, "d");

      this.hh = h;
      this.mm = m;
      this.ss = s;

      setTimeout(() => {
        this.countdonw();
      }, 1000);
    }
  },
  created() {
    this.countdonw();
  }
};
</script>

