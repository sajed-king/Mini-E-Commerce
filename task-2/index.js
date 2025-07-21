async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`HTTP error Status!: ${res}`);
    }

    const data = await res.json();

    console.log(data);
    const productlist = document.getElementById("productlist");

    data.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `<a href="#" class="group overflow-hidden">
            <img
              src=${product.image}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <div
              class="flex flex-col items-center h-24 sm:flex-row bg-red-200 sm:h-22 rounded-b-xl px-6 sm:justify-between"
            >
              <div class=" text-center">
                <h3 class="text-[10px] text-gray-700 font-bold">${
                  product.title.length > 20
                    ? product.title.substring(0, 30) + "..."
                    : product.title
                }</h3>
                <p
                  class="mt-1 text-lg font-medium text-gray-900  mb-1 "
                >
                  $${product.price}
                </p>
              </div>
              <button class="bg-red-500 w-23 h-9 rounded-md text-font  mb-2">
                Add To Cart
              </button>
            </div>
          </a>`;
      productlist.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching Data", error);
  }
}



// async function postData() {
  

//   try {

//     const submitButton=document.querySelector('button[type="submit"]');
//     submitButton.disabled=true;
//     const res = await fetch("https://fakestoreapi.com/products", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(postedData),
//     });
//     if (!res.ok) {
//       throw new Error("HTTP Error", res.status);
//     }
//     const data = await res.json();
//     console.log("product created", data);
//     return data;
//   } catch (error) {
//     console.error("Failed to create product", error);
//   }
// }

// postData();
getData();
