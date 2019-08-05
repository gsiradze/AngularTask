import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { UserDataComponent } from './components/user-data/user-data.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserDataComponent],
  imports: [CommonModule, UserRoutingModule, MatCardModule],
})
export class UserModule {}
