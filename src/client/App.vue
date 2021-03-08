<template>
	<div id="app-box">首页</div>
	<router-link to="/">跳转到首页</router-link>
	<router-link to="/about">跳转到关于</router-link>
	<router-view />
</template>
<script>
export default {
	name: "App",
};
</script>
