<template>
  <div>
    <BaseHeader />
    <AsideMenu />
    <v-main>
      <v-container>
        <section class="containerDefault">
        <Nuxt />
        </section>
      </v-container>
    </v-main>
    <!-- <BaseFooter /> -->
  </div>
</template>

<script>
import BaseHeader from '@/components/ui/BaseHeader.vue'
import AsideMenu from '@/components/ui/AsideMenu.vue'
// import BaseFooter from '@/components/ui/BaseFooter.vue'
export default {
  components: {
    AsideMenu,
    BaseHeader,
    // BaseFooter,
  },
  middleware: 'auth',
}
</script>

<style>
.containerDefault {
  margin-top: 5rem;
  padding-left: 10rem;
}
</style>
