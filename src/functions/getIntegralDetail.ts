import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getIntegralDetail = async (value: any) => {
    try {
        const response = await myAxios.get('/getIntegralDetail', {
            params: {
                user_id: value
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.IntegralDetail = response.data
        sessionStorage.setItem('IntegralDetail', JSON.stringify(state.IntegralDetail))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getIntegralDetail;

