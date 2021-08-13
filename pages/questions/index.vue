<template lang="">
  <div>
    <div class='owner'>Hola Dueño1!</div>
    <div v-for="local in locals" :key="local" class='locals'>
      <Locals :localname='local' />
    </div>
    <div class='questions'></div>
  </div>
</template>
<script>
import Locals from '@/components/questions/Locals.vue'
export default {
  name: 'QuestionsIndex',
  components: {Locals},
  // props: {
  //   owner: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  data: () => ({
    locals: ['Local1', 'Local2']
  })
}
</script>

<style scoped>
  .owner {
    background: black;
  }
</style>