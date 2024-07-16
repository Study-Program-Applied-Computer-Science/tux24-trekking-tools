document.addEventListener("DOMContentLoaded",()=>{

    const crviewmorebtn=document.getElementById("cr-viewmore");
    const crmoredetails=document.getElementById("cr-moredetails");
    const crviewlessbtn = document.getElementById("cr-viewless");
    
    const dismoredetails = document.getElementById("disclaimer-moredetails");
    const disviewmorebtn = document.getElementById("disclaimer-viewmore");
    const disviewlessbtn = document.getElementById("disclaimer-viewless");
    
    const conmoredetails = document.getElementById("conatct-moredetails");
    const conviewmorebtn = document.getElementById("contact-viewmore");
    const conviewlessbtn = document.getElementById("contact-viewless");
    
    const termmoredetails = document.getElementById("terms-moredetails");
    const termviewmorebtn = document.getElementById("terms-viewmore");
    const termviewlessbtn = document.getElementById("terms-viewless");
    
    
    const feedbackform = document.getElementById("feedback-form");
    const fullname = document.getElementById("fullname");
    const phonenumber = document.getElementById("phonenumber");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameerror = document.getElementById("name-error");
    const phoneerror = document.getElementById("phone-error");
    const emailerror = document.getElementById("email-error");
    const texterror =document.getElementById("text-error");
    const namepattern = /^[A-Za-z\s]+$/;
    const phonepattern = /^[0-9]+$/;
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    crviewmorebtn.addEventListener("click",()=>{      
        crmoredetails.classList.remove("hidden");
        crviewmorebtn.classList.add("hidden");   
    });
    
    crviewlessbtn.addEventListener("click",()=>{      
        crmoredetails.classList.add("hidden");
        crviewmorebtn.classList.remove("hidden");
          
    });
    
    disviewmorebtn.addEventListener("click",()=>
    {
        dismoredetails.classList.remove("hidden");
        disviewmorebtn.classList.add("hidden");
    
    });
    
    disviewlessbtn.addEventListener("click",()=>
    {
        dismoredetails.classList.add("hidden");
        disviewmorebtn.classList.remove("hidden");
    });
    
    conviewmorebtn.addEventListener("click",()=>
    {
        conmoredetails.classList.remove("hidden");
        conviewmorebtn.classList.add("hidden");
    })
    
    conviewlessbtn.addEventListener("click",()=>
    {
        conmoredetails.classList.add("hidden");
        conviewmorebtn.classList.remove("hidden");
    
    })
    
    
    termviewmorebtn.addEventListener("click",()=>
    {
        termmoredetails.classList.remove("hidden");
        termviewmorebtn.classList.add("hidden");
    })
    
    termviewlessbtn.addEventListener("click",()=>
    {
        termmoredetails.classList.add("hidden");
        termviewmorebtn.classList.remove("hidden");
    
    })
    
    feedbackform.addEventListener("submit" , (event)=>{
        event.preventDefault();
        let result=true;
        nameerror.textContent="";
        phoneerror.textContent="";
        emailerror.textContent="";
        texterror.textContent="";
    
        if(fullname.value.trim()==="" || !namepattern.test(fullname.value))
        {
            nameerror.textContent="Enter a valid name";
            result=false;
        }
    
        if(!phonepattern.test(phonenumber.value))
        {
            phoneerror.textContent="Enter a valid number";
            result=false;
        }
        
        if(!emailpattern.test(email.value))
        {
            emailerror.textContent="Enter a valdi emaail";
            result=false;
        }
    
        if(message.value.trim()==="")
        {
            texterror.textContent="Enter a valid message";
            result=false;
        }
    
    
        if(result)
        {
            const info =
            {
                FullName : fullname.value,
                PhoneNumber:phonenumber.value,
                Email : email.value,
                Feedaback:message.value,
            };
            console.log(info);
        }
    
    
    })
    
    });
    