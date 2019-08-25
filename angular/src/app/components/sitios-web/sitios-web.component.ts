import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'ng-sitios-web',
  templateUrl: './sitios-web.component.html',
  styleUrls: ['./sitios-web.component.css']
})
export class SitiosWebComponent implements OnInit {
	path:any;
	code:any = [
		{'name':'php', 'url_img':'php.png'},
		{'name':'laravel', 'url_img':'laravel.png'},
		{'name':'angular', 'url_img':'angular.png'},
		{'name':'bootstrap', 'url_img':'bootstrap.png'},
		{'name':'html', 'url_img':'html.png'},
		{'name':'css', 'url_img':'css.png'},
		{'name':'javascript', 'url_img':'javascript.png'},
		{'name':'vue', 'url_img':'vue.png'},
		{'name':'worpress', 'url_img':'worpress.png'},
		{'name':'json', 'url_img':'json.png'},
		{'name':'mysql', 'url_img':'mysql.png'},
		{'name':'ionic', 'url_img':'ionic.png'}
	]
  constructor() { }

  ngOnInit() {
  	this.path = environment.path;
  }

}
