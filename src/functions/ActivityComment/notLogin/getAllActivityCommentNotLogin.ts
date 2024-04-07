import myAxios from "../../../plugins/myAxios";
import state from "../../../store/state";

const getAllActivityCommentNotLogin = async (activity_id: any) => {
    try {
        const response = await myAxios.get('/getAllActivityCommentNotLogin', {
            params: {
                activity_id: activity_id
            },
        });
        // 处理响应数据
        state.AllActivityComment = response.data
        sessionStorage.setItem('AllActivityComment', JSON.stringify(state.AllActivityComment))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllActivityCommentNotLogin;

