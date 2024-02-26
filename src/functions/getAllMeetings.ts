import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllMeetings = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getAllMeetings', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.Meeting = response.data
        sessionStorage.setItem('Meeting', JSON.stringify(state.Meeting))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllMeetings;

