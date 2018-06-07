export default class loginForm{
    userName: string;
    password: string;

    constructor(obj?:any){
      this.userName = obj.userName || '';
      this.password = obj.password || '';
    }
  }