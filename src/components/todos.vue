<template>
    <div>
        <h2>А теперь посмотрим, что {{ name }} хочет:</h2>
        <h3> Кому письма слать:{{ email }}</h3>
         <ul class="list-group">
           <li v-for="task of getTasks"
              :key="task.index"
              :task="task"
               class="list-group-item">
              <div class="row">
                <input class="col-sm-8"
                      type="text"
                      v-if="task.isEditable"
                      v-model="text"
                      @change="editTask(task)"
                      >
                <span class="col-sm-8"
                    :class="{'strike': task.isCompleted}"
                      v-else @click="task.isCompleted=!task.isCompleted"
                      >{{task.text}}</span>
                <button class="btn btn-danger col-sm-1 mr-2"
                        :task="task"
                        @click="removeTask(task)"
                >Удалить</button>
                <button class="btn btn-info col-sm-2 mr-1"
                        :task="task"
                        @click="changEditing(task)"
                >Редактировать</button>
              </div>
            </li>
         </ul>
        <h3>Что-то добавить?Пожалуйста!</h3>
           <div class="row mb-2">
                <input class="col-sm-8"
                    v-model="addingT"
                       >
                       <button class="btn btn-info ml-1"
                        @click="addTask()"
                         >Добавить</button>
            </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  props: ['name', 'email'],
  data () {
    return {
      addingT: '',
      task: {},
      text: ''
    }
  },
  methods: {
    ...mapMutations(['addingTask', 'removingTask', 'changEditingTask', 'editingTask']),
    ...mapActions('tasks', ['adding']),
    addTask () {
      if ((this.addingT) !== '') {
        this.$store.commit('addingTask', this.addingT)
      }
      this.addingT = ''
    },
    removeTask (t) {
      console.log(t)
      if ((t.isCompleted === true)) {
        this.$store.commit('removingTask', t)
      }
    },
    changEditing (task) {
      this.$store.commit('changEditingTask', task)
    },
    editTask (task) {
      console.log(this.text)
      task.text = this.text
      this.$store.dispatch('adding', task)
      this.text = ''
    }
  },
  computed: mapGetters(['getTasks'])

}

</script>

<style scoped>
span{
  cursor:pointer;
}
.strike{
  color:chartreuse;
  text-decoration: line-through;
}
</style>
