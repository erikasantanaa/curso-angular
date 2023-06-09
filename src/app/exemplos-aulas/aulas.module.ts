import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloVidaComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    NgclassComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    DataBindingComponent,
    CicloVidaComponent,
    DiretivaNgifComponent
  ]
})
export class AulasModule { }
