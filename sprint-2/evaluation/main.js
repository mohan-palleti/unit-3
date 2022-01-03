
  let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  let data;
  let arr = JSON.parse(localStorage.getItem("foodcart")) || [];
  let count = document.querySelector("#cart_items");

  async function getdata() {
    try {
      let res = await fetch(url);
      data = await res.json();
      console.log(data);
      displaydata(data);
    } catch (err) {
      console.log(err);
    }
  }
  getdata();

  function get() {
    window.location.href = "cart.html";
  }
  function displaydata(data) {
    data.categories.forEach((element, index) => {
      let div = document.createElement("div");
      let button = document.createElement("button");
      button.addEventListener("click", function () {
        gotocart(index);
      });
      element.price = Math.floor(Math.random(1) * 500);
      button.innerHTML = "Add To Cart";
      let p = document.createElement("p");
      p.innerHTML = `Price: ${element.price}`;
      let img = document.createElement("img");
      img.src = element.strCategoryThumb;
      div.append(img, p, button);
      document.querySelector(".body").append(div);
    });
  }
  function gotocart(index) {
    arr.push(data.categories[index]);
    document.getElementById("cart_items").innerHTML = arr.length;
    localStorage.setItem("foodcart", JSON.stringify(arr));
  }
