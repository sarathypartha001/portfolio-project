/**Side Nav Bar Session */

let navbarmenutoggle = document.querySelector(".navbar-menu-toggle")
let sidenavbar = document.getElementById("side-navbar")

navbarmenutoggle.addEventListener("click",function()
{
    sidenavbar.style.left= "0";
})

let closesidenavbar = document.getElementById("close-side-navbar")

closesidenavbar.addEventListener("click",function()
{
    sidenavbar.style.left="-80%";
})
/**Home Session */
let sidenavlinkhome = document.getElementById("home-link");

sidenavlinkhome.addEventListener("click",function()
{
    sidenavbar.style.left =" -80%";
})

/* About Session */

let sidenavlinkAbout  = document.getElementById("About-link")

sidenavlinkAbout.addEventListener("click",function()
{
    sidenavbar.style.left ="-80%";
})

/**Education Session */
let sidenavlinkeducation = document.getElementById("education-link");

sidenavlinkeducation.addEventListener("click",function()
{
    sidenavbar.style.left = "-80%";
})
/**ug Session */
/**i tag storage container */
let educationmenutoggleplus = document.getElementById("education-menu-toggle-plus");
let educationmenutoggleminus = document.getElementById("education-menu-toggle-minus");
/**education details storage container */
let insideeducation = document.querySelector(".inside-education");
/**open and closing i mean menu symbol + - storage container for ug */
let openeducation =document.getElementById("open-education");
let closeeducation = document.getElementById("close-education");
openeducation.addEventListener("click",function()
{
    educationmenutoggleplus.style.display="none";
    educationmenutoggleminus.style.display ="block";
    insideeducation.style.display="block";
})
closeeducation.addEventListener("click",function()
{
    educationmenutoggleplus.style.display="block";
    educationmenutoggleminus.style.display="none";
    insideeducation.style.display="none";
})
/**Hsc session */

/**open and closing i mean menu symbol + - storage container  for hsc*/
let openeducationhsc =document.getElementById("open-educationhsc");
let closeeducationhsc = document.getElementById("close-educationhsc");
/**i tag storage container for hsc*/
let educationmenutoggleplushsc = document.querySelector(".education-menu-toggle-plus-hsc");
let educationmenutoggleminushsc = document.querySelector(".education-menu-toggle-minus-hsc");
/**education details storage container  for hsc*/
let insideeducationhsc = document.getElementById("inside-education-hsc");
openeducationhsc.addEventListener("click",function()
{
    educationmenutoggleplushsc.style.display="none";
    educationmenutoggleminushsc.style.display="block";
    insideeducationhsc.style.display="block"
})
closeeducationhsc.addEventListener("click",function()
{
    educationmenutoggleplushsc.style.display="block";
    educationmenutoggleminushsc.style.display="none";
    insideeducationhsc.style.display="none";
})
/**sslc session */

/**open and closing i mean menu symbol + - storage container for sslc*/ 
let openeducationsslc =document.getElementById("open-educationsslc");
let closeeducationsslc = document.getElementById("close-educationsslc");
/**education details storage container */
let insideeducationsslc = document.getElementById("inside-education-sslc");
/**i tag storage container */
let educationmenutoggleplussslc = document.querySelector(".education-menu-toggle-plus-sslc");
let educationmenutoggleminussslc = document.querySelector(".education-menu-toggle-minus-sslc");

openeducationsslc.addEventListener("click",function()
{
    educationmenutoggleplussslc.style.display="none";
    educationmenutoggleminussslc.style.display="block";
    insideeducationsslc.style.display="block";
})
closeeducationsslc.addEventListener("click",function()
{
    educationmenutoggleplussslc.style.display="block";
    educationmenutoggleminussslc.style.display="none"
    insideeducationsslc.style.display="none";
})


/**Skills session */

let skillLink=document.getElementById("skills-link");

skillLink.addEventListener("click",function()
{
    sidenavbar.style.left="-80%"
})

// About me session

let aboutmesession = document.getElementById("About-me-link")

aboutmesession.addEventListener("click",function()
{
    sidenavbar.style.left = "-80%";
})

//project session

let projectsession =document.getElementById("project-link");

projectsession.addEventListener("click",function()
{
    sidenavbar.style.left="-80%";
})












