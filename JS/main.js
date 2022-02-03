let n1;
let n2;
let n3;
let n4;
let n5;
let ergebnis;
let summe = 0;
let anzahlNoten = 0;

/* variablen festlegen */


function tfauslesen() {
    n1 = parseInt(document. getElementById("tfNote1").value)
    n2 = parseInt(document. getElementById("tfNote2").value)
    n3 = parseInt(document. getElementById("tfNote3").value)
    n4 = parseInt(document. getElementById("tfNote4").value)
    n5 = parseInt(document. getElementById("tfNote5").value)

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5)

    punktepruefen(n1);
    punktepruefen(n2);
    punktepruefen(n3);
    punktepruefen(n4);
    punktepruefen(n5);

    ergebnis = summe / anzahlNoten

    document.getElementById("Ausgabe").innerHTML = ergebnis

    if(ergebnis <= 5)
    {
        document.getElementById("Ausgabe").style.color="crimson"
    }
    if(ergebnis > 5 && ergebnis < 13)
    {document.getElementById("Ausgabe").style.color="orange"
    }
    if(ergebnis > 12)
    {document.getElementById("Ausgabe").style.color="green"
    }
}

function punktepruefen(punkte){
    if(isNaN(punkte))
    {
        console.log(punkte + "ist keine Zahl!")
    }else if(punkte >= 0 && punkte <= 15)
        {
            summe = summe + punkte;
            anzahlNoten = anzahlNoten + 1;
        }
    else{
        console.log(punkte + "nicht möglich")
    }
    }
