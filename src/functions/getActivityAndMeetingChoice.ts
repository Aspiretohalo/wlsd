import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getActivityAndMeetingChoice = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getActivityAndMeetingChoice', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.ActivityAndMeetingChoice = response.data
        sessionStorage.setItem('ActivityAndMeetingChoice', JSON.stringify(state.ActivityAndMeetingChoice))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getActivityAndMeetingChoice;

