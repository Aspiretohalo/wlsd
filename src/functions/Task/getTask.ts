import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getTask = async () => {
    try {
        const response = await myAxios.get('/getTask', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.Task = response.data
        sessionStorage.setItem('Task', JSON.stringify(state.Task))
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getTask;

