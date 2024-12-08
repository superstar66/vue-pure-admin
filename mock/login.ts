// 根据角色动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.username === "teacher") {
        return {
          success: true,
          data: {
            avatar: "https://avatars.githubusercontent.com/u/44761321",
            username: "teacher",
            nickname: "张老师",
            // 一个用户可能有多个角色
            roles: ["teacher"],
            // 按钮级别权限
            permissions: ["*:*:*"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.teacher",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.teacherRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      } else if (body.username === "student") {
        return {
          success: true,
          data: {
            avatar: "https://avatars.githubusercontent.com/u/52823142",
            username: "student",
            nickname: "小林",
            roles: ["student"],
            permissions: ["permission:btn:add", "permission:btn:edit"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.student",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.studentRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      } else if (body.username === "office") {
        return {
          success: true,
          data: {
            avatar: "https://avatars.githubusercontent.com/u/52823142",
            username: "office",
            nickname: "小韩",
            roles: ["office"],
            permissions: ["permission:btn:add", "permission:btn:edit"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.office",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.officeRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      } else {
        return {
          success: true,
          data: {
            avatar: "https://avatars.githubusercontent.com/u/52823142",
            username: "committee",
            nickname: "小西",
            roles: ["committee"],
            permissions: ["permission:btn:add", "permission:btn:edit"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.committee",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.committeeRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      }
    }
  }
]);
