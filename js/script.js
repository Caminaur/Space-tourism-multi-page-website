
    const dropdown = document.getElementById('dropdown-button');
    const mobileNavbar = document.getElementById('mobile-navbar');

    dropdown.addEventListener('click',()=>{
        // verify status
        mobileNavbar.dataset.status = (mobileNavbar.dataset.status==="active") ? "inactive" : "active";        
    });

    function verifyPage(){
        const urlParams = new URLSearchParams(window.location.search);
    
        const page = urlParams.get('page')
        if (page) {
            let menues = document.querySelectorAll("[data-menu-status]");
            menues.forEach((menu)=>{
                menu.dataset.menuStatus = 'inactive';
            });
            console.log(page);
            document.querySelectorAll(`[data-nav-id='${page}']`).forEach((e)=>{
                e.dataset.menuStatus = 'active';
            })
        }
    }

    function redirect(url, endpoint){
        var url = "http://127.0.0.1:5500/starter-code/index.html";
        var param = 'home'; 
        var page = '?page=';
        window.location.href = url+page+param;
    }

    verifyPage()


