<template>
  <div class="default" @click="$emit('click')">
    <span  v-if="localprop.local.localId === localprop.localSelected.localId" class='selected'></span>
    {{localprop.local.name}}
  </div>
</template>
<script>
export default {
  name: 'Locals',
  props: {
    localprop: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    localContainer: '',
  }),
}
</script>
<style scoped>
  .default {
  position: relative;
  margin-top: 1rem;
  width: 15rem;
  height: 2.5rem;
  background: var(--bg-secondary);
  border: solid 0.1rem var(--border-color);
  border-radius: 0.3rem 0.3rem 0 0;
  padding: var(--padding-df);
  box-sizing: border-box;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  }

  .selected {
    position: absolute;
    top:100%;
    width:100%;
    height: 0.1rem;
    background: rgba(255, 0, 50, 0.8);
  }
</style>