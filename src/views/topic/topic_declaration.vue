<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/modules/user';
import { ElMessage } from 'element-plus'
import { getTopicDecList,subTopicDec, delTopicDec } from '@/api/topicApi';
const userStore = useUserStore()
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

// 获取课题列表
const getTopicListFun = async () => {
  const data = await getTopicDecList(userStore.nickname)
  Object.assign(tableData.value, data)
  console.log(tableData.value)
}

// 获取课题列表
onMounted(() => {
  getTopicListFun()
})

const countLimit = 8
const defaultForm = {
  title: '',
  type: '',
  description: '',
  major: ''
}

// 添加课题申报
const addArticle = () => {
  if (tableData.value.length === 8) {
    ElMessage('题目数量已达上限！')
  }
  Object.assign(form.value, defaultForm)
  dialogFormVisible.value = true
}

const form = ref({
  title: '',
  type: '',
  description: '',
  major: ''
})
const tableData = ref([])

// 提交表单
const subForm = async () => {
  console.log(form.value)
  console.log(userStore)
  await subTopicDec(form.value)
  dialogFormVisible.value = false
}

// 删除课题申报
const handleDelete = async (index, row) => {
  const res = await delTopicDec(row.title)
  getTopicListFun()
}
</script>

<template>
  <div>
    <div>
      <el-button type="primary" @click="addArticle">新增审批</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="major" label="课题面向专业" width="180" />
        <el-table-column prop="title" label="题目" width="180" />
        <el-table-column prop="type" label="题目类型" width="180" />
        <el-table-column prop="status" label="状态" />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogFormVisible" title="杭州电子科技大学毕业设计（论文）题目申报表" width="900">
      <el-form :model="form">
        <el-form-item label="课题面向专业" :label-width="formLabelWidth">
            <el-input v-model="form.major" />
        </el-form-item>
        <el-form-item label="毕业设计题目" :label-width="formLabelWidth">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="题目类型" :label-width="formLabelWidth">
          <el-radio-group v-model="form.type">
            <el-radio value="结合生产实际或经济建设">结合生产实际或经济建设</el-radio>
            <el-radio value="结合科研">结合科研</el-radio>
            <el-radio value="结合实验室建设">结合实验室建设</el-radio>
            <el-radio value="教师自拟">教师自拟</el-radio>
            <el-radio value="其它">其它</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="毕业设计（论文）要求解决的问题及重点等" :label-width="formLabelWidth">
          <el-input
            v-model="form.description"
            :rows="5"
            type="textarea"
            resize="none"
          />
        </el-form-item>
        <!-- <div class="button-group">
          <el-button type="primary" circle @click="addArticle">+</el-button>
          <el-button v-if="form.articles.length !== 1" type="danger" circle @click="deleteArticle(index)">-</el-button>
        </div> -->
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="subForm">
            提交
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.el-button--primary{
  margin: 12px;
}

.button-group{
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 18px;
}
</style>