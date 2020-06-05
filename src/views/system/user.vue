<template>
  <div id="user" class="app-container">
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">用户名: </label>
            <div class="el-select el-select--medium">
              <el-input v-model="name" placeholder="请输入用户名" clearable/>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">用户状态: </label>
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
          <div style="display:inline-block;">
            <label class="radio-label">角色: </label>
            <el-select v-model="role" clearable>
              <el-option
                v-for="item in allroles"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>         
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <el-button :loading="loading" type="primary" @click="handleQuery">查询</el-button>
            <el-button type="primary" @click="handleReset">重置</el-button>
            <span class="el-dropdown-link"style="padding-left:20px;"> 
              <el-link>展开<i class="el-icon-arrow-down el-icon--right"></i></el-link>
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" style="padding-top:15px;">
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">手机号: </label>
            <div class="el-select el-select--medium">
              <el-input v-model="name" placeholder="请输入手机号" clearable/>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">企业名称: </label>
            <div class="el-select el-select--medium">
              <el-input v-model="name" placeholder="请输入企业名称" clearable/>
            </div>
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

    <UserList />

    <UserCreate ref="UserCreate" v-if="dialog" :visible.sync="dialog"></UserCreate>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'

import UserList from './components/user/list'
import UserCreate from './components/user/create'

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

let roles = [
{
  value: 0,
  label: '请选择'
}, {
  value: 1,
  label: '领导'
}, {
  value: 2,
  label: '员工'
}];

export default {
  name: 'User',
    components: { UserList, UserCreate },
    data() {
      return {
        name:'',
        status: 0,
        role: 0,
        loading: false,
        dialog: false,
        allstatus: status,
        allroles: roles
      }
    },
    created() {

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
    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>


</style>
