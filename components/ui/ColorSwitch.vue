<template>
    <div>
        {{$colorMode.preference}}
        <IconDark 
            v-if="$colorMode.preference === 'dark'" 
            class="icons"
            @click="changeTheme('light')"
        />
        <IconLight 
            v-else 
            class="icons"
            @click="changeTheme('dark')"
        />
          <div>
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
        IconLight: () => import('@/assets/icons/light.svg?inline')
    },
    methods: {
        changeTheme(theme) {
            this.$colorMode.preference = theme
        }
    }
}
</script>
<style scoped>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.icons {
    cursor: pointer;
}

</style>
