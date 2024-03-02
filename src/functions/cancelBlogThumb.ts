import myAxios from "../plugins/myAxios";
import getAllBlogs from './getAllBlogs';
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const cancelBlogThumb = async (item_id: any) => {
    try {
        const response = await myAxios.post('/cancelBlogThumb', {
            id: item_id,
            userId: user.userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getAllBlogs()
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default cancelBlogThumb;