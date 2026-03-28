<script setup>
import { useAttrs } from 'vue'

// defineOptions({
//   inheritAttrs: false,
// })

const attrs = useAttrs()
console.log(attrs)

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

const disabledColor = '#000'
const availableColor = '#fff'
</script>
<template>
  <label>inibutton</label>
  <button
    v-bind="$attrs"
    :disabled
    class="button"
    :class="{ disabled: disabled }"
    :style="{ color: disabled ? disabledColor : availableColor }"
  >
    {{ title }}
  </button>
</template>

<style scoped>
.button {
  background-color: salmon;
  border: none;
  color: white;
  padding: 2px 4px;
}

.disabled {
  /* opacity: 0.5; */
  background-color: gray;
}
</style>
