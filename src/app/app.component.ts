import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test-app";
  results: string[] = [];

  dropdownHandler(e: CustomEvent): void {
    console.log("e: ", e);
    this.results.push(e.detail);
  }
}
