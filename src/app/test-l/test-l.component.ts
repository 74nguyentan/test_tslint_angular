import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-l',
  templateUrl: './test-l.component.html',
  styleUrls: ['./test-l.component.scss'],
})
export class TestLComponent implements OnInit {
  private abc: string;
  constructor() {}

  ngOnInit(): void {
    const a = 1;

    // Console.log(a);
    if (isNaN(a)) {
    }
  }

  ds(a: string, b: string, c: string) {
    console.log(a, b, c);
  }
}
