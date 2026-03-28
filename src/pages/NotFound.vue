<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Ups! Halaman yang kamu cari tidak ada.</p>
    <router-link to="/">Kembali ke Beranda</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
h1 {
  font-size: 5rem;
  color: #42b883;
}
</style>
