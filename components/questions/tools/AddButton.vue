<template>
  <button :class='type' @click="$emit('click')">
    <p>+</p>
  </button>
</template>
<script>
export default {
  name: 'AddButton',
  props: {
    type: {
      type: String,
      required: true
    }
  } 
}
</script>
<style scoped>
  button {
    display:flex;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .mini {
    width: 5rem;
    height: 2rem;
    background: #5298f1;
    font-size: 1rem;
    color:black;
    border-radius: 1rem;
  }

  .normal {
    width: 3rem;
    height: 3rem;
    background: #2437467c;
    border-radius: 2rem;
    font-size: 3rem;
    color:white;
  }
</style>