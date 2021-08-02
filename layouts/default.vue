<template>  
  <div>
    <BaseHeader />
    <v-main>
      <v-container class="containerDefault">
        <Nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import BaseHeader from '@/components/ui/BaseHeader.vue'
export default {
  components: {
    BaseHeader,
  }
}
</script>

<style>
  .containerDefault {
    margin-top:5rem;
  }
</style>
