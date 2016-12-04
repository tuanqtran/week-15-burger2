'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers',
      [
        {burger_name:'Big Mac'},
        {burger_name:'Whooper Jr'},
        {burger_name:'Ahi Tuna Burger'},
        {burger_name:'Sushi Burger'},
        {burger_name:'Double Stacker'},
        {burger_name:'Quad Stacker'}        
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
