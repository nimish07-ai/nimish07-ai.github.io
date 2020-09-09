base_url='https://nimish07-ai.github.io/defer_code/';
//bdy is important
editable_bdy_class='bdy'

//  base_url='http://127.0.0.1:5500/code/';
hash_data=[];

first=false;
debug=false;

function hashdata_appender(has)//data=option
{
    if(has.indexOf('=') == -1)//data
        {
            hash_data.push(has)
        }
        else     //data=option
        {
            let av=has.split('=')
            av.forEach(element=>{
                hash_data.push(element)    
            })
        
        }
    

}

len=window.location.href.split('/').length
page=page=window.location.href.split('/')[len-1]
if(page.indexOf('.')== -1)//"page"
{
    if(page.indexOf('#')== -1)//"page"
        {
            page+='.html'
        }
        else//page#data
        {
            let page2=page.split('#');
            page=`${page2[0]}.html`
            hashdata_appender(page2[1])
            

        }
}
else//"page.html"
{
    if(page.indexOf('#')!= -1)//page.html#data
    {
        
    let page2=page.split('#');
    page=page2[0]
    hashdata_appender(page2[1])
    }
}


display_body='';
error=false;
end=false;
data=fetch(base_url+'data.json')
    .then(
        ev=>{
            if (ev.ok)
            {
                return ev.json();
            }
            else
            {
                console.log('cant load data');
            
            }
        }
    )
    .then(
        jsdata=>{
            // console.log(jsdata); 
            return jsdata;
        }
    )
    .catch(
        err=>{
            console.log(err)
        }
        )

function fet(file_add)
{
    sent_data=
    fetch(base_url+file_add)
    .then(
        ev=>{
            if (ev.ok)
            {
       
                // console.log(' data',ev.text());
                // document.write(' data',ev.text())
                return ev.text();
                // return ev.json();
            }
            else
            {
            console.log('cant load data');
            error=true;
            }
        }
    )
    .then(
        jsdata=>{
            // console.log(jsdata);
            display_body+=jsdata;
            // return jsdata;
            
        }
    )
    


}

//succesfull seven
// fet('textFile/test.txt')
// .then(ev=>{
//     console.log('data',typeof( ev),ev);
// })

class defer_code
{
    
    constructor(page)
    {
        display_body=' ';
        this.page=page;
    
        
        if(this.page ==='trial.html')
            {
                this.trial();
                debug=true;
                setTimeout(execute,300);
                 setTimeout(code_exe,1000);
            }
        else{
            debug=false;
        this.head();
       

        if(this.page ==='home.html'||this.page ==='')
            {
                this.home()
            }
        else  if(this.page ==='contact-us.html')
        {
            this.contact_us()
    
        }
        else  if(this.page ==='about-us.html')
        {
            this.about_us()
        }
        else
        {
            this.n404()

        }

        

        
        this.footer();
        setTimeout(execute,300);
        setTimeout(code_exe,1000);
        }
        
    }

    n404()
    {
        error=false;
        
        // console.log('head',display_body)
        
        fet('textFile/404_html.txt')
        
        if(error==true){console.log('error head')}
        
    }
    contact_us()
    {
        error=false;
        
        // console.log('head',display_body)
        
        fet('textFile/contact-us.txt')
        
        if(error==true){console.log('error head')}
        
    }
    about_us()
    {
        error=false;
        
        // console.log('head',display_body)
        
        fet('textFile/about-us_html.txt')
        
        if(error==true){console.log('error head')}
        
    }

    trial()
    {
        error=false;
        
        // console.log('head',display_body)
        
        fet('textFile/trial_html.txt')
        
        if(error==true){console.log('error head')}
        
        
    }

    head()
    {
        error=false;
        
        // console.log('head',display_body)
        
        fet('textFile/header_html.txt')
        
        if(error==true){console.log('error head')}
        
        
    }
    home()
    {
        error=false;
        
        // console.log('home',display_body)
        
        fet('textFile/home_html.txt')
        
        if(error==true){console.log('error head')}
        
    }
    footer()
    {
        error=false;
        
        // console.log('footer',display_body)
        
        fet('textFile/footer_html.txt')
        
        if(error==true){console.log('error head')}
        
        
    }
    

   
}

function execute()
{
    // console.log('execute',display_body);
    document.body.innerHTML=display_body;
}


async function code_exe()
{
    // console.log(page);
    await setTimeout(ev=>{
        if(debug==false)
        {deFault();}
        
        if(page ==='home.html'||page ==='')
            {
                home()
            }
            else  if(page ==='trial.html')
          {
                trial()
            }
        else  if(page ==='contact-us.html')
          {
            contact_us()
            }
        else  if(page ==='about-us.html')
            {
              about_us()
              }
  

    },1000)
}
function deFault()
{
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

        bdy=document.querySelector(`.${editable_bdy_class}`);
}


function home()
{
    bdy.innerHTML=`<div class='inner'>
    <a href="#nimish" class="catogree-name-catcher"><P>nimish</P></a>
        <a href="#nimish2" class="catogree-name-catcher"><P>nimish2</P></a>
        <p>modal form</p>
        <form>
                <input type="checkbox"  name="vehicle1" value="option1" class='option'>
                <label for="vehicle1"> option 1</label><br>
                
                <input type="checkbox"  name="vehicle2" value="option2" class='option'>
                <label for="vehicle2"> option 2</label><br>
        </form>
        <a href="http://127.0.0.1:5500/code/contact-us.html" class="catogree-name-quire-to-contactus"><buttton style="background-color: aqua;" >click on it to go to contact-us</buttton></a>

    
    </div>`
    

        a=document.querySelectorAll(".catogree-name-catcher");
        opt=document.querySelectorAll(".option");
        but=document.querySelector(".catogree-name-quire-to-contactus");
        b=["nimsih","nimish2"],

        
        a.forEach(ev=>{
            // console.log(ev,b[i]);
            
            ev.addEventListener('click',catogree)
            
        })


        opt.forEach(ev=>{
            // console.log(ev,b[i]);
            
            ev.addEventListener('click',ev=>{
                
                // console.log(ev.target.checked,ev.target.value)
                link=but.href.split('#')[1].split('=')[1]
                
                if(ev.target.checked)
                {
                    if(link ==undefined)
                        {
                            but.href=`${but.href}=${ev.target.value}`
                        }

                    else{
                        
                            let lis=link.split('&')
                            console.log(lis.length)
                            if(lis.length== 1)
                            {   
                                but.href=`${but.href}&${ev.target.value}`
                            }  
                            
                        }

                }
                else
                {
                    
                    if(link ==undefined)
                        {
                            but.href= but.href.split('#')[0]
                        }
                        else{
                
                            let lis=link.split('&');
                            console.log(lis);
                            let toBeaded=`${but.href.split('#')[0]}`;
                            console.log('toBeaded',toBeaded);
                            con=false;
                            if(lis.length> 0)
                            { toBeaded+='#';
                                console.log();
                                lis.forEach(e=>{
                                    if(e!=ev.target.value)
                                    {
                                        console.log(e,toBeaded);
                                        if(con==true)
                                        {
                                            toBeaded+='&'
                                        }
                                        else{
                                            con=true;
                                        }
                                        toBeaded+=e;

                                    }
                                })
                            }
                            console.log('toBeaded',toBeaded);
                            but.href=toBeaded; 
                        
                            
                }}
            })
    
})


async function catogree()
 {
     setTimeout(()=>{
        console.log(document.location.href.split('#')[1]);
        // catogree_name=document.location.href.split('#')[1];
        // but.href=but.href.split('#')[0]+`#${catogree_name}`;
        but.href=but.href.split('#')[0]+`#${document.location.href.split('#')[1]}`;
    }
     ,100)
    

 }
}//upar ka changes


// function contact_us()
// {
//         // console.log('contact-us')
//         form_data=document.location.href.split('#')[1]
//         if(form_data==undefined)
//         {
//             form_data='skip';
//         }
// }


function contact_us()
{
    // console.log('contact-us fuction')
    let HTML=""
    if(hash_data.length>0)
    {
        hash_data.forEach(element=>{
            HTML+=`<p>${element}</p><br>`
        })
    }
    else
    {
        HTML+=`<p>no-data</p><br>`
    }
    
    bdy.innerHTML=HTML;
}


function about_us()
{
    // console.log('about-us fuction')
    let HTML=""
    HTML+=`<p> about-us </p><br>`
    
    bdy.innerHTML=HTML;
}










function trial()
{
    page='nothing'



        pagenm=document.querySelector('.page-name')
        pagenm.addEventListener('click',ev=>{
        if(first==false)
        {   first=true;
                 console.log('true')
                 page=ev.target.value;
            console.log('page ===',page)
        }
        else
        {
            first=false;
            page=ev.target.value;
            console.log('page ===',page)
                   console.log('false');
     
        }
        
        })
        submit=document.querySelector('.page-name-sum')
        submit.addEventListener('click',ev=>
        {
            ev.preventDefault()
            console.log(page)
            b=new defer_code(page);
        })
    
}

a=new defer_code(page);



