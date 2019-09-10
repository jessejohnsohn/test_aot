import { Component } from "@angular/core";
import { frags } from "./frags";
import { FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  control = new FormControl("");
  name = "Angular";

  frags = frags;

  navigateTo(val: number) {
    return frags.hello(val);
  }
}
