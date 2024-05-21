<script setup></script>

<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style lang="css">
.base-button,
.base-button:active {
  padding: 16px 32px;
  border: 1px solid var(--text-blue-dark-color);
  border-radius: 8px;
  color: var(--text-blue-dark-color);
}

.base-button:hover {
  color: var(--text-blue-color);
  border-color: var(--text-blue-color);
}
</style>
