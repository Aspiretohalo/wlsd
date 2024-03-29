import myAxios from "../plugins/myAxios";
import getAllBlogs from './getAllBlogs';
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setBlogThumb = async (item_id: any) => {
    try {
        const response = await myAxios.post('/setBlogThumb', {
            id: item_id,
            userId: user.userId
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
export default setBlogThumb;