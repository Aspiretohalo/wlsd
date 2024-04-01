import myAxios from "../plugins/myAxios";
import state from "../store/state";
import { reactive } from 'vue'

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const getPostById = async (id: any) => {
    try {
        const response = await myAxios.get('/getPostById', {
            params: {
                id: id,
                user_id: user.userId
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.SinglePost = response.data
        sessionStorage.setItem('SinglePost', JSON.stringify(state.SinglePost))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getPostById;

