import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test-l',
  templateUrl: './test-l.component.html',
  styleUrls: ['./test-l.component.scss'],
})

// SAI
export class TestLComponent implements OnInit {
  constructor() {}

  // ĐÚNG
  ngOnInit(): void {
    const a = 1;
  }

  tinhHieu(a: number, b: number, c: number, d: number, e: number, f: number) {
    let hieu = a - b - c - d - e - f;
  }
  // ĐÚNG
  tinhTong(a: number) {  // SAI
    // ĐÚNG
    let tong = a; // SAI
  }
}
