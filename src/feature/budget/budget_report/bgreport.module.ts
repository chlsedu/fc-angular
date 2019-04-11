import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from '../budget.route';
import { BgrptaskBusiness } from './business/bgrptask.business';
import { BgrptaskComponent } from './components/bgrptask/bgrptask.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(Routers)],
  declarations: [
    BgrptaskComponent
  ],
  providers: [
    BgrptaskBusiness
  ]
})
export class BgreportModule {}