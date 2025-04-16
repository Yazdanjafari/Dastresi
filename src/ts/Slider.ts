interface SliderItem {
  image: string;
}

async function Slider(): Promise<void> {
  let slider: string[] = [];
  try {
    let response = await fetch("http://localhost:3001/slider").catch(
      (error) => {
        console.error("Failed to fetch slider data:", error);
        throw error;
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let res: SliderItem[] = await response.json();
    slider = res.map((item: SliderItem) => {
      return `
            <div class="swiper-slide w-full lg:h-[250px] sm:h-[430px] rounded-3xl overflow-hidden bg-cover z-10 bg-center"
                style="background-image: url('${item.image}');">
            </div>`;
    });
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    if (swiperWrapper) {
      swiperWrapper.innerHTML = slider.join("");
    } else {
      console.error("Element with class 'swiper-wrapper' not found.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred.");
      document.addEventListener("DOMContentLoaded", () => {
        Slider().catch((error) =>
          console.error("Slider initialization failed:", error)
        );
      });
    }
  }
}
export default Slider;
