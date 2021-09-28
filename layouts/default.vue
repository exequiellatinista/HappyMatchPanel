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
  </div>
</template>

<script>
import BaseHeader from '@/components/ui/BaseHeader.vue'
import AsideMenu from '@/components/ui/AsideMenu.vue'

export default {
  components: {
    AsideMenu,
    BaseHeader,
  },
  middleware: 'auth',
}
</script>

<style>
.containerDefault {
  padding-top: 5rem;
  padding-left: 10rem;
}
</style>
