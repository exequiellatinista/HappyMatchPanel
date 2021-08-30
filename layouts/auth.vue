<template>
  <div class="containerAuth">
    <Nuxt />
  </div>
</template>
<script>
export default {
  layout: 'empty',
  middleware: 'auth'
}
</script>
