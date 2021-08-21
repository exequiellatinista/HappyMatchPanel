<template>
  <div class="clientContainer">
    <div>{{info.mainUser.name}}</div>
    <img src='@/assets/images/perfiles.jpg'/>
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
  data: () => ({
    srcImg: ''
  }),
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
    }
}
</script>

<style scoped>
  .clientContainer {
    width: 100%;
    height: 3rem;
    background: burlywood;
    border: solid 0.1rem var(--border-color);
    border-radius: 0.3rem;
  }
</style>