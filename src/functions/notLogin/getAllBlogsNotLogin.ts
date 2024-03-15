import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getAllBlogsNotLogin = async () => {
    try {
        const response = await myAxios.get('/getAllBlogsNotLogin', {
        });
        // 处理响应数据
        state.Blog = response.data
        sessionStorage.setItem('Blog', JSON.stringify(state.Blog))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllBlogsNotLogin;

