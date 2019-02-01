<template>
	<div>
	  <el-col style="width: 202px;">
	    <el-menu
	      default-active="1"
	      class="el-menu-vertical-demo"
	      background-color="#545c64"
	      text-color="#fff"
	      :unique-opened="true"
	      :collapse-transition="true"
	      :router="true"
	      active-text-color="#ffd04b">
				<!-- <el-submenu index="1">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>SundayLookRecord</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/admin/SundayLookRecord/list">list</el-menu-item>
						<el-menu-item index="/admin/SundayLookRecord/add">add</el-menu-item>
					</el-menu-item-group>
				</el-submenu> -->
				
				

	    </el-menu>
	  </el-col>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>