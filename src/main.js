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
let inputData;
let currentPage;
let maxPage;
const perPage = 15;
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    currentPage = 1;
    inputData = inputSearch.value.trim();
    if(!inputData){
        iziToast.show({
            id: 'messageError',
            position: 'topRight',
            message: 'Input your value for search',
            iconUrl: stop,
            messageColor: 'white',
            color: '#EF4040',
        })
        return
    }
    if(inputData){showLoader()};
    try {
        const photo = await getPhotoServer(inputData,currentPage, perPage);
        maxPage = Math.ceil(photo.totalHits / perPage);
        const markup = photosResponse(photo.hits);
        slowScroll()
        if (maxPage > 1) {
            showBtm()
        }
        if (!photo.total) {
            iziToast.show({
                id: 'messageError',
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                iconUrl: stop,
                messageColor: 'white',
                color: '#EF4040',
            });
            hideBtm()
            form.reset();
        }
        gallery.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });
    } catch (error) {
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: `${error}`,
        });
    }
    form.reset();
    if(currentPage < maxPage){
        sendNextRequest()
    }
   
});

function sendNextRequest(){
    loadSecondBtm.addEventListener("click", async () => {
        currentPage += 1;
        if (maxPage === currentPage) {
            checkBtnStatus()
        }
        
        try {
            const photo = await getPhotoServer(inputData,currentPage,perPage);
            const markup = photosResponse(photo.hits);
            slowScroll()
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
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: `${error}`,
            });
        }
    });
}
function checkBtnStatus() {
        hideBtm()
        iziToast.show({
            id: 'messageError',
            position: 'topRight',
            message: 'Sorry, there are no images more',
            iconUrl: stop,
            messageColor: 'white',
            color: '#EF4040',
        });
        return
}
function hideBtm(){
    // loadSecondBtm.classList.add("hidden")
    loadSecondBtm.style.display ="none";

}
function showBtm(){
    // loadSecondBtm.classList.remove("hidden")
    loadSecondBtm.style.display ="flex";
}
function slowScroll() {
    const height = gallery.firstElementChild.getBoundingClientRect().height; 
    window.scrollBy({
        top: height * 2, 
        behavior: 'smooth', 
    });
}


