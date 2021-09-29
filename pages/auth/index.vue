<template>
  <div class="containerLogin">
    <ColorSwitch class="colorSwitch" />
    <div class="loginBox">
      <h1>HappyMatch</h1>
      <form v-if="!isRegisterMode" class="loginForm">
        <p>Inicie sesión con su usuario y contraseña</p>
        <input
          v-model="userName"
           class="loginInput"
          type="text"
          data-value="false"
          name="email"
          autocomplete="off"
          required=""
          placeholder="Usuario"
        />
        <input
          v-model="userPassword"
          class="loginInput"
          type="password"
          data-value="false"
          name="password"
          autocomplete="on"
          required=""
          placeholder="Password"
        />
        <div class="containerButton">
          <button
            class="buttonSubmit"
            type="submit"
            @click.prevent="loginWithUserName()"
          >
            Acceder
          </button>
        </div>
        <div class="socialButtons">
          <p class="register" @click="changeRegisterMode">Registrarse</p>
        </div>
      </form>
      <form v-else class="registerForm">
        <label>Nombre de usuario:</label>
        <input class="registerInput"/>
        <label>Correo electronico:</label>
        <input class="registerInput"/>
        <label>Password:</label>
        <input class="registerInput"/>
        <label>Confirme password:</label>
        <input class="registerInput"/>
        <div class="containerButton"><button class="buttonRegister">Registrarse</button></div>
      </form>
      <span class="poweredSpan"> Powered by <a>Pollux</a> </span>
    </div>
  </div>
</template>
<script>
import ColorSwitch from '@/components/ui/ColorSwitch.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  components: {
    ColorSwitch,
  },
  layout: 'auth',
  data: () => ({
    isRegisterMode: false,
    userPassword: '',
    userName: '',
  }),
  methods: {
    ...mapMutations({
      setUser: 'authentication/setUser',
      setClient: 'data/setClient',
    }),
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

    async loginWithUserName() {
      const post = {
        username: this.userName,
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
  transition:all 0.5s 0s ease;
}

.registerForm {
  display: grid;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
}

.registerForm input {
  width:100%
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
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.3125rem;
  margin: 0.5rem 0;
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
</style>
