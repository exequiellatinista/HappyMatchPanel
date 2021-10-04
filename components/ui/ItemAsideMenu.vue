<template>
  <div>
    <div class="row title" @click="showOptions = !showOptions">{{ title }}</div>
    <div v-if="showOptions" class="options">
      <ul>
        <nuxt-link v-for="(option,index) in options" :key="title+index" :to='option.url' class="li" >{{option.title}}</nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemAsideMenu',

  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required:true
    }
  },
  data: () => ({
    showOptions: false
  }),
}
</script>
<style scoped>

* {
  color: white;
}

.title {
  display: grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  cursor: pointer;
  box-sizing: border-box;
    background: #2c3949;
  width: 100%;
  height: 2rem;
  color: white;
  padding: .675rem 1.5rem;

}

.li {
    display: grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  cursor: pointer;
  box-sizing: border-box;
   padding: 0 1rem;
       padding-top: .45rem;
    padding-bottom: .45rem;
    padding-left: 3.5rem;
    text-decoration: none;
}




</style>