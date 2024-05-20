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
  grid-template-columns: repeat(1, 1fr);
  column-gap: 48px;
  row-gap: 68px;
}

@media screen and (min-width: 768px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .news-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.news-list_item {
  height: 100%;
  flex: 1 1 auto;
}
</style>
