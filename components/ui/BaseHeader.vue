<template>
  <header>
    <nuxt-link to="/" class="logoAndTitle">
    <div class="dashboard">Dashboard</div>
      <h1></h1>
    </nuxt-link>
    <div class="profile">
      <img src="@/assets/images/default-profile.png"/>
    </div>
  </header>
</template>
<script>
export default {
  name: 'BaseHeader',
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
  border-color: var(--border-color);
  background: white;
  box-sizing: border-box;
  grid-auto-flow: column;
  padding: 0 2rem;
  z-index: 99;
  top:0;
  user-select: none;
    padding-left: 10rem;
}
.logoAndTitle {
  display: grid;
  place-content: left;
  align-items: center;
  grid-auto-flow: column;
  text-decoration: none;
}
.dashboard {
  height: 4rem;
  width: 10rem;
  text-align: center;
  user-select: none;
  display:flex;
  align-items:center;
  justify-content: center;
  font-size: 1.5rem;
  color:black;
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
  background: gray;
  border-radius: 50%;
  overflow: hidden;
}

.profile img{
  height: 100%;
  width: 100%;
  user-select: none
}
</style>