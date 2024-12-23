import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "ngdc-root",
  imports: [MatSidenavModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "Angular Starter";
}
