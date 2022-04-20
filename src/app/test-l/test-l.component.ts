import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-l',
  templateUrl: './test-l.component.html',
  styleUrls: ['./test-l.component.css'],
})
export class TestLComponent implements OnInit {
  private abc: string;
  constructor() {}

  ngOnInit(): void {
    const a = 1;
  }
}
