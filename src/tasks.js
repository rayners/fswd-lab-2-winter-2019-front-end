import axios from 'axios';

var tasks = [];

export default {
    tasks,
    loadTasks() {
        console.log('tasks.js loadtasks');

        if (this._loadingPromise) {
            return this._loadingPromise;
        }

        this._loadingPromise = axios.get('/tasks')
            .then(response => this.tasks = response.data)

        return this._loadingPromise;
    },

    numberOfTasks() {
        return this.tasks.length;
    }
}