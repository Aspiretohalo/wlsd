import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllBlogs = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getAllBlogs', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.Blog = response.data
        sessionStorage.setItem('Blog', JSON.stringify(state.Blog))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllBlogs;

