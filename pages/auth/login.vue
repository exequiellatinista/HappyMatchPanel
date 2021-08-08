<template>
  <div class="containerLogin">
    <ColorSwitch />
    <div class="loginBox">
      <h1>HappyMatch</h1>
      <p>Inicie sesión con su usuario y contraseña </p>
      <input type="text" data-value="false" name="email" autocomplete="off" required="" class="">
      <input type="password" data-value="false" name="password" autocomplete="on" required="" class="jsx-3563808996">
      <div class="containerButton"><button type="submit">Acceder</button></div>
      <span>
        Powered by <a>Pollux</a>
      </span>
    </div>
  </div>
</template>
<script>
import ColorSwitch from '@/components/ui/ColorSwitch.vue'
export default {
  name: 'Login',
  components: {
    ColorSwitch,
    },
  layout: 'auth',
}
</script>
<style scoped>
  .containerLogin {
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginBox {
    position: relativeg;
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 28.125rem;
    height: 31.25rem;
    border: 1px solid var(--border-color);
    border-radius: 0.625rem;
    padding: 1.25rem 3.75rem;
    overflow: hidden;
  }

  .containerButton {
    width:100%;
    display: flex;
    justify-content: flex-end;
  }

  button {
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
    font-size: 14px;
    text-align: center;
  }

  h1 {
    margin: 1rem;
    font-weight: 400;
    font-size: 24px;
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
    font-size: 14px;
    color: black;
   }
</style>
