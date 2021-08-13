<template>
  <footer>
    <div class="containerFooter">
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.url">
        <button><component :is="link.component" :alt="link.name" class="icons"/></button>
      </nuxt-link>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
  components: {
    IconHome: () => import('@/assets/icons/home.svg?inline'),
    IconConversation: () => import('@/assets/icons/conversation.svg?inline'),
    IconCustomer: () => import('@/assets/icons/customer.svg?inline'),
  },
  data: () => ({
    links: [
      {
        icon: 'home',
        url: '/',
        component: 'IconHome'
      },
      {
        icon: 'conversation',
        url: '/questions',
        component: 'IconConversation'
      },
      {
        icon: 'customer',
        url: '/clients',
        component: 'IconCustomer'
      },
    ],
  }),
  methods: {
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
  max-width:28.125rem;
  width: 80%;
  border-radius: 1rem;
  background: rgba(255, 0, 50, 0.8);
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.icons {
  width: 2rem;
  height: 2rem;
}
button {
  background: transparent;
  border:none;
}
</style>