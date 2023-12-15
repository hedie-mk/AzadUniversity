const menubtn = document.querySelector('.menu-btn')
        const navlinks = document.querySelector('.navList')
        const backcolor = document.querySelector('.container')

        menubtn.addEventListener('click' ,()=>
        navlinks.classList.toggle("mobile-menu")
        )
        menubtn.addEventListener('click' ,()=>
        backcolor.classList.toggle("containerdesign")
        )