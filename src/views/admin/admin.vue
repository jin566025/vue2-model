<template>
	<div class="content">
		<div class="header">
			<span class="title">后台</span>
		</div>
		<div class="main clearfix">
			<div class="main-left fl">
				<admin-navs></admin-navs>
			</div>
			<div class="main-right fl">
				<router-view></router-view>
			</div>
		</div>
		
		
	</div>
	
</template>
<script>
	import AdminNavs from '@/components/admin-navs'
    export default {
    	components:{
    		AdminNavs
    	}
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	min-width: 1024px;height: 100%;
	.header{
		width: 100%;height: 60px;line-height: 60px;background-color: #545c64;color: #fff;
		.title{padding: 0 50px;font-size: 20px;font-weight: bold;}
	}
	.main{
		height:100%;min-height: calc(100% - 60px);min-height: -webkit-calc(100% - 60px);min-height: -moz-calc(100% - 60px);
		.main-left{width: 201px;position: absolute\9;left: 0;background-color:#545c64;height: 100%;}
		.main-right{width: calc(100% - 202px);width:-webkit-calc(100% - 202px);width: -moz-calc(100% - 202px); width: 100%\9;margin-left: 202px\9;}
		
	}
}
</style>