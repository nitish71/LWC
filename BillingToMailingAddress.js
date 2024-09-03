import { LightningElement } from 'lwc';

export default class BillingToMailingAddress extends LightningElement {

    mailingAdd;
    billingAdd;
    handleChangeValue(event){
        this.billingAdd=event.target.value;
    }
    handleBtnClick(){
        this.mailingAdd=this.billingAdd;
    }
}
