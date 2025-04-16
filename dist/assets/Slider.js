async function Slider() {
    let slider = [];
    try {
        let response = await fetch("http://localhost:3001/slider");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let res = await response.json();
        slider = res.map((item) => {
            return `
            <div class="swiper-slide w-full lg:h-[250px] sm:h-[430px] rounded-3xl overflow-hidden bg-cover z-10 bg-center"
                style="background-image: url('${item.image}');">
            </div>`;
        });
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        if (swiperWrapper) {
            swiperWrapper.innerHTML = slider.join("");
        }
        else {
            console.error("Element with class 'swiper-wrapper' not found.");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("An unknown error occurred.");
        }
    }
}
export default Slider;
