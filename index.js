// document
//   .querySelector(".navbar-toggler")
//   .addEventListener("click", () => console.log("trying-only"));
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", () =>
    document.querySelector("header").classList.toggle("is-active")
  );

//أن تنشئ مصفوفة من الكائنات تحتوي على بيانات للحيوانات//
const petcards = [
  {
    type: "Dog",
    gender: "male",
    age: "3years",
    name: "Rocco",
    location: "Usa",
    img:
      "https://tse3.mm.bing.net/th?id=OIP.qCtOqxrCFWQmBnwwEkJyxQHaHa&pid=Api&P=0&w=300&h=300",
  },
  {
    type: "Cat",
    gender: "Female",
    age: "5years",
    name: "Chanona",
    location: "Kuwait",
    img:
      "https://tse4.mm.bing.net/th?id=OIP.YbZDGvaRkysC8A1eTAU_pQHaLH&pid=Api&P=0&w=300&h=300",
  },
  {
    type: "Dog",
    gender: "Female",
    age: "8years",
    name: "Morio",
    location: "Uk",
    img:
      "https://tse3.mm.bing.net/th?id=OIP.7Ltn1SUDFFgAHimQy8fqUwHaE7&pid=Api&P=0&w=230&h=154",
  },
  {
    type: "Cat",
    gender: "Male",
    age: "8years",
    name: "danio",
    location: "Uk",
    img:
      "https://tse1.mm.bing.net/th?id=OIP.AdnMcF9Wz5st2vHBpV21twHaEK&pid=Api&P=0&w=284&h=160",
  },
];
//ومصفوفة أخرى تحتوي على قصص وعناوين القصص وصور لحيوانات تم أنقاذها //
const Animalstories = [
  "They say you have to survive any dog attack Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
];

let searchbar = document.getElementsByClassName("button")[1];

searchbar.addEventListener("click", (e) => {
  e.preventDefault();

  let animals = document.getElementById("sanimals");

  console.log(animals.value);
  let input = animals.value;
  let fillterdata = petcards.filter((pet) => {
    return pet.location.includes(input);
  });
  console.log(fillterdata);
  for (let i = 0; i < fillterdata.length; i++) {
    let garden = `<div class="widget">
    <div class="widget__image">
      <img src="${fillterdata[i].img}" alt="pet image" />
    </div>
    <div class="widget__desc">
       <h4>${fillterdata[i].name}</h4>
        <p>${fillterdata[i].gender} | ${fillterdata[i].age}</p>
     <p>${fillterdata[i].city}</p>
    </div> 
    </div>`;
    document.querySelector(".thewidget").innerHTML += garden;
  }
});

const linkk = document.getElementById("linkk");
linkk.addEventListener("click", function (event) {
  if (linkk.click) {
    event.preventDefault();
  }
});

function firstFunction() {
  var dot = document.getElementById("dot");
  var more = document.getElementById("first");
  document.getElementById("first").innerHTML += Animalstories;
  var btn = document.getElementById("linkk");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btn.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    dot.style.display = "none";
    btn.innerHTML = "Read less";
    more.style.display = "inline";
  }
}

const link = document.getElementById("link");
link.addEventListener("click", function (event) {
  if (link.click) {
    event.preventDefault();
  }
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("second");
  document.getElementById("second").innerHTML += Animalstories;
  var btnText = document.getElementById("link");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const linkkk = document.getElementById("linkkk");
linkkk.addEventListener("click", function (event) {
  if (linkkk.click) {
    event.preventDefault();
  }
});

function thirdFunction() {
  var dotss = document.getElementById("dotss");
  var text = document.getElementById("third");
  document.getElementById("third").innerHTML += Animalstories;
  var bt = document.getElementById("linkkk");

  if (dotss.style.display === "none") {
    dotss.style.display = "inline";
    bt.innerHTML = "Read more";
    text.style.display = "none";
  } else {
    dotss.style.display = "none";
    bt.innerHTML = "Read less";
    text.style.display = "inline";
  }
}
