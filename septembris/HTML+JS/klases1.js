class Cilveks {
    constructor( age, name, sex){
        this.vecums = age;
        this.vards = name;
        this.dzimums = sex;
        
        let rezultataVieta = document.getElementById("rezultats")

        let cilvekaDiv = document.createElement("div")
        this.infoVieta = document.createElement("p")
        cilvekaDiv.appendChild(this.infoVieta)

        let dzimsanasdienasPoga = document.createElement("button")
        dzimsanasdienasPoga.innerHTML = "Dzimšanas diena!"
        dzimsanasdienasPoga.onclick = () => this.svinetDzD();

        cilvekaDiv.appendChild(dzimsanasdienasPoga);

        // rezultataVieta.appendChild(cilvekaDiv);

        this.jaunaisVards = document.createElement("input")
        this.jaunaisVards.type = "text"

        cilvekaDiv.appendChild(this.jaunaisVards)

        let mainitVarduPoga = document.createElement ("button")
        mainitVarduPoga.innerHTML = "mainīt vārdu"
        mainitVarduPoga.onclick = () => this.mainitVardu();



        cilvekaDiv.appendChild(mainitVarduPoga);
        rezultataVieta.appendChild(cilvekaDiv);


        
        this.info();
    }
    svinetDzD(){
        this.vecums++;
        this.info();
    }
    mainitVardu(){
        this.vards = this.jaunaisVards.value;
        this.info();
    }
    mainitDzimumu( jaunaisDzimums=""){
        if( jaunaisDzimums == ""){
            if( this.dzimums == "s"){
                this.dzimums = "v";
            } else {
                this.dzimums = "s";
            }
        } else {
            this.dzimums = jaunaisDzimums;
        }
    }
    


    info(){
        let teksts =  "Sveiki! Mani sauc " + this.vards + ". Man ir " + this.vecums + " gadu."
        //kad mainas dzimums
        teksts += " Es esmu ";
        if ( this.dzimums == "s") {
            teksts += "sieviete.";
        } else if ( this.dzimums == "v"){
            teksts += "vīrietis.";
        } else {
            teksts =+ this.dzimums;
        }
        console.log(teksts)
        this.infoVieta.innerHTML = teksts
    }

 
}

let visiCilveki = [];
//aizvietojums let visicilveki = new cilveks 58rinda

function izveidotCilveku(){
    let vards = document.getElementById( "vards").value
    let dzimums = document.getElementById( "dzimums").value
    let vecums = document.getElementById( "vecums").value
    visiCilveki.push( new Cilveks( vecums, vards, dzimums))
}