<template>
<form @submit.prevent="doLogin">
    <p v-if="error">{{ error }}.</p>
    <label class="label" for="username">Username:</label>
    <input class="input" type="text" v-model="username">
    <label class="label" for="password">Password:</label>
    <input class="input" type="password" v-model="password">
    <button class="button is-primary">Login!</button>
</form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            error: false
        };
    },
    methods: {
        doLogin() {
            this.$store.dispatch('login', { 
                username: this.username,
                password: this.password
            })
                .then(
                    () => this.$router.push('/'),
                    (error) => {
                        this.error = error.response.data.error;
                    }
                );
        }
    }
}
</script>
