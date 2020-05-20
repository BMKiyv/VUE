/* eslint-disable */
export default {

    state: {
        user:{
            name:'',
            email:'',
        tasks: [{
                text: 'fucking tasks',
                isEditable: false,
                isCompleted: false
            },
            {
                text: 'fucking fucking fuck',
                isEditable: false,
                isCompleted: false
            }
        ]
    }

    },
    getters: {
        getTasks(state) {
            return state.user.tasks
        }

    },
    getUser(state){
        return state.user.name
    },
    getEmail(state){
        console.log(state.user.email)
        return state.user.email
    },

    mutations: {
        updateTasks(state, tasks) {
            state.user.tasks = tasks
        },
        addingTask(state, item) {

            let obj = {};
            obj.text = item;
            obj.isEditable = false;
            obj.isCompleted = false;

            return state.user.tasks.push(obj);
        },
        removingTask(state, index) {

            let ind = state.user.tasks.indexOf(index);
            console.log(ind);
            state.user.tasks.splice(ind, 1)
            return state.user.tasks
        },
        changEditingTask(state, task) {

            task.isEditable ? task.isEditable = false : task.isEditable = true;
            return state.user.tasks
        },
        editingTask(state, e) {
            let ind = state.user.tasks.indexOf(e);
            let msg = e.text
            console.log(ind)
            state.user.tasks[ind].text = msg
            console.log(state.user.tasks[ind].text)
            return state.user.tasks

        },
          addUser(state, item) {
            let obj = {};
            obj.name = item.name
            obj.email = item.email
            obj.tasks = state.user.tasks
            console.log(obj)
            return state.user
        }

    },
    actions: {
        adding({ state, commit }, e) {
            new Promise((resolve, reject) => {
                    commit('editingTask', e)

                })
                .then(console.log(state.tasks))
                .then(e.isEditable = false, e.isCompleted = false)
        }
    }


}