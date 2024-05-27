import { ChangeDetectionStrategy, Component } from "@angular/core";

import { RouterLinkActiveOptions } from "../../../config/router-link-active-options";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  routerLinkActiveOptions = RouterLinkActiveOptions;
}
