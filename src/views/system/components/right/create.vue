<template>
  <div id="rightCreate" class="app-container">
    <el-dialog title="权限创建" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="权限名称" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入权限名称" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限等级" :label-width="formLabelWidth">
          <el-select v-model="form.level" placeholder="请选择权限等级" style="width:100%;">
            <el-option label="一级" value="first"></el-option>
            <el-option label="二级" value="second"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择权限类型" style="width:100%;">
            <el-option label="菜单" value="menu"></el-option>
            <el-option label="按钮" value="button"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="资源标记" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入资源标记" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" required :label-width="formLabelWidth">
          <el-radio-group v-model="form.status">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>       
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
  name: 'RightCreate',
  props: {
    visible : {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
#rightCreate{
  .el-dialog__body{
    padding-bottom: 0px;
  }
}
</style>

