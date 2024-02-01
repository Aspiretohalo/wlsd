import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getUserMsg = async () => {
    try {
        const response = await myAxios.get('/getUserMsg', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.User = response.data
        sessionStorage.setItem('User', JSON.stringify(state.User))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getUserMsg;

