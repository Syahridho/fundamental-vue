<!-- Composition Component lebih ke javasript biasa -->

<script setup>
const name = 'arjuna'

const showName = () => console.log(name)
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="showName">Show Name Composition</button>
</template>
