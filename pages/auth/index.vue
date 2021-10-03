<template>
  <div class="containerLogin">
    <div class="loginBox">
      <h1>HappyMatch</h1>
      <form v-if="!isRegisterMode" class="loginForm">
        <p>Inicie sesión con su usuario y contraseña</p>
        <input
          v-model="userName"
          class="loginInput"
          type="text"
          data-value="false"
          autocomplete="off"
          required="true"
          placeholder="Correo electronico"
        />
        <input
          v-model="userPassword"
          class="loginInput"
          type="password"
          data-value="false"
          autocomplete="on"
          required="true"
          placeholder="Password"
        />
        <div class="containerButton">
          <button
            class="buttonSubmit"
            type="submit"
           
              @click.prevent="loginWithUserNameAndEmail()"
          >
            Acceder
          </button>
        </div>
        <div class="socialButtons">
          <p class="register" @click="changeRegisterMode">Registrarse</p>
        </div>
      </form>
      <form v-else class="registerForm">
         <div class="backButton" @click="isRegisterMode=false"><img src="@/assets/icons/backArrow.svg"></div>
        <label for="username">Nombre de usuario:</label>
        <BaseRegisterInput
          id="username"
          :modelo="newUserName"
          clase="registerInput"
          type="text"
          data-value="false"
          autocomplete="off"
          required="true"
          @input="(value) => newUserName=value"
         
        />
        <label for="email">Correo electronico:</label>
        <BaseRegisterInput
          id="email"
          :modelo="newEmail"
          clase="registerInput"
          type="email"
          data-value="false"
          autocomplete="on"
          required="true"
          @input="(value) => newEmail=value"
        />
        <label for="password">Password:</label>
        <BaseRegisterInput
          id="password"
          :modelo="newPassword"
          clase="registerInput"
          type="password"
          data-value="false"
          autocomplete="off"
          required="true"
          @input="(value) => newPassword=value"
        />
        <label for="confirmpassword">Confirme password:</label>
        <BaseRegisterInput
          id="confirmpassword"
          :modelo="newPasswordConfirm"
          clase="registerInput"
          type="password"
          data-value="false"
          autocomplete="off"
          required="true"
          @input="(value) => newPasswordConfirm=value"
        />
        <div class="containerButton">
          <button class="buttonRegister" @click.prevent="registerClient()">
            Registrarse
          </button>
        </div>
      </form>
      <span class="poweredSpan"> Powered by <a>Pollux</a> </span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import loginServices from '@/services/loginServices.js'
import BaseRegisterInput from '@/components/auth/BaseRegisterInput.vue'

export default {
  name: 'Login',
    components: {
    BaseRegisterInput
  },
  layout: 'auth',
  data: () => ({
    isRegisterMode: false,
    userPassword: '',
    userName: '',
    newUserName: '',
    newPassword: '',
    newEmail: '',
    newPasswordConfirm: '',
  }),

  methods: {
    ...mapMutations({
      setUser: 'authentication/setUser',
      setClient: 'data/setClient',
    }),
    loginWithUserNameAndEmail() {
this.$fire.auth.signInWithEmailAndPassword( this.userName, this.userPassword)
  .then((userCredential) => {
    // Signed in
    console.log(userCredential)
    const user = userCredential.user.displayName;
    console.log(user)
    // ...
    userCredential&&
    this.loginWithUserName(user)
  })
  .catch((error) => {
    console.log(error)
  });
    },
    async loginWithGoogle() {
      try {
        const provider = new this.$fireModule.auth.GoogleAuthProvider()
        const result = await this.$fire.auth.signInWithPopup(provider)
        const user = result.user
        this.setUser(user)
      } catch (error) {
        // TODO: show toast
        console.error('Login error', error)
      }
    },
    changeRegisterMode() {
      this.isRegisterMode = !this.isRegisterMode
    },

    async loginWithUserName(userName) {
      const post = {
        username: userName,
        password: this.userPassword,
      }
      try {
        await this.$axios.$post(`/api`, post).then((result) => {
          const { id, locals } = result.data
          this.setClient({ id, locals })
          this.$router.push('questions')
        })
      } catch (error) {
        console.error('Login error', error)
      }
    },
    async registerClient(data) {
      try {
      await this.$fire.auth.createUserWithEmailAndPassword(this.newEmail, this.newPassword)
      this.updateNameUser()
      } 
      catch (error) {
        console.error(error) // TODO: show toast
      }
      loginServices.get().then((user) => console.log(user))
    },
    async updateNameUser(){
      await this.$fire.auth.currentUser.updateProfile({
        displayName: this.newUserName
      }).then(this.isRegisterMode=false)
      console.log(this.$fire.auth.currentUser)
    },
    validateUser(){
      const re = /^[a-zA-Z0-9]*$/
      const isUserValid = re.test(this.newUserName)
      isUserValid&&console.log('cadena valida')

    }
  },
}
</script>
<style scoped>
.colorSwitch {
  position: absolute;
  left: calc(100% - 2rem);
  top: 1rem;
}
.containerLogin {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginBox {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 28.125rem;
  min-height: 31.25rem;
  border: 1px solid var(--border-color);
  border-radius: 0.625rem;
  padding: 2.5rem 3.75rem;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.5s 0s ease;
}

.registerForm {
  display: grid;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
}

.registerForm label {
  width: 100%;
}

.loginForm {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.containerButton {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

button {
  font-weight: 500;
  font-size: 0.875rem;
  background-color: black;
  border: none;
  padding: 0.4375rem 1.125rem;
  border-radius: 0.3125rem;
  overflow: hidden;
  cursor: pointer;
  color: white;
  margin: 0.5rem 0;
}

p {
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
}

h1 {
  margin: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
}

.loginInput {
  width: 100%;
  padding: 1rem 0.875rem;
  border: 1px solid var(--border-color);
  border-radius: 0.3125rem;
  margin: 1rem 0;
}

.registerInput {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.3125rem;
  margin: 0.5rem 0 1.5rem 0;
}

a {
  font-weight: bold;
  color: inherit;
  text-decoration: none;
}

.poweredSpan {
  position: absolute;
  left: 0;
  bottom: 2%;
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  color: black;
}

.socialButtons {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.register {
  cursor: pointer;
  font-weight: bold;
}

.backButton {
 position: absolute;
 top: 1rem;
 left: 1rem;
 width: 1rem;
 height: 1rem;
 cursor: pointer;
}


</style>
