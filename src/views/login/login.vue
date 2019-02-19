<template>
	<div id="content">
		<div class="login">
			<form id="form">
				<div class="logo"></div>
				<div class="login_form">
					<div class="user">
						<input class="text_value" value="" name="username" type="text" id="username" placeholder="username" v-model="username">
						<input class="text_value" value="" name="password" type="password" id="password" placeholder="password" v-model="password">
					</div>
					<button class="button" id="submit" type="button" @click="login">登录</button>
				</div>
				
				<div id="tip">{{ tips }}</div>
			
			 </form>
		</div>
	</div>
</template>

<script>
	import { login,test } from '@/api/adminUser.js'
	export default{
		data(){
			return {
				username:'',
				password:'',
				tips:''
			}
		},
		methods:{
			login:function(){
				let params = {};
				if(this.username){
					Object.assign(params,{username:this.username})
				}else{
					this.tips = "请输入username";
					return false
				}
				
				if(this.password){
					Object.assign(params,{password:this.password})
				}else{
					this.tips = "请输入password";
					return false
				}
				
				login(params).then((res)=>{
					console.log(res)
					if(res.data.code==0){
						localStorage.setItem("token",res.data.token);
						localStorage.setItem("id",res.data.id);
						this.$router.push({'path':'/admin/my_good/list'})
					}else{
						this.tips = res.data.msg
					}
				})
			}
// 			login:function(){
// 				let params = {};
// 				if(this.username){
// 					Object.assign(params,{username:this.username})
// 				}else{
// 					this.tips = "请输入username";
// 					return false
// 				}
// 				
// 				if(this.password){
// 					Object.assign(params,{password:this.password})
// 				}else{
// 					this.tips = "请输入password";
// 					return false
// 				}
// 				console.log(params)
// 				login(params).then((res)=>{
// 					console.log(res)
// 					if(res.data.code==0){
// 						localStorage.setItem("token",res.data.token);
// 						localStorage.setItem("id",res.data.id);
// 						this.$router.push({'path':'/admin-welcome'})
// 					}else{
// 						this.tips = res.data.msg
// 					}
// 				})
// 			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#content { width: 100%; height: 100%; overflow: hidden; margin: 0; font-family: 'microsoft yahei'; background-image:url(../../../static/images/login_bg.jpg); }

.login { width:640px; height:400px; position:absolute; left:50%; top:50%; margin-left:-320px; margin-top:-200px;}
.logo { background-image:url(../../../static/images/admin_logo.png); background-repeat:no-repeat; background-position: 30px center; height:150px;}
.login_form { height:80px; margin-left:auto; margin-right:auto; width:600px;}
.login_form .user{ background-image:url(../../../static/images/login_name_bg.jpg); width:540px; height:80px; float:left;}
.login_form .button { cursor: pointer;background:url(../../../static/images/login_button.jpg); width:50px; background-repeat:no-repeat; background-position:left center; height:54px; float:left; display:block; text-indent: -9999px; border:none; margin-top:10px; position:relative}
.login_form .text_value { float:left; margin-left:17px; padding-left:10px; padding-right:10px; margin-top:15px; width:225px; height:50px; line-height:50px; font-size:16px; color:#666; font-weight:bold; border:none; background-color:#f5f6f7}
.foot { padding-top:30px; text-align:center; color:#FFF; padding-right:80px;}
#tip {color:#FFF;   background-image:none; text-align:left;padding-left: 40px;height: 30px;line-height: 30px;; font-size:14px;}
</style>