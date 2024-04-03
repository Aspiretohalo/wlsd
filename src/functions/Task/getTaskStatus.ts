import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getTaskStatus = async (user_id: number) => {
    try {
        const response = await myAxios.get('/getTaskStatus', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.TaskStatus = response.data
        sessionStorage.setItem('TaskStatus', JSON.stringify(state.TaskStatus))
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getTaskStatus;

