<template>
  <div id="right" class="app-container">
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">权限名称: </label>
            <div class="el-select el-select--medium">
              <el-input placeholder="请输入权限名称" clearable/>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">状态: </label>
            <el-select v-model="status" clearable>
              <el-option
                v-for="item in allstatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>         
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;"></div>
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <el-button :loading="loading" type="primary" @click="handleQuery">查询</el-button>
            <el-button type="primary" @click="handleReset">重置</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-container style="padding:20px 0px;">
      <el-button :loading="loading" type="primary" icon="el-icon-document" @click="handleInsert">
        新增
      </el-button>
      <el-button :loading="loading" type="primary" icon="el-icon-document" @click="handleDisabled">
        禁用
      </el-button>
      <el-button :loading="loading" type="primary" icon="el-icon-document" @click="handleEnabled">
        启用
      </el-button>
    </el-container>


    <RightList />

    <RightCreate ref="RightCreate" v-if="dialog" :visible.sync="dialog"></RightCreate>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'
import RightList from './components/right/list'
import RightCreate from './components/right/create'

let status = [
  {
    value: 0,
    label: '请选择'
  }, {
    value: 1,
    label: '启用'
  }, {
    value: 2,
    label: '禁用'
  }];

export default {
  name: 'Right',
  components: { RightList, RightCreate },
  data() {
    return {
      status: 0,
      loading: false,
      dialog: false,
      allstatus: status
    }
  },
  methods: {
    handleQuery() {
    },
    handleReset() {        
    },
    handleInsert() {
      this.dialog = true;
    },
    handleDisabled() {
    },
    handleEnabled() {
    }
  }
}

</script>

<style lang="scss" scoped>

</style>

