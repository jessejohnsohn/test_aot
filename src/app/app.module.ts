import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { pFrags } from "./frags";
import {
  RootRouterLinkDirective,
  RootRouterLinkWithHrefDirective
} from "./app-root-router-link.directive";

const routes: Routes = [
  {
    path: pFrags.moduleRelativePath,
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
