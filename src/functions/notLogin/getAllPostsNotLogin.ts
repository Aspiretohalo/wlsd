import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getAllPostsNotLogin = async () => {
    try {
        const response = await myAxios.get('/getAllPostsNotLogin', {
        });
        // 处理响应数据
        state.AllPost = response.data
        sessionStorage.setItem('Blog', JSON.stringify(state.AllPost))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllPostsNotLogin;

