/**
 * How to turn a node list into an array either use Array.form() spread syntax [...]
 */

const allArticles = [...document.querySelectorAll("article")]
console.log(allArticles)

allArticles.forEach(element => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Plant Babies  "

    element.appendChild(h1)

});

const snaky  = {
    info: "removing toxic air pollutants. They absorb harmful substances such as formaldehyde, benzene, xylene, trichloroethylene, and toluene. Their ability to absorb and remove toxins makes them a valuable addition to your living space.",
    pics:"https://images.pexels.com/photos/9707479/pexels-photo-9707479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

 type:"Snake"
      
  };
  const ferny ={
    info: "Air purification: Ferns can purify the air around them Reduced stress levels Spending time with ferns in nature can help reduce stress Humidity control Ferns help control humidity levels Low maintenance Fern plants require very little maintenance",
    pics: "https://images.pexels.com/photos/12528707/pexels-photo-12528707.jpeg",
   
    type:"Fern"
  }
  
  
const spidey ={

    info:"Spider plants are excellent at cleaning the air by removing toxins. They specifically target formaldehyde, a chemical emitted from furniture and building materials.",
    pics:"https://images.pexels.com/photos/11363516/pexels-photo-11363516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    type: "Spider"
};  
    const bamboon={
        info:" Formaldehyde can result in sensory irritation and cause nasopharyngeal cancer. In this study, it has been proven that growing parlor palm (Chamaedorea elegans) can efficiently eliminate formaldehyde from the indoor air.",
        pics:"https://images.pexels.com/photos/15655064/pexels-photo-15655064/free-photo-of-close-up-of-a-houseplant.png",
        type:"Bamboo Palm"
    }
  let snake = allArticles[0];
  let flipped = true
  snake.addEventListener("click",()=> {
    if(flipped === true){
        snake.style.transform= " rotateY(180deg)"
    flip(snaky,snake,flipped)
    flipped=false;

    }else{
        snake.style.transform= " rotateY(360deg)"
    flip(snaky,snake,flipped)
    flipped=true
    }
    

  })

  let fern = allArticles[1];
  fern.addEventListener("click",()=> {
    if(flipped === true){
        fern.style.transform= " rotateY(180deg)"
        flip(ferny,fern,flipped) 
        flipped=false;
    }else{
        fern.style.transform= " rotateY(360deg)"
    flip(ferny,fern,flipped)
flipped=true
    }
    
  })
  let spider = allArticles[2];
  spider.addEventListener("click",()=> {
    if(flipped === true){
        spider.style.transform= " rotateY(180deg)"
        flip(spidey,spider,flipped)
        flipped=false;
    }else{
        spider.style.transform=" rotateY(360deg)"
        flip(spidey,spider,flipped)
        flipped=true
    }

    
  })
  let bamboo = allArticles[3];
  bamboo.addEventListener("click",()=> {
    if(flipped===true){
        bamboo.style.transform= " rotateY(180deg)" 
        flip(bamboon,bamboo,flipped) 
        flipped=false;
    }else{
        bamboo.style.transform=" rotateY(360deg)"
        flip(bamboon,bamboo,flipped)
        flipped=true
    }
    }
    
  )


  function flip(plantInfo,plant,flipped){
    if( flipped ===true){
        plant.innerHTML= ""
        const h1El= document.createElement("h1")
        h1El.innerText= plantInfo.type
        plant.append(h1El)
        const pEl =document.createElement("p")
        pEl.innerText=plantInfo.info
        plant.append(pEl)
        pEl.style.transform = "rotateY(180deg)"
        h1El.style.transform = "rotateY(180deg)"

    }else{

        plant.innerHTML=""
        const h1El=document.createElement("h1")
        h1El.innerHTML=plantInfo.type
        plant.append(h1El)
        const h2El =document.createElement("h1")
        h2El.innerText="Plant Babies"
        
        
 const image=document.createElement("img")
 image.setAttribute("src",plantInfo.pics)
 plant.append(image)
 plant.append(h2El)

 //console.log(image)
    }

  }





  //console.log(snake)

// console.log (mainEl);

// //setting the background color using the VAR mconst mainEl = document .querySelector("main")
// ethod 
// //to grab from the root
// mainEl.style.backgroundColor ="var(--main-bg)";
// //creating a HTML element
// const h1= document.createElement("H1")

// //attaching text to our h1 we created.
// h1.innerHTML="DOM manipulation";

// //appending my h1 i created to my main container

// mainEl.appendChild(h1);
// //add a class name to a html element 
// mainEl.classList.add("flex-ctr");

// //part2


// const topMenuEl = document.querySelector("#top-menu");
// // set the height to 100%

// topMenuEl.style.height="100%";
// topMenuEl.style.backgroundColor="var(--top-menu-bg)";

// topMenuEl.classList.add("flex-around");

// // Menu data structure

 

// menuLinks.forEach(link=>{
//     const aElement = document.createElement("a");
//     aElement.href=link.href;
//     aElement.textContent= link.text;
//     topMenuEl.appendChild(aElement);
// });

// // 316.3

// // const subMenuEl= document.querySelector("#sub-menu");
// // subMenuEl.style.height = "100%";
// // subMenuEl.style.backgroundColor="var(--sub-menu-bg)";
// // subMenuEl,classlist.add("flex-around");
// // subMenuEl.style.position="absolute"
// // subMenuEl.style.top = "0";


// // const topMenuLinks=topMenuEl.querySelectorAll("a");
// // console.log(topMenuEl);

// // topMenuEl.addEventListener("click", (event)=>{
// //     event.preventDefault();
// //     //console.log(event.target.tagName);
// //     if (event.target.tagName != "A") return; 

// // //topMenuLink.forEach(link=> 
// // {
// //     if(link===event.target){
// //         link.classlist.toggle("active");
    
// //      } else {
// //     link.classList.remove("active");
// //      }

// // });

// // const linkText = event.target.textContent.toLowerCase()
// // const linkObject= menuLinks.find((link) => link.text===linkText )
// // if (event.target.classlist.contains("active")){
// //     event.target.classlist.remove("active");
// //     subMenuEl.style.top ="0";
// // }else{
// //     document.querySelectorAll("#top=menu a")
// //     .foreach(a) => a.classlist.remove("active");
// //     event.target.classlist.add("active");
// // }

// //  });


