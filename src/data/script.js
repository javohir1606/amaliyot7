import { getProducts } from "./main.js";

const box = document.querySelector('.box');

const renderProducts = async () => {
    const data = await getProducts();
    console.log(data);
    
    box.innerHTML = data.map((item) => `
    <div class="w-[181px] mt-[20px] rounded-[4px] shadow-2xl">
        <img class="mb-[20px] ml-auto mr-auto" src="${item.img}"/>
        <p class="ml-[8px] font-normal text-[14px] text-start text-[#b63434]">${item.price}</p>
        <p class="w-[157px] ml-auto mr-auto mt-[5px] text-start font-medium text-[12px] text-[rgb(0,0,0)]">${item.description}</p>
    </div>

`).join("");

}
renderProducts();
