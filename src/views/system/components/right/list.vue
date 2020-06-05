<template>
  <div id="rightList">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%; text-align:center;" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="40" style="text-align:center;"></el-table-column>
      <el-table-column prop="id" align="center" label="权限编码" width="80"></el-table-column>
      <el-table-column prop="author" align="center" label="权限名称" width="240px"></el-table-column>
      <el-table-column prop="author" align="center" label="权限等级" width="120px"></el-table-column>
      <el-table-column prop="author" align="center" label="权限类型" width="120px"></el-table-column>
      <el-table-column prop="title" align="center" label="资源标记" width="550px"></el-table-column>
      <el-table-column class-name="status-col" label="状态" width="140px">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="最近修改时间">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200px">
        <template slot-scope="scope">
          <el-link @click="handleDisabled">禁用</el-link>
          <router-link :to="'/system/right/edit/'+scope.row.id" style="padding:0px 20px;">
            <el-link>修改</el-link>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination'

export default {
  name: 'RightList',
  components: { Pagination },
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
      listLoading: false
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
    handleDisabled() {

    }
  }
}
</script>

<style lang="scss" scoped>
      
</style>