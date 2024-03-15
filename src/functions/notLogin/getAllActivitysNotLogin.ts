import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getAllActivitysNotLogin = async () => {
    try {
        const response = await myAxios.get('/getAllActivitysNotLogin', {
        });
        // 处理响应数据
        state.Activity = response.data
        sessionStorage.setItem('Activity', JSON.stringify(state.Activity))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllActivitysNotLogin;

