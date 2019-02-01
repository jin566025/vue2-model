<template>
	<div class="content" id="content">
		<el-row id="content-title">这里替换掉</el-row>
		<el-row id="content-table" v-for="(item,index) in lists" :key="item.id">
			这里也替换掉
		</el-row>
		
		<div  style="text-align: center;margin-top: 60px;">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  @current-change="pageNoChange"
			  :total=total
			  :page-size=pageSize>
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import { findAll,remove,update } from '@/api/model'
	export default{
		data(){
			return {
				lists:[],
				total:0,
	  		pageSize:5
			}
		},
		created(){
			this.loadAll(1,5)
		},
		methods:{
			pageNoChange:function(val){
				this.loadAll(val,this.pageSize)
			},
			removeItem:function(id){
				this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
						let params = {};
						params.id = id;
						let that = this;
						remove(params).then((res)=>{
							console.log(res)
							if(res.data.success){
								that.$message({
										type: 'success',
										message: '删除成功!'
								});
								this.loadAll(1,5)
							}
						})
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});          
				});
			},
			updateItem:function(id){
				this.$confirm('此操作将前往修改该商品，是否继续','提示',{
					confirmButtonText:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(()=>{
					this.$router.push({'path':'add?id='+id})
				}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消修改'
						});          
				});
			},
			getType:function(type){
				if(type==1){
					return "美妆"
				}else if(type==2){
					return "服饰"
				}else if(type==3){
					return "吃货"
				}else if(type==4){
					return "其他"
				}
			},
			toImg:function(id){
				this.$confirm('此操作将前往修改详情图片，是否继续','提示',{
					confirmButtonText:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(()=>{
					this.$router.push({'path':'admin-productimg?id='+id})
				})
			},
			loadAll:function(pageNo,pageSize,type){
				let params = {};
				params.pageNo=  pageNo;
				params.pageSize = pageSize;
			
				if(type){
					params.type = type;
				}
				findAll(params).then((res)=>{
					if(res.data.success){
						this.lists = res.data.data;
						this.total = res.data.total;
					}
					
				})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	text-align: center;font-size:14px;margin-top: 40px;color: #909399;
	.el-row{
		margin-bottom: 10px;
		.el-col{
			height: 100px;line-height: 100px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;
			.img{height: 100px;}
		}

	}
}
</style>