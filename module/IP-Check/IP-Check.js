/*
 * 由@congcong0806编写
 * 原脚本地址：https://github.com/congcong0806/surge-list/blob/master/Script/ipcheck.js
 * 由@pupilcc修改
 * 更新日期：2025.01.15
 * 版本：1.0
 */

let url = "https://ipinfo.io/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.country)
    let city = jsonData.city
    let org = jsonData.org
    let ip = jsonData.ip
    body = {
        title: "节点信息",
        content: `IP信息：${ip}\n运营商：${org}\n所在地：${emoji}${country} - ${city}`,
        icon: "globe.asia.australia.fill"
    }
    $done(body);
});

function getFlagEmoji(countryCode) {
    if (countryCode.toUpperCase() == 'TW') {
        countryCode = 'CN'
    }
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoints)
}
