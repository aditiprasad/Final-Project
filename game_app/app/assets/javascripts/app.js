console.log("linked!");


$(function(){
    var counter = 0;
    var imageArr = [];
    var randomImages;
    var randomImagesArr = [];
    var sources =[];
    var dataSource;
    
  $("#start-game").click(function(event){

    $(".ui.page").removeClass("active");
    $(".ui.page").addClass("disabled");
     $('.ui.accordion').accordion();
    $.ajax({
        method: "GET",
        url: "/spices.json",
        dataType: "json",
        success: function(data){

            //a forEach function to grab "image" from the array of objects
            data.forEach(function(element){
                // console.log(element.name);
                var nameOfSpice = element.name
                var imageOfSpice = element.image;
                var description = element.description;



                //pushing images to the global variable imageArr
                imageArr.push({nameOfSpice : nameOfSpice, imageOfSpice : imageOfSpice, description : description});
            });
                // console.log(imageArr);

                //a for loop to randomly generate 5 images from the imageArr
                for(var i=0; i<4; i++){
                    randomImages = imageArr[Math.floor(Math.random() * imageArr.length)];
                    randomImagesArr.push(randomImages);
                };

                  // console.log(randomImagesArr);

              // a forEach loop to append the images to the DOM 
              randomImagesArr.forEach(function(element){

                console.log(element.nameOfSpice);

                var spice = element.nameOfSpice;
                var source = element.imageOfSpice;
                var what = element.description;

                //making the cards for the spices
                var $column = $("<div>").attr("class", "column");
                var $card = $("<div>").attr("class", "ui fluid card");
                var $image = $("<div>").attr("class", "image");
                var $img = $("<img>").attr("src", source).attr("id", "individual_images");

                var $content = $("<div>").attr("class", "content");
                var $input = $("<input>").attr("type", "text").attr("class","answers");
                var $submit = $("<button>Enter</button>").attr("class", "ui orange basic button enter");
               $card.append($image).append($img);
               $content.append($input);
               $content.append($submit)
               $card.append($content);
               $column.append($card);
               $(".ui.stackable.two.column.grid").append($column);



                $.ajax({
               method: "GET",
               url: "/recipes?q="+spice,
               dataType: "json",
               success: function(info){
                var recipes = info.recipes;

                recipes.forEach(function(el){
                    // console.log(el.source_url);
                    dataSource = el.source_url;   
                });
                 

                //making the accordian 
                var $title = $("<div>").attr("class", "title")
                var $p1 = $("<p>Spice/Herb</p>")
                $title.append($p1);
                var $accordionContent = $("<div>").attr("class", "content")
                var $p2 = $("<p>" + "<a href=" + dataSource + ">" + spice + "</a>" + "</p>");
                $accordionContent.append($p2)
                $(".ui.styled.fluid.accordion").append($title);
                $(".ui.styled.fluid.accordion").append($accordionContent);

                console.log(dataSource);

                }

               });
            



                $(".enter").on("click", function(){
                    $(".answers").each(function(){
                        if($(this).val() == spice){
                            $(".ui.fluid.card").transition("jiggle")
                        }
                         // else if($(this).val() != spice){
                         //    $(".ui.fluid.card").transition("shake")
                         // }
                    })
                });

                $("#restart").click(function(){
                    location.reload();
                })

            });

          }, 
          error: function(error){
            console.log(error);
        }
    });


});



});
