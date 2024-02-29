import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getIntegralGifts = async () => {
    try {
        const response = await myAxios.get('/getIntegralGifts', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.IntegralGifts = response.data
        sessionStorage.setItem('IntegralGifts', JSON.stringify(state.IntegralGifts))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getIntegralGifts;

