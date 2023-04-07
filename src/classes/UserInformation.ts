export class UserInformation {
  constructor(defaultJob: string) {
    this.job = defaultJob;
  }
  mail: String = "";
  name: String = "";
  age: String = "";
  job: String = "";
  address: String = "";
  highschool: String = "";
  academicBackground: String = "";
  pr: String = "";
  url: String = "";
  workStyle: String = "";
  other: String = "";
  toObject(): Object {
    return Object.assign({}, this);
  }
}
