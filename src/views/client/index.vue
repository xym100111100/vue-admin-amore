<template>
<div>
  <div v-for="(item,index) in clientData" :key="index" >{{item.username}}</div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "client",
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
    computed: {
    ...mapState({
      clientData: state => state.client.clientData,
    })
  },
  created() {
    this.clientList();
  },
  methods: {
    ...mapActions({
      clientList: "client/clientList"
    }),
  }
};
</script>

<style>
</style>