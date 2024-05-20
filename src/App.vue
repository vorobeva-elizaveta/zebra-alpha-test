<script setup>
import './shared/assets/styles/main.css'
import './shared/assets/styles/normalize.css'
import TheHeader from './widget/TheHeader.vue'
import TheFooter from './widget/TheFooter.vue'
import NewsList from './widget/NewsList.vue'
import { ref } from 'vue'

const news = ref([])
const mainPage = ref(1)
const totalPages = ref(0)

const getNews = async (page) => {
  try {
    if (mainPage.value > totalPages.value && totalPages.value > 0) return
    let result = await fetch(`https://flems.github.io/test/api/news/${page}/`)
    if (result.ok == false) throw new Error('Не удалось получить новости')
    result = await result.json()
    totalPages.value = result.nav.total
    mainPage.value = page
    news.value = result.items
  } catch (error) {
    console.log(error)
  }
  return
}

getNews(1)
</script>

<template>
  <div class="app__container">
    <TheHeader />
    <main class="main" id="main">
      <div class="main__content base-container">
        <NewsList :news-data="news" />
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
}
</style>
