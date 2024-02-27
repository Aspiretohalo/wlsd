import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllActivitys = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getAllActivitys', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.Activity = response.data
        sessionStorage.setItem('Activity', JSON.stringify(state.Activity))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllActivitys;

