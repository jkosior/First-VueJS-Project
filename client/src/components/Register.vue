<template>
    <div>
        <h1>Register</h1>

        <input type="email" name="email" placeholder="email" v-model="email"/>
        <br />
        <input type="password" name="password" placeholder="password" v-model="password"/>
        <br />
        <div class="error" v-html="error" />
        <br />
        <button @click="register">Register</button>
    </div>
</template>

<script>

/* eslint-disable no-console */
/* eslint-disable indent */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
        email: '',
        password: '',
        error: null
    }
  },
  watch: {
      email (value) {
          console.log('email changed value', value)
      }
  },
  methods: {
      async register () {
          try {
              await AuthenticationService.register({
                  email: this.email,
                  password: this.password
              })
          } catch (error) {
              this.error = error.response.data.message
          }
      }
  }
  // mounted () {
  //     setTimeout(() => {
  //         this.email = 'hello world'
  //     }, 2000)
  // }
}
</script>
<style scoped>
.error{
    color:red;
}
</style>
