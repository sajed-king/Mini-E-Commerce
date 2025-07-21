const form =  document
    .getElementById("product-form")
    .addEventListener("submit",async (e) => {
      e.preventDefault();
      const name = document.getElementById("product-name").value;
      const price = document.getElementById("price").value;
      const image = document.getElementById("image-url").value;
      const category = document.getElementById("category").value;
      const description = document.getElementById("description").value;
      const postedData = {
        name,
        price,
        image,
        category,
        description,
      };

     try {

    const submitButton=document.querySelector('button[type="submit"]');
    submitButton.disabled=true;
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(postedData),
    });
    if (!res.ok) {
      throw new Error("HTTP Error", res.status);
    }
    const data = await res.json();
    console.log("product created", data);
    const result=document.getElementById('result');
        
    result.innerHTML=`<p>product created </p>`
    submitButton.disabled=false;

  } catch (error) {
    console.error("Failed to create product", error);
  }

    
    });
