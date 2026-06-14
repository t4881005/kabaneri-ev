<script setup lang="ts">
import { ref } from 'vue'

import MenuPage from './pages/MenuPage.vue'
import KabaneriPage from './pages/KabaneriPage.vue'

const currentPage = ref<'menu' | 'kabaneri'>('menu')
</script>

<template>
  <MenuPage
    v-if="currentPage === 'menu'"
    @open-kabaneri="currentPage = 'kabaneri'"
  />

  <KabaneriPage
    v-else
    @back="currentPage = 'menu'"
  />
</template>