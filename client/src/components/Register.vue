<template>
    <div>
        <h1>Register</h1>

        <input type="email" name="email" placeholder="email" v-model="email"/>
        <br />
        <input type="password" name="password" placeholder="passoword" v-model="passoword"/>
        <br />
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data () {
    return {
        email:'abc',
        password:'123'
    };
  },
  watch: {
      email(value){
          console.log("email changed value", value);
      }
  },
  methods:{
      async register(){
          //   console.log("register button was clicked", this.email, this.password)
          //   const response =
          await AuthenticationService.register({
              email: this.email,
              password: this.password
          });
        //   console.log(response.data);
      }
  },
  mounted (){
      setTimeout(() =>{
          this.email = "hello world"
      }, 2000);
  }
}
</script>
