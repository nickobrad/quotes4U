export class QuotesTemplate {
    isHidden!: boolean;
    constructor(public id:number, public author:string, public votes:number){
        this.isHidden = false;    
    }
}

// showDescription:boolean;
//     constructor(public id:number, public nameOfGoal:string, public description:string, public completeDate:Date){
//         this.showDescription = false;
//     }