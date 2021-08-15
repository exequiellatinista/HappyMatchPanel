<template>
  <div class="modalContainer">
    <div class="confirmBox">
      <p>¿Confirma que desea eliminar la pregunta?</p>
      <div class="buttons">
        <button>Si</button>
        <button>Cancelar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .modalContainer {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white
  }
  .confirmBox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .buttons {
    width:100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .buttons button {
    width: calc(50% - 5px);
  }
</style>