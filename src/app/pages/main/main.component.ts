import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data = [
    {name: 'qwe', created: 'December 20,2018'},
    {name: 'asd', created: 'December 20,2018'},
    {name: 'zxc', created: 'December 20,2018'},
    {name: 'qwe', created: 'December 20,2018'},
    {name: 'asd', created: 'December 20,2018'},
    {name: 'zxc', created: 'December 20,2018'},
    {name: 'qwe', created: 'December 20,2018'},
    {name: 'asd', created: 'December 20,2018'},
    {name: 'zxc', created: 'December 20,2018'},
    {name: 'qwe', created: 'December 20,2018'},
    {name: 'asd', created: 'December 20,2018'},
    {name: 'zxc', created: 'December 20,2018'},
    {name: 'qwe', created: 'December 20,2018'},
    {name: 'asd', created: 'December 20,2018'},
    {name: 'zxc', created: 'December 20,2018'},
    {name: 'qwe', created: 'December 20,2018'},
    {name: 'asd', created: 'December 20,2018'},
    {name: 'zxc', created: 'December 20,2018'},
  ]
  constructor() { }

  ngOnInit() {}

  handleToggle(event) {
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
