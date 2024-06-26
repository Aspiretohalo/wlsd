import myAxios from "../plugins/myAxios";
import { ElMessage } from 'element-plus'
import getAllMeetings from './getAllMeetings';
import getMeetingById from './getMeetingById';
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const cancelMeetingSubscription = async (item_id: any) => {
    try {
        const response = await myAxios.post('/cancelMeetingSubscription', {
            itemId: item_id,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        // 处理响应数据
        ElMessage({
            showClose: true,
            message: '已取消订阅',
            type: 'info',
        })
        await getMeetingById(item_id, user.userId)
        await getAllMeetings(user.userId)

        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default cancelMeetingSubscription;