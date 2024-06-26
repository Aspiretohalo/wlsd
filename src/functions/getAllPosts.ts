import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllPosts = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getAllPosts', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.AllPost = response.data
        sessionStorage.setItem('AllPost', JSON.stringify(state.AllPost))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllPosts;

