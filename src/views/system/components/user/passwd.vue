<template>
  <div id="password" class="app-container">
    <el-dialog title="重置密码" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="原密码" required :label-width="formLabelWidth">
          <el-input type="password" v-model="form.oldpasswd" placeholder="6~16个字符，区分大小写" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" required :label-width="formLabelWidth">
          <el-input type="password" v-model="form.passwd" placeholder="6~16个字符，区分大小写" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" required :label-width="formLabelWidth">
          <el-input type="password" v-model="form.sedpasswd" placeholder="6~16个字符，区分大小写" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer" style="text-align:center;">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script> 

export default {
  name: 'Password',
  props: {
    visible : {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      form: {
        passwd: '',
        oldpasswd: '',
        sedpasswd: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    handleClose(){
      this.$emit("update:visible", false)
    },
    handleSubmit(){
      this.$emit("update:visible", false)
    }
  }
}
</script>

<style scoped>

</style>

<style lang="scss">
#userCreate{
  .el-dialog__body{
    padding-bottom: 0px;
  }
}
</style>

