import angular from 'angular';

// Import Our Controllers
import { AddController } from './controllers/add.controller';
import { ListController } from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';

// Register our module
angular
  // Setter for a module
  .module('app', [])
  // Register our controller
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
;
