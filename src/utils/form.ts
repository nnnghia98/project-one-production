import { IPaymentDetailFormValues, IPaymentDetailFormError } from "interfaces";
import { PHONE_NUMBER_REGEXP } from "constant";

export const validateValues = (values: IPaymentDetailFormValues) => {
  const errorMessages: IPaymentDetailFormError = {};

  Object.entries(values).forEach((value) => {
    switch (value[0]) {
      case "firstName":
      case "lastName":
      case "address":
      case "city":
      case "postalCode":
        if (!value[1] || !value[1].length) {
          errorMessages[value[0]] = "This field is required!";
        }
        break;
      case "phoneNumber":
        console.log(PHONE_NUMBER_REGEXP.test(value[1]));

        if (!PHONE_NUMBER_REGEXP.test(value[1])) {
          errorMessages[value[0]] = "Phone number is not valid!";
        }

        if (!value[1] || !value[1].length) {
          errorMessages[value[0]] = "This field is required!";
        }
        break;
      case "country":
        if (!value[1]) {
          errorMessages[value[0]] = "This field is required!";
        }
        break;
      default:
        break;
    }
  });

  return errorMessages;
};
