<template>
	<h1 id="home-h1">首页</h1>
	<div>{{ userInfo.name }} - {{ userInfo.address }}</div>
</template>
<script>
import { useStore } from "vuex";
import axios from "axios";
import { computed } from "vue";
export default {
	name: "Home",
	setup() {
		const { getters, commit } = useStore();
		const fetchData = async () => {
			const { data } = await axios.get(
				"https://www.fastmock.site/mock/408a0aa430e1783a6cec0c0706aeea8e/test/api/ssr"
			);
			console.log(data.info);
			commit("home/setData", data.info);
		};
		const userInfo = computed(() => getters["home/getData"]);
		if (userInfo.value.name == "yd") {
			fetchData();
		}
		return {
			userInfo,
			fetchData,
		};
	},
	async serverPrefetch() {
		console.log("服务端数据获取");
		await this.fetchData();
	},
};
</script>
<style scoped>
.home-h1 {
	color: lightblue;
}
</style>
