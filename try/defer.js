//nanda.page

var_check='';

Logger=[]

// for logger
//   Logger.  push('init:' methodname )
//   Logger.  push('success:' methodname opperation)
//   Logger.  push('err:' method name)
//  Logger.  push('called:'  from => method)
//  Logger.  push(`data=>`)

SETUP={
    BASE_URL:`https://nimish07-ai.github.io//try/`,
    js_code:['html_CODE.js',
    'style_code.js',
    'js_code.js'
    ],
    contact_us:'contact-us.html',
    catogree:'https://sheet.best/api/sheets/25d389c9-8e50-4e7c-855a-6e04c0e6cb27',
    company:"https://sheet.best/api/sheets/051e0216-565f-46e4-b3de-12ef223cce7f"
}
page_path=[

    'contact-us.html',
    'about-us.html'
]

status_check={
    page:false,
    HTML_CODE:false,
    style_code:false,
    js_code:false,
    check:false,
    check_one:false,
    check_two:false,
    header_footer_js:false,
    page_js:false,

    
    
}
// console.log(status_check)

class seven_api
{
    page;
    hash_data=[];
    
        constructor()
        {   Logger.push(`init: CONSTRUCTOR` )
        
            
            this.page_finder_and_hash_replacer()

            this.JS_CODE_CALL()
        


            
            Logger.push(`success: CONSTRUCTOR`)
        }

        spcecail_function()
        {
            this.createElement("script","","head",'.bdy2',true,{src:'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'})
       this.createElement("script","","head",'.bdy2',true,{
            src:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
        integrity:"sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==",
        crossorigin:"anonymous",
                })

        }




        Template_creator()
        {
            Logger.push(`init: Template_creator `)
            Logger.  push(`data=>  removed bdy `)
            document.body.innerHTML='';


            this.createElement("style",style_CODE.header,"head")
            this.createElement("header",HTML_CODE.header)

             Logger.push(`  =>header done`)

            if(this.page =='home.html' ||this.page =='index.html' ||this.page =='')
            {
    
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy'})
                this.createElement("div",HTML_CODE.home,"body",'.bdy',false,{class:'bdy'})
                this.createElement("style",style_CODE.home,"head")
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy2'})
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy3'})
                Logger.push(`   =>index done`)
    
            }    
            else if(this.page ==page_path[0])
            {
    
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy'})
                this.createElement("div",HTML_CODE.contact_us,"body",'.bdy',false,{class:'bdy'})
                this.createElement("style",style_CODE.contact_us,"head")
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy2'})
                Logger.push(`   =>${page_path[0]} done`)
                
            }
            else if(this.page ==page_path[1])
            {
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy'})//carasol
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy2'})
                // // <hr class="about-hr">
                this.createElement("hr",'',"body",'bsd',true,{class:'about-hr'})
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy3'})
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy4'})

                // // <div class="about-tag-line">
                this.createElement("div",HTML_CODE.about_us,"body",'.bdy2',false,{class:'about-tag-line'})
                this.createElement("style",style_CODE.about_us,"head")


                this.createElement("div",`
                BRANDS WE DEAL WITH
                `,"body",'.bdy3',false,{class:'brand-head'})

                Logger.push(`   =>${page_path[0]} done`)
             
            }


            this.createElement("style",style_CODE.footter,"head")
            this.createElement("footer",HTML_CODE.footter)
            
            // js_CODE.header_footter()
            Logger.push(`   =>$footer done`)
            
            status_check.page=true;
            
            Logger.  push('success: Template creator')
        }
       
        




        page_finder_and_hash_replacer()
        {
            
            Logger.push(`init: page_finder_and_hash_replacer `)
            
            let len=window.location.href.split('/').length
            let page=window.location.href.split('/')[len-1]
            Logger.push(`data=>$page len ${page}`)
            
            
            if(page.indexOf('.')== -1)//"page"
    
            {
                // console.log('.!')
                Logger.push(`   => != .`)

                if(page.indexOf('#')== -1)//"page"
                    {
                        Logger.push(`   => != # `)
                        page+='.html'
                    }
                    else//page#data
                    {
                        Logger.push(`   => == #`)

                        let page2=page.split('#');
                        page=`${page2[0]}.html`

                        Logger.push(`   => page = ${page}`)
                        
                        if(page==SETUP.contact_us)
                        {
                            
                             Logger.push('called: page_finder_and_hash_replacer=>hashdata_appender ')
                        this.hashdata_appender(page2[1])
                        Logger.push('out: page_finder_and_hash_replacer=>hashdata_appender ')
                        }
                        else{
                            window.location.href=`${ window.location.href.split('#')[0]}`
                        }

                    }
            
            }
            else//"page.html"
            {  
                
                if(page.indexOf('#')!= -1)//page.html#data
                {
                    Logger.push('   => != #')

                    
                let page2=page.split('#');
                page=page2[0]
                Logger.push(`   => page=${page}`)


                if(page==SETUP.contact_us)
                        {   
                            Logger.push('called: page_finder_and_hash_replacer=>hashdata_appender ')
                            // console.log('.html !=-1 hash')
                        this.hashdata_appender(page2[1])
                        Logger.push('out: page_finder_and_hash_replacer=>hashdata_appender ')
                        
                        }
                        else{
                            window.location.href=`${ window.location.href.split('#')[0]}`
                        }
                }
                
                
            }
            this.page=page
            Logger.push(`   =>this.page={this.page}`)

            Logger.push(`success: page_finder_and_hash_replacer page=${page}`)
        }

        hashdata_appender(has)//data=option
        {
            Logger.push(`init: hashdata_appender with ${has}`)
            Logger.push(`data=>/n `)
            
            if(has.indexOf('=') == -1)//data
            {
                Logger.push(`   => !=  =`)
        
                Logger.push(`called:hashdata_appender => hash__data`)
                this.hash_data.push(has)
   
                Logger.push(`out:hashdata_appender => hash__data`)
   
            }
            else     //data=option
            {
                Logger.push(`   => ==  =`)

                let av=has.split('=')

                Logger.push(`   =>for each  `)
                av.forEach(element=>{

                Logger.push(`       - ${element} `)    
           
                    this.hash_data.push(element)    
   
                })
            

            }
            Logger.push(`success: hashdata_appender hash data= ${this.hash_data.length}`)
        }
 

        JS_CODE_CALL()
        {   
            Logger.push(`init: JS_CODE_CALL`)
            Logger.push(`data=>for each  `)
            
            SETUP.js_code.forEach(ev=>{
                Logger.push(`   -${ev}  `)
            
                this.sevenfetch(ev);
            })
            
            Logger.push(`success: JS_code_call`)

        }

        sevenfetch(path)
        {

            Logger.push(`init: sevenfetch ${path}` )
            Logger.push(`data=>\n `)

        fetch(`${SETUP.BASE_URL}${path}`)
        .then(
            ev=>{
                if(ev.ok)
                {
                    Logger.push(`   => ok`)


                    // console.log("done",ev)
                      Logger.  push(`success: sevenfetch ${path}`)

                      Logger.push(`    => return text `)

                      return ev.text()
                    
                }
                else
                {   
            

                    console.log("error")
                      Logger.  push(`err: sevenfetch  cant-load =${path}`)

                }
                }
        )
        .catch(ev=>{
            
            Logger.push(`err: sevenfetch  cant-convert =${path}`)

        })
        .then(
            ev=>{
            Logger.push(`   =>${ev[10]}`)
            Logger.push(`calling:   sevenfetch => createElement`)
                    
            this.createElement("script",ev,"head")

            Logger.push(`out:   sevenfetch => createElement`)
                
        })
        Logger.push(`success :   sevenfetch `)
        }
        
        createElement(Type="p",HTML="seven",on="body",With='bsd',append=true,onload={})
        {   
            Logger.push(`init: createElement  ${Type},${HTML.substring(0,10)},${onload},${on},${With},${append}` )
            
            let ele=document.createElement(Type);
            Logger.push(`data=> created ${ele}`)

            ele.innerHTML=HTML;
            Logger.push(`   => added inner`)



            Logger.push(`   => forEach`)
            Object.keys(onload).forEach(ev=>{
             
                Logger.push(`       -${ev}`)
                ele.setAttribute(`${ev}`,`${onload[ev]}`)
            
            })


            if (append)
            {
                Logger.push(`calling:   createElement => appendElement`)
                this.appendElement(on,ele)//!!!!!!!!!!!!!!!!
                Logger.push(`out:   createElement => appendElement`)
            
            }
            else
            {
                Logger.push(`calling:   createElement => replaceElement`)
                this.replaceElement(on,ele,With)
                Logger.push(`out:   createElement => replaceElement`)
            }
            
        }   




        appendElement(on,ele)
        {
            
            Logger.push(`init: appendElement   ${on} -> ${ele}` )
            Logger.push(`data=>\n`)

            let element=document.querySelector(on)
            if(element!=null)
            {
                Logger.push(`   => ${on} != null`)
                
                element.appendChild(ele)
                
                Logger.push(`success: appendElement ${on} ->${ele}`)
                
            }
            else
            {
                Logger.push(`   => ${on} == null`)
                
                Logger.push(`err: appendchild  ERROR =  ${on} ->${ele}   1==is null`)
            }


        }
       
        replaceElement(on,ele,With) 
        {
            
            Logger.push(`init: replaceElement  ${on},${ele},${With}` )
            
            let element=document.querySelector(on)
            let element2=document.querySelector(With)
            
            
            // console.log(element,element2)
            
            if(element==null &&  element2==null)
            {
                Logger.push(`err:replacechild  ERROR =element ${on} is null`)
                Logger.push(`err:replacechild  ERROR =element2 ${With} is null`)
            }
            else if(element==null)

            {
                Logger.push(`err:replacechild  ERROR =element ${on} is null`)
            }
            else if(element2==null)

            {
                Logger.push(`err:replacechild  ERROR =element2 ${With} is null`)
            }
            else if(element!=null &&  element2!=null)
            {
                element.replaceChild(ele,element2)

                Logger.push(`success :  replacechild ${on} -> ${With}`)
            }
        }


        fetch_json_xml(fet,funct)
        {
        let categorycard_list_data=[];
                        fetch(fet)
                        .then(response => response.json())
                        .then(data => {
                        // console.log(data);

                        categorycard_list_data=data;
                        funct(categorycard_list_data);
                        })
                        .catch(error => {
                        console.error(error);
                        });


        }
        

}


// Logger.push(`init:check` )

ce=false
async function check()
{
    setTimeout(ev=>{
        if(status_check.HTML_CODE==true && status_check.js_code==true && status_check.js_code==true)
        {
            if (ce)
            {
                if(document.querySelector("footer") == null)
                {
 
                    check()
                }
                else{
                    console.log('yup')
                    if(status_check.page==true)
                    {
     
                        check_tag_ava()                 
                    }
                }

            }
            else
            {
            status_check.check=true;
            Logger.push(`success:check` )
         
            seven.Template_creator()
            js_CODE.header_footter()
            
            ce=true;
            check()
                     
            }

        }
        else
        {
            check()
        }
    },100)
}


function check_tag_ava()
{   
    Logger.push(`init: check_tag_ava() `)

    if(seven.page == page_path[0])//contac-us
    {
    
             setInterval(ev=>{js_CODE.contact_us()},10) 
    }
    else
    if(seven.page == page_path[1])//contac-us
    {

        setTimeout(ev=>{js_CODE.about_us()},10)
    }
    else{
        
        setTimeout(ev=>{js_CODE.home()},10)
            
    }

status_check.page_js=true
Logger.push(`init: check_tag_ava() `)
}
check()

window.seven=new seven_api() 
