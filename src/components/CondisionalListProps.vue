<script setup>
import OptionsComponent from './OptionsComponent.vue'
import MainButton from './MainButton.vue'
import Button from './Button.vue'
import { computed, reactive, ref } from 'vue'
const name = 'asep'

const bodyPost = '<h1 style="color:red;">Hallo World</h1>'

const id = 'blog-1'
const blogClass = 'text-2xl flex flex-col'

const count = ref(1)

const increment = () => {
  count.value++
}

setTimeout(() => {
  count.value++
}, 1000)

const user = reactive({ name: 'sas', age: 24 })

const author = reactive({
  name: 'JK Rowling',
  books: [
    {
      title: 'book 1',
      releaseDate: '1999',
      reviews: [5, 4, 3],
      avgReview: 4,
    },
    {
      title: 'book 2',
      releaseDate: '2002',
      reviews: [5, 4, 3, 1, 2],
      avgReview: 9,
    },
    {
      title: 'book 3',
      releaseDate: '2009',
      reviews: [5],
      avgReview: 5,
    },
  ],
})

const countBooks = ref(0)

const incrementBooks = () => {
  countBooks.value++
}

const publishedBooksMessage = computed(() => {
  console.log('test')
  return author.books.length > 0 ? 'Published Yes' : 'Published No'
})

const addBook = () => {
  author.books.push('harry')
}

const type = 'B'

const showAuthor = ref(false)
</script>

<template>
  <ul>
    <template v-for="(item, index) in author.books" :key="index">
      <Button v-if="item.avgReview > 5" :title="item.title" />
    </template>
  </ul>

  <ol>
    <li v-for="(item, index) in 10" :key="index">sas</li>
  </ol>

  <ul>
    <li v-for="(data, key, index) in author" :key="key">{{ index }}. {{ key }}: {{ data }}</li>
  </ul>
  <li v-for="({ title, releaseDate, reviews }, index) in author.books" :key="`book-${index}`">
    {{ index + 1 }}. {{ title }} tahun {{ releaseDate }},
    <span v-for="(review, reviewindex) in reviews" :key="`review-${reviewindex}`">{{
      review
    }}</span>
  </li>

  <br />
  <br />
  <br />

  <li v-for="(book, index) in author.books" :key="`book-${index}`">
    {{ index + 1 }}. {{ book.title }} tahun {{ book.releaseDate }}
  </li>

  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <div>
    <h1>
      {{ author.name }}
      <span v-if="author.books.length > 1">Have {{ author.books.length }} Books</span>
      <span v-else-if="author.books.length === 1">Have a book</span>
      <span v-else>Dont have books</span>
    </h1>

    <p>{{ publishedBooksMessage }}</p>

    <button @click="addBook">Tambah Buku</button>

    <button @click="author.books = []">Kosongkan Buku</button>
  </div>
  <div>
    <h1 class="red"><OptionsComponent /></h1>
    <h1><composition-component /></h1>
    <h2>{{ name }}</h2>
  </div>
  <div :id :class="blogClass">
    {{ bodyPost }}
  </div>

  <div v-html="bodyPost"></div>

  <MainButton label="Tekan" />
  <Button :title="`Tombol`" />
  <Button :title="`Kirim`" />

  <button @click="increment">{{ count }}</button>
  <div>
    <h1>{{ user.name }}</h1>
    <button @click="user.age++">
      {{ user.age }}
    </button>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
</style>
