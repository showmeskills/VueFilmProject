import { MessageBox } from 'mint-ui';

export function commingSoonMessageBox(){
    return Promise.resolve(MessageBox({
        message: '该影片目前没有排期,到首页看其它电影吧',
        showCancelButton: true,
        confirmButtonText:'同意',
        cancelButtonText:'拒绝',
    }))
}

export function filmCityMessageBox(){
    return Promise.resolve(MessageBox({
        message: "定位失败当前的城市,默认为上海",
        showCancelButton: true,
        confirmButtonText: "是",
        cancelButtonText: "请选择城市",
    }))
}

export function filmCityFailMessageBox(){
    return Promise.resolve( MessageBox({
        message: "获取当前城市失败",
        showCancelButton: false,
        confirmButtonText: "请选择城市",
    }))
}