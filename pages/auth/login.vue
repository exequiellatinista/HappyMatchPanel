<template>
  <div class="containerLogin">
    <ColorSwitch class="colorSwitch"/>
    <div class="loginBox">
      <h1>HappyMatch</h1>
      <p>Inicie sesión con su usuario y contraseña </p>
      <input type="text" data-value="false" name="email" autocomplete="off" required="" class="">
      <input type="password" data-value="false" name="password" autocomplete="on" required="" class="jsx-3563808996">
      <div class="containerButton"><button class='buttonSubmit' type="submit">Acceder</button></div>
      <div class="socialButtons">
      <SocialLoginButton type='google' @click='loginWithGoogle' />
      <SocialLoginButton type='facebook' />
      </div>
      <span>
        Powered by <a>Pollux</a>
      </span>
    </div>
  </div>
</template>
<script>
import ColorSwitch from '@/components/ui/ColorSwitch.vue'
import SocialLoginButton from '@/components/auth/SocialLoginButton.vue'
export default {
  name: 'Login',
  components: {
    ColorSwitch,
    SocialLoginButton,
    },
  layout: 'auth',
  methods: {
   async loginWithGoogle() {
     try {
       const provider = new this.$fireModule.auth.GoogleAuthProvider()
       const result = await this.$fire.auth.signInWithPopup(provider)
       console.log(result)

     } catch (error) {
       // TODO: show toast
       console.error('Login error')
     }
   }
  },
  
}
</script>
<style scoped>
  .colorSwitch{
    position:absolute;
    left: calc(100% - 2rem);
    top: 1rem;
  }
  .containerLogin {
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginBox {
    position: relative;
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 28.125rem;
    height: 31.25rem;
    border: 1px solid var(--border-color);
    border-radius: 0.625rem;
    padding: 1.25rem 3.75rem;
    overflow: hidden;
    box-sizing: border-box;
  }

  .containerButton {
    width:100%;
    display: flex;
    justify-content: flex-end;
  }

  .buttonSubmit {
        font-weight: 500;
    font-size: 14px;
    background-color: black;
    border: none;
    padding: 7px 18px;
    border-radius: 5px;
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

   input {
     width:100%;
     padding: 16px 14px;
     border: 1px solid var(--border-color);
     border-radius: 0.3125rem;
     margin: 16px;
   }

   a {
     font-weight: bold;
     color: inherit;
     text-decoration: none;
   }

   span {
    position: absolute;
    left: 0;
    bottom: 1.25rem;
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    color: black;
   }

   .socialButtons {
     display: flex;
     width:100%;
     align-items: center;
     justify-content: center;
     margin-top:1rem
   }
</style>
