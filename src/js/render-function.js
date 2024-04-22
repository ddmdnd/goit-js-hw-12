
export function photoResponse(data){
    return ` 
    <li class = "photoItem">
        <a class="gallery-link" href="${data.largeImageURL}">
            <img
                class="img"
                src="${data.previewURL}"
                alt="${data.tags}"/>
            <div class= "titlePhoto">
            <div class="propertyItem">
                <h5 class="proportyTitle">Likes</h5>
                <p class="propertyQuantety">${data.likes}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Views</h5>
                <p class="propertyQuantety">${data.views}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Comments</h5>
                <p class="propertyQuantety">${data.comments}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Downloads</h5>
                <p class="propertyQuantety">${data.downloads}</p>
            </div>
            </div>
            </a>
            </li>
            `
};
export function photosResponse(arr){
    return arr.map(photoResponse).join("");
};


