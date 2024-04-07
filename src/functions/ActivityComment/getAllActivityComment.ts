import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getAllActivityComment = async (activity_id: number, user_id: number) => {
    try {
        const response = await myAxios.get('/getAllActivityComment', {
            params: {
                activity_id: activity_id,
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.AllActivityComment = response.data
        sessionStorage.setItem('AllActivityComment', JSON.stringify(state.AllActivityComment))
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllActivityComment;

