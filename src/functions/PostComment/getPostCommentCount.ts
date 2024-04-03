import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getPostCommentCount = async (post_id: number) => {
    try {
        const response = await myAxios.get('/getPostCommentCount', {
            params: {
                post_id: post_id,
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.PostCommentCount = response.data
        sessionStorage.setItem('PostCommentCount', JSON.stringify(state.PostCommentCount))
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getPostCommentCount;

