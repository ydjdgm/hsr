import type { RequestHandler } from '@sveltejs/kit';
import type { Character } from "$lib/types";

let character: Character[] = [];

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();

    const [response1, response2, response3] = await Promise.all([
        await fetch('https://sg-wiki-api.hoyolab.com/hoyowiki/hsr/wapi/get_entry_page_list', {
            method: 'POST',
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "ko-KR,ko;q=0.6",
                "content-type": "application/json;charset=UTF-8",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Brave\";v=\"133\", \"Chromium\";v=\"133\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1",
                "x-rpc-language": "ko-kr",
                "x-rpc-wiki_app": "hsr",
                "cookie": "ltoken_v2=...; ltuid_v2=...; cookie_token_v2=...; account_mid_v2=...; account_id_v2=...;", // 쿠키는 보안 문제로 저장 X
                "Referer": "https://wiki.hoyolab.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: JSON.stringify({
                filters: [],
                menu_id: "104",
                page_num: 1,
                page_size: 30,
                use_es: true
            })
        }),
        await fetch('https://sg-wiki-api.hoyolab.com/hoyowiki/hsr/wapi/get_entry_page_list', {
            method: 'POST',
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "ko-KR,ko;q=0.6",
                "content-type": "application/json;charset=UTF-8",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Brave\";v=\"133\", \"Chromium\";v=\"133\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1",
                "x-rpc-language": "ko-kr",
                "x-rpc-wiki_app": "hsr",
                "cookie": "ltoken_v2=...; ltuid_v2=...; cookie_token_v2=...; account_mid_v2=...; account_id_v2=...;", // 쿠키는 보안 문제로 저장 X
                "Referer": "https://wiki.hoyolab.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: JSON.stringify({
                filters: [],
                menu_id: "104",
                page_num: 2,
                page_size: 30,
                use_es: true
            })
        }),
        await fetch('https://sg-wiki-api.hoyolab.com/hoyowiki/hsr/wapi/get_entry_page_list', {
            method: 'POST',
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "ko-KR,ko;q=0.6",
                "content-type": "application/json;charset=UTF-8",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Brave\";v=\"133\", \"Chromium\";v=\"133\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1",
                "x-rpc-language": "ko-kr",
                "x-rpc-wiki_app": "hsr",
                "cookie": "ltoken_v2=...; ltuid_v2=...; cookie_token_v2=...; account_mid_v2=...; account_id_v2=...;", // 쿠키는 보안 문제로 저장 X
                "Referer": "https://wiki.hoyolab.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: JSON.stringify({
                filters: [],
                menu_id: "104",
                page_num: 3,
                page_size: 30,
                use_es: true
            })
        })
    ]);


    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    let res_json_data_list1 = data1.data.list;
    let res_json_data_list2 = data2.data.list;
    let res_json_data_list3 = data3.data.list;

    character = [
        ...res_json_data_list1,
        ...res_json_data_list2,
        ...res_json_data_list3
    ]

    return new Response(JSON.stringify(character), {
        headers: { 'Content-Type': 'application/json' }
    });
};