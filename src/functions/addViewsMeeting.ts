import myAxios from "../plugins/myAxios";

const addMeetingViews = async (item_id: any) => {
    try {
        const response = await myAxios.get('/meeting/addViews', {
            params: {
                item_id: item_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        console.log(response);
    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default addMeetingViews;