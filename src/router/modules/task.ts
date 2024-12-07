export default {
  path: "/task",
  redirect: "/task/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "学生任务书",
    rank: 12
  },
  children: [
    {
      path: "/task/task",
      name: "task",
      component: () => import("@/views/task/task.vue"),
      meta: {
        title: "学生任务书"
      }
    },
    {
      path: "/task/task_declaration",
      name: "task_declaration",
      component: () => import("@/views/task/task_declaration.vue"),
      meta: {
        title: "学生任务书发布"
      }
    },
    {
      path: "/task/task_approval",
      name: "task_approval",
      component: () => import("@/views/task/task_approval.vue"),
      meta: {
        title: "学生任务书审批"
      }
    }
  ]
} satisfies RouteConfigsTable;
