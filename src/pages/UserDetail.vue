<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Mengambil parameter 'id' dari URL (/user/123 -> id-nya 123)
const userId = computed(() => route.params.id)
</script>

<template>
  <div class="card">
    <h1>Profil Pengguna</h1>
    <p>
      Menampilkan data untuk User ID: <strong>{{ userId }}</strong>
    </p>

    <router-link to="/">Kembali ke Beranda</router-link>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
