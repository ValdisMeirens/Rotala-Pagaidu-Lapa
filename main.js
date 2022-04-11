var  randomNumber = returnRandomNumber() || 1;

function returnRandomNumber() {
    
  return Math.floor(Math.random() * 4)+1; 
}

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


function checkWindowSize() {
  const windowSize = 601;
  window.innerWidth >= windowSize ? (document.body.style.backgroundImage ="url(img/pagaidu_lapa/rotala_background_desktop" +randomNumber +".jpg)")
                                  : (document.body.style.backgroundImage ="url(img/pagaidu_lapa/rotala_background_mobile"  +randomNumber +".jpg)");

   if(isMobileDevice() && window.innerWidth<820 && window.innerWidth>window.innerHeight) {
    document.body.style.backgroundImage = "none";
  }
}

window.addEventListener("resize", function () {
  checkWindowSize();
});

function changeBackgroundImage() {
  checkWindowSize();
}

function startBody() {  
  changeBackgroundImage();
}