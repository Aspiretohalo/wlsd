import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getAllPostComment = async (post_id: number, user_id: number) => {
    try {
        const response = await myAxios.get('/getAllPostComment', {
            params: {
                post_id: post_id,
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.AllPostComment = response.data
        sessionStorage.setItem('AllPostComment', JSON.stringify(state.AllPostComment))
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllPostComment;

