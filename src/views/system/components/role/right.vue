<template>
  <div id="roleAssign" class="app-container">
    <el-dialog title="权限配置" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="权限名称" required :label-width="formLabelWidth">
          <el-cascader :options="allrights" :props="props"  placeholder="请选择用户权限"  clearable style="width:100%;"></el-cascader>
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
let rights = [{
  value: 1,
  label: '东南',
  children: [{
    value: 2,
    label: '上海',
    children: [
      { value: 3, label: '普陀' },
      { value: 4, label: '黄埔' },
      { value: 5, label: '徐汇' }
    ]
  }, {
    value: 7,
    label: '江苏',
    children: [
      { value: 8, label: '南京' },
      { value: 9, label: '苏州' },
      { value: 10, label: '无锡' }
    ]
  }, {
    value: 12,
    label: '浙江',
    children: [
      { value: 13, label: '杭州' },
      { value: 14, label: '宁波' },
      { value: 15, label: '嘉兴' }
    ]
  }]
}, {
  value: 17,
  label: '西北',
  children: [{
    value: 18,
    label: '陕西',
    children: [
      { value: 19, label: '西安' },
      { value: 20, label: '延安' }
    ]
  }, {
    value: 21,
    label: '新疆维吾尔族自治区',
    children: [
      { value: 22, label: '乌鲁木齐' },
      { value: 23, label: '克拉玛依' }
    ]
  }]
}];

export default {
  name: 'roleAssign',
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
      props: { multiple: true },
      allrights: rights,
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

