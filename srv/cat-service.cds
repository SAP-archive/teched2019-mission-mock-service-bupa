using API_BUSINESS_PARTNER as BUPA_API from './external/csn/API_BUSINESS_PARTNER';

service API_BUSINESS_PARTNER @(path: '/sap/opu/odata/sap/API_BUSINESS_PARTNER') {
	@cds.persistence.skip:false
	@cds.persistence.table
	entity A_BusinessPartner as projection on BUPA_API.A_BusinessPartnerType;
	@cds.persistence.skip:false
	@cds.persistence.table
	entity A_BusinessPartnerAddress as projection on BUPA_API.A_BusinessPartnerAddressType;
}
