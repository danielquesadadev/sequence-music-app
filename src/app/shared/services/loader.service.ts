import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loading.asObservable();

  show(): void {
    this.loading.next(true);
  }

  hide(): void {
    this.loading.next(false);
  }
}
