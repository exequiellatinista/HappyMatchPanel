<template>
  <aside>
    <div class="containerAside">
    <div class="header"><img ><p>HappyMatch</p></div>
    <div class="row titleRow"><img src="@/assets/icons/rainbow.svg"><p>Dashboard</p></div>
     <div class="row titleRow" @click="clearSesion()"><nuxt-link to="/auth"><img src="@/assets/icons/closeSesion.svg"><p>Cerrar Sesion</p></nuxt-link></div>
    </div>
  </aside>
</template>

<script>
export default {
name: 'AsideMenu',
methods: {
 async clearSesion() {
    await this.$axios.$delete('/api/clearSesion')
    .then(resp => console.log(resp))
    .catch(e => console.log(e))
  }
}

}
</script>

<style scoped>
aside {
  top:0;
  position:fixed;
  width: 10rem;
  height: 100%;
  background: #2c3e4e;
  z-index: 99;
  padding: 1rem 0;
}

.containerAside {
display: grid;
  align-items: start;
}

.header {
  font-size: 1.3rem;
  color:white;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}
.titleRow {
  background: #2c3949;
  width: 100%;
  height: 2rem;
  color: white;
}

.row {
  display: grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  cursor: pointer;
  box-sizing: border-box;
}

.row a {
  text-decoration: none;
  width: 100%;
  color: white;
    display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  cursor: pointer;
  box-sizing: border-box;
  
}

</style>