export function getPhotoServer(q){
    const BASE_URL = 'https://pixabay.com';
    const END_POINT='/api/?';
    const params = new URLSearchParams ({
        key: "43236135-18e22e789778019f0f194eb5c",
        q:`${q}`,
        image_type:"photo",
        orientation:"horizontal",
        safesearch:  "true"
    });

    const url = `${BASE_URL}${END_POINT}${params}`;
    return fetch(url).then(res=>res.json()).catch(error=> console.log("Error:", error));
} 


