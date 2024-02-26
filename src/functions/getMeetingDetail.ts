import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getMeetingDetail = async (item_id: any) => {
    try {
        const response = await myAxios.get('/getMeetingDetail', {
            params: {
                item_id: item_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.MeetingDetail = response.data
        sessionStorage.setItem('MeetingDetail', JSON.stringify(state.MeetingDetail))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getMeetingDetail;

