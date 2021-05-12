<template>
<button class="f-button" :disabled="disabled">
  <span v-if="icon">
    <free-icon :name="icon"></free-icon>
  </span>
  <slot />
</button>
</template>

<script>
import FreeIcon from "@/components/free-icon";
export default {
  name: "FButton",
  components: {FreeIcon},
  props:{
    icon:{
      type:String,
      default:''
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
