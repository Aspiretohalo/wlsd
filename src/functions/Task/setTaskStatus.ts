import { log } from "console";
import myAxios from "../../plugins/myAxios";
import getTaskStatus from './getTaskStatus';
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setTaskStatus = async (taskId: any) => {
    try {
        const response = await myAxios.post('/setTaskStatus', {
            taskId: taskId,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getTaskStatus(user.userId)
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default setTaskStatus;