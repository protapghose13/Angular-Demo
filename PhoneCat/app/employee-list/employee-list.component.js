'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('employeeList').
  component('employeeList', {
    templateUrl: 'employee-list/employee-list.template.html',
    controller: ['Phone', '$scope',
      function EmployeeListController(Phone, $scope) {
        this.phones = Phone.query();
        this.orderProp = 'age';

        $scope.clicked = function(phone){
          window.location = "#!/phones/" + phone.id;
        }
      }
    ]
  });
