import angular from 'angular';
import 'angular-ui-router';

// Import Our Controllers
import { ListController } from './controllers/list.controller';
import { AddController } from './controllers/add.controller';
import { SingleController } from './controllers/single.controller';

// Import our Configuration
import { config } from './config';

const url ='https://secret-forest-21470.herokuapp.com/collections/angular-wed'
// Start Angular
angular
  // Setter for a module(register)
  .module('app', ['ui.router'])
  // Register our configuration
    .config(config) // only have one so you don't have to give it a name like the controllers below
  // Add a an app URL constant
  .constant('URL', url)
  // Register our controllers
  .controller('ListController', ListController)
  .controller('AddController', AddController)
  .controller('SingleController', SingleController)
;
