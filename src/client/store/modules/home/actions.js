export default {
  setData({ commit }) {
    // 从接口中请求回来的数据
    const payload = { name: "new data", address: "new beijing" };
    commit("setData", payload);
  },
};
