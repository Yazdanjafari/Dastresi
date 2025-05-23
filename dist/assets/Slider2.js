async function Slider2() {
    try {
        let data = await fetch("http://localhost:3001/slider2");
        let res = await data.json();
        // ✅ لیست اصلی را دو بار پشت سر هم قرار می‌دهیم
        let sliderItems = res.map((item) => `
            <div class="slide2 slider-item sm: hidden lg:block"
                style="background-image: url('${item.image}');">
            </div>
            
        `);
        let sliderContent = [...sliderItems, ...sliderItems].join("");
        // مقداردهی به `.slider2`
        const sliderElement = document.querySelector(".slider2");
        if (sliderElement) {
            sliderElement.innerHTML = sliderContent;
        }
        else {
            console.error("Error: .slider2 element not found in the DOM.");
        }
    }
    catch (error) {
        console.error("Error fetching slider data:", error.message);
    }
}
export default Slider2;
