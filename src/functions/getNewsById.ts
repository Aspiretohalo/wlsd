import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getNewsById = async (newsId: any) => {
    try {
        const response = await myAxios.get('/getNewsById', {
            params: {
                news_id: newsId
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.SingleNews = response.data
        sessionStorage.setItem('SingleNews', JSON.stringify(state.SingleNews))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getNewsById;

