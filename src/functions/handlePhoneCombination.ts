import router from "../config/router";
import myAxios from "../plugins/myAxios";
import getUserMsg from './getUserMsg';
import { ElMessage } from 'element-plus'

const handlePhoneCombination = async (user: { phoneNumber: string, verificationCode: string }
    , tempUserId: string) => {
    try {
        const response = await myAxios.post('/handlePhoneCombination', {
            phoneNumber: user.phoneNumber,
            tempUserId: tempUserId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        localStorage.setItem('token', response.data.data.jwt)
        ElMessage({
            showClose: true,
            message: '登录成功',
            type: 'success',
        })
        await getUserMsg()
        router.push('/')
        console.log(response);

    } catch (error) {
        console.error('获取信息失败', error);
    }
};
export default handlePhoneCombination;