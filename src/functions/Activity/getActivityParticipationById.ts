import myAxios from "../../plugins/myAxios";
import state from "../../store/state";
const getActivityParticipationById = async (item_id: any, user_id: any) => {
    try {
        const response = await myAxios.get('/getActivityParticipationById', {
            params: {
                item_id: item_id,
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.SingleActivityParticipation = response.data
        sessionStorage.setItem('SingleActivityParticipation', JSON.stringify(state.SingleActivityParticipation))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getActivityParticipationById;

