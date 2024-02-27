import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getActivityById = async (item_id: any, user_id: any) => {
    try {
        const response = await myAxios.get('/getActivityById', {
            params: {
                item_id: item_id,
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.SingleActivity = response.data
        sessionStorage.setItem('SingleActivity', JSON.stringify(state.SingleActivity))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getActivityById;

