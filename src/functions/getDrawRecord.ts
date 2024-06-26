import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getDrawRecord = async (value: any) => {
    try {
        const response = await myAxios.get('/getDrawRecord', {
            params: {
                user_id: value
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.DrawRecord = response.data
        sessionStorage.setItem('DrawRecord', JSON.stringify(state.DrawRecord))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getDrawRecord;

