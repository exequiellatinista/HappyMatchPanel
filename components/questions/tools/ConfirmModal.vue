<template>
  <div class="modalContainer">
    <div class="confirmBox">
      <p>¿Confirma que desea eliminar la pregunta?</p>
      <div class="buttons">
        <button class="confirmButton" @click.prevent="$emit('clickDelete')"><img src="@/assets/icons/confirm.svg"></button>
        <button class="cancelButton" @click.prevent="$emit('click')"><img src="@/assets/icons/cancel.svg"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmModal'
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
    color: white;
    z-index:98;
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
    margin-top: 1rem;
  }

  .buttons button {
    width: calc(50% - 5px);
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
  }
</style>