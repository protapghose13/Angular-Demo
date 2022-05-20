'use strict';

angular.
  module('core.employee').
  factory('employeeService', ['Restangular',
    function(Restangular) {
      function reloadPage(){
        location.reload();
      }

      function isValid(value){
        return (value !== undefined && value !== null);
      }

      function getEmployees(){
          return Restangular.all('employees').getList();
      }

      function getEmployee(employeeId){
        return Restangular.one('employees', employeeId).get();
      }

      function createEmployee(employee){
        var emps = Restangular.all('employees');
        emps.post(employee);
        reloadPage();
      }

      function updateEmployee(employee){
        if(isValid(employee) && isValid(employee.id)){
          Restangular.one('employees', employee.id).get().then(function(emp){
            if( isValid(emp) ){
              emp.firstName = employee.firstName;
              emp.lastName = employee.lastName;
              emp.emailId = employee.emailId;
              emp.put();
              reloadPage();
            }
          });
        }
      }

      function deleteEmployee(employeeId){
        if(isValid(employeeId)){
          Restangular.one('employees', employeeId).get().then(function(emp){
            if(isValid(emp)){
              emp.remove();
              window.location = 'http://localhost:8000/#!/employees';
              reloadPage();
            }
          });
        }
      }

      return {
        getEmployees : getEmployees,
        getEmployee : getEmployee,
        createEmployee : createEmployee,
        updateEmployee : updateEmployee,
        deleteEmployee : deleteEmployee
      };
    }
  ]);

// (function() {
// 	angular.module('core.employee').factory('employeeService',
// 		['Restangular', function(Restangular) {
//       alert("dfdsfsdfsd");
// 			var service = Restangular.service("employees");  
//       // I can add custom methods to my Students service
//       // by adding functions here service
//       service.validateData = function(student) {
//           //validate student data
//       }
//       return service;
// 		}]);
// }());
