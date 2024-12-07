export default {
  path: "/article",
  redirect: "/article/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "论文管理",
    rank: 15
  },
  children: [
    {
      path: "/article/article_upload",
      name: "article_upload",
      component: () => import("@/views/article/article_upload.vue"),
      meta: {
        title: "论文上传"
      }
    },
    {
      path: "/article/article_approval",
      name: "article_approval",
      component: () => import("@/views/article/article_approval.vue"),
      meta: {
        title: "论文审批"
      }
    },
    {
      path: "/article/article_check",
      name: "article_check",
      component: () => import("@/views/article/article_check.vue"),
      meta: {
        title: "论文查重"
      }
    }
  ]
} satisfies RouteConfigsTable;
