import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getQuestionById = async (question_id: any, user_id: any) => {
    try {
        const response = await myAxios.get('/getQuestionById', {
            params: {
                question_id: question_id,
                user_id: user_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.SingleQuestion = response.data
        sessionStorage.setItem('SingleQuestion', JSON.stringify(state.SingleQuestion))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getQuestionById;

