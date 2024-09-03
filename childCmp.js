import { LightningElement, api } from 'lwc';
export default class ChildCmp extends LightningElement {
  @api firstName = "World";
  lowercaseLastName = 'default value';
   
  @api
   get lastName() {
       return this.lowercaseLastName.toUpperCase();
   }
   set lastName(value) {
      this.lowercaseLastName = value;
   }
}
