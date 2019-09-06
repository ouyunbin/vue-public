<template>
	<el-container style="position: fixed; width: 100%; height: 100%;">
		<el-header height="74px" style="padding: 0"></el-header>
		<el-container>
			<el-aside width="200px"></el-aside>
			<el-main class="main">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
