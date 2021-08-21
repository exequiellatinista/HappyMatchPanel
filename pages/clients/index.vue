<template>
  <div>
    <p>Usuarios actuales</p>
    <div class="tabsClients">
      <div class="tab" @click="selected = 'allowed'">
        <span v-if="selected == 'allowed'" class="selected"></span>
        <p>Mesas activas</p>
      </div>
      <div class="tab" @click="selected = 'banned'">
        <span v-if="selected == 'banned'" class="selected"></span>
        <p>Mesas baneadas</p>
      </div>
    </div>
    <div v-if="selected == 'allowed'" class="listAllowed">
      <div></div>
    </div>
    <div v-if="selected == 'banned'" class="listBanned"></div>
  </div>
</template>
<script>
export default {
  name: 'ClientIndex',
  data: () => ({
    selected: 'allowed',
    tables: [
      {
        mainUser: {
          name: 'José',
          banned: false,
        },
        img: '',
        tableName: 'Mesa 1',
        reports: 0,
      },
      {
        mainUser: {
          name: 'Brian',
          banned: false,
        },
        img: '',
        tableName: 'Mesa 2',
        reports: 3,
      },
      {
        mainUser: {
          name: 'Sofia',
          banned: false,
        },
        img: '',
        tableName: 'Mesa 3',
        reports: 0,
      },
      {
        mainUser: {
          name: 'Emanuel',
          banned: false,
        },
        img: '',
        tableName: 'Mesa 4',
        reports: 0,
      },
      {
        mainUser: {
          name: 'Roberto',
          banned: false,
        },
        img: '',
        tableName: 'Mesa 5',
        reports: 0,
      },
      {
        mainUser: {
          name: 'Maria',
          banned: false,
        },
        img: '',
        tableName: 'Mesa 6',
        reports: 0,
      },
    ],
  }),
}
</script>

<style scoped>
.tabsClients {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  grid-gap: 0 0.5rem;
  gap: 0 0.5rem;
  border-bottom: solid 1px var(--border-color);
  user-select: none;
}

.tab {
  position: relative;
  margin-top: 1rem;
  width: 15rem;
  height: 2.5rem;
  background: var(--bg-secondary);
  border: solid 0.1rem var(--border-color);
  border-bottom: none;
  border-radius: 0.3rem 0.3rem 0 0;
  padding: var(--padding-df);
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.selected {
  position: absolute;
  top: -2px;
  width: calc(100% + 0.2rem);
  height: 100%;
  background: transparent;
  border-top: 2px solid red;
  border-bottom: 2px solid white;
  border-radius: 0.3rem 0.3rem 0 0;
  z-index: 4;
}
</style>
