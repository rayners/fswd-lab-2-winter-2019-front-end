<template>
<form @submit.prevent="registerUser">
    <div v-if="errors">
        <p v-for="error in errors">{{ error }}</p>
    </div>
    <div>
        <label for="username">Username: </label>
        <input type="text" name="username" v-model="username">
    </div>
    <div>
        <p v-if="passwordsDontMatch">Passwords do not match</p>
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
    </div>
    <div>
        <label for="password_confirm">Confirm password:</label>
        <input type="password" name="password_confirm" v-model="password_confirm">
    </div>

    <button :disabled="cannotRegister">Register!</button>
</form>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
export default {
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            password_confirm: '',
            errors: [],
            usernameIsAvailable: false
        };
    },
    watch: {
        username: _.debounce(function() {
            this.isUsernameAvailable();
        }, 1000)
    },
    computed: {
        cannotRegister() {
            return !this.usernameIsAvailable || this.usernameBlank || this.passwordsDontMatch || !this.passwordsAreNotBlank;
        },
        usernameBlank() {
            return this.username === '';
        },
        passwordsDontMatch() {
            return this.password !== this.password_confirm;
        },
        passwordsAreNotBlank() {
            return this.password !== '' && this.password_confirm !== '';
        }
    },
    methods: {
        registerUser() {
            if (this.cannotRegister) {
                this.errors = ['Naughty'];
            } else {
                this.isUsernameAvailable();
                // ...
            }
        },
        isUsernameAvailable() {
            axios.post('/users/is-available', { username: this.username })
                .then(response => this.usernameIsAvailable = response.data.isAvailable);
        }
    }
}
</script>

<style>

</style>
