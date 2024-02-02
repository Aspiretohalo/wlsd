import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllWonderfulPictures = async () => {
    try {
        const response = await myAxios.get('/getAllWonderfulPictures', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.WonderfulPictures = response.data
        sessionStorage.setItem('WonderfulPictures', JSON.stringify(state.WonderfulPictures))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllWonderfulPictures;

