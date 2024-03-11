import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getPostById = async (id: any) => {
    try {
        const response = await myAxios.get('/getPostById', {
            params: {
                id: id
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

