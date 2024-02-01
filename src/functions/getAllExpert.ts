import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getAllExpert = async () => {
    try {
        const response = await myAxios.get('/getAllExpert', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.AllExpert = response.data
        sessionStorage.setItem('AllExpert', JSON.stringify(state.AllExpert))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllExpert;

