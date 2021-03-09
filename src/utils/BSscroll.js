import BScroll from "@better-scroll/core";

export default (className)=>{
    return new BScroll(className, {
            pullUpLoad: true,
            scrollbar: true,
            pullDownRefresh: true,
    });
}