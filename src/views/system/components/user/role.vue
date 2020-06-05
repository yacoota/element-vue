<template>
  <div id="roleAssign" class="app-container">
    <el-dialog title="赋予角色" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="角色" required :label-width="formLabelWidth">
          <el-select v-model="form.role" multiple filterable allow-create default-first-option placeholder="请选择用户角色" style="width:100%">
            <el-option v-for="item in allroles" 
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
let roles =  [
  {
    value: '1',
    label: '领导'
  }, {
    value: '2',
    label: '员工'
  }]

export default {
  name: 'RoleAssign',
  props: {
    visible : {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      form: {
        role: ''
      },
      allroles: roles,
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

