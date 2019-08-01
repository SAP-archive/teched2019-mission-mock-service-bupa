# BUPA Mock Service

Simple Business Partner mock service that emulates the [OData Mock Service](https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html) that was supplied for the "Extending SAP S/4HANA" book and openSAP course.

This service is powered by CAP and is based upon [CSN](./srv/external/csn/API_BUSINESS_PARTNER.json) for the original Business Partner service API. It uses the [OData v2 Adapter Proxy for CDS OData v4 Services](https://github.wdf.sap.corp/cds-community/cds-odata-v2-adapter-proxy) to provide both V4 (native) and V2 (adapter-proxied) versions of the OData API.

## Noteworthy

- no `db/` directory containing any schema
- service definition consists of projections onto BUPA API supplied as CSN (JSON)
- `@cds.persistence` annotations allowing for local storage for this imported API
- requires CDS version 3.15+ (currently [available from Nexus snapshots](./.npmrc))
- adapter proxy is employed "in-process" as piece of Express middleware
- an in-memory SQLite database is used, with data inserted via CQL at startup

## Starting the service

1. Install dependencies with `npm install`
1. Start the service with `PORT=3000 npm start` (see note on port below)
1. Access the address data at:
    - V4: <http://localhost:3000/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress>
    - V2: <http://localhost:3000/v2/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress>
    
> While the default port for CAP-based services is 4004, we set the value of the `PORT` environmental variable on startup to something different (3000) so that there is less chance of a clash when consuming this mock service (that is supposed to represent an S/4 system) from another CAP-based service that we would expect to run on the default 4004 port. The value of 3000 often represents a mocked S/4 or other backend system (there's no other major reason why it's 3000).

## Simple test

Once you have the service running, you can use the Cloud SDK library in a simple test (note this should be against the V2 endpoint, as you can see from the URL in the destination passed to `execute`) like this:

> Use the `.editor` command in the Node REPL to get to a multiline input prompt so you can paste all of this in at once

```javascript
const BusinessPartnerAddress = require('@sap/cloud-sdk-vdm-business-partner-service').BusinessPartnerAddress

BusinessPartnerAddress
        .requestBuilder()
        .getAll()
        .select(
                BusinessPartnerAddress.BUSINESS_PARTNER,
                BusinessPartnerAddress.ADDRESS_ID,
                BusinessPartnerAddress.CITY_NAME,
        )
        .execute({url:'http://localhost:3000/v2'})
        .then(console.log)
```

> The `@sap/cloud-sdk-vdm-business-partner-service` module has been added as a development dependency in this project for this purpose only.
