<script setup>
import '@/shared/assets/styles/main.css'
import '@/shared/assets/styles/normalize.css'
import TheHeader from '@/widget/TheHeader.vue'
import TheFooter from '@/widget/TheFooter.vue'
import NewsList from '@/widget/NewsList.vue'
import BaseButton from '@/shared/ui-kit/BaseButton.vue'
import { computed, reactive, ref } from 'vue'

const news = ref([])
const mainPage = ref(1)
const totalPages = ref(0)
const isNewsLoading = ref(false)
const errorData = reactive({ status: false, message: '' })

const isExistMoreNews = computed(
  () => mainPage.value + 1 <= totalPages.value || totalPages.value <= 0
)

const getNews = async (page) => {
  try {
    isNewsLoading.value = true
    if (!isExistMoreNews.value && totalPages.value > 0) return
    let result = await fetch(`https://flems.github.io/test/api/news/${page}/`)
    if (result.ok == false) throw new Error('Не удалось получить новости')
    result = await result.json()
    totalPages.value = result.nav.total
    mainPage.value = page
    news.value.push(...result.items)
  } catch (error) {
    errorData.status = true
    errorData.message = error.message || 'Непредвиденные ошибки'
    console.error(error.message)
  } finally {
    isNewsLoading.value = false
  }
}

getNews(1)
</script>

<template>
  <div class="app__container">
    <TheHeader />
    <main class="main" id="main">
      <div class="main__first-block">
        <div class="first-block__container base-container">
          <h1 class="first-block__title">Новости</h1>
        </div>
        <img src="/first-block-background.jpeg" alt="" class="first-block__background-image" />
      </div>
      <div class="main__content base-container">
        <NewsList :news-data="news" class="main__news-list" />
        <BaseButton
          class="main__load-more-button"
          v-if="isExistMoreNews && !isNewsLoading"
          @click="() => getNews(mainPage + 1)"
        >
          Загрузить еще
        </BaseButton>
        <p v-if="isNewsLoading">Новости загружаются...</p>
        <p class="error-message" v-if="errorData.status">{{ errorData.message }}</p>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.app__container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1 1 auto;
  margin: 0 0 72px 0;
}

.main__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__first-block {
  width: 100%;
  height: 250px;
  margin-bottom: 64px;
  position: relative;
}

.first-block__container {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 48px 0;
}

.first-block__title {
  font-size: 40px;
  font-weight: 700;
  bottom: 0;
}

.first-block__background-image {
  top: 0;
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main__load-more-button {
  margin-top: 72px;
}

.error-message {
  color: var(--text-red-color);
}
</style>
