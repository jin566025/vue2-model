<template>
<div class="content">
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		替换input
	 <!-- <el-form-item label="商品标题" prop="name">
	    <el-input v-model="ruleForm.name"></el-input>
	  </el-form-item>
	  <el-form-item label="商品价格" prop="price">
	    <el-input v-model="ruleForm.price" type="number"></el-input>
	  </el-form-item>
	  <el-form-item label="商品介绍" prop="desc">
	    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
	  </el-form-item> -->
<!-- 	  <el-form-item label="商品类型" prop="region">
	    <el-select v-model="ruleForm.region" placeholder="商品类型">
	      <el-option label="美妆" value="1"></el-option>
	      <el-option label="服饰" value="2"></el-option>
	      <el-option label="吃货" value="3"></el-option>
	      <el-option label="其他" value="4"></el-option>
	    </el-select>
	  </el-form-item>
	  
	  <div class="upimg">
	  	<div class="pic-content">
	  		<img class="preimg" :src="imgurl" />
	  		<div class="up-input">
	  			<el-button size="small" type="primary">上传图片<i class="el-icon-upload el-icon--right"></i></el-button>
	  			<input ref="file" class="up-input2" @change="imgUpload" type="file" />
	  		</div>
	  	</div>

	  </div>
	 -->  
	  
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
	    <el-button @click="resetForm('ruleForm')">重置</el-button>
	  </el-form-item>
	</el-form>
</div>
</template>

<script>
  import { add,findOne,update,upImg } from '@/api/model唯一'
	import axios from 'axios'
  export default {
    data() {
      return {
        ruleForm: {
					替换ruleForm
//           name: '',
//           region: '',
//           desc: '',
//           price:''
          
					
        },
        rules: {
					替换rules
//           name: [
//             { required: true, message: '请输入商品标题', trigger: 'blur' }
// 						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
//           ],
//           region: [
//             { required: true, message: '请选择商品类型', trigger: 'change' }
//           ],
// 
//           desc: [
//             { required: true, message: '请填写商品介绍', trigger: 'blur' }
//           ],
//           price: [
//             { required: true, message: '请填写商品价格', trigger: 'blur' }
//           ],
        }
      };
    },
    created(){
    	this.loadGood();	
    },
    
    methods: {
			save:function(){
				let that = this;
				let file = this.$refs.file.files[0];
				let formData  = new FormData();
				formData.append("file",file)
				axios.post("http://47.110.56.193/api/upToLocal",formData).then(res=>{
					let url = 'http://47.110.56.193/'+res.data.url;
					
					console.log(url)
					that.imgurl = url
				})
			},
      imgUpload:function(e){
      	let file = e.target.files[0];
      	let imgSize = file.size/1024;
      	if(imgSize>200){
      		this.$message({
      				showClose: true,
      				message: '请上传大小不要超过200KB的图片',
      				type: 'fail'
      			});
      	}else{
      		this.save()
      	}
      },
      loadGood:function(){
      	let id = window.location.href.split("?id=")[1];
      	if(id){
      		let params = {};
      		params.id = id;
      		findOne(params).then((res)=>{
      			if(res.data.success){
      				let datas = res.data.data;
							替换loadGood
//       				this.ruleForm.name = datas.product_name
//       				this.ruleForm.region = datas.product_type
//       				this.ruleForm.desc = datas.product_desc
//       				this.ruleForm.price = datas.product_price
//       				this.ruleForm.id  =  datas.id
// 							this.ruleForm.imgurl  =  datas.imgurl
      			}
      		})
      	}
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	var dataArray =  this.ruleForm;
          	if(this.ruleForm.id){
          		update(dataArray).then((res)=>{
          			console.log(res)
          			if(res.data.success){
          				let that = this;
									this.$message({
										message: '发布成功',
										showClose: true,
										type: 'success',
										duration:1500,
										onClose:function(){
											window.location.reload()
											//that.$router.push({'path':'admin-product'})
										}
									});
          			}
          		})
          	}else{
          		add(dataArray).then((res)=>{
	            	if(res){
	            		let that = this;
									this.$message({
										message: '发布成功',
										showClose: true,
										type: 'success',
										duration:1500,
										onClose:function(){
											window.location.reload()
											//that.$router.push({'path':'admin-product'})
										}
									});
	            	}
	            })
          	}
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
	.content{
		margin-top: 40px;
	}
	.upimg{
		margin-left: 100px;margin-bottom: 100px;
		.pic-content{
			font-size: 14px;margin-bottom: 20px;
			.upimg-title{margin-bottom: 10px;}
			.preimg{width: 100px;display: block;margin:20px 0;}
			.up-input{
				position: relative;height: 40px;width: 100px;
				.up-input2{height:100%;width:100%;opacity: 0;}
				button{position: absolute;top: 0;left: 0;z-index: -1;}
			}
		}
	}
</style>