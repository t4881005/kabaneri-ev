<script setup lang="ts">
const emit = defineEmits<{
  openKabaneri: []
}>()
</script>

<template>
  <div class="container">
    <div class="menu">
      <h1>期待値計算アプリ</h1>

      <button
        class="machine-button"
        @click="emit('openKabaneri')"
      >
        スマスロ カバネリ
      </button>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  background: linear-gradient(180deg, #1b1b1b 0%, #0d0d0d 100%);
}

.menu {
  padding-top: 60px;
}

h1 {
  color: white;
  text-align: center;
  margin-bottom: 32px;
}

.machine-button {
  width: 100%;
  padding: 24px;

  font-size: 22px;
  font-weight: bold;

  color: white;
  background: #ff3b30;

  border: none;
  border-radius: 18px;
}
</style>