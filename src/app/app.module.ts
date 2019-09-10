import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import {
  RootRouterLinkDirective,
  RootRouterLinkWithHrefDirective
} from "./app-root-router-link.directive";
import { paths } from "./frags";

const routes: Routes = [
  {
    path: paths.relative,
    component: HelloComponent
  }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RootRouterLinkDirective,
    RootRouterLinkWithHrefDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
