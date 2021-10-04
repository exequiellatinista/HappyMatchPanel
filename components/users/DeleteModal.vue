<template>
  <div class="containerModal">
    <div class="modalBox">
      <div class="imgContainer"><img src="@/assets/icons/warning.svg"></div>
     <div class="modalText"><h1>ADVERTENCIA</h1><p>Eliminar usuario borrará toda su informacion de la base de datos, ¿Desea continuar?</p></div>
     <div class="modalButtons">
       <button @click.prevent="$emit('delete-user')">Eliminar</button><button @click.prevent="$emit('cancel-delete')">Cancelar</button>
     </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'DeleteModal',
}
</script>
<style scoped>
.containerModal {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
 backdrop-filter: blur(2px);
 display: grid;
 align-items: center;
 justify-content: center;
}

.modalBox {
  border-radius: 0.375rem;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
  border: none;
  width: 30rem;
  height: 20rem;
  background: white;
  padding: 1.25rem;
  position: relative;
}

.modalText {
      color: #595959;
}

.modalText h1 {
  text-align: center;
}

.modalButtons {
  width: 100%;
  display: grid;
   align-items: center;
 justify-content: center;
 grid-auto-flow: column;
 position: absolute;
 bottom:1rem;
 left:0;
 gap: 0 1rem;
}

.modalButtons button {
  color: #fff;
    background-color: #fb6340;
    border-color: #fb6340;
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    font-weight: 600;
        user-select: none;
        border: 1px solid transparent;
        padding: .625rem 1.25rem;
    line-height: 1.5;
    border-radius: .25rem;
    text-transform: uppercase;
    cursor: pointer;
}

.imgContainer {
  height: 50%;
  width: 100%;
}

.imgContainer img{
  width: 100%;
  height: 100%;
}
</style>