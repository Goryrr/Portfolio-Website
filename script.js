// rendering projects on Projects page

// let Projects = projects;


// function renderProjects(Projects, containerId) {
//     const container = document.querySelector("#project-container");
//     if (!container) {
//         console.error('Nie znaleziono kontenera o podanym ID');
//         return;
//     }

//     container.innerHTML='';
//     Projects.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'item';

//         // adding listener to click on image 

//         const img = document.createElement('img');
//         img.src = item.image;
//         img.alt = item.name;
//         img.style.cursor = 'pointer';
//         img.addEventListener('click', ()=> openItemDetails(item));
//         itemDiv.appendChild(img);

//         const name = document.createElement('h3');
//         name.textContent = item.name;
//         itemDiv.appendChild(name);

//         const description = document.createElement('p');
//         description.textContent = item.description;
//         itemDiv.appendChild(description);

//         container.appendChild(itemDiv);
//     });
// }

// creating new html with element's details

// function openItemDetains(item) {
//     const itemPage = 
//     `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//     <header>
//     <a href="">JSokolowski Architekt</a>
//     <div class="navbar-list">
//         <ul class="navbar">
//             <li><a href="index.html">O mnie</a></li>
//             <li><a class="active" href="projects.html">Projekty</a></li>
//             <li><a href="XXXXX">Kontakt</a></li>
//         </ul>
//     </div>
//     </header>
//     <script src="projects.js"></script>
//     <script src="script.js"></script>
//     </body>
//     </html> 
// `;

// const a = document.createElement('a');
// a.href = itemPage;
// a.target = '_blank';
// document.body.appendChild(a);
// a.click();
// document.body.removeChild(a);

// // const newWindow = window.open();
// // newWindow.document.write(itemPage);
// }



// generator kard projektów 

// let Projects = projects;

// let projectPages = {};

// const generateProjectPages =
//     projects.forEach(item => {
//         projectPages[item.id] = `
//             <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//     <header>
//     <a href="">JSokolowski Architekt</a>
//     <div class="navbar-list">
//         <ul class="navbar">
//             <li><a href="index.html">O mnie</a></li>
//             <li><a class="active" href="projects.html">Projekty</a></li>
//             <li><a href="XXXXX">Kontakt</a></li>
//         </ul>
//     </div>
//     <div class="about-entry">
//     <div class="aboutme_textbox">
//         <p>Architekt, Urbanista
//             <br>
//             Jakub Sokołowski
//         </p>
//         <p class="aboutme_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae, facilis ipsa quasi ex doloremque vero. Laudantium aliquam, error unde velit rem corporis consectetur facere quod. Vel nesciunt eveniet voluptatibus porro. Saepe eveniet laudantium debitis eos hic! Enim optio est excepturi veniam quibusdam et nam sunt, similique, porro maiores sed.</p>
//     </div>
//     <img id="mypic" src="./img/about/CV_winieta_crop.jpg" alt="">
// </div>
//     <div id="project-container">
//     <img src="${item.image}" alt="">
//     <h1>${item.name}</h1>
//     </div>
//     </header>
   
//     </body>
//     </html> 
        
//      `;
//     });






// generator kart z karuzelką

let Projects = projects;

// zmiana let na const ?
const projectPages = {};

// slider / w osobnym pliku js i kolejność podczytu skryptu? tez nie działa

function initializeSlider () {

    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    
    if (!list || !items || !dots || !prev || !next) {
        console.error('One or more elements not found.');
        return;
    }

    let active = 0;
    let lengthItems = items.length - 1;
    
    next.onclick = function(){
        if(active + 1 > lengthItems){
            active = 0;
        }else{
            active = active + 1;
        }
        reloadSlider();
    }
    
    prev.onclick = function(){
        if(active - 1 < 0){
            active = lengthItems;
        }else{
            active = active -1;
        }
        reloadSlider();
    }
    
    function reloadSlider(){
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';
        
        let lastActiveDot = document.querySelector('.slider .dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
    }
    dots.forEach((li, key) => {
        li.addEventListener('click', function(){
            active = key;
            reloadSlider();
        })
    })

};



const generateProjectPages =
    projects.forEach(item => {

        let imageElement = '';

        if (Array.isArray(item.image)) {
            imageElement = item.image.map(imagePath => `<div class="item"><img src="${imagePath}" alt=""></div>`).join('');
        } else {
            imageElement = `<div class="item"><img src="${item.image}" alt=""></div>`;
        }

        projectPages[item.id] = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <header>
            <a class="logo" href="">JSokolowski Architekt</a>
            <div class="navbar-list">
                <ul class="navbar">
                    <li><a class="active" href="index.html">O mnie</a></li>
                    <li><a href="projects.html">Projekty</a></li>
                    <li><a href="projectpage.html">Kontakt</a></li>
                </ul>
            </div>
        </header>
        <div class="projectName">
        <h2>${item.name}</h2>
        </div>
            <!-- slider -->
        
            <div class="slider">
                <div class="list">
                        ${imageElement}
                    </div>
                </div>
        
                <!-- buttons prev and next -->
                <div class="sliderButtons">
                    <button id="prev"><</button>
                    <button id="next">></button>
                </div>
                <!-- dots or thumbnails -->
                <ul class="dots">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        
            <script src="projects.js"></script>
            
            <script src="script.js"></script>
        
        </body>
        </html>  
     `;
     
    });
    
    initializeSlider();

const projectContainer = document.querySelector("#project-container");

const renderProjects = (items) => {
    // projectContainer.innerHTML = '';

    for(let i=0; i < items.length; i++) {
        const newProject = document.createElement('div');
        newProject.className = `projectCard`;

        newProject.innerHTML = `
        <div class="projectCard-Text">
        <h2>${items[i].name}</h2>
        <p class="projectCard-projectdescription">${items[i].description}</p>
        </div>
        <div class="projectCard-img">
        <img src="${items[i].image[0]}" alt="image">
        </div>
        `;


        const projectLink = document.createElement('a');
        projectLink.href = `javascript:void(0);`;
        projectLink.dataset.projectId = items[i].id;
        projectLink.className = `project-link`;
        projectLink.appendChild(newProject);

        projectLink.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            openProjectPage(projectId);
        });

        projectContainer.appendChild(projectLink);
        // projectContainer.appendChild(newProject);
    };
};

const openProjectPage = (projectId) => {
    document.documentElement.innerHTML = projectPages[projectId];
};

// document.onload = function () {
//     renderProjects(Projects);
//     initializeSlider();
// };

// document.onload = renderProjects(Projects);
// document.onload = initializeSlider();


document.addEventListener('DOMContentLoaded', function () {
    renderProjects(Projects);
    initializeSlider();
});











// slider LunaCev

// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll('.slider .dots li');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');

// let active = 0;
// let lengthItems = items.length - 1;

// next.onclick = function(){
//     if(active + 1 > lengthItems){
//         active = 0;
//     }else{
//         active = active + 1;
//     }
//     reloadSlider();
// }

// function reloadSlider(){
//     let checkLeft = items[active].offsetLeft;
//     list.style.left = -checkLeft + 'px';
// }


// slider z gpt

// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider");
//     const thumbnailsContainer = document.getElementById("thumbnails");
  
//     // Dodaj miniaturki
//     document.querySelectorAll(".slide").forEach(function (slide, index) {
//       const thumbnail = document.createElement("div");
//       thumbnail.classList.add("thumbnail");
//       thumbnail.setAttribute("data-index", index);
//       thumbnail.innerHTML = `<img src="${slide.querySelector('img').src}" alt="Thumbnail ${index + 1}">`;
//       thumbnail.addEventListener("click", function () {
//         goToSlide(index);
//       });
//       thumbnailsContainer.appendChild(thumbnail);
//     });
  
//     let currentIndex = 0;
  
//     function updateSlider() {
//       const translateValue = -currentIndex * 100 + "%";
//       slider.style.transform = "translateX(" + translateValue + ")";
//     }
  
//     function goToSlide(index) {
//       currentIndex = index;
//       updateSlider();
//     }
  
//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % document.querySelectorAll(".slide").length;
//       updateSlider();
//     }
  
//     function prevSlide() {
//       currentIndex = (currentIndex - 1 + document.querySelectorAll(".slide").length) % document.querySelectorAll(".slide").length;
//       updateSlider();
//     }
  
//     document.querySelector(".slider-container").addEventListener("swiped-left", nextSlide);
//     document.querySelector(".slider-container").addEventListener("swiped-right", prevSlide);
  
//     // setInterval(nextSlide, 5000); // Automatyczne przewijanie co 5 sekund (opcjonalne)
//   });





// new 


// let Projects = projects;

// let projectPages = {};

// projects.forEach(item => {
//     projectPages[item.id] = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <!-- Your head content -->
//         </head>
//         <body>
//             <header>
//                 <!-- Your header content -->
//             </header>
//             <div>
//                 <img src="${item.image}" alt="${item.name}">
//                 <h1>${item.name}</h1>
//             </div>
//             <div id="project-container"></div>
            
//         </body>
//         </html>
//     `;
// });

// const projectContainer = document.querySelector("#project-container");

// const renderProjects = (items) => {
//     projectContainer.innerHTML = '';

//     for(let i=0; i < items.length; i++) {
//         const newProject = document.createElement('div');
//         newProject.className = `project`;

//         newProject.innerHTML = `
//         <img src="${items[i].image}" alt="product image">
        
//         `;


//         const projectLink = document.createElement('a');
//         projectLink.href = `javascript:void(0);`;
//         projectLink.dataset.projectId = items[i].id;
//         projectLink.className = `project-link`;
//         projectLink.appendChild(newProject);

//         projectLink.addEventListener('click', function() {
//             const projectId = this.dataset.projectId;
//             openProjectPage(projectId);
//         });

//         projectContainer.appendChild(projectLink);
//         // projectContainer.appendChild(newProject);
//     };
// };

// const openProjectPage = (projectId) => {
//     const newWindow = window.open();
//     newWindow.document.write(projectPages[projectId]);
// };

// document.onload = renderProjects(Projects);

