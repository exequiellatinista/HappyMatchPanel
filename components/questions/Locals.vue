<template>
  <div>
    {{localname}}
  </div>
</template>
<script>
export default {
  name: 'Locals',
  props: {
    localname: {
      type: String,
      required: true,
    },
  }
}
</script>
<style scoped>
  div {
   margin-top: 50px;
  }
</style>