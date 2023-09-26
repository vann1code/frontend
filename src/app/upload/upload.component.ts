import { Component } from '@angular/core';
import { ApiService } from './api-service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private apiService: ApiService) { }

  selectedFile: File[] = [];
  isLoading = false;
  isComplete = false;
  isSuccess = false;
  isError = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files;
  }

  uploadFile() {
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;

    for (const file of this.selectedFile) {
      const formData = new FormData();
      formData.append('file', file);
      this.apiService.fazerRequisicaoPost(formData).subscribe(
        (response) => {
          console.log('Resposta da API:', response);
          this.isSuccess = true;
          this.isLoading = false;
        },
        (error) => {
          console.error('Erro na requisição:', error);
          this.isError = true;
          this.isLoading = false;
        }
      );
    }
  }
}
