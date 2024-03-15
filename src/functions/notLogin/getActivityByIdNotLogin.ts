import myAxios from "../../plugins/myAxios";
import state from "../../store/state";
const getActivityByIdNotLogin = async (item_id: any) => {
    try {
        const response = await myAxios.get('/getActivityByIdNotLogin', {
            params: {
                item_id: item_id,
            },
        });
        // 处理响应数据
        state.SingleActivity = response.data
        sessionStorage.setItem('SingleActivity', JSON.stringify(state.SingleActivity))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getActivityByIdNotLogin;

