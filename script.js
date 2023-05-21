var imgAddress=[
  'https://www.soorban.com/images/news/2022/03/1648435357_B0oM0.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435357_Z5wH3.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435361_C1dJ9.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435354_W7wZ8.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435355_Q6dZ5.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435361_I6mY1.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435359_E8gI8.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435355_L6oA2.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435358_T8nV1.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435361_R4cL1.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435357_X6wE3.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435361_Z2dT6.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435356_O9jN7.jpg',
  'https://www.soorban.com/images/news/2022/03/1648435357_Z0yF9.jpg'];
  let img1= document.querySelector('.img-1 img');
  let img2= document.querySelector('.img-2 img');
  let img3= document.querySelector('.img-3 img');
  let img4= document.querySelector('.img-4 img');
  let img5= document.querySelector('.img-5 img');
  let img6= document.querySelector('.img-6 img');
  let img7= document.querySelector('.img-7 img');
  let img8= document.querySelector('.img-8 img');
  let img9= document.querySelector('.img-9 img');
  var i=0;
  img1.src=imgAddress[imgAddress.length-1]
  img2.src=imgAddress[0];
  img3.src=imgAddress[1]
  img4.src=imgAddress[2];
  img5.src=imgAddress[3]
  img6.src=imgAddress[4];
  img7.src=imgAddress[5];
  function handleClick(whichOne) {
      //next
      if (whichOne==='next') {
        img1.parentElement.parentElement.style.transform='translateX(-100%)'
        img1.parentElement.parentElement.style.transition='all 0.3s linear'
        img2.parentElement.parentElement.style.transform='translateX(-100%)'
        img2.parentElement.parentElement.style.transition='all 0.3s linear'
        img3.parentElement.parentElement.style.transform='translateX(-100%)'
        img3.parentElement.parentElement.style.transition='all 0.3s linear'
        img4.parentElement.parentElement.style.transform='translateX(-100%)'
        img4.parentElement.parentElement.style.transition='all 0.3s linear'
        img5.parentElement.parentElement.style.transform='translateX(-100%)'
        img5.parentElement.parentElement.style.transition='all 0.3s linear'
        img6.parentElement.parentElement.style.transform='translateX(-100%)'
        img6.parentElement.parentElement.style.transition='all 0.3s linear'
        img7.parentElement.parentElement.style.transform='translateX(-100%)'
        img7.parentElement.parentElement.style.transition='all 0.3s linear'
        setTimeout(function (){
          img1.parentElement.parentElement.style.transform='translateX(0)'
          img1.parentElement.parentElement.style.transition='all 0s linear'
          img2.parentElement.parentElement.style.transform='translateX(0)'
          img2.parentElement.parentElement.style.transition='all 0s linear'
          img3.parentElement.parentElement.style.transform='translateX(0)'
          img3.parentElement.parentElement.style.transition='all 0s linear'
          img4.parentElement.parentElement.style.transform='translateX(0)'
          img4.parentElement.parentElement.style.transition='all 0s linear'
          img5.parentElement.parentElement.style.transform='translateX(0)'
          img5.parentElement.parentElement.style.transition='all 0s linear'
          img6.parentElement.parentElement.style.transform='translateX(0)'
          img6.parentElement.parentElement.style.transition='all 0s linear'
          img7.parentElement.parentElement.style.transform='translateX(0)'
          img7.parentElement.parentElement.style.transition='all 0s linear'
          img1.src=img2.src;
          img2.src=img3.src;
          img3.src=img4.src;
          img4.src=img5.src;
          img5.src=img6.src;
          img6.src=img7.src;
          if (imgAddress.indexOf(img7.src)===imgAddress.length-1) {
            img7.src=imgAddress[0];
          }else{
            img7.src=imgAddress[imgAddress.indexOf(img7.src)+1]
          }
        },334)
       }
        //previous
    if (whichOne==='previous') {
      img1.parentElement.parentElement.style.transform='translateX(100%)'
      img1.parentElement.parentElement.style.transition='all 0.3s linear'
      img2.parentElement.parentElement.style.transform='translateX(100%)'
      img2.parentElement.parentElement.style.transition='all 0.3s linear'
      img3.parentElement.parentElement.style.transform='translateX(100%)'
      img3.parentElement.parentElement.style.transition='all 0.3s linear'
      img4.parentElement.parentElement.style.transform='translateX(100%)'
      img4.parentElement.parentElement.style.transition='all 0.3s linear'
      img5.parentElement.parentElement.style.transform='translateX(100%)'
      img5.parentElement.parentElement.style.transition='all 0.3s linear'
      img6.parentElement.parentElement.style.transform='translateX(100%)'
      img6.parentElement.parentElement.style.transition='all 0.3s linear'
      img7.parentElement.parentElement.style.transform='translateX(100%)'
      img7.parentElement.parentElement.style.transition='all 0.3s linear'
      setTimeout(function (){
        img1.parentElement.parentElement.style.transform='translateX(0)'
        img1.parentElement.parentElement.style.transition='all 0s linear'
        img2.parentElement.parentElement.style.transform='translateX(0)'
        img2.parentElement.parentElement.style.transition='all 0s linear'
        img3.parentElement.parentElement.style.transform='translateX(0)'
        img3.parentElement.parentElement.style.transition='all 0s linear'
        img4.parentElement.parentElement.style.transform='translateX(0)'
        img4.parentElement.parentElement.style.transition='all 0s linear'
        img5.parentElement.parentElement.style.transform='translateX(0)'
        img5.parentElement.parentElement.style.transition='all 0s linear'
        img6.parentElement.parentElement.style.transform='translateX(0)'
        img6.parentElement.parentElement.style.transition='all 0s linear'
        img7.parentElement.parentElement.style.transform='translateX(0)'
        img7.parentElement.parentElement.style.transition='all 0s linear'
        img7.src=img6.src;
        img6.src=img5.src;
        img5.src=img4.src;
        img4.src=img3.src;
        img3.src=img2.src;
        img2.src=img1.src;
        if (imgAddress.indexOf(img1.src)===0) {
          img1.src=imgAddress[imgAddress.length-1];
        }else{
          img1.src=imgAddress[imgAddress.indexOf(img1.src)-1]
        }
      },334)
    }
  }