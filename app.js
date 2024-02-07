const scrolltopbtn = document.querySelector(".top");
const formId = document.querySelector("#form");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".fa-x");
//text effect
document.addEventListener('DOMContentLoaded', function() {
  // Your code to run after the DOM has loaded
  preventDefault();
});
document.addEventListener('DOMContentLoaded', function() {
  const originalText = "Gautam Kumar";
  let animatedTextElement = document.querySelector('#animatedText');
  const textArray = originalText.split('');
  let charIndex = 0;
  function animateText() {
    animatedTextElement.textContent += textArray[charIndex];
    charIndex++;
    if (charIndex < textArray.length) {
      setTimeout(animateText,150); // Adjust the delay between characters
    }
  }
  animateText();
});
//Project Menu list
projectMenuArray.forEach((item,idx)=>{
  const name = document.createElement('li');
  name.classList.add('cert');
  name.innerText = item;
  // console.log(item);
  if(idx == 5){
    const ele = document.createElement('p');
    ele.innerText = 'Fun Projects';
    document.querySelector("#project-menu ul").append(ele);
  }
  document.querySelector('#project-menu ul').append(name);
});

//ACTIVE CHANGING CARD ON SELECT 
const menuOptions = document.querySelectorAll('#project-menu ul li');
menuOptions[0].classList.add('active');
menuOptions.forEach((el,idx)=>{
  el.addEventListener("click",()=>{
    const effect = document.querySelector('.project-div');
    effect.classList.add('animation');
    setTimeout(()=>{
      effect.classList.remove('animation');
    },500);
    const item = projectCardArray[idx];
    menuOptions.forEach((ele)=>{
      ele.classList.remove('active');
    })
    el.classList.add('active');
    document.querySelector(".pjt-name").innerText = item.name;
    document.querySelector(".project-div-header a").href = item.src;
    document.querySelector(".pjt-about").innerText = item.about;
    const parentDiv = document.querySelector('.project-techstack-btn');
      while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
      }
    item.techStack.forEach((e)=>{
         const techtbn = document.createElement('button');
         techtbn.classList.add('pjt-techs');
         techtbn.innerText = e;
         const parent = document.querySelector('.project-techstack-btn');
         parent.append(techtbn);
    });
    const pjtStatus  = document.querySelector(".pjt-status");
    if(item.status === 1){
      pjtStatus.innerText = '⦿ Completed'
      pjtStatus.style.color = 'green';
    }
    else{
      pjtStatus.innerText = '⦿ In Progress'
      pjtStatus.style.color = 'red';
      
    }
    document.querySelector(".project-foot a").href = item.codeSrc;
    
  });
  
});

//Adding certificates
certificateArray.forEach((item)=>{
  const certDiv = document.createElement("div");
  const certfName = document.createElement("p");
  const certSrc = document.createElement("a");
  certSrc.innerHTML = '<i class="fa-regular fa-eye"></i>';

  certDiv.classList.add("cert");
  certfName.innerText=item.certificateName;
  certSrc.href = item.src;
  certSrc.target = '__blank';
  certDiv.append(certfName,certSrc);
  document.querySelector(".six-section").appendChild(certDiv);
});

//from submission
formId.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format. Please enter a valid email address.');
      return;
    }
    else
        alert("Thanks for your response. Message sent succesfully");
          // showMessageModel("sddfghj","kjhgfd");
        document.getElementById("form").reset();
        //doing some unethical task just because working hehehe. to avoid redirection to the form provider page here im not handeling promise right way :)
        await fetch('https://formspree.io/f/xdoqadwr',{
            method:"POST",
            body:formData
        });
});

//open model on form submission
function showMessageModel(message, type) {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Set message and style based on the type
    modal.innerHTML = message;
    modal.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
    modal.style.color = '#fff';

    // Show the modal
    modal.style.display = 'block';

    // Hide the modal after 2 seconds
    setTimeout(() => {
      modal.style.display = 'none';
    }, 2000);
}

// scrolltotop implementation
window.onscroll =() =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrolltopbtn.style.display = "block";
      } else {
        scrolltopbtn.style.display = "none";
      }
};
scrolltopbtn.addEventListener("click",()=>{
      document.body.scrollTop = 0; //safari
      document.documentElement.scrollTop = 0;//chrome and other
});
//hamburger click
hamburger.addEventListener("click",(event)=>{
  event.preventDefault();
  const hamDetails = document.querySelector(".hamburger-datails");
  console.log("click");
  hamDetails.style.display = "block";
});
cross.addEventListener("click",(event)=>{
  event.preventDefault();
  const crossD = document.querySelector(".hamburger-datails");
  crossD.style.display = "none";
});