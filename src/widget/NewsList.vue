<script setup>
import NewCard from '@/features/new/NewCard.vue'
defineProps({
  newsData: Array
})
</script>

<template>
  <div class="news-list">
    <NewCard
      class="news-list_item"
      v-for="newData in newsData"
      :key="newData.code"
      :new-data="newData"
    />
  </div>
</template>

<style lang="css" scoped>
.news-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 48px;
  row-gap: 68px;
}

.news-list_item {
  height: 100%;
  flex: 1 1 auto;
}
</style>
