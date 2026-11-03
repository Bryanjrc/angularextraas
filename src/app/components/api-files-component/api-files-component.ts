import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePostFiles } from '../../services/service.post.files';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-api-files-component',
  standalone: false,
  styleUrl: './api-files-component.css',
  templateUrl: './api-files-component.html',
})
export class ApiFilesComponent {
  public urlFile !: string;
  public mensaje!: string;

  @ViewChild("cajafile") cajafile!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePostFiles
  ) {}

  uploadFile() {
    let file = this.cajafile.nativeElement.files[0];
    let miPath = this.cajafile.nativeElement.value.split("\\");
    let fileName = miPath[2];
    let reader = new FileReader();

    reader.onload = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      let base64: string;

      base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      let fileModel = new FileModel(fileName, base64);
      
      this._service.postFile(fileModel).then((response) => {
        this.mensaje = "File uploaded successfully!";
        console.log("File uploaded successfully!", response);
        this.urlFile = response.urlFile;
        this._cdr.detectChanges();
      })
    }

    reader.readAsArrayBuffer(file);
  }

}
