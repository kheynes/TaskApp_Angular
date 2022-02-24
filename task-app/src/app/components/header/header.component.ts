import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	title: string = 'Track My Tasks';

	constructor() { }

	ngOnInit(): void {
	}

	toggleNewTask() {
		console.log('toggle');
	}

}
