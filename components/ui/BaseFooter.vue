<template>
  <footer>
    <div class="containerFooter">
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.url">
        <img :src="getIcon(link.icon)" :alt="link.name" class="icons"/>
      </nuxt-link>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
  components: {
  },
  data: () => ({
    links: [
      {
        icon: 'home',
        name: 'Inicio',
        url: '/',
      },
      {
        icon: 'conversation',
        name: 'Preguntas',
        url: '/questions',
      },
      {
        icon: 'customer',
        name: 'Clientes',
        url: '/clients',
      },
    ],
  }),
  methods: {
    getIcon(icon){
      return require(`@/assets/icons/${icon}.svg`)
    }
  }
}
</script>
<style scoped>
footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.containerFooter {
  position: fixed;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  top: calc(100vh - 4rem);
  height: 3rem;
  width: 80%;
  border-radius: 1rem;
  background: rgba(255, 0, 50, 0.8);
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.icons {
  width: 2rem;
  height: 2rem;
}
</style>