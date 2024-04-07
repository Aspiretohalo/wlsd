import myAxios from "../../plugins/myAxios";
import { reactive } from 'vue'
import getUserMsg from "../getUserMsg";

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setCertification = async (ticket_id: any) => {
    try {
        const response = await myAxios.put('/setCertification', {
            userId: user.userId,
            certification: ticket_id
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        await getUserMsg()
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default setCertification;