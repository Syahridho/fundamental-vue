<!-- Composition Component lebih ke javasript biasa -->

<script setup>
import { inject } from 'vue'

const { nama, updateName } = inject('name')

const showName = () => console.log(nama)
</script>

<template>
  <h1>{{ nama }}</h1>
  <button @click="updateName">Show Name Composition</button>
</template>
