import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onfunction() {
    var div = 360 / 6;
    var radius = 150;
    var parentdiv = document.getElementById('parentdiv');
    // Todo:: change this another day...
    var offsetToParentCenter =  4 // parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
    var offsetToChildCenter = 20;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 1; i <= 6; ++i) {
      var childdiv = document.createElement('div');
      childdiv.className = 'div2';
      childdiv.style.position = 'absolute';
      var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
      var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
      childdiv.style.top = (y + totalOffset).toString() + "px";
      childdiv.style.left = (x + totalOffset).toString() + "px";
      // parentdiv.appendChild(childdiv);
    }
  }
}
