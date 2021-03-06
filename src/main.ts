import './style.css'
type StoreItem = {
  id: number;
  type: string;
  name: string;
  image: string;
  price: number;
  discountedPrice?: number;
  dateEntered: string;
  stock: number;
};

type User = {
  firstName: string;
  lastName: string;
  id: string;
  password: string;
  bag: never[];
 
};

type State = {
  store: StoreItem[];
  user: User[];
  page: "hollixton" | "girls" | "guys" | "sale";
  modal: "search" | "user" | "bag" | "";
  filter: string;
  selectedFilter:string
};

let state: State = {
  store: [
    {
      id: 1,
      type: "Guys",
      name: "Crewneck T-Shirt 3-Pack",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
      price: 40,
      discountedPrice: 21.99,
      dateEntered: "2021/08/10",
      stock: 10,
    },
    {
      id: 2,
      type: "Girls",
      name: "Smocked Tiered Mini Dress",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_359-1220-1911-805_prod1",
      price: 29,
      dateEntered: "2021/07/10",
      stock: 5,
    },
    {
      id: 3,
      type: "Girls",
      name: "Gilly Hicks Cozy Joggers",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_346-1252-0485-116_prod1",
      price: 27,
      dateEntered: "2021/05/06",
      stock: 15,
    },
    {
      id: 4,
      type: "Guys",
      name: "Gilly Hicks Go Energize 2-in-1 Running Short",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_346-1614-0521-900_prod1",
      price: 29,
      dateEntered: "2021/07/10",
      stock: 20,
    },
    {
      id: 5,
      type: "Guys",
      name: "Gilly Hicks Woven Boxer",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_309-1408-0413-136_prod1",
      price: 12,
      dateEntered: "2021/07/10",
      stock: 2,
    },
    {
      id: 6,
      type: "Guys",
      name: "Gilly Hicks Smiley Socks 2-Pack",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_354-1020-0010-900_prod1",
      price: 14,
      dateEntered: "2021/06/11",
      stock: 1,
    },
    {
      id: 7,
      type: "Guys",
      name: "Stretch Poplin Slim Fit shirt",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_325-1072-0609-214_prod1",
      price: 29,
      discountedPrice: 20.3,
      dateEntered: "2020/02/10",
      stock: 13,
    },
    {
      id: 8,
      type: "Guys",
      name: "Must-Have Crewneck T-Shirt 5-Pack",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_324-1072-0132-108_prod1",
      price: 55,
      discountedPrice: 34.99,
      dateEntered: "2021/08/10",
      stock: 12,
    },
    {
      id: 9,
      type: "Guys",
      name: "Print Logo Graphic Tee",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_323-1957-2978-908_prod1",
      price: 25,
      discountedPrice: 11.99,
      dateEntered: "2021/04/10",
      stock: 17,
    },
    {
      id: 10,
      type: "Girls",
      name: "Ultra High-Rise Dad Sweatpants",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_347-1074-0669-100_prod1",
      price: 35,
      discountedPrice: 14.99,
      dateEntered: "2021/08/01",
      stock: 6,
    },
    {
      id: 11,
      type: "Girls",
      name: "Crop Oversized Hoodie",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_352-3541-0604-100_prod1",
      price: 35,
      discountedPrice: 12.99,
      dateEntered: "2021/08/01",
      stock: 8,
    },
    {
      id: 12,
      type: "Girls",
      name: "Gilly Hicks Socks 2-Pack",
      image:
        "https://img.hollisterco.com/is/image/anf/KIC_354-1013-0002-100_prod1",
      price: 14,
      discountedPrice: 5.99,
      dateEntered: "2021/07/10",
      stock: 10,
    },
  ],
  user: [
    {
      firstName: "Eva",
      lastName: "Gjini",
      id: "eva@email.com",
      password: "evaaaaa",
      bag: [],
    },
    {
      firstName: "Armando",
      lastName: "Brown",
      id: "brown@email.com",
      password: "brown1",
      bag: [],
    },
  ],
  page: "hollixton",
  modal: "",
  
  
};


function renderGetItemsToDisplay() {

  let itemsToDisplay = state.store
  if (state.selectedFilter === 'Girls') {
      itemsToDisplay = itemsToDisplay.filter(item => item.type === 'Girls')
  }
  if (state.selectedFilter === 'Guys') {
      itemsToDisplay = itemsToDisplay.filter(item => item.type === 'Guys')
  }
  if (state.selectedFilter === 'Sale') {
      itemsToDisplay = itemsToDisplay.filter(item => item.discountedPrice !== undefined)
  }
  return itemsToDisplay

  
}
renderGetItemsToDisplay()



function renderHeader() {
  let app = document.querySelector("#app");
  if (app === null) return;
  app.textContent = "";

  let header = document.createElement("header");

  let divHeaderLeft = document.createElement("div");
  divHeaderLeft.className = "header-left";

  let h1Logo = document.createElement("h1");
  h1Logo.className = "header-logo";
  h1Logo.textContent = "HOLLIXTON";

  let navHeaderLeft = document.createElement("nav");

  let ulHeaderLeft = document.createElement("ul");
  ulHeaderLeft.className = "header-nav-list";

  let navigationItems = [
    {
      url: "/women.html",
      text: "Girls",
    },

    {
      url: "/men.html",
      text: "Guys",
    },

    {
      url: "/sale.html",
      text: "Sale",
    },
  ];

  navigationItems.forEach((navigationItem) => {
    let liHeaderLeft = document.createElement("li");
    liHeaderLeft.className = "header-nav-item";

    let anchorItem = document.createElement("a");
    anchorItem.href = navigationItem.url;
    anchorItem.textContent = navigationItem.text;

    liHeaderLeft.append(anchorItem);
    ulHeaderLeft.append(liHeaderLeft);
  });
let divHeaderRight = document.createElement("div");
  divHeaderRight.className = "header-right";

  let navHeaderRight = document.createElement("nav");

  let ulHeaderRihgt = document.createElement("ul");
  ulHeaderRihgt.className = "header-nav-list";

  let navigationLists = [
    {
      text: "search",
    },

    {
      text: "person",
    },

    {
      text: "shopping_bag",
    },
  ];

  navigationLists.forEach((navigationList) => {
    let liHeaderRight = document.createElement("li");
    liHeaderRight.className = "header-nav-item";

    let spanRight = document.createElement("span");
    spanRight.className = "material-symbols-outlined";
    spanRight.textContent = navigationList.text;

    liHeaderRight.append(spanRight);
    ulHeaderRihgt.append(liHeaderRight);
  });

  app.append(header);
  header.append(divHeaderLeft, divHeaderRight);
  divHeaderLeft.append(h1Logo, navHeaderLeft);
  navHeaderLeft.append(ulHeaderLeft);
  navHeaderRight.append(ulHeaderRihgt);
  divHeaderRight.append(navHeaderRight);
}

function renderProducts() {
  let mainEl = document.createElement('main')

  let h3El = document.createElement('h3')
  h3El.className = "home-content"
  h3El.textContent = 'Home'

  let productContainer = document.createElement("div");
  productContainer.className = 'product-container'

  for (let product of state.store) {
    let productItem = document.createElement("div");

    let productImg = document.createElement("img");
    productImg.src = product.image;

    let productName = document.createElement("p");
    productName.className = "name";
    productName.textContent = product.name;

    let productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = product.price.toString();

    productItem.append(productImg, productName, productPrice);

    if (product.discountedPrice) {
      let productDiscountedPrice = document.createElement("p");
      productDiscountedPrice.className = "discountedPrice";
      productDiscountedPrice.textContent = product.discountedPrice.toString();
      productItem.append(productDiscountedPrice);
    }

    productContainer.append(productItem);
  }

  mainEl.append(h3El, productContainer);

  let app= document.querySelector("#app")
 app?.append(mainEl)
}

function renderFooter() {
  const footerEl = document.createElement("footer")
  footerEl.setAttribute("class", "footer-section")
  const titleFooterEl = document.createElement("h2")
  titleFooterEl.setAttribute("class", "footer-title")
  titleFooterEl.textContent = "Footer"

  const stateFooterEl = document.createElement("h3")
  stateFooterEl.setAttribute("class", "state-footer")
  stateFooterEl.textContent = "United Kingdom"
  footerEl.append(titleFooterEl, stateFooterEl)
  document.body.append(footerEl)
}



renderHeader();
renderProducts();
renderFooter();







