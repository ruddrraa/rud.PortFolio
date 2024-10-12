// Texts to show in typewriter animation
function reload(){
    location.reload();
}
const texts = ["", "\u00A0 \u00A0 \u00A0 \u00A0 नमस्ते", " \u00A0 \u00A0 \u00A0 নমস্কার", "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 Hello"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let typingSpeed = 100; // Speed for typing effect
let pauseTime = 2000;  // 2 second pause between phrases

// Get the home heading element
const homeHeading = document.querySelector('.home-heading');

// Typewriter effect function
function type() {
    if (count === texts.length) {
        count = 0; // Reset to loop the texts
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    // Display the text
    homeHeading.textContent = letter;

    if (letter.length === currentText.length) {
        // Pause, then clear and move to the next text
        setTimeout(() => {
            homeHeading.textContent = ''; // Clear the text (disappear)
            index = 0;
            count++;
            setTimeout(type, pauseTime); // Delay before starting the next phrase
        }, 3000); // 3 seconds pause after fully typing a phrase
    } else {
        setTimeout(type, typingSpeed); // Control typing speed
    }
}

// Start the typewriter effect
type();


    let drkbutton = document.getElementById("drkbtn");
    let nav = document.getElementsByTagName("nav");
    let navlinks = document.querySelectorAll(".navlinks");
    let logo = document.querySelector(".logo");
    let icon = document.querySelectorAll(".icon");
    
    // Rotate functionality for the icon
    let rotate = document.querySelector(".rotate");
    
    drkbutton.addEventListener("mouseover",()=>{
        rotate.animate([{transform: "rotate(0deg)"},{transform: "rotate(280deg)"}],{duration: 5000});
    });
        
          
      
    

        
    
   
drkbutton.addEventListener("click", () => {
    if (drkbutton.innerHTML.includes("Light")) {
        drkbutton.innerHTML = 'Dark <i class="fa-solid fa-moon"></i>'; 
        drkbutton.style.backgroundColor = "var(--favcol)"
        drkbutton.style.filter = 'drop-shadow(#6005ac 1.5px 1.7px 5px)'
        //nav start
        nav[0].style.backgroundColor = "#fff"; 
        navlinks.forEach(element=>{
            element.style.color = "var(--favcol)";
            logo.style.color = "var(--favcol)"
            element.addEventListener("mouseover", ()=>{
                element.style.background = 'linear-gradient(45deg, black, indigo, rgb(188, 94, 188))'
                element.style.color = "white"
                
            });
            element.addEventListener("mouseout", ()=>{
                element.style.removeProperty("background");
                element.style.color = "var(--favcol)"
                
            });
        })
        nav[0].style.color = "var(--favcol)";
        nav[0].style.boxShadow = "-1px 5px 20px 0px";
        icon.forEach(element=>{
            element.style.color = "black";
            element.style.removeProperty("background-color");
        })
        icon[0].addEventListener("mouseover", ()=>{
            icon[0].style.color = "#0A66C2";
            icon[0].style.backgroundColor = "white";
            
        });
        icon[1].addEventListener("mouseover", ()=>{
            icon[1].style.color = "white";
            icon[1].style.filter = "brightness(25%)"
            
        });
        icon[1].addEventListener("mouseout", ()=>{
            icon[1].style.removeProperty("background-color");
            icon[1].style.color = "black";
        });
        icon[0].addEventListener("mouseout", ()=>{
            icon[0].style.removeProperty("background-color");
            icon[0].style.color = "black";
        });
        icon[2].addEventListener("mouseout", ()=>{
            icon[2].style.removeProperty("background-color");
            icon[2].style.color = "black";
        });
        icon[2].addEventListener("mouseover", ()=>{
            icon[2].style.color = "var(--favcol)";
            icon[2].style.backgroundColor = "white"
        });
        //nav end
        //home start
        document.querySelector(".home-heading").style.color = "var(--favcol)"
        document.querySelector("#Home").style.backgroundColor = "white"
        document.querySelector(".name-heading").style.color = "var(--favcol)";
        //home end
        //About start
        document.querySelector("#About").style.backgroundColor = "white"
        document.querySelector("#about-head").style.color = "var(--favcol)"
        document.querySelector(".about-content").style.backgroundColor = "whitesmoke"
        document.querySelector(".text-content h1").style.color = "#540f7c"
        document.querySelector(".text-content p").style.color = "rgba(139,139,139,1)"
        //about end 
        //skills start
        document.querySelector("#Skill").style.backgroundColor = "white"
         let skills = document.querySelector("#Skills");
         skills.style.color = "var(--favcol)"
         document.querySelector("#mast").style.color = "var(--favcol)";
         mast.addEventListener("mouseover", ()=>{
            mast.style.color = "#5b63b7"
        })
        mast.addEventListener("mouseout", ()=>{
            mast.style.color = "var(--favcol)";
        })
         skills.addEventListener("mouseover", ()=>{
            skills.style.color = "#5b63b7"
        })
        skills.addEventListener("mouseout", ()=>{
            skills.style.color = "var(--favcol)";
        })
        let wrap = document.querySelectorAll(".wrapper ");
        
        wrap.forEach(key =>{
            key.style.color = "white";
                key.style.backgroundColor = "var(--favcol)"
            key.addEventListener("mouseover", ()=>{
                key.style.color = "var(--favcol)";
                key.style.backgroundColor = "white"
            })
            key.addEventListener("mouseout", ()=>{
                key.style.color = "white";
                key.style.backgroundColor = "var(--favcol)";
            })
        })
    } else {
        drkbutton.innerHTML = 'Light <i class="fa-solid fa-sun"></i>';
        drkbutton.style.backgroundColor = "var(--drk)"
        drkbutton.style.filter = 'drop-shadow(3.5px 1.7px 15px rgba(255, 255, 255, 0.6))'
        //nav start
        nav[0].style.backgroundColor = "#000000"; 
        navlinks.forEach(element=>{
            element.style.color = "whitesmoke";
            element.addEventListener("mouseover", ()=>{
                element.style.background = "white"
                element.style.color = "black"
                
            });
            element.addEventListener("mouseout", ()=>{
                element.style.removeProperty("background");
                element.style.color = "white"
                
            });
        })
        
        nav[0].style.color = "white";
        nav[0].style.boxShadow = "-1px -4px 20px 0px";
        logo.style.color = "white";
        

        icon.forEach(element=>{
            element.style.color = "white";
        })
        icon[0].addEventListener("mouseover", ()=>{
            icon[0].style.color = "#0A66C2";
            icon[0].style.backgroundColor = "black";
            
        });
        icon[0].addEventListener("mouseout", ()=>{
            icon[0].style.removeProperty("background-color");
            icon[0].style.color = "white";
        });
        icon[2].addEventListener("mouseout", ()=>{
            icon[2].style.removeProperty("background-color");
            icon[2].style.color = "white";
        });
        icon[2].addEventListener("mouseover", ()=>{
            icon[2].style.color = "var(--favcol)";
            icon[2].style.backgroundColor = "black"
        });
        icon[1].addEventListener("mouseover", ()=>{
            icon[1].style.color = "white";
            icon[1].style.filter = "brightness(250%)"
            
        });
        icon[1].addEventListener("mouseout", ()=>{
            icon[1].style.color = "white";
            icon[1].style.filter = "brightness(50%)"
        });
        //nav end
        //home start
        document.querySelector(".home-heading").style.color = "white"
        document.querySelector("#Home").style.backgroundColor = "black"
        document.querySelector(".name-heading").style.color = "white"
        //home end
        //about start
        document.querySelector("#About").style.backgroundColor = "black"
        document.querySelector("#about-head").style.color = "whitesmoke"
        document.querySelector(".about-content").style.backgroundColor = "black"
        document.querySelector(".text-content h1").style.color = "white"
        document.querySelector(".text-content p").style.color = "beige"
        //about end
        //skills start
        document.querySelector("#Skill").style.backgroundColor = "black"
        let skills = document.querySelector("#Skills");
        skills.style.color = "white"
        let mast = document.querySelector("#mast");
        mast.style.color = "white";
        mast.addEventListener("mouseover", ()=>{
            mast.style.color = "#5b63b7"
        })
        mast.addEventListener("mouseout", ()=>{
            mast.style.color = "white"
        })
        
        skills.addEventListener("mouseover", ()=>{
            skills.style.color = "#5b63b7"
        })
        skills.addEventListener("mouseout", ()=>{
            skills.style.color = "white"
        })
         
         
        let wrap = document.querySelectorAll(".wrapper ");
       wrap.forEach(key =>{
           key.style.color = "black";
               key.style.backgroundColor = "white"
           key.addEventListener("mouseover", ()=>{
               key.style.color = "white)";
               key.style.backgroundColor = "black"
           })
           key.addEventListener("mouseout", ()=>{
               key.style.color = "black";
               key.style.backgroundColor = "white";
           })
    })
    let sun = document.querySelector(".fa-sun");
    sun.classList.add("rotate")
    let rotate = document.querySelector(".rotate");
    drkbutton.addEventListener("mouseover",()=>{
        rotate.animate([{transform: "rotate(0deg)"},{transform: "rotate(280deg)"}],{duration: 5000});
    });
    }
});



