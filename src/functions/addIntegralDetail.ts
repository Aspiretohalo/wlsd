import myAxios from "../plugins/myAxios";
import getIntegralDetail from './getIntegralDetail';
import getUserMsg from './getUserMsg';

const addIntegralDetail = async (integralName: any, integralAmount: any) => {
    console.log(integralName);
    console.log(integralAmount);
    console.log((JSON.parse(sessionStorage.getItem("User") || "null") || "").userId);

    try {
        const response = await myAxios.post('/addIntegralDetail', {
            integralName: integralName,
            integralAmount: integralAmount,
            userId: (JSON.parse(sessionStorage.getItem("User") || "null") || "").userId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        console.log(response);
        await getUserMsg()
        await getIntegralDetail((JSON.parse(sessionStorage.getItem("User") || "null") || "").userId)

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default addIntegralDetail;