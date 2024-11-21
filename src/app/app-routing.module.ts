import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineComponent } from './charts/line/line.component';
import { AreaComponent } from './charts/area/area.component';
import { ColumnBarComponent } from './charts/column-bar/column-bar.component';
import { PieComponent } from './charts/pie/pie.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'linechart', component: LineComponent },
  { path: 'area', component: AreaComponent },
  { path: 'columnbar', component: ColumnBarComponent },
  { path: 'pie', component: PieComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}