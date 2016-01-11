
import Mock from 'mockjs';

export const homeMockJSON = function() {
    let data = Mock.mock({
        'navList|5': [
            {
                'name|+1': [
                    '数码商城',
                    '移动产品',
                    '精彩活动',
                    '限时促销',
                    '海外代购'
                ]
            }
        ]
    });
    debugger;
    console.log(typeof data);
    return data.navList;//JSON.stringify(data);
}
