const gallery = document.querySelector(".gallery");
const form = document.querySelector(".search-form");
const btnLoadMore = document.querySelector(".load_more");
const searchBtn = document.querySelector(".search__btn");
const searchInput = document.querySelector(".search__input");
let find = "";
let perPage = 12;
let currentPage = 1;
const apiKey = "43133786-570f6afe2f69578830eb496c7";
async function fetchPictures(searchTerm) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchTerm}&page=${currentPage}&per_page=${perPage}&key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        createElements(data.hits);
    } catch (error) {
        console.error("Error fetching:", error);
    }
}
function loadMorePictures() {
    currentPage++;
    const searchTerm = searchInput.value;
    fetchPictures(searchTerm);
}
const createElements = (elements)=>{
    elements.forEach((element)=>{
        const cardEl = document.createElement("li");
        cardEl.innerHTML = `<img src="${element.previewURL}" alt="${element.tags}">`;
        gallery.appendChild(cardEl);
    });
};
btnLoadMore.addEventListener("click", loadMorePictures);
searchBtn.addEventListener("click", ()=>{
    gallery.innerHTML = "";
    currentPage = 1; // Reset current page when new search is performed
    loadMorePictures();
});
fetchPictures(""); // Initial fetch, you can pass an initial search term here if needed

//# sourceMappingURL=index.c36f364e.js.map
