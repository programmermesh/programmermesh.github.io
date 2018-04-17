var images=['image_url_1','image_url_2','image_url_3','image_url_4'];

setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = 'url('+url+')';  
},5000);