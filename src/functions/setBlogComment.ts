import myAxios from "../plugins/myAxios";
import getAllBlogs from './getAllBlogs';
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setBlogComment = async (content: string) => {
    try {
        const response = await myAxios.post('/setBlogComment', {
            content: content,
            userId: user.userId,
            replyParentId: 0,
            replyLevel: 0,
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getAllBlogs(user.userId)
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default setBlogComment;