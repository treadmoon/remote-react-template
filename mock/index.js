import { KDPreAjax } from "../../../../../utils/kdAjax";

const kdPreAjax = new KDPreAjax();

// 用户列表
const userList = [
  { id: "1001", name: "张三", age: 19 },
  { id: "1002", name: "王九", age: 21 },
];
// getUserList
kdPreAjax.setMocData("getUserList", ({ resolve, reject }) => {
  resolve({
    code: 200,
    eventName: "getUserList",
    data: userList,
  });
});
// getList
kdPreAjax.setMocData("getList", ({ resolve, reject, params }) => {
  resolve({
    code: 200,
    eventName: "getList",
    data: params.id === "1001" ? userList[0] : userList[1],
  });
});

export default kdPreAjax;
