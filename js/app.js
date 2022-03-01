console.log("sajim");
// Searh Button
const SearceingFiled = () => {
  const inputFiled = document.getElementById("input-id");
  console.log(inputFiled.value);
  inputFiled.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayField(data.data));
};
// displayField ************
const displayField = (phoneInfo) => {
  const displayArea = document.getElementById("displayContainer");
  phoneInfo.forEach((element) => {
    // console.log(element);
    const creatdiv = document.createElement("div");
    creatdiv.innerHTML = `<div class="col">
      <div class="card p-2">
        <img src="${element.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.phone_name}</h5>
          <h3 class="card-text">
            ${element.brand}
          </h3>
        </div>
        <div class="card-footer headingStyle">
          <button class="text-primary">Details</button>
        </div>
      </div>
    </div>`;
    displayArea.appendChild(creatdiv);
  });
};
