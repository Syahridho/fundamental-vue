<script setup>
import { inject, provide, readonly, ref } from 'vue'
import Button from './components/Button.vue'
import FancyButton from './components/FancyButton.vue'
import BaseLayout from './components/BaseLayout.vue'
import CompositionComponent from './components/CompositionComponent.vue'

const disabled = ref(false)

const makeDisabled = () => {
  disabled.value = !disabled.value
}

const count = ref(0)

const increment = (counter) => {
  count.value = count.value + counter
}

const addFive = () => {
  increment(5)
}

const nama = ref('jackowi')

function updateName() {
  nama.value = 'PraboWHO'
}

const message = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')

const version = ref('1.0')

provide('name', {
  nama,
  appVersion: readonly(version),
  updateName,
})

const titleApp = inject('nameApp')

const user = {
  id: 10,
  name: 'syahridho',
}
</script>

<template>
  <nav>
    <router-link to="/">Ke Root (/)</router-link> |
    <router-link to="/home">Ke Home (/home)</router-link>
    <router-link :to="'/user/' + 123">Lihat User 123</router-link>
    <router-link :to="`/user/${user.id}`">Lihat {{ user.name }}</router-link>
  </nav>

  <hr />

  <router-view></router-view>
  <h1>{{ titleApp }}</h1>
  <title>{{ titleApp }}</title>
  <Button title="Salmon" @click="makeDisabled" :disabled class="halo" />
  <Button :title="count" @click="increment(2)" />
  <Button :title="count" @click="(event) => console.log(event)" class="asd" />
  <Button
    :title="count"
    @click="(event) => console.log(event)"
    @mouseover="(event) => console.log(event)"
  />

  <input name="test" id="test" @keyup.enter="() => console.log('test')" />
  <br />
  <br />
  <br />
  <!--input -->
  <p>{{ nama }}</p>
  <input type="text" v-model.lazy.number="nama" />
  <br />
  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
  <br />
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <br />
  <br />
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <br />
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <br />
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <!-- `picked` is a string "a" when checked -->
  <input type="radio" v-model="picked" value="a" />

  <!-- `toggle` is either true or false -->
  <input type="checkbox" v-model="toggle" />

  <!-- `selected` is a string "abc" when the first option is selected -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>

  <FancyButton> Test </FancyButton>
  <FancyButton></FancyButton>

  <BaseLayout>
    <template #header>
      <!-- content for the header slot -->
      <h1>hiii</h1>
    </template>
    <template #footer>
      <h1>Footer</h1>
    </template>
  </BaseLayout>

  <CompositionComponent />
</template>

<style>
nav {
  padding: 20px;
  background: #eee;
}
.router-link-active {
  font-weight: bold;
  color: green;
} /* Style otomatis untuk menu aktif */
</style>
