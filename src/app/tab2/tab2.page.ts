import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  urlImageStorage  : string[] = [];
  constructor(public fotoservice : FotoService,
    private afStorage : AngularFireStorage,
    public fotoService : FotoService) {}

  tambahfoto(){
    this.fotoservice.tambahfoto();
  }

  uploadFoto(){
    this.urlImageStorage = [];
    for (var index in this.fotoService.dataFoto){
      const imgFilepath = `imgStorage/${this.fotoService.dataFoto[index].filePath}`;

      this.afStorage.upload(imgFilepath, this.fotoService.dataFoto[index].dataImage).then(() => {
        
      });
    }
  }
}
