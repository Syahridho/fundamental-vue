<!-- Options Component Menggunakan OOP  -->

<script>
export default {
  data() {
    return {
      name: 'syahridho',
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    },
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="showName">Show Name Optional</button>
</template>
