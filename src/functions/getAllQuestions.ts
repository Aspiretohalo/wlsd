import myAxios from "../plugins/myAxios";
import state from "../store/state";

const getAllQuestions = async (user_id: any) => {
    try {
        const response = await myAxios.get('/getAllQuestions', {
            params: {
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.Question = response.data
        sessionStorage.setItem('Question', JSON.stringify(state.Question))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllQuestions;

