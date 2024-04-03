import myAxios from "../plugins/myAxios";
import getPostById from '../functions/getPostById';

import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const cancelPostThumb = async (item_id: any) => {
    try {
        const response = await myAxios.post('/cancelPostThumb', {
            id: item_id,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getPostById(item_id)
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default cancelPostThumb;