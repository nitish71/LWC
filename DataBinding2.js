import { LightningElement } from 'lwc';
export default class DataBinding2 extends LightningElement {

    employee  = {
        firstName: 'Kiran',
        currentAge : '51',
        currentCity : 'Delhi',
        currentProfession: 'Software Engineer'

    }

    get getEmployeeRank(){
        const Rank = this.employee.currentAge>50?'First':this.employee.currentAge>=30?'Second':'Third';
        return Rank;
    }
    
    // firstName = 'Nitish';
    // lastName = 'Kumar';

}
