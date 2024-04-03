import myAxios from "../../plugins/myAxios";
import getAllPostComment from '../PostComment/getAllPostComment';

import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setPostCommentThumb = async (item_id: any, post_id: any) => {
    try {
        const response = await myAxios.post('/setPostCommentThumb', {
            id: item_id,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getAllPostComment(post_id, user.userId)
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default setPostCommentThumb;