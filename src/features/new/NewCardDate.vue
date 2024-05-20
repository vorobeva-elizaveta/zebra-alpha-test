<script setup>
import { computed } from 'vue'

const props = defineProps({ date: Number })
const dateFormat = computed(() => new Date(props.date))
const day = computed(() => dateFormat.value.getDate())
const monthName = computed(() => dateFormat.value.toLocaleString('en-US', { month: 'long' }))
const year = computed(() => dateFormat.value.getFullYear())
</script>

<template>
  <div class="new-card-date">
    <p class="new-card-date__day">
      {{ day }}
    </p>
    <p class="new-card-date__month-year">
      {{ monthName }} <br />
      {{ year }}
    </p>
  </div>
</template>

<style lang="css">
.new-card-date {
  display: flex;
  color: var(--text-gray-light-color);
}
.new-card-date__day {
  font-size: 36px;
}
.new-card-date__month-year {
  margin-left: 4px;
}
</style>
