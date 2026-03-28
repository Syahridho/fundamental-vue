<template>
  <button class="custom-button" @click="onclick" v-bind="buttonAttr" :id="`id-${buttonAttr.class}`">
    {{ isLoading ? 'Memuat...' : label }}
  </button>
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
  <a href="/home">Button</a>
  <a :href="url.link">Button</a>
  <a v-bind:href="url.link">Button</a>
  <a :[url.attr]="url.link">Button</a>
</template>

<script>
export default {
  // Nama komponen untuk dokumentasi/debugging
  name: 'MyButton',

  data() {
    return {
      buttonAttr: {
        disabled: false,
        class: 'text-xl bg-red-500',
        id: 1,
      },
      isLoading: false,
      date: new Date().toISOString(), // Menambahkan variabel date yang hilang
      url: {
        attr: 'href',
        link: '/home',
      },
    }
  },

  // 'props' digunakan agar komponen ini bisa menerima data dari induknya
  props: {
    label: {
      type: String,
      default: 'Klik Saya', // Teks default jika tidak ada input
    },
    buttonDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onclick() {
      console.log('pong')
      // Simulasi loading
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    // Menambahkan fungsi yang dipanggil di template
    formatDate(date) {
      return new Date(date).toLocaleDateString('id-ID')
    },
    toTitleDate(date) {
      return new Date(date).toLocaleString()
    },
  },
}
</script>

<style scoped>
/* Memberikan sedikit gaya agar tombol terlihat lebih menarik */
.custom-button {
  padding: 8px 16px;
  background-color: #42b883; /* Warna khas Vue */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #35495e;
}
</style>
