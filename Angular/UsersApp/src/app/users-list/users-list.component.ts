import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  users: string[] = [];

  @Input()
  handleDelete!: (index: number) => void;

  @Output()
  onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(index: number) {
    this.onDelete.emit(index);
  }

}
