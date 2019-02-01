<template>
	<div class="content clearfix">
		<div class="fl content-l">Jin Chentian</div>
		<div class="fr content-r">
			<div class="clearfix nav">
		  		<div class="navs navs3 fr ib">Tags</div>
		  		<div class="navs navs2 fr ib">Timeline</div>
		  		<div class="navs navs1 fr ib">Home</div>
		  	</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	padding: 25px 0;width:100%;
	.content-l{
		font-weight: bold;font-size: 24px;color: #222;
	}
	.content-r{
		.nav{
			.navs{color: #555;font-size: 12px;padding:10px 15px 10px 35px;background-size: 15px;background-position: 10px;background-repeat: no-repeat;}
			.navs:hover{background-color: gainsboro;cursor: pointer;color: #000000;}
			.navs1{background-image: url(../../static/img/index.png);}
			.navs2{background-image: url(../../static/img/cal.png);}
			.navs3{background-image: url(../../static/img/tag.png);}
			.navs1:hover{background-image: url(../../static/img/index2.png);}
			.navs2:hover{background-image: url(../../static/img/cal2.png);}
			.navs3:hover{background-image: url(../../static/img/tag2.png);}
		}
	}
	
}
</style>