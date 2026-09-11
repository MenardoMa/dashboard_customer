
const parent = document.querySelector(".parent")

const showSidebarLeft = () => {
    
    const navHamb = document.querySelector(".nav-hamb")

    navHamb.addEventListener("click", (e) => {
        
        e.preventDefault()

        if(!parent.classList.contains("active")){
            parent.classList.add("active")
        }else{
            parent.classList.remove("active")
        }


    })

}

showSidebarLeft()