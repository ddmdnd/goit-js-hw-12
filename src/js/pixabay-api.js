// import axios from "axios";
// export async function getPhotoServer(q,page,perPage){
//     const BASE_URL = 'https://pixabay.com';
//     const END_POINT='/api/?';
//     const params = new URLSearchParams ({
//         key: "43236135-18e22e789778019f0f194eb5c",
//         q:`${q}`,
//         image_type:"photo",
//         orientation:"horizontal",
//         safesearch:  "true",
//         page:`${page}`,
//         per_page:`${perPage}`
//     });
//     const url = `${BASE_URL}${END_POINT}${params}`;
//     try {
//         const res = await axios.get(url);
//         return res.data;}
//     catch (error){console.log("Error:", error);} 
// } 

import axios from "axios";

export async function getPhotoServer(q, page) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/?';
    const params = new URLSearchParams({
        key: "43236135-18e22e789778019f0f194eb5c",
        q: `${q}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: `${page}`,
        per_page: 15
    });
    const url = `${BASE_URL}${END_POINT}${params}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
