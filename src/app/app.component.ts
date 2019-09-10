import { Component } from "@angular/core";
import { pFrags } from "./frags";
import { FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  control = new FormControl("");
  name = "Angular";

  navigateTo(val: number) {
    return pFrags.hello(val);
  }
}
