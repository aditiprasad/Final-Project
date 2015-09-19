console.log("linked!");
var counter = 0;
var imageArr = [];
var randomImages;
var randomImagesArr = [];

$(function(){

  $("#start-game").click(function(event){
    $.ajax({
        method: "GET",
        url: "/spices.json",
        dataType: "json",
        success: function(data){
            // console.log(data);

            //a forEach function to grab "image" from the array of objects
            data.forEach(function(element){
                // console.log(element.image);
                var images = element.image;
                
                //pushing images to the global variable imageArr
                imageArr.push(images);
            });
                // console.log(imageArr);

                //a for loop to randomly generate 5 images from the imageArr
                for(var i=0; i<5; i++){
                randomImages = imageArr[Math.floor(Math.random() * imageArr.length)];
                randomImagesArr.push(randomImages);
               };

               randomImagesArr.forEach(function(element){
                console.log(element);
                var img = $("<img>").attr("src", "element");
                $(".image").append(img);
               })
        }
    });


  });

  // $.ajax({
  //   method: "GET",
  //   url: "/images",
  //   da
  // })

});


