import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getMeetingByIdNotLogin = async (item_id: any) => {
    try {
        const response = await myAxios.get('/getMeetingByIdNotLogin', {
            params: {
                item_id: item_id,
            },
        });
        // 处理响应数据
        state.SingleMeeting = response.data
        sessionStorage.setItem('SingleMeeting', JSON.stringify(state.SingleMeeting))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getMeetingByIdNotLogin;

