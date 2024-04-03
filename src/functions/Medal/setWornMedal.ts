import myAxios from "../../plugins/myAxios";
import { reactive } from 'vue'
import getUserMsg from "../getUserMsg";

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const setWornMedal = async (medal_id: any) => {
    try {
        const response = await myAxios.put('/setWornMedal', {
            userId: user.userId,
            medal: medal_id
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
export default setWornMedal;