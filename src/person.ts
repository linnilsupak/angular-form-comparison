export default class Person{
    userName: string;
    password: string;

    constructor(obj?:any){
      this.userName = (obj && obj.userName)  || '';
      this.password = (obj && obj.password )|| '';
    }
  }