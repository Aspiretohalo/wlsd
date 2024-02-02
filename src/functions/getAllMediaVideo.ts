import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllMediaVideo = async () => {
    try {
        const response = await myAxios.get('/getAllMediaVideo', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.MediaVideo = response.data
        sessionStorage.setItem('MediaVideo', JSON.stringify(state.MediaVideo))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllMediaVideo;

