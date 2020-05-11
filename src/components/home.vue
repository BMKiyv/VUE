/* eslint-disable indent */
<template>
<div>
  <h2> Для начала давайте познакомимся:</h2>
  <div class="form-group p-4">
    <label for="Email">Email:</label>
    <input type="email"
      class="form-control"
      id="Email"
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
      console.log(this.email, this.name)
    }
  }
}
</script>
