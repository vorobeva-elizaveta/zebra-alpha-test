<script setup>
import NewCardDate from './NewCardDate.vue'
defineProps({
  newData: Object
})
</script>

<template>
  <article class="new-card">
    <div class="new-card__container">
      <div class="new-card__cover">
        <img :src="newData.image" alt="" v-if="newData?.image" />
      </div>
      <div class="new-card__content">
        <div class="content__top-block">
          <NewCardDate :date="newData?.date" />
          <h1 class="new-card__name">{{ newData?.name }}</h1>
          <p class="new-card__preview-text">{{ newData?.previewText }}</p>
        </div>
        <div class="content__bottom-block">
          <div class="new-card__type">{{ newData?.type?.value }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="css" scoped>
.new-card {
  position: relative;
  background: var(--white);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}

.new-card__container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.new-card:has(.new-card__cover img) .new-card__content {
  border-radius: 0 0 16px 16px;
  border-left: 1px solid var(--text-blue-color);
  border-bottom: 1px solid var(--text-blue-color);
  border-right: 1px solid var(--text-blue-color);
}

.new-card:not(.new-card:has(.new-card__cover img)) {
  border-radius: 16px;
  border: 1px solid var(--text-blue-color);
}

.new-card__name {
  padding: 16px 0;
  color: var(--text-blue-color);
  font-size: 22px;
  line-height: 26.4px;
}

.new-card:hover .new-card__name {
  color: var(--text-blue-dark-color);
}

.new-card__preview-text {
  font-size: 20px;
  line-height: 26px;
  color: var(--text-black-color);
}

.new-card__cover {
  max-height: 250px;
}

.new-card__cover img {
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new-card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  flex: 1 1 auto;
}

.new-card__type {
  width: fit-content;
  margin-top: 16px;
  padding: 4px 16px;
  border-radius: 9999px;
  font-weight: normal;
  line-height: 19.6px;
  background: var(--blue-bg);
}
</style>
