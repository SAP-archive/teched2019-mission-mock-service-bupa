const express = require('express')
const cds = require('@sap/cds')

const { PORT=3000 } = process.env
const app = express()

cds.serve('all').in(app)

app.listen (PORT, ()=> console.info(`server listening on http://localhost:${PORT}`))

// Seed with sample data
cds.deploy('srv').to('sqlite::memory:',{primary:true}) .then (async db => {

	const { A_BusinessPartnerAddress: Addresses } = db.entities('API_BUSINESS_PARTNER')
	console.log('Adding sample data...')

	const addresses = db.run (INSERT.into (Addresses+'') .entries (
		{
			BusinessPartner: '1003764',
			AddressID: '28238',
			CityName: 'Walldorf',
			StreetName: 'Dietmar-Hopp-Allee'
		},
		{
			BusinessPartner: '1003765',
			AddressID: '28241',
			CityName: 'Palo Alto',
			StreetName: 'Hillview Avenue'
		},
		{
			BusinessPartner: '1003766',
			AddressID: '28244',
			CityName: 'Hallbergmoos',
			StreetName: 'Zeppelinstraße'
		},
		{
			BusinessPartner: '1003767',
			AddressID: '28247',
			CityName: 'Potsdam',
			StreetName: 'Konrad-Zuse-Ring'
		}
	))

  await Promise.all ([addresses])

}) .catch (console.error)
