import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllNews = async () => {
    try {
        const response = await myAxios.get('/getAllNews', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.News = response.data
        sessionStorage.setItem('News', JSON.stringify(state.News))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllNews;

