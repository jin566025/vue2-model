import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
		{path:'/',name:'Login',component:()=> import('@/views/login/login')},
		{
			path:'/admin',
			name:"Admin",
			component:()=> import('@/views/admin/admin'),
			meta: {requireAuth: true},
			redirect:'/admin/SundayLookRecord/list',
			children:[

			]
		},
	]

})
