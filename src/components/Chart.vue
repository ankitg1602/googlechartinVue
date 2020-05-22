<template>
  <g-chart type="LineChart" :data="data" :options="chartOptions" />
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  props: ["data"],
  components: {
    GChart,
  },
};
</script>
