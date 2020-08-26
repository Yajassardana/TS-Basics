class Pointer{
  constructor(private x:number,private y:number){ //called on object declaration
  }
  draw(){
    console.log('X: '+ this.x+', Y: '+ this.y );
  }
  getDistance(another:Point){

  }
  get X(){
    return this.x;
  }
  set X(value:number){
    this.x = value;
  }
}
let pointer = new Pointer(1,2);
pointer.draw();
let x= pointer.X;
pointer.X = 10;