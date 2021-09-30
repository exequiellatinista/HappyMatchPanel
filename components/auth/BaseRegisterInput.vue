<template lang="">
  <input
  :id="id"
  :class="clase"
  :type="type"
  :autocomplete="autocomplete"
  :required="required"
  >
    
 
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },

    clase: { type: String, required: true },
    type: { type: String, required: true },
    autocomplete: { type: String, required: true },
    required: { type: String, required: true },
  },
}
</script>
<style scoped>

input {
    padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.3125rem;
  margin: 0.5rem 0 1.5rem 0;
}
</style>