export class QuoteClass {

    showDescription: boolean;
  quote: any;

    constructor(
        public id: number, 
        public quotename: string, 
        public author: string, 
        public publisher: string, 
        public completeDate: Date,
        public vote:number,
        public unvote:number
        )
        {
      this.showDescription=false;
   }

}
