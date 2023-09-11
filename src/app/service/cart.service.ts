import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  search = new BehaviorSubject<string>('');
  constructor() {}
  ngOnInit(): void {}
}
