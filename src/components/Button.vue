<script setup>
const props = defineProps({
  title: String,
  likes: {
    type: Number,
    default: 2000,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
console.log(props.title)
</script>
<template>
  <button :disabled>{{ title }} {{ likes }}</button>
</template>
<style scoped></style>
