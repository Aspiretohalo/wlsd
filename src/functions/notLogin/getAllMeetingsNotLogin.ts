import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getAllMeetingsNotLogin = async () => {
    try {
        const response = await myAxios.get('/getAllMeetingsNotLogin', {
        });
        // 处理响应数据
        state.Meeting = response.data
        sessionStorage.setItem('Meeting', JSON.stringify(state.Meeting))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllMeetingsNotLogin;

