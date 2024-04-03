// import myAxios from "../plugins/myAxios";
// import { ElMessage } from 'element-plus'
// import getAllActivitys from './getAllActivitys';
// import getActivityById from './getActivityById';
// import { reactive } from 'vue'

// const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

// const cancelActivityParticipation = async (item_id: any) => {
//     try {
//         const response = await myAxios.post('/cancelActivityParticipation', {
//             itemId: item_id,
//             userId: user.userId
//         }, {
//             headers: {
//                 Authorization: 'Bearer ' + localStorage.getItem('token'),
//                 'Content-Type': 'application/json'
//             }
//         });
//         // 处理响应数据
//         ElMessage({
//             showClose: true,
//             message: '已取消订阅',
//             type: 'info',
//         })
//         await getActivityById(item_id, user.userId)
//         await getAllActivitys(user.userId)

//         console.log(response);

//     } catch (error) {
//         console.error('获取信息失败', error);
//     }
// };
// export default cancelActivityParticipation;