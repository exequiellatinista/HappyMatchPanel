<template>
 <button @click="$emit('click')">
   <div v-if="type==='Google'" class="Google">
    <GoogleIcon/>
    <p>Iniciar sesión con Google<p/>
   </div>
   <div v-else class="Facebook">
    <FacebookIcon/>
    <p>Iniciar sesión con Facebook<p/>
   </div>
 </button>
</template>
<script>
export default {
  name: 'SocialLoginButton',
  components:{
    FacebookIcon: () => import('@/assets/icons/facebookLogo.svg?inline'),
    GoogleIcon: () => import('@/assets/icons/googleLogo.svg?inline'),
  },
  props: {
    type: {
      type: String,
      required: true,
      validate: (value) => ['Google'].includes(value),
    }
  }
  
}
</script>
<style scoped>
button {
  width: 100%;
  height: 2rem;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem 0.3rem;
  box-sizing: border-box;
  cursor: pointer;
  border:none;
  border-radius: 0.5rem; 
}
button div {
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem; 
  border: solid 0.1rem var(--border-color);
  color:white;
}

button div:nth-last-child {
  display:none;
}
button svg {
  width:4rem;
  height: 100%;
  fill:white;
}

.Google {
  background:#de5246;
}

.Facebook {
  background:#3b5998;
}
  
</style>