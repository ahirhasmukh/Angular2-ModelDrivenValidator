export class validationMessageConstants{
    public REQUIRED_MSG : string = " is required."
    public FIRST_NAME_REQUIRED: string ="Firstname" + this.REQUIRED_MSG
    public LAST_NAME_REQUIRED: string ="Lastname" + this.REQUIRED_MSG
    public FROM_DATE_REQUIRED: string ="From date" + this.REQUIRED_MSG
    public TO_DATE_REQUIRED: string ="To date" + this.REQUIRED_MSG
    public SINGLE_IMAGE_REQUIRED: string ="Single image" + this.REQUIRED_MSG
    public MULTIPLE_IMAGES_REQUIRED: string ="Multiple images" + this.REQUIRED_MSG
    public FIRST_NAME: string="Firstname"
    public LAST_NAME: string ="Lastname"
    public SELECT: string = "Home number"
    public ZIPCODE: string = "Zipcode"
    public MOBILE_NUMBER: string="Mobile number"
    public EMAIL_ADDRESS: string="Email address"
    public CITY: string="City" + this.REQUIRED_MSG
    public LENGTH_2_TO_10_CHARACTER : string = " length between 2 to 10 characters."
    public ZIPCODE_PATTERN: string=" 6 number must me input."
    public MOBILE_PATTERN: string=" must be enter 10 digits."
    public VALID_EMAIL_ADDRESS: string="Please enter valid email address."
}