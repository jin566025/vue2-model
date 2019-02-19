import request from '@/utils/request'

export function login(data){
	return request({
		url:"/login",
		method:'post',
		data:data
	})
}
export function findAll(data){
	return request({
		url:"/user/findAll",
		method:'post',
		data:data
	})
}

export function add(data){
	return request({
		url:"/user/add",
		method:'post',
		data:data
	})
}

export function remove(data){
	return request({
		url:"/user/remove",
		method:'post',
		data:data
	})
}

export function update(data){
	return request({
		url:"/user/update",
		method:'post',
		data:data
	})
}


export function findOne(data){
	return request({
		url:"/user/findOne",
		method:'post',
		data:data
	})
}
