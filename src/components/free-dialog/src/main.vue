<!--github： https://github.com/YouAge-->
<template>
<transition name="dialog-fade"
            @after-enter="afterEnter"
            @after-leave="afterLeave">
  <div>

  </div>
</transition>
</template>

<script>
export default {
  name: 'FDialog',
  data(){
    return{
      closed: false,
      key: 0
    }
  },
  methods:{
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    }
  }
}
</script>

<style scoped>

</style>
