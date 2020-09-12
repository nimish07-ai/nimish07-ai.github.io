//js_code
{/* <div class="brand-card"><img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFW_PZ0OxoDdnJ84FB2CTatbVq6UlPslduSA&usqp=CAU"
alt=""></div> */}
//      
$j=[]




js_CODE={
    cmp_slider_js:()=>{
        setTimeout(ev=>{
            console.log("hey")
            
          
            $('.brand-slider').slick({
                dots: false,
                autoplaySpeed: 1000,
                infinite: true,
                speed: 400,
                autoplay: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            mobileFirst: true,

                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: false
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        
    
    },1000)
        
    },

    about_us:()=>{
        // seven.createElement("script","","body",'.bdy2',true,{
        //     src:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
        // integrity:"sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==",
        // crossorigin:"anonymous",
        //         })
       
        Logger.push(`init: about-us.js -------------------------------------------`)
        
        
        
//         window.after_fetch_cmp=(data)=>{
//             window.HTML_code_about_us='';
//             setTimeout(ev=>{
//                 Logger.push(`init: after_fetch_cmp`)
//                 // console.log('nimish')
                
//                 data.forEach(ev=>{
//                     if(ev.sr_no<100 && ev.sr_no!==100)
//                     {
//                     window.HTML_code_about_us+=`<div class="brand-card"><img src="${ev.img_url}" alt="">
//                     </div>` 
//                     }
//                     // console.log(ev.img_url)
//                 })

//                 // class="brand-slider"
//                 seven.createElement("div",window.HTML_code_about_us,"body",'.bdy4',false,{class:"brand-slider"})
                
            


//             Logger.push(`calling: after_fetch_cmp =>js_CODE`)
//             // setTimeout(js_CODE.cmp_slider_js(),1000)
            

//             //     Logger.push(`success: after_fetch_cmp`)

//             },100)
//             // console.log("nimish",data)

//             }
//         Logger. push(`calling: about_us.js=> seven.fetch_json_xml`)




//////////////////////////
        window.after_fetch_about_casrol=(data)=>{
            Logger.push(`init: after_fetch_about_casrol.js -------------------------------------------`)
            window.HTML_code_about_us_casrol='';
            
            setTimeout(ev=>{
                Logger.push(`init: after_fetch_cmp`)
                // console.log('nimish')
                
                data.forEach(ev=>{
                    if(ev.sr_no>100 && ev.sr_no!==100)
                            {
                                // console.log(ev.sr_no,ev.img_url)
                            window.HTML_code_about_us_casrol+=`<div class="slick-slider-inner"> <img
                            src="${ev.img_url}"
                            alt="">`
                                // console.log(Window.HTML_code_about_us_casrol)
                            }
                    
                // console.log(ev.img_url)
                })

                // class="brand-slider"
                seven.createElement("div",window.HTML_code_about_us_casrol,"body",'.bdy',false,{class:"slick-slider"})
                
           


            // Logger.push(`calling: after_fetch_cmp =>js_CODE`)
            // setTimeout(js_CODE.cmp_slider_js(),1000)
            

                Logger.push(`success: after_fetch_casrof.js`)
                status_check.check_two=true;
            },100)
           
}

// ///////

//     Logger. push(`calling: about_us.js=> seven.fetch_json_xml 1`)


//     // seven.fetch_json_xml(SETUP.company,after_fetch_cmp)
    Logger. push(`calling: about_us.js=> seven.fetch_json_xml 2`)
    seven.fetch_json_xml(SETUP.company,after_fetch_about_casrol)
//     Logger.push(`success: about-us.js`)

    },










    header_footter:()=>{
        Logger.push(`init: HOME_footer.js`)
        const burger = document.querySelector('.burger');
        const menu = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-link');
        const line1 = document.querySelector('.line1');
        const line2 = document.querySelector('.line3');


        burger.addEventListener('click', () => {
            menu.classList.toggle('open');
            burger.classList.toggle('burger-rotate');
            line1.classList.toggle('line-rotate');
            line2.classList.toggle('line-rotate');
            links.forEach(link => {
                link.classList.toggle('fade');
            })
        });
        setTimeout(()=>{status_check.page=true;},1000)
        Logger.push(`success: HOME_footer.js`)
    },



    home:()=>{
         
        
        $j.push(`init: HOME.JS ` )
        $j.push( ` data=>\n`)    

            modal_container=document.querySelector('.modal-container')
            window.modal_magic=function (flag)//true appear false disappear
            {
                
                if(flag)
                {
                    modal_container.style.display="block";
                }
                else
                {
                    modal_container.style.display="none";
                }
            }

            modal_magic(false)


            
            go_to="contact-us"
            len=document.location.href.length
            con=document.location.href.substring(len-5,len)
            if(con !==".html")
            {
                con='';
            }

            but=document.querySelector(".catogree-name-quire-to-contactus")
            but2=document.querySelector(".modal-contact-link")
            
            
            
            lin=but.href.lastIndexOf('/')
            but.href=but.href.substring(0,lin)+`/contact-us${con} `
            but2.href=but.href.substring(0,lin)+`/contact-us${con} `
            
            
            cls_modal=document.querySelector(".close-modal")
            cls_modal.addEventListener('click',ev=>{
                modal_magic(false)
            })

            
            opt=["checkout","buying"]
            opt.forEach(ele=>{
                elem=document.querySelector(`#${ele}`)
                elem.addEventListener('click',ev=>{
                    // link=but.href.split('=')[0]
                    but.href=but.href.split('=')[0]+`=${ev.target.value}`;
                    // console.log(but.href.split('=')[0]+`${ev.target.value}`)


                })
            })
            


            window.catogree=async function()
            {
                setTimeout(()=>{
                  
                    but.href=but.href.split('#')[0]+`#${document.location.href.split('#')[1]}=`;
                            }
                            ,100)
                            modal_magic(true)
        
            }

            const limit=0;
            window.Home=function()
            {
              
                $j.push( `init:Home`)
                $j.push( ` data=>\n`)
                
    
                catogree_API=document.querySelectorAll("#catogree_API");
                if(catogree_API ==null || catogree_API.length==0 )
                {
                    $j.push( `  restart null detected - ${limit}`)
                    if(limit!=5)
                    {
                    Home()
                    limit+=1;
                    }
                 }
                else
                {


                $j.push( `  forEach -`)
                
                catogree_API.forEach(ev=>{
                    $j.push( `  -${ev}`)
                
                    
                    ev.addEventListener('click',catogree)
                    
                })
    
                $j.push( `success:Home`)
                }        
            }
        //////////////////////seven
                
                function seven_function()
    
                {
                    $j.push( `init:seven_function`)
        
                    categorycard_list_data=[];
                                    fetch(SETUP.catogree)
                                    .then(response => response.json())
                                    .then(data => {
                                    // console.log(data);

                                    categorycard_list_data=data;
                                    $j.push( `calling:  seven_function => after_fetch`)
                                    after_fetch();
                                    $j.push( `done:  seven_function => after_fetch`)
                                    })
                                    .catch(error => {
                                    console.error(error);
                                    });

                    $j.push( `successt:seven_function`)
                }
                seven_function()




            const categorycard = document.querySelector('.category-section-column');
            function after_fetch()
            {
                setTimeout(ev=>{

                    
                    condition=true;
                    Html_catogree='<div class="category-heading">Categories</div>';
                    style_sheet='';
                    style_sheet2=`@media screen and (max-width: 768px) {
                        .category-section .category-heading {
                        font-size: 30px;
                        }
                        .category-section .category-section-row {
                        height: 120px !important;
                        margin: 40px auto !important;
                        }
                        .category-section .category-section-row .category-heading {
                        font-size: 20px;
                        }`
                    counter=0;
                    c_t=categorycard_list_data.length
                   


                    categorycard_list_data.forEach(ev=>{
                        counter+=1
                        if(condition)
                        {let te;
                            if(counter==c_t-1)
                            {
                                 te=`seven`
                                 
                            }      
                            else
                            {
                                 te=``
                            }
                            Html_catogree+=`
                            <div class="category-section-row ${te}" >
                            <div class="category-section-column left ${ev.categorycard_list_class} ">
                                <a href="#${ev.categorycard_list_class}"   id="catogree_API"><img src=" ${SETUP.BASE_URL}${ev.categorycard_lis_link}" alt=""></a>
                                </div>
                            
                            `
                            condition=false
                        }
                        else
                        {   Html_catogree+=
                            `
                            <div class="category-section-column right  ${ev.categorycard_list_class}" >
                                        <a href="#${ev.categorycard_list_class}"   id="catogree_API"><img src="${SETUP.BASE_URL}${ev.categorycard_lis_link}" alt=""></a>

                                    </div>
                            </div>
                            `
                            condition=true  
                        }
                        style_sheet+= `  
                        
                        .category-section .${ev.categorycard_list_class} {
                        
                            position: relative;
                        }
                    
                    
                        .category-section .${ev.categorycard_list_class}::after {
                            content: 'MOBILES';
                            width: 100%;
                            bottom: -15%;
                            left: 0%;
                            position: absolute;
                            font-family: "DM Sans", sans-serif;
                            font-weight: 400;
                            color: #273642;
                            letter-spacing: 3px;
                            font-size: 22px;
                        }


                        .category-section .${ev.categorycard_list_class}::after {
                            content: '${ev.categorycard_list}';
                        }


                    
                            `

                    style_sheet2+=`
                    .category-section .category-section-row .${ev.categorycard_list_class}::after {
                        font-size: 12px;
                        letter-spacing: 2px;
                        bottom: -20%;
                    }
                    `
                    // ev.categorycard_list
                    })

                style_sheet2+='}'
                style_sheet=style_sheet+style_sheet2
                let a=document.createElement("style")
                a.innerHTML=style_sheet;

                document.head.appendChild(a);


                a=document.createElement("section")
                a.innerHTML=Html_catogree;
                a.setAttribute("class","category-section")
                a.setAttribute("onload","Home()")
                rep=document.querySelector(".bdy2")
                

                document.body.replaceChild(a,rep)
    
                   js_code_asyc()

                },100)
                $j.push(`success: HOME.js`)
}
        

        $j.push(`success: HOME.js`)
    },












    trial:``,
    contact_us:()=>{
        console.log("contact=us");
    },
    html_404:``,
}




async function js_code_asyc()
{
    if(seven.page=="home.html")
    {
        if(document.querySelector(".seven")!= null)
        {
            Home()
        }
        else
        {
            setTimeout(js_code_asyc(),10)
        }
    }


    

}


























status_check.js_code=true;