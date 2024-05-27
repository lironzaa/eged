import { IsActiveMatchOptions } from "@angular/router";

export const RouterLinkActiveOptions: IsActiveMatchOptions = {
  matrixParams: "ignored",
  queryParams: "ignored",
  fragment: "ignored",
  paths: "exact"
};
