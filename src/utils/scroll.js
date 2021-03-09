export default{
    start(handleScroll){
        window.addEventListener("scroll", handleScroll);
    },
    end(handleScroll){
        window.removeEventListener("scroll",handleScroll);
    }
};