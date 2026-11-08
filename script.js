

const whatsapp = document.querySelectorAll(".whatsapp");


whatsapp.forEach(whatsapp => {
    whatsapp.addEventListener("click", () =>{

        let cliques = Number(localStorage.getItem("whatsapp")) ||0;

        cliques++; 

        localStorage.setItem("whatsapp", cliques);

        console.log("Cliques no Whatsapp", cliques);

    });

});

