<template>
  <div :class="reportClass">
    <div :class="'blockPanel' + ' ' + showModal">
      <form>
        <label>Razon de bloqueo:</label>
        <input v-model="blockReason"/>
        <div class="buttons">
          <button class="confirmButton" @click.prevent="changeShowModal(); reportClient()">
            <img src="@/assets/icons/confirm.svg" />
          </button>
          <button class="cancelButton" @click.prevent="changeShowModal()">
            <img src="@/assets/icons/cancel.svg" />
          </button>
        </div>
      </form>
    </div>
    <div class="reportButton" @click="changeShowModal()">
      <img src="@/assets/icons/block.svg" />
    </div>
    <div class="imgProfile"><img src="@/assets/images/no-image.png" /></div>
    <div class="info">
      <div id="infoTable" class="boxInfo">
        <p>{{ info.name }}</p>
      </div>
      <div class="boxInfo">
        <p class="titleCards">Usuario: </p>
        <p class="userMain">{{ info.userMainId }}</p>
      </div>
      <div id="reports" class="boxInfo">
        <p class="titleCards">Reportes: </p>
        <p>{{ info.reports? info.reports : '0' }}</p>
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
    showModal: false,
    reports: 0,
    blockReason: ''
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
    this.reports = this.info.reports
    this.reports > 0 & this.reports < 100
      ? (this.reportClass = 'clientReported')
      : (this.reportClass = 'clientContainer')
  },
  methods: {
    changeShowModal() {
      this.showModal= !this.showModal
      console.log('id table ', this.info.id)
    },
    reportClient () {
      this.reports = 101
      this.blockReason !== ''&&
      this.$emit('ban:client', this.info.id, this.blockReason)
    }
  }
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
  position: relative;
  overflow: hidden;
  padding: 0.5rem 0 0 0;
}

.clientReported {
  width: 100%;
  height: 10rem;
  border: solid 0.1rem rgba(256, 0, 0, 1);
  border-radius: 0.3rem;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 1rem 5rem 1rem 1rem;
  position: relative;
  overflow: hidden;
}

.clientReported #reports {
  color: red;
}


.imgProfile {
  display:grid;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.imgProfile img {
  height: 6rem;
  width: 6rem
}
.info {
  margin: 0 0 0 1rem;
  width: calc(100% - 12rem)
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
  top: 0;
  left: calc(100% - 4rem);
  background: rgba(256, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
}
.reportButton:hover {
  background: red;
}

.reportButton img {
  width: 2rem;
  height: 2rem;
}

.blockPanel {
  width: 100%;
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.true {
  left:0;
   animation-duration: 0.5s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    left: 100%;
  }

  to {
    left:0%;
  }
}

.blockPanel label {
  color: white;
}

.blockPanel input {
  width: 100%;
  line-height: 2rem;
  border: none;
  outline: none;
}

.blockPanel .buttons {
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
}

.blockPanel .buttons button {
  width: calc(50% - 5px);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
}

.userMain {
  word-wrap: break-word;
  height: auto;
  width: calc(100% - 4rem)
}
</style>