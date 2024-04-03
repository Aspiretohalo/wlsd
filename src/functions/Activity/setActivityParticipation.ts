import myAxios from "../../plugins/myAxios";
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import getActivityAndMeetingChoice from '../getActivityAndMeetingChoice';
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setActivityParticipation = async (item: any, itemId: any) => {
    try {
        const response = await myAxios.post('/setActivityParticipation', {
            name: item.name,
            phoneNumber: item.phoneNumber,
            email: item.email,
            company: item.company,
            position: item.position,
            itemId: parseInt(itemId),
            userId: user.userId,
            way: '西湖论剑官网'
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        // 处理响应数据
        ElMessage({
            showClose: true,
            message: '报名成功',
            type: 'success',
        })
        await getActivityAndMeetingChoice(user.userId)
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default setActivityParticipation;