const admin_username=document.querySelector('.admin_username');
    const admin_password=document.querySelector('.admin_password');
    const admin_submit_button=document.querySelector('.admin_submit_button');

    const user='hizbullah';
    const pass="12345678";

    admin_submit_button.addEventListener("click", (e)=>{
      e.preventDefault()
      let username=admin_username.value.trim().toLowerCase()
      let password=String(admin_password.value)
      if(username===user && password===pass){
        window.location.href="dashboard.html";
      }else{
        alert("Invalid login details ❌❌❌")
        
      }
    })
