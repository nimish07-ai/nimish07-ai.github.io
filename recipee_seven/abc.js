prn=console.log;
$qs=(abc)=>document.querySelector(`${abc}`)
a_ptr=0;
b_ptr=0;
c_ptr=0;
list_of_aut_key=[
    "83dec76d670e4cdea383e52e674f4822",
    "b0aba37db80d4abf8432df402c84c6be",
    "107b1ec230a54a9990d83ad5de00599d"
                ],
$s={
   
    // information:    {
    //     "vegetarian": true,
    //     "vegan": false,
    //     "glutenFree": true,
    //     "dairyFree": false,
    //     "veryHealthy": false,
    //     "cheap": false,
    //     "veryPopular": false,
    //     "sustainable": false,
    //     "weightWatcherSmartPoints": 10,
    //     "gaps": "no",
    //     "lowFodmap": false,
    //     "aggregateLikes": 6,
    //     "spoonacularScore": 73,
    //     "healthScore": 18,
    //     "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //     "license": "CC BY 3.0",
    //     "sourceName": "Foodista",
    //     "pricePerServing": 123.98,
    //     "extendedIngredients": [
    //       {
    //         "id": 9042,
    //         "aisle": "Produce",
    //         "image": "blackberries.jpg",
    //         "consistency": "solid",
    //         "name": "blackberries",
    //         "original": "1/2 cup frozen blackberries",
    //         "originalString": "1/2 cup frozen blackberries",
    //         "originalName": "frozen blackberries",
    //         "amount": 0.5,
    //         "unit": "cup",
    //         "meta": [
    //           "frozen"
    //         ],
    //         "metaInformation": [
    //           "frozen"
    //         ],
    //         "measures": {
    //           "us": {
    //             "amount": 0.5,
    //             "unitShort": "cups",
    //             "unitLong": "cups"
    //           },
    //           "metric": {
    //             "amount": 118.294,
    //             "unitShort": "ml",
    //             "unitLong": "milliliters"
    //           }
    //         }
    //       },
    //       {
    //         "id": 9050,
    //         "aisle": "Produce",
    //         "image": "blueberries.jpg",
    //         "consistency": "solid",
    //         "name": "blueberries",
    //         "original": "1/2 cup frozen blueberries",
    //         "originalString": "1/2 cup frozen blueberries",
    //         "originalName": "frozen blueberries",
    //         "amount": 0.5,
    //         "unit": "cup",
    //         "meta": [
    //           "frozen"
    //         ],
    //         "metaInformation": [
    //           "frozen"
    //         ],
    //         "measures": {
    //           "us": {
    //             "amount": 0.5,
    //             "unitShort": "cups",
    //             "unitLong": "cups"
    //           },
    //           "metric": {
    //             "amount": 118.294,
    //             "unitShort": "ml",
    //             "unitLong": "milliliters"
    //           }
    //         }
    //       },
    //       {
    //         "id": 14292,
    //         "aisle": "Frozen",
    //         "image": "lemonade.jpg",
    //         "consistency": "solid",
    //         "name": "lemonade concentrate",
    //         "original": "2 tablespoons lemonade concentrate",
    //         "originalString": "2 tablespoons lemonade concentrate",
    //         "originalName": "lemonade concentrate",
    //         "amount": 2,
    //         "unit": "tablespoons",
    //         "meta": [],
    //         "metaInformation": [],
    //         "measures": {
    //           "us": {
    //             "amount": 2,
    //             "unitShort": "Tbsps",
    //             "unitLong": "Tbsps"
    //           },
    //           "metric": {
    //             "amount": 2,
    //             "unitShort": "Tbsps",
    //             "unitLong": "Tbsps"
    //           }
    //         }
    //       },
    //       {
    //         "id": 9302,
    //         "aisle": "Produce",
    //         "image": "raspberries.jpg",
    //         "consistency": "solid",
    //         "name": "raspberries",
    //         "original": "1/2 cup frozen unsweetened raspberries",
    //         "originalString": "1/2 cup frozen unsweetened raspberries",
    //         "originalName": "frozen unsweetened raspberries",
    //         "amount": 0.5,
    //         "unit": "cup",
    //         "meta": [
    //           "unsweetened",
    //           "frozen"
    //         ],
    //         "metaInformation": [
    //           "unsweetened",
    //           "frozen"
    //         ],
    //         "measures": {
    //           "us": {
    //             "amount": 0.5,
    //             "unitShort": "cups",
    //             "unitLong": "cups"
    //           },
    //           "metric": {
    //             "amount": 118.294,
    //             "unitShort": "ml",
    //             "unitLong": "milliliters"
    //           }
    //         }
    //       },
    //       {
    //         "id": 9316,
    //         "aisle": "Produce",
    //         "image": "strawberries.png",
    //         "consistency": "solid",
    //         "name": "strawberries",
    //         "original": "1/2 cup frozen unsweetened strawberries",
    //         "originalString": "1/2 cup frozen unsweetened strawberries",
    //         "originalName": "frozen unsweetened strawberries",
    //         "amount": 0.5,
    //         "unit": "cup",
    //         "meta": [
    //           "unsweetened",
    //           "frozen"
    //         ],
    //         "metaInformation": [
    //           "unsweetened",
    //           "frozen"
    //         ],
    //         "measures": {
    //           "us": {
    //             "amount": 0.5,
    //             "unitShort": "cups",
    //             "unitLong": "cups"
    //           },
    //           "metric": {
    //             "amount": 118.294,
    //             "unitShort": "ml",
    //             "unitLong": "milliliters"
    //           }
    //         }
    //       },
    //       {
    //         "id": 19335,
    //         "aisle": "Baking",
    //         "image": "sugar-in-bowl.png",
    //         "consistency": "solid",
    //         "name": "sugar",
    //         "original": "1 tablespoon sugar",
    //         "originalString": "1 tablespoon sugar",
    //         "originalName": "sugar",
    //         "amount": 1,
    //         "unit": "tablespoon",
    //         "meta": [],
    //         "metaInformation": [],
    //         "measures": {
    //           "us": {
    //             "amount": 1,
    //             "unitShort": "Tbsp",
    //             "unitLong": "Tbsp"
    //           },
    //           "metric": {
    //             "amount": 1,
    //             "unitShort": "Tbsp",
    //             "unitLong": "Tbsp"
    //           }
    //         }
    //       },
    //       {
    //         "id": 2050,
    //         "aisle": "Baking",
    //         "image": "vanilla-extract.jpg",
    //         "consistency": "liquid",
    //         "name": "vanilla extract",
    //         "original": "1/2 teaspoon vanilla extract",
    //         "originalString": "1/2 teaspoon vanilla extract",
    //         "originalName": "vanilla extract",
    //         "amount": 0.5,
    //         "unit": "teaspoon",
    //         "meta": [],
    //         "metaInformation": [],
    //         "measures": {
    //           "us": {
    //             "amount": 0.5,
    //             "unitShort": "tsps",
    //             "unitLong": "teaspoons"
    //           },
    //           "metric": {
    //             "amount": 0.5,
    //             "unitShort": "tsps",
    //             "unitLong": "teaspoons"
    //           }
    //         }
    //       },
    //       {
    //         "id": 1077,
    //         "aisle": "Milk, Eggs, Other Dairy",
    //         "image": "milk.png",
    //         "consistency": "liquid",
    //         "name": "whole milk",
    //         "original": "5 1/2 cups whole milk (do not use skim)",
    //         "originalString": "5 1/2 cups whole milk (do not use skim)",
    //         "originalName": "whole milk (do not use skim)",
    //         "amount": 5.5,
    //         "unit": "cups",
    //         "meta": [
    //           "whole",
    //           "(do not use skim)"
    //         ],
    //         "metaInformation": [
    //           "whole",
    //           "(do not use skim)"
    //         ],
    //         "measures": {
    //           "us": {
    //             "amount": 5.5,
    //             "unitShort": "cups",
    //             "unitLong": "cups"
    //           },
    //           "metric": {
    //             "amount": 1.301,
    //             "unitShort": "l",
    //             "unitLong": "liters"
    //           }
    //         }
    //       }
    //     ],
    //     "id": 643241,
    //     "title": "Four-Berry Blast Fruit Smoothie",
    //     "readyInMinutes": 10,
    //     "servings": 4,
    //     "sourceUrl": "http://www.foodista.com/recipe/445N2G3Y/four-berry-blast-fruit-smoothie",
    //     "image": "https://spoonacular.com/recipeImages/643241-556x370.jpg",
    //     "imageType": "jpg",
    //     "summary": "Four-Berry Blast Fruit Smoothie might be just the morn meal you are searching for. This gluten free and vegetarian recipe serves 4 and costs <b>$1.24 per serving</b>. One serving contains <b>264 calories</b>, <b>11g of protein</b>, and <b>11g of fat</b>. Only a few people made this recipe, and 5 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>10 minutes</b>. Head to the store and pick up milk, raspberries, lemonade concentrate, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 74%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-482626\">Ginger Berry Fruit Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-fruit-smoothie-265532\">Berry-Banana Fruit Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-blast-smoothies-397587\">Berry Blast Smoothies</a>.",
    //     "cuisines": [],
    //     "dishTypes": [
    //       "side dish"
    //     ],
    //     "diets": [
    //       "gluten free",
    //       "lacto ovo vegetarian"
    //     ],
    //     "occasions": [],
    //     "instructions": "<ol><li>Place first five items into a blender and pulse a few times. Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.</li></ol>",
    //     "analyzedInstructions": [
    //       {
    //         "name": "",
    //         "steps": [
    //           {
    //             "number": 1,
    //             "step": "Place first five items into a blender and pulse a few times.",
    //             "ingredients": [],
    //             "equipment": [
    //               {
    //                 "id": 404726,
    //                 "name": "blender",
    //                 "localizedName": "blender",
    //                 "image": "blender.png"
    //               }
    //             ]
    //           },
    //           {
    //             "number": 2,
    //             "step": "Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.",
    //             "ingredients": [
    //               {
    //                 "id": 1009054,
    //                 "name": "berries",
    //                 "localizedName": "berries",
    //                 "image": "berries-mixed.jpg"
    //               }
    //             ],
    //             "equipment": []
    //           }
    //         ]
    //       }
    //     ],
    //     "originalId": null,
    //     "spoonacularSourceUrl": "https://spoonacular.com/four-berry-blast-fruit-smoothie-643241"
    //   },
    // steps : [
    //     { name:"Oli Bob"},
    //     { name:"Mary May"},
    //     { name:"Christine Lobowski"},
    //     { name:"Brendon Philips",},
    //     { name:"Margret Marmajuke"},
    //     { name:"Frank Harbours"},
    // ]
}
__init__={}
$qs(".search_box_inner").onclick=function(){$qs(".search_box_inner").style.textAlign="left"}
$qs(".search_box_inner").onblur=ev=>$qs(".search_box_inner").style.textAlign="center"
$qs(".search_box_inner").onkeydown=search_box
$qs(".cross").onmouseenter=ev=>{$qs(".cross").style.stroke="black";}
$qs(".cross").onmouseleave=ev=>{$qs(".cross").style.stroke="#189ca2b8";}
$qs(".cross").onclick=ev=> 
                                    {
                                            $qs(".search_box_inner").value="";
                                            $qs(".search_modal").style.display="none";
                                            
                                    }


                



function search_box(ev)
{
        
        
        // prn(ev.keyCode)
        if(ev.keyCode >=65 &&  ev.keyCode <=90 ||ev.keyCode >=48 && ev.keyCode <=57 || ev.keyCode ==8|| ev.keyCode ==13)
        {
                if(ev.key !="Enter"&& ev.key !="Backspace")
                {       
                $s.buffer=$qs('.search_box_inner').value+ev.key
                }
                else
                if (ev.key =="Backspace")
                {
                $s.buffer=$qs('.search_box_inner').value
                // prn($s.buffer)
                }
                
                
                if(__init__.out != undefined)
                {

                clearTimeout(__init__.out)        
                // prn('cleared')
                }
                else if(__init__.out == undefined)
                {
                    $qs(".search_modal").style.display="grid";
                window.search_modal_width_height_setter()
                
                }
                
                __init__.out=setTimeout(window.do_it_now,700)
                
        }
}

function search_modal_width_height_setter()
{
  
    $qs(".search_modal").style.top=`${$qs(".search_box_inner").parentElement.clientHeight}px`
    $qs(".search_modal").style.width=`${$qs(".search_box_inner").parentElement.clientWidth}px`
    $qs(".search_modal").style.left= `${$qs(".search_box_inner").offsetLeft}px`
    // $().search_modal.style.height="700px"
    // let buffer=""
    // $().search_path.style.display="none"
    // $().cross_path.style.display="block";
    // $().cross.style.display="block";

}

function data_setter()
{
    search_modal_width_height_setter()
    $qs(".search_modal").style.display="grid";
    let buffer="";
    if($s.hasOwnProperty("autocomplete")==false)
        {
                buffer+=`
                <div class="search_inner image"   >
                <div  class="image_search_inner image"></div>
                    <p class="dishes_name image" > </p>
                </div>
                `
        }
    else
    {
        if( $s.autocomplete.length==0)
    {
            buffer+=`<div class="search_inner"  >
            <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" class="image_search_inner">
                    <p> no recipee found .....</p>
            </div>`
        }else
        {
            try {
                $s.autocomplete.forEach(ev=>{
                        buffer+=` 
                        <div class="search_inner"  id="${ev.id}" >
                        <img src="https://spoonacular.com/recipeImages/${ev.id}-556x370.jpg" class="image_search_inner">
                            <p class="dishes_name" id="${ev.id}">${ev.title}</p>
                        </div>
                        `   })
                }
        catch (error) 
        {
        buffer+=`<div class="search_inner"  >
        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" class="image_search_inner">
                <p> no recipee found .....</p>
        </div>`
        
                }

        }
        setTimeout(ev=>{
            document.querySelectorAll(".search_inner").forEach(ev=>{
                ev.addEventListener('click',ev1=>{
                      $s.id=ev1.path[0].id
                      ptr_b()    
                  })
            })},100)
        
    }
                
    
    
    $qs(".search_modal").innerHTML=buffer;
    // $EE().callback_setup()
    // prn(buffer)
    // return true
    }
         

function after_ptr_b()
{
    
    let a=$s.information

    $s.catogey={
            "cuisines": a.cuisine,
            "glutenFree": a.glutenFree,
            "dairyFree": a.dairyFree,
            "vegan": a.vegan,   
            "vegetarian": a.vegan,
            "veryHealthy": a.veryHealthy,
            "veryPopular": a.veryPopular,
            "ketogenic": a.ketogenic,

    }



    $s.abc={
            "id": a.id,
            "title": a.title,
            "image": a.image,
            "readyInMinutes": a.readyInMinutes,
            "sourceName": a.sourceName,
            "sourceUrl": a.sourceUrl,
            "spoonacularSourceUrl": a.spoonacularSourceUrl,
            "aggregateLikes": a.aggregateLikes,
            "healthScore": a.healthScore,
            "cheap": false,
            "creditsText": a.creditsText,
            "diets": [],
            "gaps": "no",
            "instructions": "",
            "lowFodmap": false,
            "occasions": [],
            "sustainable": false,
            "whole30": false,
            "weightWatcherSmartPoints": a.weightWatcherSmartPoints,
            "spoonacularScore": a.spoonacularScore,
            
    }
    $s.ingrident=[]
    $s.information.extendedIngredients.forEach(ev=>{
        prn(ev.id)
        let buffer={}
        buffer.id=ev.id;
        buffer.image=ev.image;
        buffer.name=ev.name;
        $s.ingrident.push(buffer)
    })
        
}

window.do_it_now=()=>
        {
                prn("dit")
                a_ptr=0;
                ptr_a()
                // if($s.buffer!="")
                // {
                // __init__.EL.pre_fetch($s.buffer,"smart_search")
                // __init__.EL.search_modal()
                        
                // }

        }

function ptr_a()
{
    fetch(`https://api.spoonacular.com/recipes/autocomplete?number=7&query=${$qs(".search_box_inner").value}&apiKey=${list_of_aut_key[a_ptr++]}`)
    .then(ev=>{

        // prn(ev)
        let tosend={}
        if(ev.status == 200)
        {
            
            tosend.value=ev.text()
            
            
       
        }
        else if (ev.status == 401)
        {
            // ptr_a()
            tosend.nikal=true
        }
        return tosend
        
    })
    .then(ev=>{
        
        if(ev.hasOwnProperty("nikal"))
        {

        }
        else
        {
            prn("hey")
            ev.value.then(ev=>{$s.autocomplete=JSON.parse(ev)})
            setTimeout(ev=>data_setter(),500)
        }
    })

}



function table_ceator()
{
    var cheeseData = [
        ]
        let buffer_arr=[]
    let ptr=0;
        if($s.information.hasOwnProperty("extendedIngredients")== true  )
            {
                // ptr=$s.information.extendedIngredients.split(".").length
                $s.information.extendedIngredients.forEach(ev=>{

                    let buffer_obj={}
                    buffer_obj.name=ev.name;
                    buffer_obj.id=ev.id;
                    buffer_obj.image=ev.image;
                    cheeseData.push(buffer_obj)
                })  
                
            }
    
            
      var table = new Tabulator(".ingrident_inner", {
    height:"311px",
    layout:"fitColumns",
    resizableColumns:false,
    data:cheeseData,
    columns:[
        {title:"Ingredients", field:"type", sorter:"string"},
    ],
    rowFormatter:function(row){
        var element = row.getElement(),
        data = row.getData(),
        width = element.offsetWidth,
        rowTable, cellContents;

        //clear current row data
        while(element.firstChild) element.removeChild(element.firstChild);

        //define a table layout structure and set width of row
        rowTable = document.createElement("table")
        rowTable.style.width = (width - 18) + "px";

        rowTabletr = document.createElement("tr");

        //add image on left of row
        cellContents = "<td><img src='/sample_data/row_formatter/" + data.image + "'></td>";

        //add row data on right hand side
        cellContents += "<td><div> " + data.name + "</div></td>"

        rowTabletr.innerHTML = cellContents;

        rowTable.appendChild(rowTabletr);

        //append newly formatted contents to the row
        element.append(rowTable);
    },
});
            setTimeout(ev=>{
                 $qs(".tabulator-table").style.overflowY="scroll";
                        prn("done")},10)   
            
}


function table_ceator_2()
{
    let buffer_arr=[]
    let ptr=0;
        if($s.information.hasOwnProperty("instructions")== true  )
            {
                ptr=$s.information.instructions.split(".").length
                $s.information.instructions.split(".").forEach(ev=>{

                    let buffer_obj={}
                    buffer_obj.name=ev;
                    buffer_obj.id=ptr--
                    buffer_arr.push(buffer_obj)
                })  
                
            }
            else
            {
                
            buffer_ar=[
                {id:0,name:'instruction naot availabel'},
                {id:1,name:'instruction naot availabel'},
                {id:2,name:'instruction naot availabel'},
                {id:3,name:'instruction naot availabel'}]
            }
        var table = new Tabulator(".steps_inner", {
                data:buffer_arr,           //load row data from array
                layout:"fitColumns",      //fit columns to width of table
                responsiveLayout:"hide",  //hide columns that dont fit on the table
                tooltips:true,            //show tool tips on cells
                addRowPos:"top",          //when adding a new row, add it to the top of the table
                history:true,             //allow undo and redo actions on the table
                pagination:"local",       //paginate the data
                paginationSize:7,         //allow 7 rows per page of data
                movableColumns:true,      //allow column order to be changed
                resizableRows:true,       //allow row order to be changed
                initialSort:[             //set the initial sort order of the data
                    {column:"name", dir:"desc"},
                ],
                columns:[                 //define the table columns
                    {title:"INstructions for preperation", field:"name", editor:"input"},
                ],
            });
         
        }


function id_setter(ev)
{
    prn(ev)
}

        function ptr_b()
        {
            fetch(`https://api.spoonacular.com/recipes/${$s.id}/information?apiKey=${list_of_aut_key[b_ptr++]}`)
            .then(ev=>{
                let tosend={}
                if(ev.status == 200)
                {
                    
                    tosend.value=ev.text()
                
                        // "value":
                
            
               
                }
                else if (ev.status == 401)
                {
                    ptr_b()
                     tosend.nikal=true
                }
                return tosend
                
            })
            .then(ev=>{
                
                if(ev.hasOwnProperty("nikal"))
                {
        
                }   
                else
                {
                    prn("hey_2")
                    ev.value.then(ev=>{$s.information=JSON.parse(ev)})
                    setTimeout(ev=>data_setter_2(),100)       
                    
                }
            })
        
        }

        function ptr_c()
        {
         
            fetch(`https://api.spoonacular.com/recipes/${$s.id}/information?apiKey=${list_of_aut_key[b_ptr++]}`)
            .then(ev=>{
                let tosend={}
                if(ev.status == 200)
                {
                    
                    tosend.value=ev.text()
                
                        // "value":
                
            
               
                }
                else if (ev.status == 401)
                {
                    ptr_b()
                     tosend.nikal=true
                }
                return tosend
                
            })
            .then(ev=>{
                
                if(ev.hasOwnProperty("nikal"))
                {
        
                }   
                else
                {
                    prn("hey")
                    ev.value.then(ev=>{$s.information=JSON.parse(ev)})
                    setTimeout(ev=>after_ptr_b(),100)
    
                }
            })
        
        }

function data_setter_2()
{
    // after_ptr_b()
    $qs('.search_modal').style.display="none"
    $qs('.section_b').style.display="grid"
    
    $qs(".image_recipee").innerHTML=`<img src="${$s.information.image}" style="width:100%; height:100%;">`
    $qs(".title_inner").innerText   =`${$s.information.title}`
    $qs(".summary_inner").innerHTML=$s.information.summary
    table_ceator()
    table_ceator_2()
}

window.onresize=ev=>{
    search_modal_width_height_setter()
}
