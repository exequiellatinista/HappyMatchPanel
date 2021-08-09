<template>
  <div class="containerColorSwitch">
    <IconDark
      v-if="$colorMode.preference === 'dark'"
      class="icons"
      @click="changeTheme('light')"
    />
    <IconLight v-else class="icons" @click="changeTheme('dark')" />
    <div class="comboBoxColorMode">
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColorSwitch',
  components: {
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
    IconLight: () => import('@/assets/icons/light.svg?inline'),
  },
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme
    },
  },
}
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.dark-mode select {
  color: #ebf4f1;
}
.icons {
  cursor: pointer;
  width: 1rem;
  height: 1rem;
}
.dark-mode .icons {
  fill: white;
}
.containerColorSwitch {
  height: 1.5rem;
  width: 3.5rem;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  justify-content: center;
  border: var(--border-color) solid 1px;
  border-radius: 0.35rem;
}
.comboBoxColorMode {
  display: none;
  font-size: 8px;
}
</style>
