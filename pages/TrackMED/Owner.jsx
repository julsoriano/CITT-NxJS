import { Base } from './Base';

// layout for this page
import Admin from "layouts/Admin.js";

// Inheritance: https://blogs.msdn.microsoft.com/premier_developer/2018/06/17/angular-how-to-simplify-components-with-typescript-inheritance/
export default class Owner extends Base {

  itemApi = 'api/Owner';
  // itemApi = 'api/Owner';

  async componentDidMount() {   
    await this.getItems(this.itemApi);
  }

}

Owner.layout = Admin;