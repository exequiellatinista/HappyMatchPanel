<template>
    <div>
      
        <p>HOLA LINTER</p>
          <IconDark />
    </div>
</template>
<script>
export default {
    name: 'ColorSwitch',
    components: {
        IconDark: () => import('@/assets/icons/dark.svg?inline')
    }
}
</script>
