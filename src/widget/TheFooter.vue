<script setup></script>

<template>
  <footer id="footer" class="footer">
    <div class="footer__container base-container">
      <div class="footer__content">
        <picture class="footer__logo">
          <source :srcset="$basePath + '/logo.webp'" type="image/webp" />
          <img :src="$basePath + '/logo.svg'" alt="alpha-logo" />
        </picture>
        <p class="footer__label">©alpha, 2023</p>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  height: 202px;
  background: var(--blue-bg);
}

.footer__container {
  display: flex;
  align-items: center;
  height: 100%;
}

.footer__logo source,
.footer__logo img {
  width: 114px;
}

.footer__label {
  margin-top: 16px;
  color: var(--text-gray-dark-color);
  font-size: 1rm;
}
</style>
