import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

import { environment } from "../../../../environments/environment";
import { getUsers, usersError, usersFetched } from "./users.actions";
import { User, UserTodo } from "../interfaces/user-interface";
import { PaginationDataService } from "../../../shared/services/pagination-data.service";

@Injectable()
export class UsersEffects {
  baseApiUrl = environment.baseApiUrl;
  apiUsersPrefix = this.baseApiUrl + "users";
  apiTodosPrefix = this.baseApiUrl + "todos";

  constructor(
    private actions$: Actions, private http: HttpClient,
    private toastr: ToastrService, private paginationDataService: PaginationDataService,
    private route: ActivatedRoute
  ) {
  }

  getUsers = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsers),
      switchMap(() => {
        return this.http.get<User[]>(`${ this.apiUsersPrefix }`).pipe(
          switchMap(users => {
            return this.http.get<UserTodo[]>(`${ this.apiTodosPrefix }`).pipe(
              map(usersTodos => {
                const paginationData = this.paginationDataService.calculatePaginationData(this.route.snapshot.queryParams["page"] ? +this.route.snapshot.queryParams["page"] : 1, users.length);
                this.paginationDataService.setPaginationData(paginationData);
                return usersFetched({ users, usersTodos });
              }),
              catchError((errorRes: HttpErrorResponse) => this.handleError(errorRes.message))
            );
          }),
          catchError((errorRes: HttpErrorResponse) => this.handleError(errorRes.message))
        );
      })
    );
  });

  handleError(errorMessage: string) {
    this.toastr.error(errorMessage);
    return of(usersError({ errorMessage }));
  }
}
