import {getPhotoServer} from "./js/pixabay-api.js";
import {photosResponse} from "./js/render-function.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import stop from "./img/logoStop.svg";
const form = document.querySelector('.searchBox');
const inputSearch = form.querySelector('.searchInput');
const gallery = document.querySelector('.gallery')
const loadSecondBtm = document.querySelector('.button-search-second');
function showLoader(){
const loadingText = `<span class="loader"></span>`;
gallery.innerHTML = loadingText;
}
let page = 1;
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    gallery.insertAdjacentHTML("beforeend", `<span class="loader"></span>`)
    const inputData = inputSearch.value;
    showLoader();
    try {
        const photo = await getPhotoServer(inputData,page);
        const markup = photosResponse(photo.hits);
        loadSecondBtm.style.display = 'flex';
        if (!photo.total) {
            iziToast.show({
                id: 'messageError',
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                iconUrl: stop,
                messageColor: 'white',
                color: '#EF4040',
            });
        }
        gallery.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });
    } catch (error) {
        console.error(error);
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: `${error}`,
        });
    }
    form.reset();
    sendNextRequest()
});

function sendNextRequest(){
    loadSecondBtm.addEventListener("click", async () => {
        page += 1;
        const inputData = inputSearch.value;
        try {
            const photo = await getPhotoServer(inputData,page);
            const markup = photosResponse(photo.hits);
            loadSecondBtm.style.display = 'flex';
            if (!photo.total) {
                iziToast.show({
                    id: 'messageError',
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    iconUrl: stop,
                    messageColor: 'white',
                    color: '#EF4040',
                });
            }
            gallery.insertAdjacentHTML("beforeend", markup)
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250
            });
        } catch (error) {
            console.error(error);
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: `${error}`,
            });
        }
    });

}





// import {getPhotoServer} from "./js/pixabay-api.js";
// import {photosResponse} from "./js/render-function.js";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import axios from "axios";
// import stop from "./img/logoStop.svg";
// const form = document.querySelector('.searchBox');
// const inputSearch = form.querySelector('.searchInput');
// const gallery = document.querySelector('.gallery')
// function showLoader(){
//     const loadingText = `<span class="loader"></span>`;
//         gallery.innerHTML = loadingText;
// }
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const inputData = inputSearch.value;
//     showLoader()
//     try{
//         const photo = getPhotoServer(inputData,2,4)
//         const markup = photosResponse(photo.hits);
//             if(!photo.total){
//                 iziToast.show({
//                         id: 'messageError',
//                         position: 'topRight',
//                         message: 'Sorry, there are no images matching your search query. Please try again!',
//                         iconUrl: stop,
//                         messageColor: 'white',
//                         color: '#EF4040',
//                     })}
//         gallery.innerHTML = markup;
//         const lightbox = new SimpleLightbox('.gallery a', {
//             captionsData: 'alt', captionDelay: 250
    
//           });
//           }
//     catch(error){
//         console.log(error)
//         iziToast.error({
//             position: 'topRight',
//             title: 'Error',
//             message: `${error}`,
//     });

//     }
//     form.reset()
// });
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const inputData = inputSearch.value;
//     showLoader()
//     getPhotoServer(inputData).then((photo) =>{
//         const markup = photosResponse(photo.hits);
//             if(!photo.total){
//                 iziToast.show({
//                         id: 'messageError',
//                         position: 'topRight',
//                         message: 'Sorry, there are no images matching your search query. Please try again!',
//                         iconUrl: stop,
//                         messageColor: 'white',
//                         color: '#EF4040',
//                     })}
//         gallery.innerHTML = markup;
//         const lightbox = new SimpleLightbox('.gallery a', {
//             captionsData: 'alt', captionDelay: 250
    
//           });
          
    
//     })

//     .catch((error) => {
//         console.log(error)
//         iziToast.error({
//             position: 'topRight',
//             title: 'Error',
//             message: `${error}`,
//     });
//     form.reset()

// });
// })
