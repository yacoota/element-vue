<template>
  <div id="userList">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%; text-align:center;" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="40" style="text-align:center;"></el-table-column>
      <el-table-column prop="id" align="center" label="用户编码" width="80"></el-table-column>
      <el-table-column prop="author" align="center" label="用户名" width="240px"></el-table-column>
      <el-table-column prop="title" align="center" label="角色" width="650px"></el-table-column>
      <el-table-column class-name="status-col" label="状态" width="210px">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="140px">
        <template slot-scope="scope">
          <router-link :to="'/system/user/edit/'+scope.row.id">
            <el-link>禁用</el-link>
          </router-link>

          <el-dropdown style="padding-left:20px;" @command="handleCommand">
            <span class="el-dropdown-link">
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="edit">
                <router-link :to="'/system/user/edit/'+scope.row.id">
                  <el-link>修改</el-link>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item command="role">赋予角色</el-dropdown-item>
              <el-dropdown-item command="passwd">重置密码</el-dropdown-item>
              <el-dropdown-item command="detail">查看</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <RoleAssign ref="RoleAssign" v-if="rdialog" :visible.sync="rdialog"></RoleAssign>

    <Password ref="Password" v-if="pdialog" :visible.sync="pdialog"></Password>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination'
import RoleAssign from './role'
import Password from './passwd'

export default {
  name: 'UserList',
  components: { Pagination, RoleAssign, Password },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      loading: false,
      listLoading: false,
      rdialog: false,
      pdialog: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleCommand(command) {
      if(command === 'role'){
        this.rdialog = true;
      }else if(command === 'passwd'){
        this.pdialog = true;
      }

    }
  }
}
</script>

<style lang="scss" scoped>
      
</style>