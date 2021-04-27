<template>
  <div v-if="pageNumber > 0" class="pagerContainer">
    <Icon
      type="firstPage"
      :isClick="true"
      :class="{ invalid: current == 1 }"
      @childClick="toPage(1)"
    />
    <Icon
      type="prePage"
      :isClick="true"
      :class="{ invalid: current == 1 }"
      @childClick="reducePage()"
    />
    <i
      v-for="(item, index) in numbers"
      :key="index"
      :class="{ currentIndex: current == item }"
      @click="toPage(item)"
      >{{ item }}</i
    >
    <Icon
      type="nextPage"
      :isClick="true"
      :class="{ invalid: current == pageNumber }"
      @childClick="addPage()"
    />
    <Icon
      type="lastPage"
      :isClick="true"
      :class="{ invalid: current == pageNumber }"
      @childClick="toPage(pageNumber)"
    />
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {};
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax: function() {
      let max = null;
      if (this.visibleNumber > this.pageNumber) {
        max = this.visibleMin + this.pageNumber - 1;
      } else {
        max = this.visibleMin + this.visibleNumber - 1;
      }
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      if (this.visibleMax == this.pageNumber) {
        if (this.visibleNumber > this.pageNumber) {
          for (
            let i = this.visibleMax - this.pageNumber + 1;
            i <= this.visibleMax;
            i++
          ) {
            nums.push(i);
          }
        } else {
          for (
            let i = this.visibleMax - this.visibleNumber + 1;
            i <= this.visibleMax;
            i++
          ) {
            nums.push(i);
          }
        }
      } else {
        for (let i = this.visibleMin; i <= this.visibleMax; i++) {
          nums.push(i);
        }
      }
      return nums;
    },
  },
  methods: {
    addPage() {
      let newCurrent = this.current + 1;
      if (newCurrent > this.pageNumber) {
        newCurrent = this.pageNumber;
      }
      this.handleClick(newCurrent);
    },
    reducePage() {
      let newCurrent = this.current - 1;
      if (newCurrent < 1) {
        newCurrent = 1;
      }
      this.handleClick(newCurrent);
    },
    toPage(newCurrent) {
      this.handleClick(newCurrent);
    },
    handleClick(newCurrent) {
      if (this.current == newCurrent) return;
      this.$emit("changePage", newCurrent);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2427787_oz8zdkn3az7.css");
@import url("~@/styles/var.less");
i,
.iconContainer {
  color: #fff;
  background-color: #333333;
  border-radius: 5px;
  margin: 5px;
  vertical-align: bottom;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:not(.invalid):hover {
    background-color: @primary;
  }
}
i {
  font-style: normal;
  display: inline-block;
}
.currentIndex {
  background-color: @primary;
}
.invalid {
  cursor: not-allowed;
}
</style>
