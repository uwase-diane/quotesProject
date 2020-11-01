export class QuoteClass {

    showDescription: boolean;
    quote: any;

   vote:number;
   unvote:number;
    constructor(
        public id: number, 
        public quotename: string, 
        public author: string, 
        public publisher: string, 
        public completeDate: Date
       
        )
        {
      this.showDescription=false;
   }

}
