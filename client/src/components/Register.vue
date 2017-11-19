<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="blue" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <form autocomplete="off">
                        <v-text-field
                            name="email"
                            label="Email"
                            value="email"
                            class="input-group-focused"
                            v-model="email"
                        >
                        </v-text-field>
                        <br />
                        <v-text-field
                          name="password"
                          label="Password"
                          hint="At least 8 characters"
                          v-model="password"
                          min="8"
                          :type="'password'"
                          counter
                        ></v-text-field>
                        </v-text-field>
                        <br />
                        <div
                            id="error"
                            v-html="error"
                        />
                        <br />
                        <v-btn class="blue" @click="register" dark>Register</v-btn>
                    </form>
                </div>
            </div>
        </v-flex>
    </v-layout>
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
  methods: {
      async register () {
          try {
              const response = await AuthenticationService.register({
                  email: this.email,
                  password: this.password
              })
              this.$store.dispatch('setToken', response.data.token)
              this.$store.dispatch('setUser', response.data.user)
          } catch (error) {
              this.error = error.response.data.error
          }
      }
  }
}
</script>
<style scoped>
    #error{
        color:red;
    }
    input{
        margin-bottom: 3px;
    }
</style>
