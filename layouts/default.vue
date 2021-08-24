<template>
  <div>
    <BaseHeader />
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
// import BaseFooter from '@/components/ui/BaseFooter.vue'
export default {
  components: {
    BaseHeader,
    // BaseFooter,
  },
}
</script>

<style>
.containerDefault {
  margin-top: 5rem;
}
</style>
