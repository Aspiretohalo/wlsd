import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getThumbBlogShare = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getThumbBlogShare', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.ThumbBlogShare = response.data
        sessionStorage.setItem('ThumbBlogShare', JSON.stringify(state.ThumbBlogShare))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getThumbBlogShare;

