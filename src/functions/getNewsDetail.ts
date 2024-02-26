import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getNewsDetail = async (newsId: any) => {
    try {
        const response = await myAxios.get('/getNewsDetail', {
            params: {
                news_id: newsId
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.NewsDetail = response.data
        sessionStorage.setItem('NewsDetail', JSON.stringify(state.NewsDetail))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getNewsDetail;

