import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { RoleGuard } from "./auth/role.guard";
import { ReverseAuthGuard } from "./auth/reverse-auth.guard";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
  // {
  //   path: "login",
  //   component: LoginComponent,
  //   canActivate: [ReverseAuthGuard],
  //   pathMatch: "full"
  // },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts/admin/admin-layout.module").then(m => m.AdminLayoutModule),
        // canActivate: [RoleGuard], data: { expectedRole: ["admin"] }
      }
    ]
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    // RouterModule.forRoot(routes, {
    //   useHash: true
    // })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
