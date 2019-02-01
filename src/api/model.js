import request from '@/utils/request'

export function findAll(data){
	return request({
		url:"/model/findAll",
		method:'post',
		data:data
	})
}

export function add(data){
	return request({
		url:"/model/add",
		method:'post',
		data:data
	})
}

export function remove(data){
	return request({
		url:"/model/remove",
		method:'post',
		data:data
	})
}

export function update(data){
	return request({
		url:"/model/update",
		method:'post',
		data:data
	})
}


export function findOne(data){
	return request({
		url:"/model/findOne",
		method:'post',
		data:data
	})
}
