<!-- <script lang="ts" setup>
interface User {
  major: string;
  name: string;
  type: string;
}

handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			}
const handleDelete = (index: number, row: User) => {
  tableData.splice(index, 1);
};

const tableData: User[] = [
  {
    major: "计算机科学与技术",
    name: "监督学习的探究与创新",
    type: "结合科研"
  },
  {
    major: "计算机科学与技术",
    name: "偏标记学习特定应用研究",
    type: "结合科研"
  }
];
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="课题面向专业" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.major }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="课题名称" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>课题名称: {{ scope.row.name }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="课题类型" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.type }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>



</template>

<style scoped></style> -->
