<template>
  <div id="app">
    <h2>Пробное приложение. Не обессудьте, если что не так. Лучше поправьте.</h2>
    <br/>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style scoped>
h2{
  text-align:center;
}
</style>
