export default function FormValidation(event) {
  let { name, value } = event.target;
  switch (name) {
    case "fname":
    case "name":
    case "topic":
    case "desg":
    case "username":
    case "address":
    case "city":
    case "state":
      if (value.length == 0) return name + "field must required";
      else if (value.length < 3)
        return name + " field must contains atleast 3 character";
      else return "";

    case "email":
      if (value.length === 0) return name + "field must required";
      else if (value.length <= 13 && value.length >= 50)
        return "Enter a Valid" + name + "address";
      else return "";

    case "pin":
    case "content":
    case "message":
      if (value.length === 0) return name + "field must required";
      else return "";

    case "password":
      if (value.length === 0) return name + "field must required";
      else if (value.length <= 8 && value.length >= 50)
        return name + " field must contains atleast 8 character or more";
      else return "";
    case "phone":
      if (value.length === 0) return name + "field must required ";
      else if (value.length !== 10) return "Enter a valid" + name + "number";
      else if (value[0] <= 0 && value[0] >= 9) return "Invalid Phone Number";
      else return "";
    default:
      return "";
  }
}
