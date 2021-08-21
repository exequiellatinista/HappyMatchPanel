<template>
  <div class="clientContainer">
    <div>{{info.mainUser.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'Client',
  props: {
    info: {
      type: Object,
      require: true,
      default: () => ({})
    },
  },
  data: () => ({}),
  //  {
  //       id: '1',
  //       mainUser: {
  //         name: 'José',
  //         banned: false,
  //       },
  //       img: '',
  //       tableName: 'Mesa 1',
  //       reports: 0,
  //     },
     mounted: () => {
      console.log('')
    }
}
</script>

<style scoped>
  .clientContainer {
    width: 10rem;
    height: 5rem;
    background: burlywood;
    border: solid 0.2rem var(--border-color);
    border-radius: 0.3rem;
  }
</style>