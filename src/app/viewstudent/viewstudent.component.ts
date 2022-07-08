import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
 {"name":"sala","age":20,"photo":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"},
{"name":"Aromal","age":21,"photo":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"},
{"name":"anu","age":21,"photo":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"},
{"name":"pindi","age":20,"photo":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"},
{"name":"akki","age":20,"photo":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"},
{"name":"pakkkkk","age":20,"photo":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"}



]
}