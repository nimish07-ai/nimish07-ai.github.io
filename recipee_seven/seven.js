import brain_v1 from "./brain.js";
import api_navigate from './base.js';
import event_list from './event.js';
import logger from './logger.js';

window.prn=console.log;
window.$qs=(ms)=>document.querySelector(ms)
window.$qsA=(ms)=>document.querySelectorAll(ms)
class Seven extends brain_v1
{
    constructor()
    {
        super();
    // console.log(this)
    }
    
}

window.$7=()=>__init__.Seven;
window.$=()=>__init__.ASV();
window.$f=()=>__init__.AS().func;

window.$L=(msg)=>__init__.log.baby_step_adder(msg);
window.$lj=(msg)=>__init__.log.log_pbj;

window.$el=(msg)=>{
    __init__.log.entry();
    return __init__.log.baby_step_adder(msg);}
window.$xl=(msg)=>{
    __init__.log.baby_step_adder(msg);
    return __init__.log.exit();}
window.$s=()=>__init__.search_obj;
// window.eve=()=>__init__.EL
window.$c=()=>__init__.cache;
window.$EE=()=>__init__.EL;
window.id_setter=()=>__init__.EL.id_setter()

window.__init__={

    debug:false,
 
    //creation of obj instance for all class
    Seven:new Seven(),
    EL:new event_list(),
    log:new logger(),
    evt : new CustomEvent("MyEventType", {detail: "Any Object Here"}),
    
    // AS:()=>null, //Active_storag
    AS:()=>__init__.storage[__init__.Seven.page_name], //Active_storag
     //Active_storag
    ASV:()=>{
           return __init__.AS().variable
            },//Active_storag_variable
   
    
    sheet_data:["https://sheet.best/api/sheets/836957b8-6c21-4fd4-9a86-09ecede30ef1"],
    sheet_auth:["https://sheet.best/api/sheets/8b1831ea-c970-48fb-99a1-6360e99437af"],
    
     storage:{
        // ["func name","event","var name"]
        '/seven_smart_structure_design/main':{
            func:[
                "mode_setter",
                ["search_box","keydown","search_box_inner"],
                ["navigator_fetch_active_desider","MyEventType","document"],
                ["cross","click","cross"],
                "mouse_cross",
                ["back_to_home","click","div_back_to_trend"],
                "trending_setyp_fake"
           
            ] // function which are associated to the given page  
             ,
            onsetup:[
                
            ],
            variable:{
                // name_variable:getter function
                list_of_aut_key:[
                    "83dec76d670e4cdea383e52e674f4822",
                    "b0aba37db80d4abf8432df402c84c6be"
                                ],
                mode:null,
                api:new api_navigate(),
                search_box_inner:$qs(".search_box_inner"),
                search_modal:$qs(".search_modal"),
                document:document,
                search_for:$qs(".searched_for"),
                trending:$qs('.trending'),
                search_result_para:$qs(".search_result_para"),
                div_back_to_trend:$qs(".div_back_to_trend"),
                inner_trending:$qsA(".dish_trend"),
                c:$qs(".c "),
                recipee_modal:$qs(".recipee_modal_up"),
                cross:$qs(".cross"),
                cross_path:$qs(".crosss_path"),
                search_path:$qs(".search_path"),
                enter_check:false,
                share_svg:$qs('.share_svg'),
                share:$qs('.share'),
                home:$qs('.home'),
                rm:$qs(".rm"),
                o:{
                    "search":null,
                    "similar":null,
                    "autocomplete":"search_modal",
                    "nutritionWidget":null,
                    "ingredientWidget":null,
                    "summary":null,
                    "cuisine":null,
                    "random":"trending_setup",
                    "informationBulk":"informationBulk",
                    "information":"data_information",
                
            }
               }
        },
        
    },
    // reuse:{},

    search_obj:{
        buffer:"",
        random:[
           
              {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 10,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 6,
                "spoonacularScore": 73,
                "healthScore": 18,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 123.98,
                "extendedIngredients": [
                  {
                    "id": 9042,
                    "aisle": "Produce",
                    "image": "blackberries.jpg",
                    "consistency": "solid",
                    "name": "blackberries",
                    "original": "1/2 cup frozen blackberries",
                    "originalString": "1/2 cup frozen blackberries",
                    "originalName": "frozen blackberries",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                      "frozen"
                    ],
                    "metaInformation": [
                      "frozen"
                    ],
                    "measures": {
                      "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                      },
                      "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                      }
                    }
                  },
                  {
                    "id": 9050,
                    "aisle": "Produce",
                    "image": "blueberries.jpg",
                    "consistency": "solid",
                    "name": "blueberries",
                    "original": "1/2 cup frozen blueberries",
                    "originalString": "1/2 cup frozen blueberries",
                    "originalName": "frozen blueberries",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                      "frozen"
                    ],
                    "metaInformation": [
                      "frozen"
                    ],
                    "measures": {
                      "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                      },
                      "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                      }
                    }
                  },
                  {
                    "id": 14292,
                    "aisle": "Frozen",
                    "image": "lemonade.jpg",
                    "consistency": "solid",
                    "name": "lemonade concentrate",
                    "original": "2 tablespoons lemonade concentrate",
                    "originalString": "2 tablespoons lemonade concentrate",
                    "originalName": "lemonade concentrate",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                      "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                      },
                      "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                      }
                    }
                  },
                  {
                    "id": 9302,
                    "aisle": "Produce",
                    "image": "raspberries.jpg",
                    "consistency": "solid",
                    "name": "raspberries",
                    "original": "1/2 cup frozen unsweetened raspberries",
                    "originalString": "1/2 cup frozen unsweetened raspberries",
                    "originalName": "frozen unsweetened raspberries",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                      "unsweetened",
                      "frozen"
                    ],
                    "metaInformation": [
                      "unsweetened",
                      "frozen"
                    ],
                    "measures": {
                      "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                      },
                      "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                      }
                    }
                  },
                  {
                    "id": 9316,
                    "aisle": "Produce",
                    "image": "strawberries.png",
                    "consistency": "solid",
                    "name": "strawberries",
                    "original": "1/2 cup frozen unsweetened strawberries",
                    "originalString": "1/2 cup frozen unsweetened strawberries",
                    "originalName": "frozen unsweetened strawberries",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                      "unsweetened",
                      "frozen"
                    ],
                    "metaInformation": [
                      "unsweetened",
                      "frozen"
                    ],
                    "measures": {
                      "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                      },
                      "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                      }
                    }
                  },
                  {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "solid",
                    "name": "sugar",
                    "original": "1 tablespoon sugar",
                    "originalString": "1 tablespoon sugar",
                    "originalName": "sugar",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                      "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                      },
                      "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                      }
                    }
                  },
                  {
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "liquid",
                    "name": "vanilla extract",
                    "original": "1/2 teaspoon vanilla extract",
                    "originalString": "1/2 teaspoon vanilla extract",
                    "originalName": "vanilla extract",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                      "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                      },
                      "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                      }
                    }
                  },
                  {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "liquid",
                    "name": "whole milk",
                    "original": "5 1/2 cups whole milk (do not use skim)",
                    "originalString": "5 1/2 cups whole milk (do not use skim)",
                    "originalName": "whole milk (do not use skim)",
                    "amount": 5.5,
                    "unit": "cups",
                    "meta": [
                      "whole",
                      "(do not use skim)"
                    ],
                    "metaInformation": [
                      "whole",
                      "(do not use skim)"
                    ],
                    "measures": {
                      "us": {
                        "amount": 5.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                      },
                      "metric": {
                        "amount": 1.301,
                        "unitShort": "l",
                        "unitLong": "liters"
                      }
                    }
                  }
                ],
                "id": 643241,
                "title": "Four-Berry Blast Fruit Smoothie",
                "readyInMinutes": 10,
                "servings": 4,
                "sourceUrl": "http://www.foodista.com/recipe/445N2G3Y/four-berry-blast-fruit-smoothie",
                "image": "https://spoonacular.com/recipeImages/643241-556x370.jpg",
                "imageType": "jpg",
                "summary": "Four-Berry Blast Fruit Smoothie might be just the morn meal you are searching for. This gluten free and vegetarian recipe serves 4 and costs <b>$1.24 per serving</b>. One serving contains <b>264 calories</b>, <b>11g of protein</b>, and <b>11g of fat</b>. Only a few people made this recipe, and 5 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>10 minutes</b>. Head to the store and pick up milk, raspberries, lemonade concentrate, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 74%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-482626\">Ginger Berry Fruit Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-fruit-smoothie-265532\">Berry-Banana Fruit Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-blast-smoothies-397587\">Berry Blast Smoothies</a>.",
                "cuisines": [],
                "dishTypes": [
                  "side dish"
                ],
                "diets": [
                  "gluten free",
                  "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "<ol><li>Place first five items into a blender and pulse a few times. Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.</li></ol>",
                "analyzedInstructions": [
                  {
                    "name": "",
                    "steps": [
                      {
                        "number": 1,
                        "step": "Place first five items into a blender and pulse a few times.",
                        "ingredients": [],
                        "equipment": [
                          {
                            "id": 404726,
                            "name": "blender",
                            "localizedName": "blender",
                            "image": "blender.png"
                          }
                        ]
                      },
                      {
                        "number": 2,
                        "step": "Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.",
                        "ingredients": [
                          {
                            "id": 1009054,
                            "name": "berries",
                            "localizedName": "berries",
                            "image": "berries-mixed.jpg"
                          }
                        ],
                        "equipment": []
                      }
                    ]
                  }
                ],
                "originalId": null,
                "spoonacularSourceUrl": "https://spoonacular.com/four-berry-blast-fruit-smoothie-643241"
              },
            {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": false,
              "dairyFree": true,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "weightWatcherSmartPoints": 6,
              "gaps": "no",
              "lowFodmap": false,
              "aggregateLikes": 57,
              "spoonacularScore": 18,
              "healthScore": 1,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 39.71,
              "extendedIngredients": [
                {
                  "id": 19335,
                  "aisle": "Baking",
                  "image": "sugar-in-bowl.png",
                  "consistency": "solid",
                  "name": "granulated sugar",
                  "original": "2 cups granulated sugar",
                  "originalString": "2 cups granulated sugar",
                  "originalName": "granulated sugar",
                  "amount": 2,
                  "unit": "cups",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 2,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 473.176,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 20081,
                  "aisle": "Baking",
                  "image": "flour.png",
                  "consistency": "solid",
                  "name": "flour",
                  "original": "1 ¾ cups flour",
                  "originalString": "1 ¾ cups flour",
                  "originalName": "flour",
                  "amount": 1.75,
                  "unit": "cups",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1.75,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 414.029,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 1123,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "egg.png",
                  "consistency": "solid",
                  "name": "eggs",
                  "original": "5 eggs",
                  "originalString": "5 eggs",
                  "originalName": "eggs",
                  "amount": 5,
                  "unit": "",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 5,
                      "unitShort": "",
                      "unitLong": ""
                    },
                    "metric": {
                      "amount": 5,
                      "unitShort": "",
                      "unitLong": ""
                    }
                  }
                },
                {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "solid",
                  "name": "salt",
                  "original": "1 teaspoon salt",
                  "originalString": "1 teaspoon salt",
                  "originalName": "salt",
                  "amount": 1,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    }
                  }
                },
                {
                  "id": 4513,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "vegetable-oil.jpg",
                  "consistency": "liquid",
                  "name": "vegetable oil",
                  "original": "1 cup vegetable oil",
                  "originalString": "1 cup vegetable oil",
                  "originalName": "vegetable oil",
                  "amount": 1,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "cup",
                      "unitLong": "cup"
                    },
                    "metric": {
                      "amount": 236.588,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 2050,
                  "aisle": "Baking",
                  "image": "vanilla-extract.jpg",
                  "consistency": "liquid",
                  "name": "vanilla",
                  "original": "1 teaspoon vanilla",
                  "originalString": "1 teaspoon vanilla",
                  "originalName": "vanilla",
                  "amount": 1,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    }
                  }
                },
                {
                  "id": 19165,
                  "aisle": "Baking",
                  "image": "cocoa-powder.png",
                  "consistency": "solid",
                  "name": "cocoa powder",
                  "original": "½ cup cocoa powder",
                  "originalString": "½ cup cocoa powder",
                  "originalName": "cocoa powder",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.5,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 118.294,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 10019903,
                  "aisle": "Baking",
                  "image": "chocolate-chips.jpg",
                  "consistency": "solid",
                  "name": "semi sweet chocolate chips",
                  "original": "½ cup semi sweet chocolate chips (1 cup if you don't want to stuff the brownie bites)",
                  "originalString": "½ cup semi sweet chocolate chips (1 cup if you don't want to stuff the brownie bites)",
                  "originalName": "semi sweet chocolate chips (1 cup if you don't want to stuff the brownie bites)",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                    "sweet",
                    "(1 cup if you don't want to stuff the brownie bites)"
                  ],
                  "metaInformation": [
                    "sweet",
                    "(1 cup if you don't want to stuff the brownie bites)"
                  ],
                  "measures": {
                    "us": {
                      "amount": 0.5,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 118.294,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 19150,
                  "aisle": "Sweet Snacks",
                  "image": "peanut-butter-cup.jpg",
                  "consistency": "solid",
                  "name": "peanut butter cups",
                  "original": "About 60 mini Reese's peanut butter cups",
                  "originalString": "About 60 mini Reese's peanut butter cups",
                  "originalName": "About mini Reese's peanut butter cups",
                  "amount": 60,
                  "unit": "",
                  "meta": [
                    "mini"
                  ],
                  "metaInformation": [
                    "mini"
                  ],
                  "measures": {
                    "us": {
                      "amount": 60,
                      "unitShort": "",
                      "unitLong": ""
                    },
                    "metric": {
                      "amount": 60,
                      "unitShort": "",
                      "unitLong": ""
                    }
                  }
                }
              ],
              "id": 655043,
              "title": "PB Cup Stuffed Brownie Bites",
              "readyInMinutes": 45,
              "servings": 60,
              "sourceUrl": "https://www.foodista.com/recipe/FBGYKLGX/pb-cup-stuffed-brownie-bites",
              "image": "https://spoonacular.com/recipeImages/655043-556x370.jpg",
              "imageType": "jpg",
              "summary": "The recipe PB Cup Stuffed Brownie Bites can be made <b>in about roughly 45 minutes</b>. This recipe serves 60 and costs 40 cents per serving. Watching your figure? This dairy free recipe has <b>146 calories</b>, <b>3g of protein</b>, and <b>7g of fat</b> per serving. It works well as a dessert. 57 people were impressed by this recipe. It is brought to you by Foodista. If you have granulated sugar, salt, eggs, and a few other ingredients on hand, you can make it. It is an <b>inexpensive</b> recipe for fans of American food. All things considered, we decided this recipe <b>deserves a spoonacular score of 15%</b>. This score is rather bad. Similar recipes include <a href=\"https://spoonacular.com/recipes/peanut-butter-cup-smores-brownie-bites-620145\">Peanut Butter Cup S’mores Brownie Bites</a>, <a href=\"https://spoonacular.com/recipes/mini-peanut-butter-cup-brownie-bites-video-711595\">Mini Peanut Butter Cup Brownie Bites (Video)</a>, and <a href=\"https://spoonacular.com/recipes/nutella-stuffed-brownie-bites-836783\">Nutella Stuffed Brownie Bites</a>.",
              "cuisines": [
                "American"
              ],
              "dishTypes": [
                "dessert"
              ],
              "diets": [
                "dairy free"
              ],
              "occasions": [],
              "instructions": "Whisk together sugar, flour, eggs, salt, oil, vanilla, and cocoa powder until well combined. Stir in the semi sweet chocolate chips. Make sure to not over mix!\nPrepare a mini muffin pan with cooking spray and preheat your oven to 350 degrees F.\nScoop batter into the pan.\nFill the slots up about  -  of the way up, so there's a little room for the peanut butter cup stuffed brownie bites to rise.\nCook for 8 - 10 minutes, or until an inserted toothpick comes out almost clean. It's ok if these are slightly underdone.\nOnce the brownies are done, gently push a peanut butter cup in the center of the brownie. Let these set in the pan for a couple of minutes.\nRemove from the pan and let them cool the rest of the way on a cooling rack!",
              "analyzedInstructions": [
                {
                  "name": "",
                  "steps": [
                    {
                      "number": 1,
                      "step": "Whisk together sugar, flour, eggs, salt, oil, vanilla, and cocoa powder until well combined. Stir in the semi sweet chocolate chips. Make sure to not over mix!",
                      "ingredients": [
                        {
                          "id": 10019903,
                          "name": "semisweet chocolate chips",
                          "localizedName": "semisweet chocolate chips",
                          "image": "chocolate-chips.jpg"
                        },
                        {
                          "id": 19165,
                          "name": "cocoa powder",
                          "localizedName": "cocoa powder",
                          "image": "cocoa-powder.png"
                        },
                        {
                          "id": 1052050,
                          "name": "vanilla",
                          "localizedName": "vanilla",
                          "image": "vanilla.jpg"
                        },
                        {
                          "id": 20081,
                          "name": "all purpose flour",
                          "localizedName": "all purpose flour",
                          "image": "flour.png"
                        },
                        {
                          "id": 19335,
                          "name": "sugar",
                          "localizedName": "sugar",
                          "image": "sugar-in-bowl.png"
                        },
                        {
                          "id": 1123,
                          "name": "egg",
                          "localizedName": "egg",
                          "image": "egg.png"
                        },
                        {
                          "id": 2047,
                          "name": "salt",
                          "localizedName": "salt",
                          "image": "salt.jpg"
                        },
                        {
                          "id": 4582,
                          "name": "cooking oil",
                          "localizedName": "cooking oil",
                          "image": "vegetable-oil.jpg"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404661,
                          "name": "whisk",
                          "localizedName": "whisk",
                          "image": "whisk.png"
                        }
                      ]
                    },
                    {
                      "number": 2,
                      "step": "Prepare a mini muffin pan with cooking spray and preheat your oven to 350 degrees F.",
                      "ingredients": [
                        {
                          "id": 4679,
                          "name": "cooking spray",
                          "localizedName": "cooking spray",
                          "image": "cooking-spray.png"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 405905,
                          "name": "mini muffin tray",
                          "localizedName": "mini muffin tray",
                          "image": "mini-muffin-tray.jpg"
                        },
                        {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "oven.jpg",
                          "temperature": {
                            "number": 350,
                            "unit": "Fahrenheit"
                          }
                        }
                      ]
                    },
                    {
                      "number": 3,
                      "step": "Scoop batter into the pan.",
                      "ingredients": [],
                      "equipment": [
                        {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "pan.png"
                        }
                      ]
                    },
                    {
                      "number": 4,
                      "step": "Fill the slots up about  -  of the way up, so there's a little room for the peanut butter cup stuffed brownie bites to rise.",
                      "ingredients": [
                        {
                          "id": 16098,
                          "name": "peanut butter",
                          "localizedName": "peanut butter",
                          "image": "peanut-butter.png"
                        }
                      ],
                      "equipment": []
                    },
                    {
                      "number": 5,
                      "step": "Cook for 8 - 10 minutes, or until an inserted toothpick comes out almost clean. It's ok if these are slightly underdone.",
                      "ingredients": [],
                      "equipment": [
                        {
                          "id": 404644,
                          "name": "toothpicks",
                          "localizedName": "toothpicks",
                          "image": "toothpicks.jpg"
                        }
                      ],
                      "length": {
                        "number": 10,
                        "unit": "minutes"
                      }
                    },
                    {
                      "number": 6,
                      "step": "Once the brownies are done, gently push a peanut butter cup in the center of the brownie.",
                      "ingredients": [
                        {
                          "id": 16098,
                          "name": "peanut butter",
                          "localizedName": "peanut butter",
                          "image": "peanut-butter.png"
                        }
                      ],
                      "equipment": []
                    },
                    {
                      "number": 7,
                      "step": "Let these set in the pan for a couple of minutes.",
                      "ingredients": [],
                      "equipment": [
                        {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "pan.png"
                        }
                      ]
                    },
                    {
                      "number": 8,
                      "step": "Remove from the pan and let them cool the rest of the way on a cooling rack!",
                      "ingredients": [],
                      "equipment": [
                        {
                          "id": 405900,
                          "name": "wire rack",
                          "localizedName": "wire rack",
                          "image": "wire-rack.jpg"
                        },
                        {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "pan.png"
                        }
                      ]
                    }
                  ]
                }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/pb-cup-stuffed-brownie-bites-655043"
            },
            {
              "vegetarian": true,
              "vegan": false,
              "glutenFree": false,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "weightWatcherSmartPoints": 8,
              "gaps": "no",
              "lowFodmap": false,
              "aggregateLikes": 130,
              "spoonacularScore": 14,
              "healthScore": 0,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 21.14,
              "extendedIngredients": [
                {
                  "id": 9003,
                  "aisle": "Produce",
                  "image": "apple.jpg",
                  "consistency": "solid",
                  "name": "apple",
                  "original": "2 cups chopped apple",
                  "originalString": "2 cups chopped apple",
                  "originalName": "chopped apple",
                  "amount": 2,
                  "unit": "cups",
                  "meta": [
                    "chopped"
                  ],
                  "metaInformation": [
                    "chopped"
                  ],
                  "measures": {
                    "us": {
                      "amount": 2,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 473.176,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 18372,
                  "aisle": "Baking",
                  "image": "white-powder.jpg",
                  "consistency": "solid",
                  "name": "baking soda",
                  "original": "1 teaspoon baking soda",
                  "originalString": "1 teaspoon baking soda",
                  "originalName": "baking soda",
                  "amount": 1,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    }
                  }
                },
                {
                  "id": 19334,
                  "aisle": "Baking",
                  "image": "light-brown-sugar.jpg",
                  "consistency": "solid",
                  "name": "brown sugar",
                  "original": "1 cup brown sugar",
                  "originalString": "1 cup brown sugar",
                  "originalName": "brown sugar",
                  "amount": 1,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "cup",
                      "unitLong": "cup"
                    },
                    "metric": {
                      "amount": 236.588,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 1001,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "butter-sliced.jpg",
                  "consistency": "solid",
                  "name": "butter",
                  "original": "1/2 cup butter",
                  "originalString": "1/2 cup butter",
                  "originalName": "butter",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.5,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 118.294,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 2010,
                  "aisle": "Spices and Seasonings",
                  "image": "cinnamon.jpg",
                  "consistency": "solid",
                  "name": "cinnamon",
                  "original": "1 teaspoon cinnamon",
                  "originalString": "1 teaspoon cinnamon",
                  "originalName": "cinnamon",
                  "amount": 1,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    }
                  }
                },
                {
                  "id": 1123,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "egg.png",
                  "consistency": "solid",
                  "name": "egg",
                  "original": "1 egg",
                  "originalString": "1 egg",
                  "originalName": "egg",
                  "amount": 1,
                  "unit": "",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "",
                      "unitLong": ""
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "",
                      "unitLong": ""
                    }
                  }
                },
                {
                  "id": 20081,
                  "aisle": "Baking",
                  "image": "flour.png",
                  "consistency": "solid",
                  "name": "flour",
                  "original": "2 cups flour",
                  "originalString": "2 cups flour",
                  "originalName": "flour",
                  "amount": 2,
                  "unit": "cups",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 2,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 473.176,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 2011,
                  "aisle": "Spices and Seasonings",
                  "image": "cloves.jpg",
                  "consistency": "solid",
                  "name": "ground cloves",
                  "original": "1/4 teaspoon ground cloves",
                  "originalString": "1/4 teaspoon ground cloves",
                  "originalName": "ground cloves",
                  "amount": 0.25,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.25,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                    },
                    "metric": {
                      "amount": 0.25,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                    }
                  }
                },
                {
                  "id": 11111111,
                  "aisle": "Baking",
                  "image": "vanilla-extract.jpg",
                  "consistency": "solid",
                  "name": "maple flavoring",
                  "original": "1/4 teaspoon maple flavoring",
                  "originalString": "1/4 teaspoon maple flavoring",
                  "originalName": "maple flavoring",
                  "amount": 0.25,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.25,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                    },
                    "metric": {
                      "amount": 0.25,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                    }
                  }
                },
                {
                  "id": 1077,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "milk.png",
                  "consistency": "liquid",
                  "name": "milk",
                  "original": "1/4 cup milk",
                  "originalString": "1/4 cup milk",
                  "originalName": "milk",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.25,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 59.147,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 2025,
                  "aisle": "Spices and Seasonings",
                  "image": "ground-nutmeg.jpg",
                  "consistency": "solid",
                  "name": "nutmeg",
                  "original": "1/4 teaspoon nutmeg",
                  "originalString": "1/4 teaspoon nutmeg",
                  "originalName": "nutmeg",
                  "amount": 0.25,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.25,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                    },
                    "metric": {
                      "amount": 0.25,
                      "unitShort": "tsps",
                      "unitLong": "teaspoons"
                    }
                  }
                },
                {
                  "id": 19336,
                  "aisle": "Baking",
                  "image": "powdered-sugar.jpg",
                  "consistency": "solid",
                  "name": "powdered sugar",
                  "original": "1 cup powdered sugar",
                  "originalString": "1 cup powdered sugar",
                  "originalName": "powdered sugar",
                  "amount": 1,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "cup",
                      "unitLong": "cup"
                    },
                    "metric": {
                      "amount": 236.588,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "solid",
                  "name": "salt",
                  "original": "1 teaspoon salt",
                  "originalString": "1 teaspoon salt",
                  "originalName": "salt",
                  "amount": 1,
                  "unit": "teaspoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "tsp",
                      "unitLong": "teaspoon"
                    }
                  }
                }
              ],
              "id": 650939,
              "title": "Maple-Glazed Apple Cookies",
              "readyInMinutes": 45,
              "servings": 18,
              "sourceUrl": "http://www.foodista.com/recipe/ZCJS73TL/maple-glazed-apple-cookies",
              "image": "https://spoonacular.com/recipeImages/650939-556x370.jpg",
              "imageType": "jpg",
              "summary": "Maple-Glazed Apple Cookies might be just the dessert you are searching for. For <b>21 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. One serving contains <b>181 calories</b>, <b>2g of protein</b>, and <b>6g of fat</b>. This recipe from Foodista has 130 fans. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>vegetarian</b> diet. A mixture of apple, nutmeg, brown sugar, and a handful of other ingredients are all it takes to make this recipe so scrumptious. All things considered, we decided this recipe <b>deserves a spoonacular score of 16%</b>. This score is not so tremendous. Try <a href=\"https://spoonacular.com/recipes/maple-glazed-apple-crisp-cookies-621623\">Maple-Glazed Apple Crisp Cookies</a>, <a href=\"https://spoonacular.com/recipes/maple-glazed-apple-pie-435364\">Maple-Glazed Apple Pie</a>, and <a href=\"https://spoonacular.com/recipes/glazed-maple-cookies-141990\">Glazed Maple Cookies</a> for similar recipes.",
              "cuisines": [],
              "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
              ],
              "diets": [
                "lacto ovo vegetarian"
              ],
              "occasions": [],
              "instructions": "<ol><li>Preheat oven to 400 degrees F.</li><li>Cream 1/2 cup butter and sugar together in a large mixing bowl until light in color, about 1-2 minutes. Add egg and 1/4 cup milk; stir to combine. Add remaining dry ingredients (except apple) and stir just until combined. Gently fold in the apples.  Drop by heaping tablespoons onto a greased baking sheet.</li><li>Bake at 400 for about 10-12 min or until tops don't look wet anymore.</li><li>To make the glaze, whisk together 1 tablespoon melted butter, 1 cup powdered sugar, 1/4 tsp maple flavoring, and 3 tablespoons milk in a small bowl. When the cookies have cooled for a few minutes, drizzle each cookie with glaze.</li></ol>",
              "analyzedInstructions": [
                {
                  "name": "",
                  "steps": [
                    {
                      "number": 1,
                      "step": "Preheat oven to 400 degrees F.Cream 1/2 cup butter and sugar together in a large mixing bowl until light in color, about 1-2 minutes.",
                      "ingredients": [
                        {
                          "id": 1001,
                          "name": "butter",
                          "localizedName": "butter",
                          "image": "butter-sliced.jpg"
                        },
                        {
                          "id": 1053,
                          "name": "cream",
                          "localizedName": "cream",
                          "image": "fluid-cream.jpg"
                        },
                        {
                          "id": 19335,
                          "name": "sugar",
                          "localizedName": "sugar",
                          "image": "sugar-in-bowl.png"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 405907,
                          "name": "mixing bowl",
                          "localizedName": "mixing bowl",
                          "image": "mixing-bowl.jpg"
                        },
                        {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "oven.jpg",
                          "temperature": {
                            "number": 400,
                            "unit": "Fahrenheit"
                          }
                        }
                      ],
                      "length": {
                        "number": 2,
                        "unit": "minutes"
                      }
                    },
                    {
                      "number": 2,
                      "step": "Add egg and 1/4 cup milk; stir to combine.",
                      "ingredients": [
                        {
                          "id": 1077,
                          "name": "milk",
                          "localizedName": "milk",
                          "image": "milk.png"
                        },
                        {
                          "id": 1123,
                          "name": "egg",
                          "localizedName": "egg",
                          "image": "egg.png"
                        }
                      ],
                      "equipment": []
                    },
                    {
                      "number": 3,
                      "step": "Add remaining dry ingredients (except apple) and stir just until combined. Gently fold in the apples.  Drop by heaping tablespoons onto a greased baking sheet.",
                      "ingredients": [
                        {
                          "id": 9003,
                          "name": "apple",
                          "localizedName": "apple",
                          "image": "apple.jpg"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404727,
                          "name": "baking sheet",
                          "localizedName": "baking sheet",
                          "image": "baking-sheet.jpg"
                        }
                      ]
                    },
                    {
                      "number": 4,
                      "step": "Bake at 400 for about 10-12 min or until tops don't look wet anymore.To make the glaze, whisk together 1 tablespoon melted butter, 1 cup powdered sugar, 1/4 tsp maple flavoring, and 3 tablespoons milk in a small bowl. When the cookies have cooled for a few minutes, drizzle each cookie with glaze.",
                      "ingredients": [
                        {
                          "id": 11111111,
                          "name": "maple flavoring",
                          "localizedName": "maple flavoring",
                          "image": "vanilla-extract.jpg"
                        },
                        {
                          "id": 19336,
                          "name": "powdered sugar",
                          "localizedName": "powdered sugar",
                          "image": "powdered-sugar.jpg"
                        },
                        {
                          "id": 10118192,
                          "name": "cookies",
                          "localizedName": "cookies",
                          "image": "shortbread-cookies.jpg"
                        },
                        {
                          "id": 1001,
                          "name": "butter",
                          "localizedName": "butter",
                          "image": "butter-sliced.jpg"
                        },
                        {
                          "id": 0,
                          "name": "glaze",
                          "localizedName": "glaze",
                          "image": ""
                        },
                        {
                          "id": 1077,
                          "name": "milk",
                          "localizedName": "milk",
                          "image": "milk.png"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "oven.jpg"
                        },
                        {
                          "id": 404661,
                          "name": "whisk",
                          "localizedName": "whisk",
                          "image": "whisk.png"
                        },
                        {
                          "id": 404783,
                          "name": "bowl",
                          "localizedName": "bowl",
                          "image": "bowl.jpg"
                        }
                      ],
                      "length": {
                        "number": 12,
                        "unit": "minutes"
                      }
                    }
                  ]
                }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/maple-glazed-apple-cookies-650939"
            },
            {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": true,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "weightWatcherSmartPoints": 22,
              "gaps": "no",
              "lowFodmap": false,
              "aggregateLikes": 26,
              "spoonacularScore": 94,
              "healthScore": 53,
              "creditsText": "Afrolems",
              "license": "CC BY 4.0",
              "sourceName": "Afrolems",
              "pricePerServing": 241.7,
              "extendedIngredients": [
                {
                  "id": 12118,
                  "aisle": "Canned and Jarred;Milk, Eggs, Other Dairy",
                  "image": "coconut-milk.png",
                  "consistency": "liquid",
                  "name": "coconut milk",
                  "original": "2 cups of coconut milk",
                  "originalString": "2 cups of coconut milk",
                  "originalName": "coconut milk",
                  "amount": 2,
                  "unit": "cups",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 2,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 473.176,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 20027,
                  "aisle": "Baking",
                  "image": "white-powder.jpg",
                  "consistency": "solid",
                  "name": "corn starch",
                  "original": "1 tablespoon of corn starch",
                  "originalString": "1 tablespoon of corn starch",
                  "originalName": "corn starch",
                  "amount": 1,
                  "unit": "tablespoon",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "Tbsp",
                      "unitLong": "Tbsp"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "Tbsp",
                      "unitLong": "Tbsp"
                    }
                  }
                },
                {
                  "id": 2015,
                  "aisle": "Spices and Seasonings",
                  "image": "curry-powder.jpg",
                  "consistency": "solid",
                  "name": "curry powder",
                  "original": "2 tablespoons of curry powder",
                  "originalString": "2 tablespoons of curry powder",
                  "originalName": "curry powder",
                  "amount": 2,
                  "unit": "tablespoons",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 2,
                      "unitShort": "Tbsps",
                      "unitLong": "Tbsps"
                    },
                    "metric": {
                      "amount": 2,
                      "unitShort": "Tbsps",
                      "unitLong": "Tbsps"
                    }
                  }
                },
                {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "solid",
                  "name": "garlic",
                  "original": "1 clove of garlic (chopped)",
                  "originalString": "1 clove of garlic (chopped)",
                  "originalName": "garlic (chopped)",
                  "amount": 1,
                  "unit": "clove",
                  "meta": [
                    "chopped",
                    "()"
                  ],
                  "metaInformation": [
                    "chopped",
                    "()"
                  ],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "clove",
                      "unitLong": "clove"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "clove",
                      "unitLong": "clove"
                    }
                  }
                },
                {
                  "id": 10014412,
                  "aisle": "Frozen",
                  "image": "ice-cubes.png",
                  "consistency": "solid",
                  "name": "ice cubes",
                  "original": "Seasoning cubes",
                  "originalString": "Seasoning cubes",
                  "originalName": "Seasoning",
                  "amount": 1,
                  "unit": "cubes",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "cubes",
                      "unitLong": "cube"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "cubes",
                      "unitLong": "cube"
                    }
                  }
                },
                {
                  "id": 15050,
                  "aisle": "Seafood",
                  "image": "mackerel-fresh.jpg",
                  "consistency": "solid",
                  "name": "mackerel",
                  "original": "1 medium piece of Mackerel (chopped in 4 pieces)",
                  "originalString": "1 medium piece of Mackerel (chopped in 4 pieces)",
                  "originalName": "Mackerel (chopped in 4 pieces)",
                  "amount": 1,
                  "unit": "medium piece",
                  "meta": [
                    "chopped",
                    "( in 4 pieces)"
                  ],
                  "metaInformation": [
                    "chopped",
                    "( in 4 pieces)"
                  ],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "medium piece",
                      "unitLong": "medium piece"
                    },
                    "metric": {
                      "amount": 1,
                      "unitShort": "medium piece",
                      "unitLong": "medium piece"
                    }
                  }
                },
                {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "solid",
                  "name": "onion",
                  "original": "1/2 bulb of onion",
                  "originalString": "1/2 bulb of onion",
                  "originalName": "bulb of onion",
                  "amount": 0.5,
                  "unit": "",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 0.5,
                      "unitShort": "",
                      "unitLong": ""
                    },
                    "metric": {
                      "amount": 0.5,
                      "unitShort": "",
                      "unitLong": ""
                    }
                  }
                },
                {
                  "id": 16033,
                  "aisle": "Pasta and Rice;Canned and Jarred",
                  "image": "kidney-beans.jpg",
                  "consistency": "solid",
                  "name": "red kidney beans",
                  "original": "1/2 cup of red kidney beans",
                  "originalString": "1/2 cup of red kidney beans",
                  "originalName": "red kidney beans",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                    "red"
                  ],
                  "metaInformation": [
                    "red"
                  ],
                  "measures": {
                    "us": {
                      "amount": 0.5,
                      "unitShort": "cups",
                      "unitLong": "cups"
                    },
                    "metric": {
                      "amount": 118.294,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 20444,
                  "aisle": "Pasta and Rice",
                  "image": "uncooked-white-rice.png",
                  "consistency": "solid",
                  "name": "rice",
                  "original": "1 cup of Rice",
                  "originalString": "1 cup of Rice",
                  "originalName": "Rice",
                  "amount": 1,
                  "unit": "cup",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 1,
                      "unitShort": "cup",
                      "unitLong": "cup"
                    },
                    "metric": {
                      "amount": 236.588,
                      "unitShort": "ml",
                      "unitLong": "milliliters"
                    }
                  }
                },
                {
                  "id": 10011819,
                  "aisle": "Produce;Ethnic Foods",
                  "image": "habanero-pepper.jpg",
                  "consistency": "solid",
                  "name": "scotch bonnet chili peppers",
                  "original": "3 scotch bonnet peppers",
                  "originalString": "3 scotch bonnet peppers",
                  "originalName": "scotch bonnet peppers",
                  "amount": 3,
                  "unit": "",
                  "meta": [],
                  "metaInformation": [],
                  "measures": {
                    "us": {
                      "amount": 3,
                      "unitShort": "",
                      "unitLong": ""
                    },
                    "metric": {
                      "amount": 3,
                      "unitShort": "",
                      "unitLong": ""
                    }
                  }
                }
              ],
              "id": 716364,
              "title": "Rice and Peas with Coconut Curry Mackerel",
              "readyInMinutes": 45,
              "servings": 4,
              "sourceUrl": "http://www.afrolems.com/2014/10/31/rice-and-peas-with-coconut-curry-mackerel/",
              "image": "https://spoonacular.com/recipeImages/716364-556x370.jpg",
              "imageType": "jpg",
              "summary": "Rice and Peas with Coconut Curry Mackerel might be just the <b>Indian</b> recipe you are searching for. One serving contains <b>624 calories</b>, <b>31g of protein</b>, and <b>34g of fat</b>. This gluten free, dairy free, and pescatarian recipe serves 4 and costs <b>$2.42 per serving</b>. This recipe from Afrolems has 26 fans. It works well as a budget friendly main course. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. If you have seasoning cubes, mackerel, curry powder, and a few other ingredients on hand, you can make it. To use up the curry powder you could follow this main course with the <a href=\"https://spoonacular.com/recipes/curry-ice-cream-with-mango-and-pistachio-539368\">Curry Ice Cream with Mango and Pistachio</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/coconut-chicken-curry-with-snow-peas-and-rice-157311\">Coconut Chicken Curry with Snow Peas and Rice</a>, <a href=\"https://spoonacular.com/recipes/black-eyed-peas-curry-with-coconut-lobia-curry-600742\">Black Eyed Peas Curry (With Coconut) (Lobia Curry)</a>, and <a href=\"https://spoonacular.com/recipes/skillet-chicken-with-snap-peas-mushrooms-and-coconut-curry-202063\">Skillet Chicken with Snap Peas, Mushrooms, and Coconut Curry</a>.",
              "cuisines": [
                "Indian",
                "Asian"
              ],
              "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
              ],
              "diets": [
                "gluten free",
                "dairy free",
                "pescatarian"
              ],
              "occasions": [],
              "instructions": "Pour 1 cup of coconut milk in a pot with 1 seasoning cube and allow to boil for a minute.Pour in your rice and peas in the boiling coconut milk and pour 2 cups of water and leave to boil till the rice and peas are soft on low heat.In a separate pot, season and bring the mackerel to boil in the rest of the coconut milk, curry powder and some water.Toss in the chopped onion, scotch bonnet peppers and garlic and allow to simmer on medium heat.Once the fish is cooked, add the corn starch to thicken the sauce and allow to simmer for 4 minutes on low heat.Serve with the rice and peas",
              "analyzedInstructions": [
                {
                  "name": "",
                  "steps": [
                    {
                      "number": 1,
                      "step": "Pour 1 cup of coconut milk in a pot with 1 seasoning cube and allow to boil for a minute.",
                      "ingredients": [
                        {
                          "id": 0,
                          "name": "seasoning cube",
                          "localizedName": "seasoning cube",
                          "image": "stock-cube.jpg"
                        },
                        {
                          "id": 12118,
                          "name": "coconut milk",
                          "localizedName": "coconut milk",
                          "image": "coconut-milk.png"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404752,
                          "name": "pot",
                          "localizedName": "pot",
                          "image": "stock-pot.jpg"
                        }
                      ]
                    },
                    {
                      "number": 2,
                      "step": "Pour in your rice and peas in the boiling coconut milk and pour 2 cups of water and leave to boil till the rice and peas are soft on low heat.In a separate pot, season and bring the mackerel to boil in the rest of the coconut milk, curry powder and some water.Toss in the chopped onion, scotch bonnet peppers and garlic and allow to simmer on medium heat.Once the fish is cooked, add the corn starch to thicken the sauce and allow to simmer for 4 minutes on low heat.",
                      "ingredients": [
                        {
                          "id": 12118,
                          "name": "coconut milk",
                          "localizedName": "coconut milk",
                          "image": "coconut-milk.png"
                        },
                        {
                          "id": 2015,
                          "name": "curry powder",
                          "localizedName": "curry powder",
                          "image": "curry-powder.jpg"
                        },
                        {
                          "id": 20027,
                          "name": "corn starch",
                          "localizedName": "corn starch",
                          "image": "white-powder.jpg"
                        },
                        {
                          "id": 15050,
                          "name": "mackerel",
                          "localizedName": "mackerel",
                          "image": "mackerel-fresh.jpg"
                        },
                        {
                          "id": 10111333,
                          "name": "peppers",
                          "localizedName": "peppers",
                          "image": "green-pepper.jpg"
                        },
                        {
                          "id": 11215,
                          "name": "garlic",
                          "localizedName": "garlic",
                          "image": "garlic.png"
                        },
                        {
                          "id": 10014052,
                          "name": "scotch whiskey",
                          "localizedName": "scotch whiskey",
                          "image": "whiskey-bottle.jpg"
                        },
                        {
                          "id": 11282,
                          "name": "onion",
                          "localizedName": "onion",
                          "image": "brown-onion.png"
                        },
                        {
                          "id": 0,
                          "name": "sauce",
                          "localizedName": "sauce",
                          "image": ""
                        },
                        {
                          "id": 14412,
                          "name": "water",
                          "localizedName": "water",
                          "image": "water.png"
                        },
                        {
                          "id": 10115261,
                          "name": "fish",
                          "localizedName": "fish",
                          "image": "fish-fillet.jpg"
                        },
                        {
                          "id": 11304,
                          "name": "peas",
                          "localizedName": "peas",
                          "image": "peas.jpg"
                        },
                        {
                          "id": 20444,
                          "name": "rice",
                          "localizedName": "rice",
                          "image": "uncooked-white-rice.png"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404752,
                          "name": "pot",
                          "localizedName": "pot",
                          "image": "stock-pot.jpg"
                        }
                      ],
                      "length": {
                        "number": 4,
                        "unit": "minutes"
                      }
                    },
                    {
                      "number": 3,
                      "step": "Serve with the rice and peas",
                      "ingredients": [
                        {
                          "id": 11304,
                          "name": "peas",
                          "localizedName": "peas",
                          "image": "peas.jpg"
                        },
                        {
                          "id": 20444,
                          "name": "rice",
                          "localizedName": "rice",
                          "image": "uncooked-white-rice.png"
                        }
                      ],
                      "equipment": []
                    }
                  ]
                }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/rice-and-peas-with-coconut-curry-mackerel-716364"
            },
            
          ],
    
    },  
        
    cache:{}
}



//  vegeterian non-veg flexitarian
//  Indian   German
//  Chinese  Italian 
//  American  Mexican



let abc=
{
    first:null,
    second:null,
    third:null,
    fourth:null,
    previous:{
        id:{
            cuisine:null,
            ingridents:null,
            type:null
        }
    }
}
