function connection(){

    var about = document.querySelector(".about1");
    var about1 = document.querySelector(".page2");
    
    about.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (about1) {
        about1.scrollIntoView({ behavior: 'smooth' }); 
      }
    });
    
    var contact = document.querySelector(".contact1");
    var contact1 = document.querySelector(".page4");
    
    contact.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (contact1) {
        contact1.scrollIntoView({ behavior: 'smooth' }); 
      }
    });
    
    
    var project = document.querySelector(".project1");
    var project1 = document.querySelector(".page3");
    
    project.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (project1) {
        project1.scrollIntoView({ behavior: 'smooth' }); 
      }
    });


    var project2 = document.querySelector(".button");
    var project1 = document.querySelector(".page3");
    
    project2.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (project1) {
        project1.scrollIntoView({ behavior: 'smooth' }); 
      }
    });

    var skill = document.querySelector(".circle11");
    var education = document.querySelector(".education");
    
    skill.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (education) {
        education.scrollIntoView({ behavior: 'smooth' }); 
      }
    });

    var education1 = document.querySelector(".circle12");
    var experience = document.querySelector(".experience");
    
    education1.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (experience) {
        experience.scrollIntoView({ behavior: 'smooth' }); 
      }
    });

    var experiencetoeducation = document.querySelector(".circle21");
    var education2 = document.querySelector(".education");
    
    experiencetoeducation.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (education2) {
        education2.scrollIntoView({ behavior: 'smooth' }); 
      }
    });

    var educationtoskill = document.querySelector(".circle22");
    var skill1 = document.querySelector(".skillscontent");
    
    educationtoskill.addEventListener("click", function(event) {
      event.preventDefault(); 
    
      if (skill1) {
        skill1.scrollIntoView({ behavior: 'smooth' }); 
      }
    });
    
    
    // var projects = document.querySelector(".project");
    // var projects1 = document.querySelector(".projects");
    
    // projects.addEventListener("click", function(event) {
    //   event.preventDefault(); 
    
    //   if (projects1) {
    //     projects1.scrollIntoView({ behavior: 'smooth' }); 
    //   }
    // });
    }
    connection()


    function mouse(){
      const customCursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (event) => {
  customCursor.style.left = event.clientX + 'px';
  customCursor.style.top = event.clientY + 'px';
});
  }
  mouse()
    