/**
 * How to turn a node list into an array either use Array.form() spread syntax [...]
 */

const allArticles = [...document.querySelectorAll("article")]


allArticles.forEach(element => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Click Here "

    element.appendChild(h1)

});
//This is a a const to not only discribe my variable and allow me to plug into my if /else  function.
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
    // added my event listener so that my function could be called.
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

// True /false function added so the I could rotate  my elements . Also emptied the card and replaced so that i could add text and returned what was removed.
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

 
    }

  }

  const Subscribe = document.getElementById("form");
  const container= document.getElementById("container")


  Subscribe.addEventListener("submit", (e)=>{
    e.preventDefault()
  
    window.open("https://www.plants.com/");
    alert("sent you to our website")
    Subscribe.reset()
    
  })

  