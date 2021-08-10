<template>
 <button :class="type" @click="$emit('click')">
   <GoogleIcon v-if="type=='google'" />
   <FacebookIcon v-else-if="type=='facebook'" />
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
      validate: (value) => ['google'].includes(value),
    }
  }
  
}
</script>
<style scoped>
button {
  width: 3rem;
  height: 3rem;
  display:flex;
  align-items: center;
  justify-content: center;
  border: solid 0.1rem var(--border-color);
  margin: 0 0.3rem
}

button svg {
  width:100%;
  height: 100%
}

.google {
  background:transparent;
}

.facebook {
  background:transparent;
}
  
</style>