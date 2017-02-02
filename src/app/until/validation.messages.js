"use strict";
var validationMessageConstants = (function () {
    function validationMessageConstants() {
        this.REQUIRED_MSG = " is required.";
        this.FIRST_NAME_REQUIRED = "Firstname" + this.REQUIRED_MSG;
        this.LAST_NAME_REQUIRED = "Lastname" + this.REQUIRED_MSG;
        this.FROM_DATE_REQUIRED = "From date" + this.REQUIRED_MSG;
        this.TO_DATE_REQUIRED = "To date" + this.REQUIRED_MSG;
        this.SINGLE_IMAGE_REQUIRED = "Single image" + this.REQUIRED_MSG;
        this.MULTIPLE_IMAGES_REQUIRED = "Multiple images" + this.REQUIRED_MSG;
        this.FIRST_NAME = "Firstname";
        this.LAST_NAME = "Lastname";
        this.SELECT = "Home number";
        this.ZIPCODE = "Zipcode";
        this.MOBILE_NUMBER = "Mobile number";
        this.EMAIL_ADDRESS = "Email address";
        this.CITY = "City" + this.REQUIRED_MSG;
        this.LENGTH_2_TO_10_CHARACTER = " length between 2 to 10 characters.";
        this.ZIPCODE_PATTERN = " 6 number must me input.";
        this.MOBILE_PATTERN = " must be enter 10 digits.";
        this.VALID_EMAIL_ADDRESS = "Please enter valid email address.";
    }
    return validationMessageConstants;
}());
exports.validationMessageConstants = validationMessageConstants;
//# sourceMappingURL=validation.messages.js.map