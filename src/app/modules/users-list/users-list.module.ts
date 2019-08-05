import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

import { UsersListComponent } from './components/users-list/users-list.component';
import { PaginationResolver } from './resolvers/pagination.resolver';
import { UsersListRoutingModule } from './users-list-routing.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [PaginationResolver],
})
export class UsersListModule {}
