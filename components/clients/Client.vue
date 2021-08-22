<template>
  <div :class="reportClass">
    <div class="reportButton">
      <img src="@/assets/icons/block.svg">
    </div>
    <img src="@/assets/images/perfiles.jpg" />
    <div class="info">
      <div id="infoTable" class="boxInfo">
        <p class="titleCards">Mesa:</p>
        <p>{{ info.tableName }}</p>
      </div>
      <div class="boxInfo">
        <p class="titleCards">Usuario:</p>
        <p>{{ info.mainUser.name }}</p>
      </div>
      <div id="reports" class="boxInfo">
        <p class="titleCards">Reportes:</p>
        <p>{{ info.reports }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Client',
  props: {
    info: {
      type: Object,
      require: true,
      default: () => ({}),
    },
  },
  data: () => ({
    srcImg: '',
    reportClass: 'clientContainer',
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
  mounted() {
  
  this.info.reports > 0
      ? (this.reportClass = 'clientReported')
      : (this.reportClass = 'clientContainer')
  
  },
}
</script>

<style scoped>
.clientContainer {
  width: 100%;
  height: 10rem;
  border: solid 0.1rem var(--border-color);
  border-radius: 0.3rem;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 1rem 5rem 1rem 1rem;
  position: relative;
}

.clientReported {
  width: 100%;
  height: 10rem;
  border: solid 0.1rem rgba(256,0,0, 1);;
  border-radius: 0.3rem;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 1rem 5rem 1rem 1rem;
    position: relative;
}

.clientReported #reports {
  color: red;
}

img {
  height: 90%;
}
.info {
  margin: 0 0 0 1rem;
}
.boxInfo {
  display: flex;
  flex-direction: row;
  border-bottom: solid 0.1rem var(--border-color);
  width: 100%;
}

#infoTable {
  font-size: 1.5rem;
}

.reportButton {
  width: 4rem;
  height: 100%;
  position: absolute;
  top:0;
  left: calc(100% - 4rem);
  background: rgba(256,0,0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s ;
}
.reportButton:hover {
  background: red;
}

.reportButton img {
  width: 2rem;
  height: 2rem;
}
</style>