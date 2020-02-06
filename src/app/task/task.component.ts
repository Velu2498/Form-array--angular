import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormArray} from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //option input
  form = new FormGroup({
      array:new FormArray([
        new FormGroup({
          0:new FormControl(),
          1:new FormControl()
        }),
      ])
    });

  //add option function
  fun(){

    let arr=this.form.get('array') as FormArray
    arr.push(
      new FormGroup({
        0:new FormControl(),
        1:new FormControl()
      })
    )

    // let val=this.form.value
    // console.log(this.form.value)
    // console.log(arr.value)
    
  //   this.v=[]

  //   for(let i=0;i<arr.length-1;i++){
  //   var valu =document.getElementById(i).value.split(",") 
  //   this.v.push (...valu)
  //   // console.log(valu)
  // } 
// console.log(this.form.value)
// var x=this.form.get('array') as FormArray
// console.log(x.controls)
  }


v=[]  //total array value ([xl,xxl])     
pd=[]  //for seperate value (xl-black)

//on change functiom
  funp(){
    let arr=this.form.get('array') as FormArray
    this.v=[]
    this.pd=[]

    //loop for getting array value and push it to v
    for(let i=0;i<=arr.length-1;i++){
      let q=i.toString()
      var valu =document.getElementById(q).value.split(",")
      // if(...valu !=  null) {}
      this.v.push (valu)
      // this.v.push (...valu)
      console.log(typeof(valu))
      // console.log(this.v)
      console.log(document.getElementById(q).value)
    }
    
    for(let i=0;i<=this.v.length-1;i++){ 

      for(let j=0;j<=this.v[i].length-1;j++){

        // console.log(this.v[i][j])
        if(this.v.length != 0 && this.v.length != 1){

        for(let k=0;k<this.v[i+1].length;k++){
          //  console.log(this.v[i][j] + this.v[i+1][k])
            this.pd.push(this.v[i][j] +"-"+this.v[i+1][k]);
        }
      }

        else{
          this.pd.push(this.v[i][j]);
        }

      }
    
    }
  }

  //input change
  change=false;
  func(){
   this.change=true;
  }


}