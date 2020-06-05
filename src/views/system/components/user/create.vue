<template>
  <div id="userCreate" class="app-container">
    <el-dialog title="用户创建" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="用户名" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="6~18个字符，可使用字母、数字、下划线，需以字母开头" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" required :label-width="formLabelWidth">
          <el-input type="password" v-model="form.passwd" placeholder="6~16个字符，区分大小写" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" required :label-width="formLabelWidth">
          <el-radio-group v-model="form.status">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>       
        </el-form-item>
        <el-form-item label="姓名" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入姓名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" required :label-width="formLabelWidth">
          <el-input v-model="form.phone" placeholder="请输入手机号码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="通讯地址" required :label-width="formLabelWidth">
          <el-select v-model="form.province" placeholder="请选择省份" style="width:33%;">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="杭州" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择地市" style="width:33%; padding:0px 20px">
            <el-option label="滨江区" value="binjiang"></el-option>
            <el-option label="上城区" value="shangcheng"></el-option>
            <el-option label="下城区" value="xiacheng"></el-option>
            <el-option label="西湖区" value="xihu"></el-option>
          </el-select>
          <el-select v-model="form.county" placeholder="请选择县分" style="width:34%;">
            <el-option label="浦沿" value="puyan"></el-option>
            <el-option label="西兴" value="xixing"></el-option>
            <el-option label="长河" value="changhe"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth">
          <el-input v-model="form.addressext" placeholder="请输入详细地址" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input  v-model="form.remark" type="textarea" :rows="4" placeholder="请输入内容"></el-input>    
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
  name: 'UserCreate',
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
#userCreate{
  .el-dialog__body{
    padding-bottom: 0px;
  }
}
</style>

