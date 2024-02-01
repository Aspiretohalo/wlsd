import myAxios from "../plugins/myAxios";
import state from "../store/state";
const getAllCommittee = async () => {
    try {
        const response = await myAxios.get('/getAllCommittee', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        // 处理响应数据
        state.AllCommittee = response.data
        sessionStorage.setItem('AllCommittee', JSON.stringify(state.AllCommittee))

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default getAllCommittee;