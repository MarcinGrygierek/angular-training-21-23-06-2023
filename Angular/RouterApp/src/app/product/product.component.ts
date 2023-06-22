import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  id: string = '';
  sub!: Subscription;

  constructor(private actRoute: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    this.sub = this.actRoute.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
