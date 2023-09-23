import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' }, // Rota padrão
  { path: 'upload', component: UploadComponent }, // Rota para o componente de upload
  // Adicione outras rotas para seus componentes aqui, se necessário.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
