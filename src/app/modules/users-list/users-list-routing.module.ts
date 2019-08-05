import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { PaginationResolver } from './resolvers/pagination.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      paginationInfo: PaginationResolver,
    },
    runGuardsAndResolvers: 'always',
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {}
