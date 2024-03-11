import myAxios from "../plugins/myAxios";
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const addNewPost = async (title: string, post_description: string, content: string, post_type: string[]) => {
    console.log({
        title: title,
        postDescription: post_description,
        content: content,
        postType: String(post_type),
        userId: user.userId,
    });

    try {
        const response = await myAxios.post('/addNewPost',
            {
                title: title,
                postDescription: post_description,
                content: content,
                postType: String(post_type),
                userId: user.userId,
            }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        console.log(response);
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default addNewPost;