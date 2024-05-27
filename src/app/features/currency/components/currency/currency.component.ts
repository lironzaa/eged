import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";

import { CurrencyService } from "../../services/currency.service";
import { CurrencyApi } from "../../interfaces/currency-api-interface";
import { IsExchangeRateChanged } from "../../interfaces/is-exchange-rate-changed-interface";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrl: "./currency.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent {
  exchangeRate$: Observable<CurrencyApi>;
  isExchangeRateChanged$: Observable<IsExchangeRateChanged>;
  fromCurrencyKey = "USD";
  toCurrencyKey = "JPY";

  constructor(private currencyService: CurrencyService) {
    this.isExchangeRateChanged$ = this.currencyService.getIsExchangeRateChangedListener();
    this.exchangeRate$ = this.currencyService.getCurrencyExchangeRate(this.fromCurrencyKey, this.toCurrencyKey);
  }
}
