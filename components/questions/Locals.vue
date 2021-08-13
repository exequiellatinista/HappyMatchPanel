<template>
  <div @click="$emit('click')">
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
  width: 5rem;
  height: 2.5rem;
  background: var(--bg-secondary);
  border: solid 0.1rem var(--border-color);
  border-radius: 0.5rem;
  padding: var(--padding-df);
  box-sizing: border-box;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  }
</style>