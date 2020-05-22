<template>
  <div id="app">
    <select v-model="selected" @change="onSelect">
      <option
        v-for="option in options"
        v-bind:value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <h4 :style="{ textAlign: 'left', marginLeft: '40px' }">{{ selected }}</h4>
    <Chart :data="$store.getters.chartData" />
  </div>
</template>

<script>
import Chart from "./components/Chart.vue";

export default {
  data() {
    return {
      selected: "sales",
      options: [
        { text: "Overall Sales", value: "sales" },
        { text: "Overall Orders", value: "orders" },
        { text: "Rate", value: "clickThruRate" },
        { text: "Page Views", value: "pageViews" },
      ],
    };
  },
  methods: {
    onSelect() {
      this.$store.dispatch("ACTION_CHART_DATA", this.selected);
    },
  },
  created() {
    this.$store.dispatch("ACTION_CHART_DATA", this.selected);
  },
  name: "App",
  components: {
    Chart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
