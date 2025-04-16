(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();async function x(){try{let r=await(await fetch("http://localhost:3001/menu")).json(),l="",n=r.map(e=>{if(e.name==="برندها"){let i="";for(let a=0;a<(e.dropdown??[]).length;a+=6){let m=(e.dropdown?e.dropdown.slice(a,a+6):[]).map(d=>`
                        <li>
                            <a href="${d.link}" class="block px-2 py-1 hover:text-blue-700 hover:bg-gray-100 sm:hidden lg:block">
                                ${d.name}
                            </a>
                        </li>
                    `).join("");i+=`
                        <div>
                            <ul class="space-y-2 sm:hidden lg:block">
                                ${m}
                            </ul>
                        </div>
                    `}return l+=`
                  <div class="relative group sm: hidden lg:block">
                      <a href="#" class="absolute px-2 mr-[1200px] text-[13px] text-gray-500 font-bold hover:text-orange-600 hover:border-b-4 pb-4">
                          برندها <span class="text-[8px]">▼</span>
                      </a>
                      
                      <div class="absolute right-32 text-[13px]  hidden group-hover:grid grid-cols-5 gap-4 bg-white text-gray-600 w-[1250px] mt-[36px] shadow-lg p-4 z-5">
                          ${i}
                      </div>
                      
                  </div>
                `,""}return e.dropdown&&e.dropdown.length>0?`<div class="w-[183px] text-[13px] items-center sticky top-0 z-50 justify-center max-w-full group cursor-pointer hover:body-gray hidden lg:inline-block md:hidden sm:hidden">
                    <a class="hover:text-orange-600 items-center inline-flex text-gray-500 font-bold justify-center px-2 ml-0 py-0 hover:border-b-2 pb-5 transition-all duration-150 lg:inline-block ">
                        ${e.name} <span class="text-[8px] ">▼</span>
                    </a>
                    <div class="absolute hidden submenu shadow-2xl font-bold bg-white text-gray-500 mt-[0.75px] space-y-0 w-100 group-hover:block ${e.name==="برندها"?"grid grid-cols-4 gap-4 max-w-7xl":""}">
                        ${e.dropdown.map(o=>{let i=e.name==="برندها"?"bg-transparent hover:bg-gray-200":"",a="";return o.dropdown&&o.dropdown.length>0?a=`<div class="relative group">
                                    <a href="${o.link}" class="block px-2 py-2 capitalize hover:text-blue-800 hover:bg-gray-100 ${i}">
                                        ${o.name} <span class="text-[12px] absolute right-[350px]">▶</span>
                                    </a>
                                    <div class="absolute right-full top-0 hidden  nested-submenu bg-white text-gray-500 space-y-2 w-[380px] shadow-lg">
                                        ${o.dropdown.map(c=>`<a href="${c.link}" class="block px-4 py-2 capitalize hover:text-blue-700 hover:bg-gray-100">${c.name}</a>`).join("")}
                                    </div>
                                </div>`:a=`<a href="${o.link}" class="block px-4 sm:hidden lg:block py-2 capitalize hover:text-blue-700 hover:bg-gray-100 h-[40px] ${i}">${o.name}</a>`,a}).join("")}
                    </div>
                </div>`:`<a href="${e.link}" class="hover:text-orange-600 items-center text-[13px] text-gray-500 font-bold justify-center px-3 mr-10 hover:border-b-2 sm: hidden pb-5 transition-all duration-150 lg:inline-block ">
                    ${e.name} <span class="text-[8px]">▼</span>
                </a>`}).join("");n=l+n;let t=document.querySelector(".menu");t?t.insertAdjacentHTML("beforeend",n):console.warn("عنصر .menu پیدا نشد!")}catch(s){console.log("خطا در دریافت منو:",s.message)}}async function f(){let s=[];try{let r=await fetch("http://localhost:3001/slider");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);s=(await r.json()).map(t=>`
            <div class="swiper-slide w-full lg:h-[250px] sm:h-[430px] rounded-3xl overflow-hidden bg-cover z-10 bg-center"
                style="background-image: url('${t.image}');">
            </div>`);const n=document.querySelector(".swiper-wrapper");n?n.innerHTML=s.join(""):console.error("Element with class 'swiper-wrapper' not found.")}catch(r){r instanceof Error?console.error(r.message):console.error("An unknown error occurred.")}}async function h(){let s="";try{let l=await(await fetch("http://localhost:3001/product")).json(),n="";s=l.map(e=>e.brand==="Porodo"||e.brand==="Philips"?(n+=`<div class="w-full lg:flex  flex-col lg:flex-row gap-10 hidden sm:hidden"> 
          <!-- آیتم اول -->
          <div class="bg-white p-18 rounded-2xl hover:shadow-2xl cursor-pointer w-full lg:w-[150%] ">
            <img src="${e.image}" alt="${e.name}" class="w-full sm: h-[100px] lg:h-[500px]  object-contain rounded-xl" />
            <h2 class="text-gray-700 font-semibold text-[18px] mt-2">${e.name}</h2>
            <p class="text-sm text-gray-500">${e.brand} - ${e.model}</p>
            <p class="text-red-500 font-bold">${Number(e.discount).toLocaleString()} تومان تخفیف</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold text-lg">${Number(e.price).toLocaleString()} تومان</span>
              <span class="text-gray-400 line-through">${Number(e.oldPrice).toLocaleString()} تومان</span>
            </div>
          </div>
        </div>`,""):`<div class="bg-white sm: w-[480px] lg:w-[490px] p-4 lg:pr-52  rounded-2xl hover:shadow-2xl flex flex-col gap-5  sm:mb-4  cursor-pointer ">
          <div class="flex flex-col sm:flex-row-reverse gap-8 items-center ">
            <div class="lg:pl-12 ">
              <h2 class="text-gray-700 font-semibold sm: text-[12px] lg:text-[16px]">${e.name}</h2>
              <p class="text-sm text-gray-500">${e.brand} - ${e.model}</p>
              <p class="text-red-500 font-bold">${e.discount.toLocaleString()} تومان تخفیف</p>
              <div class="flex ">
                <span class="text-blue-600 font-bold text-lg">${e.price.toLocaleString()} تومان</span>
                <span class="text-gray-400 line-through">${e.oldPrice.toLocaleString()} تومان</span>
              </div>
            </div>
            <img src="${e.image}" alt="${e.name}" class=" lg:w-30 lg:h-22 sm: w-[140px] object-contain rounded-xl ml-10" />
          </div>
        </div>`).join("");let t=`<div class="flex lg:flex-nowrap  sm: flex-wrap sm:mr-0 sm:ml-0  gap-5 justify-between items-center lg:mr-8 ">
      <div class="flex w-full gap-9 z-10 lg:flex-nowrap sm: flex-wrap">
        ${n}
      </div>
      <div class="w-full flex flex-wrap gap-4  lg:mr-16 sm:px-10 md:px-20 lg:px-5">
        ${s}
      </div>
    </div>`;document.getElementById("product-list").innerHTML=t}catch(r){console.log("خطا در دریافت محصولات:",r.message)}}async function w(){try{let l=(await(await fetch("http://localhost:3001/slider2")).json()).map(e=>`
            <div class="slide2 slider-item sm: hidden lg:block"
                style="background-image: url('${e.image}');">
            </div>
            
        `),n=[...l,...l].join("");const t=document.querySelector(".slider2");t?t.innerHTML=n:console.error("Error: .slider2 element not found in the DOM.")}catch(s){console.error("Error fetching slider data:",s.message)}}async function v(){let s=[];try{const r=await fetch("http://localhost:3001/goods");if(!r.ok)throw new Error("خطا در دریافت داده‌ها");s=(await r.json()).map(t=>`
            <div class="p-2 max-w-full ">
                <div class="bg-white sm: w-[200px] lg:w-[290px] p-5 rounded-2xl  cursor-pointer m-1">
                    <img src="${t.image}" class="lg:w-[240px] lg:h-85 sm: w-[150px] sm: h-[230px]  object-contain rounded-xl" />
                    <p class="text-gray-400 font-semibold text-[13px] ">${t.title||"نامشخص"}</p>
                    <p class="text-sm text-gray-700 text-[16px]">${t.description||"برند نامشخص"}</p>
                    
                    
                    <div class="flex justify-between items-center">
                    <span class="text-gray-400 line-through">${t.old_price}</span>
                        <span class="text-blue-600 font-bold text-[16px]">${typeof t.new_price=="number"?t.new_price.toLocaleString():"0"} تومان</span>
                        
                    </div>
                </div>
            </div>
        `);const n=document.querySelector(".sliderg");n&&(n.innerHTML=s.join(""))}catch(r){console.error("خطا: ",r)}}async function y(){let s=[];try{const r=await fetch("http://localhost:3001/stuff");if(!r.ok)throw new Error("خطا در دریافت داده‌ها");s=(await r.json()).map(t=>`
            <div class="p-2 max-w-full sm: w-[200px] lg:w-[300px]">
                <div class="bg-white p-5 rounded-2xl  cursor-pointer m-1">
                    <img src="${t.image}" class="lg:w-[250px] lg:h-85 sm: w-[160px] sm: h-[230px] object-contain rounded-xl" />
                    <p class="text-gray-400 font-semibold text-[13px] ">${t.title||"نامشخص"}</p>
                    <p class="text-sm text-gray-700 text-[16px]">${t.description||"برند نامشخص"}</p>
                    
                    
                    <div class="flex justify-between items-center">
                    <span class="text-gray-400 line-through">${t.old_price}</span>
                        <span class="text-blue-600 font-bold text-[16px]">${t.new_price?t.new_price.toLocaleString():"0"} تومان</span>
                        
                    </div>
                </div>
            </div>
        `);const n=document.querySelector(".sliderS");n?n.innerHTML=s.join(""):console.warn("Element with class 'sliderS' not found.")}catch(r){console.error("خطا: ",r)}}async function b(){try{let l=(await(await fetch("http://localhost:3001/brands")).json()).map(t=>`
            <div class="slideb slider-item  rounded-xl shadow-md p-10 "
                style="background-image: url('${t.image}');">
            </div>
            
        `),n=[...l,...l].join("");document.querySelector(".brands").innerHTML=n}catch(s){console.error("Error fetching slider data:",s.message)}}async function $(){try{let r=await(await fetch("http://localhost:3001/article")).json();if(!Array.isArray(r)){console.error("Invalid data format");return}let l=r.map(t=>`<div class="slideA ">
                <img src="${t.image||""}" alt="${t.title||""}">
                <div style="text-align: center; color: #444;  font-weight: 500; margin-top: 10px;" class="lg:text-[16px] sm: text-[12px] hover:text-blue-700">
                    ${t.title||""}
                </div>
            </div>`).join(""),n=document.querySelector(".article");n?n.innerHTML=l:console.error("Error: Element with class '.article' not found."),L()}catch(s){console.error("Error fetching slider data:",s)}}function L(){const s=document.querySelector(".article");if(!s){console.error("Error: Element with class '.article' not found.");return}const r=document.querySelectorAll(".dot");let l=0;if(Math.ceil(s.children.length/4)<=1){const e=document.querySelector(".slider-pagination");e&&(e.style.display="none");return}if(r.length===0){console.error("Error: No elements with class '.dot' found.");return}r.forEach(e=>{e.addEventListener("click",()=>{l=parseInt(e.getAttribute("data-index")||"0"),s.style.transform=`translateX(-${l*100}%)`,r.forEach(o=>o.classList.remove("active")),e.classList.add("active")})})}x();f();h();w();v();y();b();$();var p;(p=document.getElementById("search-open"))==null||p.addEventListener("click",()=>{var s,r;(s=document.getElementById("overlay"))==null||s.classList.remove("hidden"),(r=document.getElementById("search-box"))==null||r.classList.add("scale-105")});var u;(u=document.getElementById("search-close"))==null||u.addEventListener("click",()=>{var s,r;(s=document.getElementById("overlay"))==null||s.classList.add("hidden"),(r=document.getElementById("search-box"))==null||r.classList.remove("scale-105")});document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("menu"),r=document.getElementById("overlay"),l=document.getElementById("burgerButton"),n=document.getElementById("closeMenu");function t(){s.classList.remove("translate-x-full"),r.classList.remove("hidden")}function e(){s.classList.add("translate-x-full"),r.classList.add("hidden")}l.addEventListener("click",t),n.addEventListener("click",e),r.addEventListener("click",e)});function g(){const s=new Date,r=s.getHours(),l=s.getMinutes(),n=s.getSeconds(),t=document.getElementById("clock");t&&(t.textContent=`${String(r).padStart(2,"0")}:${String(l).padStart(2,"0")}:${String(n).padStart(2,"0")}`)}setInterval(g,1e3);g();
