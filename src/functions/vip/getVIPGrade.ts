export const getVIPGrade = (experience: number): { img: string; grade: string } | null => {
    if (experience < 1000)
        return {
            img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/vip%2F%E6%99%AE%E9%80%9A.png',
            grade: '普通会员'
        };
    else if (experience < 5000 && experience >= 1000)
        return {
            img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/vip%2F%E7%99%BD%E9%93%B6.png',
            grade: '白银会员'
        };
    else if (experience < 10000 && experience >= 5000)

        return {
            img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/vip%2F%E9%BB%84%E9%87%91.png',
            grade: '黄金会员'
        };
    else if (experience < 30000 && experience >= 10000)

        return {
            img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/vip%2F%E9%93%82%E9%87%91.png',
            grade: '铂金会员'
        };
    else if (experience >= 30000)

        return {
            img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/vip%2F%E9%BB%91%E9%92%BB.png',
            grade: '黑钻会员'
        };
    else
        return null; // 添加一个默认的返回语句处理大于等于10000的情况
}