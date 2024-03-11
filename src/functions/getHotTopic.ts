import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getHotTopic = async () => {
    try {
        const response = await myAxios.get('/getHotTopic', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.HotTopic = response.data
        sessionStorage.setItem('HotTopic', JSON.stringify(state.HotTopic))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getHotTopic;

