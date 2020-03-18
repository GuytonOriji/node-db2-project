const express = require('express')

const knex = require('knex')
const router = express.Router()

const db = require('../data/connect.js')




router.use(express.json())
	
	



router.get('/',(req,res)=>{
	db('cars')
	.then(go=>{
		res.status(201).json({cool:go})
})
	.catch(err=>res.status(500).json({error:"err"}))

})


	router.post('/', (req,res)=>{

		db('cars')
		.insert(req.body)
		.then(ids=>{
			res.status(201).json({created:`created with id number ${ids}`})
		})
		.catch(err=>{
			res.status(500).json({err:"Sorry, could not add car at this moment"})
		})
	})



module.exports = router