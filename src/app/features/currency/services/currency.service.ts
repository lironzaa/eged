import { Injectable } from "@angular/core";
import { switchMap, tap, shareReplay } from "rxjs/operators";
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../environments/environment";
import { CurrencyApi } from "../interfaces/currency-api-interface";
import { IsExchangeRateChanged } from "../interfaces/is-exchange-rate-changed-interface";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  private apiUrl = "/api/query";
  currencyApiKey = environment.currencyApiKey;
  private previousExchangeRate = 0;
  private isExchangeRateChanged = new BehaviorSubject<IsExchangeRateChanged>({
    isChanged: false,
    changeStyle: null,
  });
  isPreviousExchangeValues = false;

  constructor(private http: HttpClient) {
  }

  getCurrencyExchangeRate(fromCurrency: string, toCurrency: string): Observable<CurrencyApi> {
    // return this.http.get<CurrencyApi>(`${ this.apiUrl }?function=CURRENCY_EXCHANGE_RATE&from_currency=${ fromCurrency }&to_currency=${ toCurrency }&apikey=${ this.currencyApiKey }`);
    return timer(0, 20000).pipe(
      switchMap(() => {
        const newRate = this.generateRandomExchangeRate();
        return of({
          "Realtime Currency Exchange Rate": {
            "1. From_Currency Code": "USD",
            "2. From_Currency Name": "United States Dollar",
            "3. To_Currency Code": "JPY",
            "4. To_Currency Name": "Japanese Yen",
            "5. Exchange Rate": +newRate.toFixed(8),
            "6. Last Refreshed": new Date().toISOString(),
            "7. Time Zone": "UTC",
            "8. Bid Price": +(newRate - 0.0027).toFixed(8),
            "9. Ask Price": +(newRate + 0.0023).toFixed(8)
          }
        });
      }),
      tap(currencyApiValues => {
        if (this.isPreviousExchangeValues) {
          this.isExchangeRateChanged.next({
            isChanged: this.previousExchangeRate !== currencyApiValues["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
            changeStyle: this.previousExchangeRate < currencyApiValues["Realtime Currency Exchange Rate"]["5. Exchange Rate"] ? "green" : "red",
          })
        }
        this.isPreviousExchangeValues = true;
        this.previousExchangeRate = currencyApiValues["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      }),
      shareReplay(1)
    );
  }

  private generateRandomExchangeRate(): number {
    return Math.random() * (158 - 155) + 155;
  }

  getIsExchangeRateChangedListener(): Observable<IsExchangeRateChanged> {
    return this.isExchangeRateChanged.asObservable();
  }
}
