function bar1() {
    bar_option = {
        title: {
            text: '豆瓣电影TOP250评分分布',
            left: 'center'
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        xAxis: {
            name: '评分',
            type: 'category',
            data: ['8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9', '9.0', '9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7']
        },
        yAxis: {
            name: '数量',
            type: 'value'
        },
        series: [
            {
                data: [1, 3, 10, 24, 42, 38, 39, 18, 26, 18, 18, 6, 4, 2, 1],
                type: 'bar'
            }
        ]
    };
}

function bar2() {
    bar_option = {
        title: {
            text: '豆瓣电影TOP250评分分布',
            left: 'center'
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        xAxis: {
            name: '数量',
            type: 'value'
        },
        yAxis: {
            name: '评分',
            type: 'category',
            data: ['8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9', '9.0', '9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7']
        },
        series: [
            {
                data: [1, 3, 10, 24, 42, 38, 39, 18, 26, 18, 18, 6, 4, 2, 1],
                type: 'bar'
            }
        ]
    };

}


function line() {
    line_option = {
        title: {
            text: '豆瓣电影TOP250评分分布',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            name: '评分',
            type: 'category',
            data: ['8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9', '9.0', '9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7']
        },
        yAxis: {
            name: '数量',
            type: 'value'
        },
        series: [
            {
                data: [1, 3, 10, 24, 42, 38, 39, 18, 26, 18, 18, 6, 4, 2, 1],
                type: 'line'
            }
        ]
    };
}

function area() {
    area_option = {
        title: {
            text: '豆瓣TOP10评价玫瑰图'
        },
        legend: {
            right: 'right',
            orient: 'vertical'
        },
        series: [
            {
                name: '豆瓣TOP10评价玫瑰图',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 2508043, name: '肖申克的救赎' },
                    { value: 1864506, name: '霸王别姬' },
                    { value: 1884399, name: '阿甘正传' },
                    { value: 1845827, name: '泰坦尼克号' },
                    { value: 2045858, name: '这个杀手不太冷' },
                    { value: 1155419, name: '美丽人生' },
                    { value: 1965580, name: '千与千寻' },
                    { value: 963789, name: '辛德勒的名单' },
                    { value: 1809955, name: '盗梦空间' },
                    {
                        value: 1242734,
                        name: '忠犬八公的故事',
                        itemStyle: {
                            color: '#008792'
                        }
                    }
                ]
            }
        ]
    };
}