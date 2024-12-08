<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useUserStore } from '@/store/modules/user';
import { ElMessage } from 'element-plus'
import { getTopicDecList,subTopicDec } from '@/api/topicApi';
const userStore = useUserStore()
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

// 获取课题列表
onMounted(async () => {
  const data = await getTopicDecList(userStore.nickname)
  Object.assign(tableData.value, data)
  console.log(tableData.value)
})

const countLimit = 8
const form = ref({
  major: '',
  articles: [{
    title: '',
    type: '',
    content: ''
  },]
})
const tableData = ref([])
const addArticle = () => {
  if (form.value.articles.length + tableData.value.length === countLimit) {
    ElMessage('题目数量已达上限')
    return
  }
  form.value.articles.push({
    title: '',  
    type: '',
    content: ''
  })
}

const deleteArticle = (index) => {
  form.value.articles.splice(index,1)
}

const subForm = () => {
  console.log(form.value)
  console.log(userStore)
  dialogFormVisible.value = false
}

</script>

<template>
  <div>
    <div>
      <el-button type="primary" @click="dialogFormVisible = true">新增审批</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="major" label="课题面向专业" width="180" />
        <el-table-column prop="title" label="题目" width="180" />
        <el-table-column prop="type" label="题目类型" width="180" />
        <el-table-column prop="status" label="状态" />
      </el-table>
    </div>
    <el-dialog v-model="dialogFormVisible" title="杭州电子科技大学毕业设计（论文）题目申报表" width="900">
      <el-form :model="form">
        <el-form-item label="课题面向专业" :label-width="formLabelWidth">
          <el-input v-model="form.major" />
        </el-form-item>
        <div v-for="(article,index) in form.articles" :key="index">
          <el-form-item :label="`毕业设计题目(${index + 1})`" :label-width="formLabelWidth">
            <el-input v-model="article.title" />
          </el-form-item>
          <el-form-item label="题目类型" :label-width="formLabelWidth">
            <el-radio-group v-model="article.type">
              <el-radio :value="0">结合生产实际或经济建设</el-radio>
              <el-radio :value="1">结合科研</el-radio>
              <el-radio :value="2">结合实验室建设</el-radio>
              <el-radio :value="3">教师自拟</el-radio>
              <el-radio :value="4">其它</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="毕业设计（论文）要求解决的问题及重点等" :label-width="formLabelWidth">
            <el-input
              v-model="article.content"
              :rows="5"
              type="textarea"
              resize="none"
            />
          </el-form-item>
          <div class="button-group">
            <el-button type="primary" circle @click="addArticle">+</el-button>
            <el-button v-if="form.articles.length !== 1" type="danger" circle @click="deleteArticle(index)">-</el-button>
          </div>
        </div>
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