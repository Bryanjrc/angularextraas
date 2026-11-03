import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  
  async generarDocumento(): Promise<void> {
    let document: jsPDF = new jsPDF();

    document.setFontSize(18);
    document.text('Mi documento de martes', 10, 10);
    document.setFontSize(12);

    const headers = [[
      "Nombre",
      "Email",
      "Edad"
    ]];

    const data =  [
      ["Diana", "diana@gmail.com", 44],
      ["Adrian", "adrian@gmail.com", 44],
      ["L", "adrian@gmail.com", 26]
    ]

    autoTable(document, {
      head: headers,
      body: data,
      startY: 20,
    });

    document.save('documento.pdf');
  }

}
