# Simple BUPA Mock Service

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/teched2019-mission-mock-service-bupa)](https://api.reuse.software/info/github.com/SAP-samples/teched2019-mission-mock-service-bupa)

## Description

This is a simple Business Partner mock service that emulates the [OData Mock Service](https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html) that was [supplied for the "Extending SAP S/4HANA" book](https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html) and openSAP course. It exists primarily as a starting point for an SAP TechEd 2019 tutorial mission relating to the SAP Cloud Application (CAP) Programming Model and the SAP Cloud SDK.

## Requirements

This service is powered by CAP and is based upon a Core Schema Notation (CSN) definition of the original [Business Partner service API](https://api.sap.com/api/API_BUSINESS_PARTNER/overview). Note that this definition resource is not included in this repository.

This is a Node.js flavored CAP based project, and so both Node.js and CAP are required.

- Retrieve and install Node.js following the links and instructions on the [official Node.js website](https://nodejs.org)

- Install the CAP tools by following the instructions that can be found in this beginner tutorial: [Create a Business Service with Node.js using Visual Studio Code](https://developers.sap.com/tutorials/cp-apm-nodejs-create-service.html)

## Download and installation

You can download this repository in the normal way, i.e. with `git clone`.

### Starting the service

1. Install dependencies with `npm install`
1. Retrieve and save the `API_BUSINESS_PARTNER.json` CSN file to a new directory `srv/external/csn/`
1. Start the service with `npm start`
1. Access the address data at <http://localhost:3000/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress>

## Known issues

None.

## How to obtain support

Support for this content will be provided only within the context of SAP TechEd 2019, onsite, at the Developer Garage. Otherwise, this content is provided "as-is" with no other support.

## Contributing

If you wish to contribute code, offer fixes or improvements, please send a pull request (PR). Due to legal reasons, contributors will be asked to accept a [Developer Certificate of Origin (DCO)](https://en.wikipedia.org/wiki/Developer_Certificate_of_Origin) on submitting their first PR to this project. This DCO acceptance can be done in the PR itself - look out for the CLA assistant that will guide you through the simple process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.

