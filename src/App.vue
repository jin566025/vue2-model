<template>
  <div id="app">
  	<Loading></Loading>
    <router-view/>
  </div>
</template>

<script>
	import Loading from '@/components/loading'
	export default {
		components:{
			Loading
		}
	}
</script>

<style>
#app {
  font-family: Monda,PingFang SC,Microsoft YaHei,sans-serif;height: 100%;
}
</style>
