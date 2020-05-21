<template>
  <div>

    <li v-for="(item,index) in bdManageData" :key="index">{{item.bdName}}</li>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'

  export default {
    name: 'bdmanage',
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    computed: {
      ...mapState({
        bdManageData: state => state.bdmanage.bdManageData
      })
    },
    created() {
      this.bdManageList();
    },
    methods: {
      ...mapActions({
        bdManageList: "bdmanage/bdManageList"
      }),
    }
  }

</script>

<style lang="less" scoped>
</style>
