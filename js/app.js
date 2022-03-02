// empty alert document
document.getElementById("error-alart").style.display = "none";
// No Found alert
document.getElementById("error-alartNoFound").style.display = "none";
// Searh Button
// displayField
const displayArea = document.getElementById("displayContainer");
displayArea.textContent = "";
const SearceingFiled = () => {
  const inputFiled = document.getElementById("input-id");
  const inputFiledValue = inputFiled.value;
  //   console.log(inputFiled.value);
  inputFiled.value = "";
  // empty notic
  if (inputFiledValue == "") {
    document.getElementById("error-alart").style.display = "block";
    document.getElementById("error-alartNoFound").style.display = "none";
    displayArea.textContent = "";
  } else {
    document.getElementById("error-alart").style.display = "none";
    document.getElementById("error-alartNoFound").style.display = "none";
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFiledValue}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayField(data.data));
  }
};
// displayField ************
const displayField = (phoneInfo) => {
  if (phoneInfo.length == 0) {
    //   alert section
    document.getElementById("error-alart").style.display = "none";
    document.getElementById("error-alartNoFound").style.display = "block";
    displayArea.textContent = "";
  } else {
    // alert section and display extra detils
    document.getElementById("error-alart").style.display = "none";
    document.getElementById("error-alartNoFound").style.display = "none";

    phoneInfo.forEach((element) => {
      const creatdiv = document.createElement("div");
      creatdiv.innerHTML = `<div class="col">
      <div class="card">
        <img src="${element.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.phone_name}</h5>
          <h3 class="card-text">
            ${element.brand}
          </h3>
        </div>
        <div class="card-footer headingStyle">
          <button onclick="phoneDetail('${element.slug}')" class="text-primary">Details</button>
        </div>
      </div>
    </div>`;
      displayArea.appendChild(creatdiv);
    });
  }
};
const phoneDetail = (phoneDataDetail) => {
  console.log(phoneDataDetail);
  url = `https://openapi.programming-hero.com/api/phone/${phoneDataDetail}`;

  fetch(url)
    .then((res) => res.json())
    .then((dataPhone) => phoneDetailInfo(dataPhone.data));
};
// button group
const phoneDetailInfo = (phoneinformation) => {
  console.log(phoneinformation);
  const phoneDetailsinfo = document.getElementById("detilesPhone");
  phoneDetailsinfo.textContent = "";
  const creatDetileDiv = document.createElement("div");
  creatDetileDiv.innerHTML = `<div class="mb-3 mx-auto">
    <div class="row g-0">
      <div class="col-md-6 col-sm-12 d-flex justify-content-center">
        <img width="400"
          src="${phoneinformation.image}"
          class="rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-brand-list"
                  data-bs-toggle="list"
                  href="#list-brand"
                  role="tab"
                  aria-controls="list-brand"
                  >Brand</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-name-list"
                  data-bs-toggle="list"
                  href="#list-name"
                  role="tab"
                  aria-controls="list-name"
                  >Name</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-releaseDate-list"
                  data-bs-toggle="list"
                  href="#list-releaseDate"
                  role="tab"
                  aria-controls="list-releaseDate"
                  >Release Date</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-clipset-list"
                  data-bs-toggle="list"
                  href="#list-clipset"
                  role="tab"
                  aria-controls="list-clipset"
                  >Clipset</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-displaySize-list"
                  data-bs-toggle="list"
                  href="#list-displaySize"
                  role="tab"
                  aria-controls="list-displaySize"
                  >Display Size</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-RAM-list"
                  data-bs-toggle="list"
                  href="#list-RAM"
                  role="tab"
                  aria-controls="list-RAM"
                  >RAM</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-storage-list"
                  data-bs-toggle="list"
                  href="#list-storage"
                  role="tab"
                  aria-controls="list-storage"
                  >Storage</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-SenSors-list"
                  data-bs-toggle="list"
                  href="#list-SenSors"
                  role="tab"
                  aria-controls="list-SenSors"
                  >SenSors</a
                >
              </div>
            </div>
            <div class="col-lg-9 col-sm-6">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="list-brand"
                  role="tabpanel"
                  aria-labelledby="list-brand-list"
                ><h1>Brand:
                ${phoneinformation.brand}
                </h1>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-name"
                  role="tabpanel"
                  aria-labelledby="list-name-list"
                ><h2>Name:
                ${phoneinformation.name}
                </h2>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-releaseDate"
                  role="tabpanel"
                  aria-labelledby="list-releaseDate-list"
                ><h3>Release Date:<span>
                ${phoneinformation.releaseDate}
                </span>
                </h3>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-clipset"
                  role="tabpanel"
                  aria-labelledby="list-clipset-list"
                ><h3>ChipSet:
                ${phoneinformation.mainFeatures.chipSet}
                </h3>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-displaySize"
                  role="tabpanel"
                  aria-labelledby="list-displaySize-list"
                ><h3>DisplaySize:
                ${phoneinformation.mainFeatures.displaySize}
                </h3>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-RAM"
                  role="tabpanel"
                  aria-labelledby="list-RAM-list"
                ><h3>Momory:
                ${phoneinformation.mainFeatures.memory}
                </h3>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-storage"
                  role="tabpanel"
                  aria-labelledby="list-storage-list"
                ><h3>Storage:
                ${phoneinformation.mainFeatures.storage}
                </h3>
                </div>
                <div
                  class="tab-pane fade"
                  id="list-SenSors"
                  role="tabpanel"
                  aria-labelledby="list-SenSors-list"
                ><h3>Featurees </h3><br>
                <ul>
                 <li> ${phoneinformation.mainFeatures.sensors[0]}</li>
                 <li>${phoneinformation.mainFeatures.sensors[1]}</li>
                 <li>${phoneinformation.mainFeatures.sensors[2]}</li>
                 <li>${phoneinformation.mainFeatures.sensors[3]}</li>
                 <li> ${phoneinformation.mainFeatures.sensors[4]}</li>
                 <li> ${phoneinformation.mainFeatures.sensors[5]}</li>
                </ul>                                                                          
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  phoneDetailsinfo.appendChild(creatDetileDiv);
};
