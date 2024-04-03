import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getMedal = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getMedal', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.Medal = response.data
        sessionStorage.setItem('Medal', JSON.stringify(state.Medal))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getMedal;

