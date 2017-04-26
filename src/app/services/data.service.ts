export class DataService {
  private data : string[] = [];

  addData(inputRef:string){
    this.data.push(inputRef)
  }

  getData(){
    return this.data;
  }

}
