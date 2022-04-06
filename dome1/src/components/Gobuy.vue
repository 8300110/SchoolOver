<style scoped>
@import url("../assets/css/Instant.css");
</style>
<template>
  <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>
</template>
<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
