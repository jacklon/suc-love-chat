import request from '@/util/http'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        params:data
    })
}

//加载消息记录
export function loadMessages(data) {
    return request({
        url:'/loadMessages',
        method: 'get',
        params: data
    })
}


//通讯录加载
export function loadUserFriendsPage(data) {
    return request({
        url:'/loadUserFriendsPage',
        method: 'get',
        params: data
    })
}
//搜索用户
export function searchUser(data) {
    return request({
        url:'/searchUser',
        method: 'get',
        params: data
    })
}
//添加好友
export function applyAddFriends(data) {
    return request({
        url:'/applyAddFriends',
        method: 'post',
        params: data
    })
}

//查询待处理好友申请
export function loadReceivingFriends(data) {
    return request({
        url:'/loadReceivingFriends',
        method: 'get',
        params: data
    })
}
//同意好友申请
export function acceptFriendsApply(data) {
    return request({
        url:'/acceptFriendsApply',
        method: 'post',
        params: data
    })
}


//获取群成员信息
export function loadGroupUserInfo(data) {
    return request({
        url:'/loadGroupUserInfo',
        method: 'get',
        params: data
    })
}