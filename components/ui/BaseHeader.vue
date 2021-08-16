<template>
  <header>
    <nuxt-link to="/" class="logoAndTitle">
      <LogoIcon class="icons" />
      <h1>HappyMatch Panel</h1>
    </nuxt-link>
    <div class="profile">
      <img src="@/assets/images/default-profile.png"/>
    </div>
  </header>
</template>
<script>
import LogoIcon from '@/assets/icons/logo.svg?inline'
export default {
  name: 'BaseHeader',
  components: {
    LogoIcon,
  },
}
</script>
<style scoped>
header {
  position: fixed;
  display: grid;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px;
  background: #243746;
  box-sizing: border-box;
  grid-auto-flow: column;
  padding: 0.5rem 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 99;
  top:0;
  user-select: none
}
.logoAndTitle {
  display: grid;
  place-content: left;
  align-items: center;
  grid-auto-flow: column;
  text-decoration: none;
}
.icons {
  height: 2rem;
  width: 2rem;
  fill: pink;
  user-select: none
}

h1 {
  margin-left: 1rem;
  color: white;
  font-size: 24px;
  user-select: none
}

.profile {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  box-sizing: border-box;
  background: white;
  border-radius: 50%;
  overflow: hidden;
}

.profile img{
  height: 100%;
  width: 100%;
  user-select: none
}
</style>