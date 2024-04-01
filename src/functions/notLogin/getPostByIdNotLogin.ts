import myAxios from "../../plugins/myAxios";
import state from "../../store/state";

const getPostByIdNotLogin = async (id: any) => {
    try {
        const response = await myAxios.get('/getPostByIdNotLogin', {
            params: {
                id: id,
            },
        });
        // 处理响应数据
        state.SinglePost = response.data
        sessionStorage.setItem('SinglePost', JSON.stringify(state.SinglePost))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getPostByIdNotLogin;

