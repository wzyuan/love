var songContent = '[00:00.00]You Are Wind\n [00:06.29]If you sing a song\n [00:08.77]I will sing along\n [00:10.12]Sitting in the sun\n [00:14.02]Loving duet is long\n [00:16.82]If you sing a song\n [00:18.87]I will sing along\n [00:21.75]See me in your eyes\n [00:23.95]I don't wanna leave your sight\n [00:26.94]Bye bye never say bye bye\n [00:28.15]You are apple in my eyes\n [00:29.44]When half past five\n [00:31.15]I can't help waiting outside\n [00:32.75]Who can tell me how to say hi\n [00:34.39]I'm so confused so I want to drink some wine\n [00:37.30]Drink some wine, you're too young to buy\n [00:39.35]I'm not the boss\n [00:40.50]I don't have the big house\n [00:41.75]If I buy you rose\n [00:43.00]I hope you can give me chance\n [00:44.50]It's not fine\n [00:45.50]Seeing how fast time gradually fades\n [00:47.05]I'm the guy, who's kind of shy\n [00:50.23]You're the one I want to defend\n [00:52.79]Follow me dance to romantic cha cha\n [00:55.14]I wanna hold you in my arms\n [00:57.89]If you sing a song\n [00:59.19]I will sing along\n [01:03.10]Sitting in the sun\n [01:04.09]Loving duet is long\n [01:08.29]If you sing a song\n [01:11.04]I will sing along\n [01:13.50]See me in your eyes\n [01:16.05]I don't wanna leave your sight\n [01:19.40]Sunday's coming soon you are going home\n [01:21.30]It seems to snow, freezes my soul\n [01:23.55]Wherever you go hear me singing just for you\n [01:26.15]I keep my faith\n [01:27.00]Believe you can hear me, I'm fond of you\n [01:29.15]Loving vow, my paper plane, fly away\n [01:31.25]Baby, I made this ring, I know it's not a bling\n [01:35.19]I wish you accept me\n [01:36.74]As well as this ring\n [01:38.04]Connect us, a loving string\n [01:39.04]I'm the guy, who's kind of shy\n [01:41.89]You're the one I want to defend\n [01:43.89]Follow me dance to romantic cha cha\n [01:47.09]I wanna hold you in my arms\n [01:49.79]If you sing a song\n [01:52.24]I will sing along\n [01:54.79]Sitting in the sun\n [01:57.18]Loving duet is long\n [01:59.99]If you sing a song\n [02:02.44]I will sing along\n [02:05.16]See me in your eyes\n [02:07.66]I don't wanna leave your sight\n [02:10.66]You are really a loving fool\n [02:12.11]I know you wanna stay cool\n [02:13.36]I don't care what you give me\n [02:14.61]Just tell me do you love me, too\n [02:16.51]Long before\n [02:16.86]When I understood\n [02:17.26]Love since childhood\n [02:18.05]We suffered the same loving flu\n [02:20.53]You love me, throw your blue\n [02:21.73]Believe in all that you do\n [02:23.12]Change in a good mood\n [02:23.98]Just see my migical proof\n [02:24.88]Your grass ring I will preserve\n [02:26.28]With you beside campus route\n [02:27.48]Lick lollipop, sing the song in the afternoon\n [02:31.87]Do do do do\n [02:41.32]Do do do do ...\n [02:54.79]If you sing a song\n [02:56.79]I will sing along\n [02:59.30]Sitting in the sun\n [03:01.85]Loving duet is long\n [03:04.50]If you sing a song\n [03:07.05]I will sing along\n [03:09.62]See me in your eyes\n [03:12.13]I don't wanna leave your sight\n [03:15.48]If you sing a song\n [03:17.43]I will sing along\n [03:19.81]Sitting in the sun\n [03:22.46]Loving duet is long\n [03:25.06]If you sing a song\n [03:30.01]I will sing along\n [03:31.11]See me in your eyes\n [03:32.86]I don't wanna leave your sight\n'
var songContent1 = '' ;
function parseLyric(text) {
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            //提取歌词
            value = v.replace(pattern, '');
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    return result;
}

