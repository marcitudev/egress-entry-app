import { Routes } from "@angular/router";
import { StatisticComponent } from "../egress-entry/statistic/statistic.component";
import { EgressEntryComponent } from "../egress-entry/egress-entry.component";
import { DetailsComponent } from "../egress-entry/details/details.component";

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticComponent },
  { path: 'egress-entry', component: EgressEntryComponent },
  { path: 'details', component: DetailsComponent }
];
