# Mission BUPA Mock Service

This is a very simple Business Partner mock service that emulates the [OData Mock Service](https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html) that was supplied for the "Extending SAP S/4HANA" book and openSAP course.

This service is powered by CAP and is based upon [CSN](./srv/external/csn/API_BUSINESS_PARTNER.json) for the original [Business Partner service API](https://api.sap.com/api/API_BUSINESS_PARTNER/overview). It is designed to be used as a starting point for the first Tutorial in the SAP TechEd 2019 Mission "Combine CAP with Cloud SDK for S/4 Extensions".

> Being based on CAP the OData service is -- or at least starts out as -- a V4 service.

## Starting the service

1. Install dependencies with `npm install`
1. Start the service with `npm start`
1. Access the address data at <http://localhost:3000/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress>
