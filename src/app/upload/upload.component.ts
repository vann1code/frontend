import { Component } from '@angular/core';
import { ApiService } from './api-service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private apiService: ApiService) { }

  showLoader: boolean = false;
  selectedFile: File[] = [];
  isSuccess = false;
  isError = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files;
  }

  uploadFile() {
     this.showLoader = true;
    this.isSuccess = false;
    this.isError = false;

    for (const file of this.selectedFile) {
      const formData = new FormData();
      formData.append('file', file);
      this.apiService.fazerRequisicaoPost(formData).subscribe(
        (response) => {
          console.log('Resposta da API:', response);
          this.isSuccess = true; // Define sucesso
        },
        (error) => {
          console.error('Erro na requisição:', error);
          this.isError = true; // Define erro
        }
      );

      setTimeout(() => {
             this.showLoader = false; // Oculta o loader após o envio
           }, 2000);
    }

    // if (this.selectedFile) {
    //   this.showLoader = true; // Mostra o loader enquanto o arquivo está sendo enviado
    //   // Implemente aqui o código para enviar o arquivo ao servidor.
    //   console.log('Arquivo selecionado:', this.selectedFile);
    //   // Você pode adicionar a lógica de envio do arquivo para o back-end aqui.
    //   setTimeout(() => {
    //     this.showLoader = false; // Oculta o loader após o envio
    //   }, 2000);
    // } else {
    //   console.error('Nenhum arquivo selecionado.');
    // }
  }
}
