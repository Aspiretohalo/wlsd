import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getMeetingById = async (value: any) => {
    try {
        const response = await myAxios.get('/getMeetingById', {
            params: {
                item_id: value
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.SingleMeeting = response.data
        sessionStorage.setItem('SingleMeeting', JSON.stringify(state.SingleMeeting))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getMeetingById;

