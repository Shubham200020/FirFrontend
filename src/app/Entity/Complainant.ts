export class Complainant{
    coname:string
    dob:string
    aadharNumber:string
    occupation:string
    mobileNumber:string
    nationality:string
    address:string
    information:string
    constructor( coname:string="",
        dob:string="",
        aadharNumber:string="",
        occupation:string="",
        mobileNumber:string="",
        nationality:string="",
        address:string="",
        information:string=""){
            this.coname=coname
            this.dob=dob
            this.aadharNumber=aadharNumber
            this.occupation=occupation
            this.mobileNumber=mobileNumber
            this.nationality=nationality
            this.address=address
            this.information=information
    }
}