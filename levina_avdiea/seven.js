
class data_fetcher
{
    list_of_sheet_link=["https://sheet.best/api/sheets/9976248e-92e8-4473-9e97-aed00973c5a4"]

    fetch()
    {
        fetch(window.df.list_of_sheet_link[window.ptr++])
        .then(ev=>{
            if(ev.status==200)
            {
                window.ptr=0;
                return ev.text()
            }
            else
            {
                console.log(ev.status)
                window.df.fetch()
            }
        })
        .then(ev=>{
            window.data=JSON.parse(ev);
            
        df.data_designer()
        })
        
    }

    data_designer()
    {
        let buff=""
        window.data.forEach(ev=>{
            let phn=""
            ev.phone_number.split(",").forEach(ev=>{
                phn+=`<p>${ev}</p>`
            })
            
            buff+=`
            <div class="card" id=${ev.id}>
                <div class="image  ">
                <img src="${ev.image_url}" alt="" srcset="" class="img_inner">

                </div>
                
                    <div class="name " style="border-radius: 0px;">
                    <h1 style="vertical-align: middle;">${ev.hospital_name}</h1>
                    <p style="    width: 100%;
                    height: 20%;">address-${ev.hospital_address}</p>
                    </div>
                    <div class="beds_1 ">
                    <p style="border-bottom: 1px solid;">Total beds in hospital</P>
                    <p>${ev.beds_ava}</p>
                    </div>
                    <div class="beds_2 ">
                    <p style="border-bottom: 1px solid;">beds occupied</P>
                    <p>${ev.beds_ocu}</p>
                    
                    <p style="border-bottom: 1px solid;">beds available</P>
                    <p>${ev.beds_ava-ev.beds_ocu}</p>
                    </div>
                    <div class="phone_number ">
                    <h3 style="border-bottom: 1px solid;">
                    contact_us</h3>

                    ${phn}
                    </div>
                    <div class="email ">
                    <h4 style="border-bottom: 1px solid;">
                    email</h4>
                    <p>${ev.email}</p>
                    </div>
                    <div class="ranting" style="display:grid;
                    justify-content: center;
                            "><button style="width: 20vw;border-radius:30px;" class="btn" id="${ev.id}"> click to book</button></div>
                    <div class="button " ></div>
            </div>
    `


        })
        document.querySelector(".body").innerHTML=buff;
        setTimeout(ev=>{document.querySelectorAll(".btn").forEach(ev=>{
            ev.onclick=ev1=>{
                console.log(ev1.path[0].id)
                document.querySelector(".modal_outer").style.display="grid";
            }
            console.log(ev)
        })},100)
    }
}


window.data=null;
window.ptr=0;
window.df= new data_fetcher();
window.data=[{"id":"1","hospital_name":"alpha beta gama","hospital_address":"","phone_number":"8879000893,9137474609","email":"abcd@gmail.com","beds_ava":"70","beds_ocu":"64","gov":"FALSE","stars":"4.5",
"image_url":"https://image.shutterstock.com/image-photo/modern-hospital-style-building-600w-212251981.jpg"}]
df.data_designer()
// df.fetch()