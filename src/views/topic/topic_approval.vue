<script setup>
import dayjs from 'dayjs';
import { reactive, ref, onMounted } from 'vue'
import { getTopicAppList } from '@/api/topicApi'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
onMounted(async () => {
  const data = await getTopicAppList()
  console.log(data)
  data.forEach(item => {
    item.end_date = dayjs(item.end_date).format('YYYY-MM-DD')
  })
  Object.assign(tableData.value, data)
  console.log(tableData.value)
})
const form = ref({
  major: '',
  type: '',
  status: '',
  title: '',
  end_date: '',
  content: ''
})
const tableData = ref([])

const handleEdit = (index,row) => {
  Object.assign(form.value, row)
  dialogFormVisible.value = true
}

const options = [
  {
    value: 0,
    label: '未审批'
  },
  {
    value: 1,
    label: '通过'
  },
  {
    value: 2,
    label: '退回'
  }
]

const subForm = () => {
  console.log(form.value)
  dialogFormVisible.value = false
}
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="major" label="课题面向专业" width="180" />
      <el-table-column prop="title" label="题目" width="180" />
      <el-table-column prop="type" label="题目类型" width="180" />
      <el-table-column prop="status" label="状态" width="180" />
      <el-table-column prop="end_date" label="课题审批截止时间" />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="课题审批" width="900">
      <el-form :model="form">
        <el-form-item label="课题面向专业" :label-width="formLabelWidth">
          <el-input v-model="form.major" disabled />
        </el-form-item>
        <el-form-item label="题目" :label-width="formLabelWidth">
          <el-input v-model="form.title" disabled />
        </el-form-item>
        <el-form-item label="题目类型" :label-width="formLabelWidth">
          <el-radio-group v-model="form.type" disabled>
            <el-radio :value="0">结合生产实际或经济建设</el-radio>
            <el-radio :value="1">结合科研</el-radio>
            <el-radio :value="2">结合实验室建设</el-radio>
            <el-radio :value="3">教师自拟</el-radio>
            <el-radio :value="4">其它</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select
            v-model="form.status"
            placeholder="未审批"
            size="large"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="毕业设计（论文）要求解决的问题及重点等" :label-width="formLabelWidth">
          <el-input
            v-model="form.content"
            :rows="5"
            type="textarea"
            resize="none"
            disabled
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="subForm">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
