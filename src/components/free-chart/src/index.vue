<!--github： https://github.com/YouAge-->
<template>
  <div class="free-chart">
    <div class="user-sidebar">
<!--      <f-card />-->
      <f-list />
    </div>
    <div class="user-news">

    </div>
  </div>
</template>

<script>
import FCard from '@/components/free-chart/src/FCard'
import FList from '@/components/free-chart/src/FList'
export default {
  name: 'FChart',
  components: { FList, FCard }
}
</script>

<style scoped lang="less">

.user-sidebar,
.user-news{
  display: flex;
  flex-direction: column;
}
</style>
