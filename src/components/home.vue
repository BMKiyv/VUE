/* eslint-disable */
<template>
<div>
  <h2> Для начала давайте познакомимся:</h2>
  <div class="form-group p-4">
    <label for="email">Email:</label>
    <input type="email"
      class="form-control"
      id="email"
      aria-describedby="emailHelp"
      v-model="email"
      >
    <small id="emailHelp" class="form-text text-muted">Мы никому не передадим твои личные данные. Обещаем!</small>
  </div>
  <div class="form-group p-4">
    <label for="name">Ваше имя:</label>
    <input type="text"
      class="form-control"
      id="name"
      v-model="name"
      >
  </div>
  <button
  class="btn btn-primary ml-4"
    @click="addStoreUser()"
  >Добавить:</button>
  <router-link tag="button"
    :to="'/todos/'+name"
    class="btn btn-primary ml-4"
    @click="addUser()"
    >
    Познакомиться:</router-link>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      name: ''
    }
  },
  methods: {
    addUser () {
      this.$router.push('/todos/:name')
    },
    addStoreUser () {
      console.log(this.email, this.name)
      let user = {}
      user.email = this.email
      user.name = this.name
      console.log(this.email, this.name)
      this.$store.commit('addUser', user)
    }
  },
  computed: console.log(this.Store)
}
</script>
