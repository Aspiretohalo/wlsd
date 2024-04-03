import myAxios from "../../../plugins/myAxios";
import state from "../../../store/state";

const getAllPostCommentNotLogin = async (post_id: any) => {
    try {
        const response = await myAxios.get('/getAllPostCommentNotLogin', {
            params: {
                post_id: post_id
            },
        });
        // 处理响应数据
        state.AllPostComment = response.data
        sessionStorage.setItem('AllPostComment', JSON.stringify(state.AllPostComment))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllPostCommentNotLogin;

