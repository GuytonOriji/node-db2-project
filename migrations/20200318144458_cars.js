
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=>{
  	//VIN, make, model, and mileage
  	tbl.increments('id')//primary key for each car


  	//columns for each string needed value for the car
  	tbl.string('vin', 17).unique().index()
  	tbl.string('make', 120).index()
  	tbl.string('model', 80).index()
  	tbl.integer('mileage', 80)


  	



  	//transmission type and status of the title
  	tbl.string('transmission', 120)
  	tbl.string('title', 80)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('cars')
};
