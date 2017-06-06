import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    json = {
 goNextPageAutomatic: true,
 pages: [
  {
   elements: [
    {
     type: "text",
     inputType: "date",
     name: "question1",
     title: "Fecha de cx"
    }
   ],
   name: "page1"
  },
  {
   elements: [
    {
     type: "text",
     inputType: "date",
     name: "question2",
     title: "Fecha de ingreso"
    }
   ],
   name: "page2"
  },
  {
   elements: [
    {
     type: "text",
     inputType: "number",
     name: "question3",
     title: "Historia clínica"
    }
   ],
   name: "page3"
  },
  {
   elements: [
    {
     type: "text",
     inputType: "number",
     name: "question4",
     title: "Evento #"
    }
   ],
   name: "page4"
  },
  {
   elements: [
    {
     type: "text",
     name: "question5",
     title: "Nombres"
    },
    {
     type: "text",
     name: "question6",
     title: "Apellidos"
    },
    {
     type: "dropdown",
     choices: [
      {
       value: "0",
       text: "Masculino"
      },
      {
       value: "1",
       text: "Femenino"
      }
     ],
     choicesOrder: "asc",
     name: "question7",
     title: "Genero"
    },
    {
     type: "text",
     inputType: "date",
     name: "question8",
     title: "Fecha Nacimiento"
    }
   ],
   name: "personal info"
  },
  {
   elements: [
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Derecho"
      },
      {
       value: "2",
       text: "Izquierdo"
      },
      {
       value: "3",
       text: "Ambidiestro"
      }
     ],
     choicesOrder: "asc",
     name: "question9",
     title: "Lateralidad"
    }
   ],
   name: "page5"
  },
  {
   elements: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "0",
       text: "No"
      },
      {
       value: "1",
       text: "SI"
      }
     ],
     name: "question10",
     title: "TUMOR HIPOFISIARIO NO FUNCIONANATE"
    }
   ],
   name: "page6"
  },
  {
   elements: [
    {
     type: "dropdown",
     choices: [
      {
       value: "I",
       text: "Normal"
      },
      {
       value: "II",
       text: "Lesiones pequeñas"
      },
      {
       value: "III",
       text: "Cisternas obliteradas"
      },
      {
       value: "IV",
       text: "Línea media luxada > 5 mm"
      },
      {
       value: "V",
       text: "Lesión focal > 25 ml evacuada"
      },
      {
       value: "VI",
       text: "Lesión focal no evacuada"
      }
     ],
     name: "question11",
     title: "MARSHALL / TCDB (TCE)"
    }
   ],
   name: "page7"
  },
  {
   elements: [
    {
     type: "dropdown",
     choices: [
      {
       value: "1",
       text: "Fernando Hakim"
      },
      {
       value: "2",
       text: "Enrique Jimenez"
      },
      {
       value: "3",
       text: "Juan Armando Mejia"
      },
      {
       value: "4",
       text: "Guillermo Monsalve"
      },
      {
       value: "5",
       text: "Kemel Gothme"
      },
      {
       value: "6",
       text: "Juan Fernando Ramon"
      },
      {
       value: "7",
       text: "Andres Rodriguez"
      },
      {
       value: "8",
       text: "Fernando Alvarado"
      },
      {
       value: "9",
       text: "Luis Carlos Morales"
      },
      {
       value: "10",
       text: "Camilo Velez"
      },
      {
       value: "11",
       text: "Nicolas Useche"
      },
      {
       value: "12",
       text: "Anibal Niño"
      },
      {
       value: "13",
       text: "Constanza Bedoya"
      },
      {
       value: "14",
       text: "Prada"
      },
      {
       value: "15",
       text: "Meneses"
      }
     ],
     choicesOrder: "asc",
     name: "question12",
     title: "Cirujano"
    }
   ],
   name: "page8"
  }
 ],
 showNavigationButtons: true,
 showProgressBar: "top"
};

    onSurveySaved(survey) {
      this.json = survey;
    }
}
