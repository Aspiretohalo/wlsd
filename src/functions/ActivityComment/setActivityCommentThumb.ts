import myAxios from "../../plugins/myAxios";
import getAllActivityComment from '../ActivityComment/getAllActivityComment';

import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setActivityCommentThumb = async (item_id: any, activity_id: any) => {
    try {
        const response = await myAxios.post('/setActivityCommentThumb', {
            id: item_id,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getAllActivityComment(activity_id, user.userId)
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default setActivityCommentThumb;