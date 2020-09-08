base_url='https://nimish07-ai.github.io/code/';


first=false;
debug=false;

// if(window.location.href.split('/')[3]=='code')
// {
//     page=window.location.href.split('/')[4]
// }
// else{
//     page=window.location.href.split('/')[3]
// }
len=window.location.href.split('/').length
page=page=window.location.href.split('/')[len-1]




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
            console.log(jsdata);
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

        

        
        this.footer();
        setTimeout(execute,300);
        setTimeout(code_exe,1000);
        }
        
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

        bdy=document.querySelector('.bdy');
}


function home()
{
    bdy.innerHTML="<div class='inner'></div>"
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



