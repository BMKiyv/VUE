/* eslint-disable */
export default {

    state: {
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

    },
    getters: {
        getTasks(state) {
            return state.tasks
        }

    },

    mutations: {
        updateTasks(state, tasks) {
            state.tasks = tasks
        },
        addingTask(state, item) {

            let obj = {};
            obj.text = item;
            obj.isEditable = false;
            obj.isCompleted = false;

            return state.tasks.push(obj);
        },
        removingTask(state, index) {

            let ind = state.tasks.indexOf(index);
            console.log(ind);
            state.tasks.splice(ind, 1)
            return state.tasks
        },
        changEditingTask(state, task) {

            task.isEditable ? task.isEditable = false : task.isEditable = true;
            return state.tasks
        },
        editingTask(state, e) {
            let ind = state.tasks.indexOf(e);
            let msg = e.text
            console.log(ind)
            state.tasks[ind].text = msg
            console.log(state.tasks[ind].text)
            return state.tasks

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