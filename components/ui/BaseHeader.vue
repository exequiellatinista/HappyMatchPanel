<template>
  <header>
      <LogoIcon class="icons"/>
      <h1>HappyMatch Panel</h1>
  </header>
</template>
<script>
import LogoIcon from '@/assets/icons/logo.svg?inline'
export default {
    name: 'BaseHeader',
    components: {
        LogoIcon,
    }
}
</script>
<style scoped>
    header {
        display: flex;
        height: 3rem;
        width: 100%;
        align-items:left;
        justify-content: center;
        position: fixed;
        flex-direction: column;
        border-bottom: solid 1px;
        background:#243746;
    }
    .icons {
        height: 2rem;
        width: 2rem;
    }

    h1 {
       position: absolute;
       left: 3rem;
       color:white
    }
</style>