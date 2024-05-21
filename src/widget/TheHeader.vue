<script setup></script>

<template>
  <header id="header" class="header">
    <div class="header__container base-container">
      <picture class="header__logo">
        <source :srcset="$basePath + '/logo.webp'" type="image/webp" />
        <img :src="$basePath + '/logo.svg'" alt="alpha-logo" />
      </picture>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header {
  width: 100%;
  height: 123px;
  display: flex;
  align-items: center;
  background: var(--white);
  box-shadow: 0px 8px 16px 0px #00000014;
}

.header__logo source,
.header__logo img {
  width: 150px;
}
</style>
