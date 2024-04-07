import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getActivityCommentCount = async (activity_id: number) => {
    try {
        const response = await myAxios.get('/getActivityCommentCount', {
            params: {
                activity_id: activity_id,
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.ActivityCommentCount = response.data
        sessionStorage.setItem('ActivityCommentCount', JSON.stringify(state.ActivityCommentCount))
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getActivityCommentCount;

