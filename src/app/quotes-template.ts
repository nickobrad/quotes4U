export class QuotesTemplate {
    isHidden!: boolean;
    constructor(
        public id:number, 
        public author:string, 
        public typedQuote:string, 
        public postDate:Date, 
        public likes:number, 
        public dislikes:number, 
        public status:boolean = false)
        
    {
        this.isHidden = false;    
    }
}

