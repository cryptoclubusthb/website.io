
let nums = document.querySelectorAll(".statistics .counted");
let section = document.querySelector(".statistics");
let started = false; // Function Started ? No
let startingSlide = false
let mybutton = document.getElementById("btn-back-to-top");
let pics = document.querySelectorAll(".carous-item img")
let myInterval = null
let myfun = null


function showMoreActvs(e) {
  let container = document.querySelector(".activities .container")
  container.style.maxHeight = "none"
  if (e.textContent == "See less") {
    e.textContent = "See more"
    e.parentElement.style.position = "absolute"
    container.style.maxHeight = "926px"
    window.scroll(0, document.querySelector(".activities").offsetTop)
  } else {
    e.textContent = "See less"
    // e.parentElement.style.position = "fixed"
    myfun = function () {
      let max = document.querySelector(".activities").offsetTop + document.querySelector(".activities>div").offsetTop + document.querySelectorAll(".activities>div>div")[1].offsetTop + document.querySelectorAll(".activities>div>div")[1].offsetHeight / 2
      let min = document.querySelector(".activities").offsetTop + document.querySelector(".activities>div").offsetTop + document.querySelectorAll(".activities>div>div")[3].offsetTop
      if (e.textContent == "See less") {
        if (window.scrollY >= max) {
          e.parentElement.style.display = "flex"
          e.parentElement.style.position = "fixed"

        } else {
          e.parentElement.style.position = "absolute"
        }
        if (window.scrollY >= min) {
          e.parentElement.style.display = "none"
        }
      }
    }
  }
}

let i = 1;
let imgSlider = () => {
  if (i >= pics.length) {
    pics[pics.length - 1].classList.remove("active")
    i = 1
    pics[i - 1].classList.add("active")
    pics[i].classList.remove("active")

  }
  else {
    pics[i - 1].classList.remove("active")
    pics[i].classList.add("active")
  }
  i++

}


window.onscroll = function () {
  scrollFunction();
  if (myfun) myfun()
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if (window.scrollY >= section.offsetTop) {
    if (!startingSlide) {
      startingSlide = true
      myInterval = setInterval(imgSlider, 2000)
    }

  }


};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




