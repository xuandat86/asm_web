/*
Build ladingpage 
request: {
   onmouseover
   Slide showapp 
   Chứa Form (Validate cho form)
   Sử dụng map hoặc Media 
   Thiết kế countdown Lock 
}
*/

const getClass = (name) => document.getElementByClassName(name);
const getId = (name) => document.getElementById(name);
const querySelector = (name) => document.querySelector(name);
const discover_right = querySelector(".discover_right");
const btn_search = querySelector(".btn_search");


console.log(discover_right);


const togle = document.querySelector(".togle");

console.log(togle);
togle.addEventListener("click", (e) => {
   window.scrollTo({
      top:0,
      behavior:"smooth"
   })
   getId('header').classList.toggle('display_off');
   querySelector('.tab_mode').classList.toggle('display_on');

})

querySelector(".cancel").addEventListener("click", (e) => {
 querySelector('.tab_mode').classList.toggle('display_on');
  getId('header').classList.toggle('display_off');

})




const itemElements = document.querySelectorAll('.version .item');
const header = getId("header");
const Discover = document.querySelector(".Discover");
const toTop = document.querySelector(".btn_toTop");
window.addEventListener("scroll",() => {
    let Discover_top =  Discover.getBoundingClientRect().top;
     let item_top = itemElements[0].getBoundingClientRect().top;
    if(Discover_top <= 120) {
    header.style.backgroundColor = "#ccc";
    header.style.padding = "0";
    discover_right.style.transform = "translateX(0%)"
    
    }else{
      header.style.backgroundColor = "transparent"
      header.style.padding = "15px 0";
    };
    if(item_top <=150){
      itemElements[0].style.transform =  "translateX(0%)";
      setTimeout(() => {
        itemElements[1].style.transform =  "translateX(0%)";
      },600);
      setTimeout(() => {
        itemElements[2].style.transform =  "translateX(0%)";
      },1200)
    }
    // toTop => 
     if(window.scrollY >= 650) {
      toTop.style.display = 'flex'
     }else {
      toTop.style.display = 'none'
     }
} )

toTop.addEventListener("click",() => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
 })
})

// Xử lý form 

const getform1 =  querySelector(".btn_form");
const notifica = querySelector('.notifica');



const fields = [
  { element: document.querySelector(".firtName"), name: "firtName" },
  { element: document.querySelector(".lastName"), name: "lastName" },
  { element: document.querySelector(".Location"), name: "Location" },
  { element: document.querySelector(".AGE"), name: "Age" },
  { element: document.querySelector(".Phone"), name: "Phone" }
];

function isEmpty(element) {
  return element.value.trim() === "";
}

function validateForm() {
  let emptyFields = [];
  notifica.innerHTML = "";
  const error = (er) => `<p class=" text-red-800 font-medium font-serif text-start" >
  + Error ${er}</p>`;


  fields.forEach(field => {
    if (isEmpty(field.element)) {
      field.element.classList.add('error');
      emptyFields.push(field.name);
    } else {
      field.element.classList.remove('error');
    }
  });

  if (emptyFields.length > 0) {
        emptyFields.forEach((text) => {
          notifica.insertAdjacentHTML('beforeend',error(text))
        });
  } else {
    alert("Biểu mẫu hợp lệ");
  }
}

getform1.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

const day = querySelector(".days");
const hour = querySelector(".hour");
const minute = querySelector(".minute");
const second = querySelector(".second");
const targetDateObj = new Date('2023-09-28');
function countdown() {
    const currentDate = new Date();
    const timeRemaining = targetDateObj - currentDate;
    if (timeRemaining <= 0) {
        day.innerHTML = '0';
        hour.innerHTML = '0';
        minute.innerHTML = '0';
        second.innerHTML = '0';
        clearInterval(downInter);
    } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        day.innerHTML = daysRemaining;
        hour.innerHTML = hoursRemaining;
        minute.innerHTML = minutesRemaining;
        second.innerHTML = secondsRemaining;
    }
}

countdown();
const downInter = setInterval(countdown, 1000);


// Quesiton Awser
// Đoạn mã HTML của bạn
const answer = `
  <div class="answer">
    <div class="question_item answer_item flex p-[15px]">
      <p>What do I need to apply for the account?</p>
      <i class="w-[25px] h-[25px] rounded-[50%] leading-[25px] text-center remove fa-solid fa-minus"></i>
    </div>
    <p class="answer_content text-left font-[200] p-[15px] text-[#333333aa]">
      Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse
      ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
      Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia
      et.
    </p>
  </div>
`;

// State status 

let stateStatus = new Array(document.querySelectorAll('.add').length).fill(false);
document.querySelectorAll('.add').forEach((item, index) => {
  item.addEventListener('click', () => {
    const questionContent = document.querySelectorAll(".question_content .answer__content")[index];
    if (!stateStatus[index]) {
      questionContent.insertAdjacentHTML('beforeend', answer);
      stateStatus[index] = true;
      const removeButton = questionContent.querySelector(".remove");
      removeButton.addEventListener('click', () => {
        questionContent.innerHTML = " ";
        stateStatus[index] = false;
      });
    }else {
      questionContent.innerHTML = " ";
      stateStatus[index] = false;
    }
  });
});




function onHover(element, newValue) {
  let originalBackgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');
  
  element.addEventListener("mouseover", () => {
      element.style.backgroundColor = newValue;
      element.style.cursor = "pointer"

  });

  element.addEventListener("mouseout", () => {
      element.style.backgroundColor = originalBackgroundColor;
  });
}

const version_container = document.querySelectorAll(".version_container .item");
version_container.forEach((item) => {
  onHover(item, "rgba(205, 241, 142, 0.772)");
});


btn_search.addEventListener('click', () => {
  querySelector(".popup").classList.add('show')
  setTimeout(  () => querySelector(".popup").classList.remove('show'),2000)
})