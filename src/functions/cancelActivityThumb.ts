import myAxios from "../plugins/myAxios";
import getAllActivitys from './getAllActivitys';
import getActivityById from './getActivityById';
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const cancelActivityThumb = async (item_id: any) => {
    try {
        const response = await myAxios.post('/cancelActivityThumb', {
            itemId: item_id,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getActivityById(item_id, user.userId)
        await getAllActivitys(user.userId)

        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default cancelActivityThumb;