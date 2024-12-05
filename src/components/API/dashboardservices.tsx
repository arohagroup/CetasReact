import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../core/services/addToken';

// Base URLs configuration
const environment = {
  pyServerURL: 'https://demo7.cetascyber.com/py-mba/',
  serverUrl: 'https://demo7.cetascyber.com/cybernetix',
  serverDomainUrl: 'https://demo7.cetascyber.com/',
  newServerUrl: 'https://demo7.cetascyber.com/node/cybernetix/v1',
  mainURL: 'https://demo7.cetascyber.com/cybernetix/v1/dashboard',
  subURL: 'https://demo7.cetascyber.com/cybernetix/v1/caseMgmt',
  entityURL: 'https://demo7.cetascyber.com/cybernetix/v1/entity',
  identityURL: 'https://demo7.cetascyber.com/cybernetix/v1/identity',
};

// this.mainURL = `${environment.serverUrl}/v1`;
//     this.serverUrl = `${environment.newServerUrl}`;
//   }

const mainURL = 'https://demo7.cetascyber.com/cybernetix/v1';

const serverUrl = 'https://demo7.cetascyber.com/cybernetix';

const newMainURL = environment.newServerUrl;

class DashboardService {
  
  // const dashboardcountgeturl = `${environment.mainURL}/counts/all?duration=${duration}`;


  //dashboard-start//

  getDashboardCounts(duration: string): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/counts/all?duration=${duration}`;
    return axiosInstance.get(url);
  }

  getDataQualityCount(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/dataQuality/getDataQualityCount`;
    return axiosInstance.get(url);
  }

  getUncorrelatedCount(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/dataQuality/getUncorrelatedCount`;
    return axiosInstance.get(url);
  }

  getTopEntityByCategory(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/entity/getTopEntityByCategory`;
    return axiosInstance.get(url);
  }

  getAlertChangePercentage(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getAlertChangePercentage`;
    return axiosInstance.get(url);
  }

  getIncidentChangePercentage(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getIncidentChangePercentage`;
    return axiosInstance.get(url);
  }

  getFPChangePercentage(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getFPChangePercentage`;
    return axiosInstance.get(url);
  }

  getDataSourceAttributesDetails(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/dataSourceAttributesDetails`;
    return axiosInstance.get(url);
  }

  getAllHealthDashboardInfo(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/dashboardInfo`;
    return axiosInstance.get(url);
  }

  getAllFPR(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getAllFPR`;
    return axiosInstance.get(url);
  }

  supressFPR(ruleId: number): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/supressManualAlert/${ruleId}`;
    return axiosInstance.delete(url);
  }

  revokeFPR(ruleId: number, status: string): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/undoSupressAlert/${ruleId}/${status}`;
    return axiosInstance.delete(url);
  }

  getRiskCountByDepartment(): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/riskscountbydepartment/0/50?size=5`;
    return axiosInstance.get(url);
  }

  getRiskCountByTitle(): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/riskscountbytitle/0/0?size=5`;
    return axiosInstance.get(url);
  }

  getRiskCountByLocation(): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/riskscountbycountry/0?size=5`;
    return axiosInstance.get(url);
  }

  searchUserByName(entityName: string): Promise<AxiosResponse> {
    const encodedEntityName = encodeURI(entityName);
    const url = `${environment.mainURL}/searchRiskyEntities?entityName=${encodedEntityName}`;
    return axiosInstance.get(url);
  }

  getAiPredictions(offset: number, size: number): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/getTopPredictions/${offset}/${size}`;
    return axiosInstance.get(url);
  }

  getRiskTrend(size: number): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/getRiskTrend/${size}`;
    return axiosInstance.get(url);
  }

  getAlertGraph(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getAlertGraph`;
    return axiosInstance.get(url);
  }

  getIncidentTrend(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getIncidentGraph/`;
    return axiosInstance.get(url);
  }

  getAlertDetails(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/entity/getAlertDetails`;
    return axiosInstance.get(url);
  }

  getAllRiskyAlertGraph(alertype: string, duration: string): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/insight/getAllRiskyAlertGraph?alertype=${alertype}&duration=${duration}`;
    return axiosInstance.get(url);
  }

  getFPRTrend(size: number): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getFPRTrend/${size}`;
    return axiosInstance.get(url);
  }

  getIncidentTrendPieChart(duration: string): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/insight/getIncidentsGraph?duration=${duration}`;
    return axiosInstance.get(url);
  }

  getNoisyAlertGraph(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/insight/getNoisyAlertGraph`;
    return axiosInstance.get(url);
  }

  getTopViolators(entityType: string, size: number): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getTopViolators/${entityType}/${size}`;
    return axiosInstance.get(url);
  }

  getTrendingDatasourceandRuleId(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getTrendingDatasourceandRuleId`;
    return axiosInstance.get(url);
  }

  //dashboard-end//

  
  
  // data-ops--start//

  getAllDataOps(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/entity/getdataResourceTrend`;
    return axios.get(url);
  }

  getFilteredDataOps(entityType: string, entityId: string): Promise<AxiosResponse> {
    const encodedEntityId = encodeURIComponent(entityId);
    const url = `${environment.serverUrl}/v1/entity/getdataResourceTrendByEntity/${entityType}?entityId=${encodedEntityId}`;
    return axios.get(url);
  }

  getResourceTrendByAttributeAndValue(days: number, dataSourceId: string, attribute: string, value: string): Promise<AxiosResponse> {
    const encodedValue = encodeURIComponent(value);
    const url = `${environment.serverUrl}/v1/entity/getResourceTrendByAttributeAndValue/${days}/${dataSourceId}?attributename=${attribute}&values=${encodedValue}`;
    return axios.get(url);
  }
 
   getAllIngestionJob(page: number): Promise<AxiosResponse> {
    const url = `${mainURL}/connectors/getAllIngestionJob?page=${page}`;
    return axios.get(url);
  };
  
  
  getDistinctAttributeCounts(datasourceId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getDistinctAttributeCounts/${datasourceId}`;
    return axios.get(url);
  };
  
  
  getGraphData(days: number): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getResourceStats/${days}`;
    return axios.get(url);
  };
  
  // Function to get ingested graph data for a given number of days
  getIngestedGraphData(days: number): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getResourceStat/${days}`;
    return axios.get(url);
  };
  
  // Function to get ingestion trend by attribute and value
  getIngestionTrendByAttributeAndValue(days: number,dataSourceId: string,attribute: string,value: string): Promise<AxiosResponse> {
    const encodedValue = encodeURIComponent(value);
    const url = `${mainURL}/entity/getIngestionTrendByAttributeAndValue/${days}/${dataSourceId}?attributename=${attribute}&values=${encodedValue}`;
    return axios.get(url);
  };
  
  // Function to get attribute trend values for a given rule ID, attribute name, and other params
  getAttributeTrendValues(datasourceId: string,ruleId: string,attributename: string,date: string,entityType: string,searchString: string ): Promise<AxiosResponse>  {
    const url = `${mainURL}/entity/getAttributeTrendValues/${datasourceId}/${ruleId}?attributenames=${attributename}&date=${date}&entityType=${entityType}&searchString=${searchString}`;
    return axios.get(url);
  };
  
  // Function to get user resource trend by attribute and value
  getUserResourceTrendByAttributeAndValue(days: number,dataSourceId: string,attribute: string,entityType: string,searchString: string,value: string): Promise<AxiosResponse> {
    const encodedSearchString = encodeURIComponent(searchString);
    const encodedValue = encodeURIComponent(value);
    const url = `${mainURL}/entity/getUserResourceTrendByAttributeAndValue/${days}/${dataSourceId}?attributename=${attribute}&entityType=${entityType}&searchString=${encodedSearchString}&values=${encodedValue}`;
    return axios.get(url);
  };
  
  // Function to get user trend by attribute and value and date
  getUserRTrendByAttributeAndValueAndDate(days: number,dataSourceId: string,attribute: string,entityType: string,searchString: string,value: string,violationEventDate: string): Promise<AxiosResponse> {
    const encodedSearchString = encodeURIComponent(searchString);
    const url = `${mainURL}/entity/getUserRTrendByAttributeAndValueAndDate/${days}/${dataSourceId}?attributename=${attribute}&date=${violationEventDate}&entityType=${entityType}&searchString=${encodedSearchString}&values=${value}`;
    return axios.get(url);
  };
  
  // Function to get attribute list for a given data source ID
  getAttributeList(datasourceId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getFieldsNames/${datasourceId}`;
    return axios.get(url);
  };
  
  // Function to get user attribute names
  getUserAttributeNames(): Promise<AxiosResponse> {
    const url = `${mainURL}/hunting/getUserAttributeNames`;
    return axios.get(url);
  };
  
  // Function to get user attribute values for a given attribute names and search string
  getUserAttributeValues(attributenames: string, searchString: string): Promise<AxiosResponse> {
    const url = `${mainURL}/hunting/getUserAttributeValues?attributenames=${attributenames}&searchString=${searchString}`;
    return axios.post(url, '');
  };
  
  // Function to get user counts based on the provided data
  getUserCounts(data: object): Promise<AxiosResponse> {
    const url = `${mainURL}/hunting/getUserCounts/`;
    return axios.post(url, data);
  };
  
  // Function to get event filter attribute data for a given data source ID, attribute name, and search string
  getEventFilterAttributeData(datasourceId: string,attributename: string,searchString: string): Promise<AxiosResponse> {
    const url = `${mainURL}/hunting/getDistinctAttributeValues/${datasourceId}?attributenames=${attributename}&searchString=${searchString}`;
    return axios.get(url);
  };
  
// Function to get fields names aggregation for a given datasource ID
getFieldsNamesAggregation(datasourceId: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getFieldsNamesAggregation/${datasourceId}`;
  return axios.get(url);
};

// Function to get fields names for threat intelligence for a given datasource ID
getFieldsNamesThreatIntelligence(datasourceId: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getFieldsNamesThreatIntelligence/${datasourceId}`;
  return axios.get(url);
};

// Function to get distinct entity values with pagination and data filter
getDistinctEntityValues(endDate: string,entityType: string,startDate: string,page: number,data: object): Promise<AxiosResponse> {
  const url = `${mainURL}/hunting/getDistinctEntityValues?endDate=${endDate}&entityType=${entityType}&startDate=${startDate}&page=${page}`;
  return axios.post(url, data);
};

// Function to check for unusual patterns in the context
checkContextUnusualPattern(endDate: string,entityType: string,startDate: string,pageX: number,pageY: number,pageZ: number,data: object): Promise<AxiosResponse> {
  const url = `${mainURL}/hunting/checkContextUnusualPattern?endDate=${endDate}&entityType=${entityType}&pageX=${pageX}&pageY=${pageY}&pageZ=${pageZ}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function to auto-create filter based on a query
autoFilterCreation(query: string): Promise<AxiosResponse> {
  const url = `${mainURL}/hunting/autoFilterCreation?query=${query}`;
  return axios.post(url, '');
};

// Function to get distinct attribute data for a given datasource and attribute name
getAttributeData(datasourceId: string, attributename: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getDistinctAttributeValues/${datasourceId}?attributenames=${attributename}`;
  return axios.get(url);
};

// Function to get user distinct attribute values for a given datasource, attribute, entity type, and search string
getUserDistinctAttributeValues(datasourceId: string,attributename: string,entityType: string,searchString: string): Promise<AxiosResponse> {
  const encodedSearchString = encodeURIComponent(searchString);
  const url = `${mainURL}/entity/getUserDistinctAttributeValues/${datasourceId}?attributenames=${attributename}&entityType=${entityType}&searchString=${encodedSearchString}`;
  return axios.get(url);
};

// Function to get SSD entity results based on category and datasource
getSsdEntityResults(category: string, datasource: string): Promise<AxiosResponse>  {
  const url = `${mainURL}/entity/getSsdEntityResults?categoryName=${category}&dataSourceName=${datasource}`;
  return axios.get(url);
};

// Function to get SSD datasets based on category
getSsdDatasets(category: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getSsdDataSets?categoryName=${category}`;
  return axios.get(url);
};

// Function to get invalid data for a given attribute name
getInvalidData(attributename: string): Promise<AxiosResponse>  {
  const url = `${mainURL}/entity/getInvalidData/${attributename}`;
  return axios.get(url);
};

// Function to delete invalid data based on attribute and value
deleteInvalidData(attribute: string, value: string): Promise<AxiosResponse> {
  const encodedValue = encodeURIComponent(value);
  const url = `${mainURL}/entity/deleteInvalidDatas/${attribute}?values=${encodedValue}`;
  return axios.delete(url);
};

// Function to get raw fields names
getRawFieldsNames(): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getRawFieldsNames`;
  return axios.get(url);
};

// Function to add a data quality configuration
addDataQualityConfig(attribute: string, type: string): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/add?attributeName=${attribute}&configName=${type}`;
  return axios.post(url, '');
};

// Function to get all data quality configurations
getAllDataQualityConfig(): Promise<AxiosResponse>  {
  const url = `${mainURL}/dataQuality/all`;
  return axios.get(url);
};

// Function to delete a data quality configuration by ID
deleteDataQualityConfig(id: string): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/delete?id=${id}`;
  return axios.delete(url);
};

// Function to delete a data quality configuration by ID (alternate name)
deleteDataQualityConfigurations(id: string): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/deleteDataConfig?id=${id}`;
  return axios.delete(url);
};

// Function to add a data quality configuration with parameters
addDataQualityConfigurations(configName: string, parameters: string): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/addDataConfig?configName=${configName}&modificationAllowed=true&parameters=${parameters}`;
  return axios.post(url, '');
};

// Function to update a data quality configuration by ID and parameters
updateDataQualityConfiguration(id: string, param: object): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/updateDataConfig?id=${id}&parameters=${param}`;
  return axios.post(url, '');
};

// Function to get all data alerts
getAllDataAlerts(): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getAllDataAlerts`;
  return axios.get(url);
};

// Function to update notification alert for a given attribute and notification status
updateNotificationAlert(attributename: string, notification: boolean): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/updateNotificationAlert?attributeName=${attributename}&notification=${notification}`;
  return axios.get(url);
};

// Function to get all data quality configurations
getAllDataQualityConfigurations(): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/allConfig`;
  return axios.get(url);
};
// Function to create a refresh alert for data quality configuration
createRefreshAlerts(configName: string, data: any): Promise<AxiosResponse>  {
  const url = `${mainURL}/dataQuality/createDataAlert/${configName}?notification=${data}`;
  return axios.get(url);
};

// Function to get user names like a specified value
getUserNamesLike(attributename: string, value: string): Promise<AxiosResponse> {
  value = encodeURIComponent(value);
  const url = `${mainURL}/entity/getUserNamesLike/${attributename}?values=${value}`;
  return axios.get(url);
};

// Function to get event date data alert for a specific attribute
getEventDateDataAlert(attributename: string): Promise<AxiosResponse> {
  const url = `${mainURL}/dataQuality/getEventDateDataAlert/${attributename}`;
  return axios.get(url);
};

// Function to update invalid user ID for a given attribute
updateInvalidUserId(attribute: string, newValue: string, oldValue: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/updateInvalidUserId/${attribute}?newValue=${newValue}&oldValue=${oldValue}`;
  return axios.get(url);
};

// Function to get trending datasources
getTrendingDatasource(): Promise<AxiosResponse>  {
  const url = `${mainURL}/entity/getTrendingDatasource`;
  return axios.get(url);
};

// Function to get event date trend stats by datasource ID
getEventDateTrendStatsbyDSId(days: number, dataSourceId: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getEventDateTrendStatsbyDSId/${days}/${dataSourceId}`;
  return axios.get(url);
};

// Function to get ingestion trend by datasource ID
getIngestionTrendByDSId(days: number, dataSourceId: string): Promise<AxiosResponse>  {
  const url = `${mainURL}/entity/getIngestionTrendByDSId/${days}/${dataSourceId}`;
  return axios.get(url);
};

// Function to get event date trend by user
getEventDateTrendByUser(days: number, dataSourceId: string, entityType: string, searchString: string): Promise<AxiosResponse> {
  searchString = encodeURIComponent(searchString);
  const url = `${mainURL}/entity/getEventDateTrendByUser/${days}/${dataSourceId}?entityType=${entityType}&searchString=${searchString}`;
  return axios.get(url);
};

// Function to get threat hunting results
getThreatHunting(dataSourceId: string, type: string, entity: string, timeFrame: string, startDate: string, endDate: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/threatHunting/${dataSourceId}/${entity}?category=${type}&duration=${timeFrame}&endDate=${endDate}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function to get rarity threat hunting results
getRarityThreatHunting(dataSourceId: string, type: string, entity: string, timeFrame: string, startDate: string, endDate: string, attributeName: string, value: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/hunting/threatHuntingRaritySpike/${dataSourceId}/${entity}?attributeName=${attributeName}&category=${type}&duration=${timeFrame}&endDate=${endDate}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function to get SIEM threat hunting results
getSIEMThreatHunting(dataSourceId: string, entity: string, timeFrame: string, startDate: string, endDate: string, attributeName: string, threshold: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/threatHuntingSIEMNNew/${dataSourceId}/${entity}?distinctAttributeName=${attributeName}&duration=${timeFrame}&endDate=${endDate}&startDate=${startDate}&thresHold=${threshold}`;
  return axios.post(url, data);
};

// Function to get SIEM threat hunting count
getSIEMThreatHuntingCount(dataSourceId: string, entity: string, timeFrame: string, startDate: string, endDate: string, attributeName: string, threshold: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/hunting/threatHuntingSIEMCount/${dataSourceId}/${entity}?distinctAttributeName=${attributeName}&duration=${timeFrame}&endDate=${endDate}&startDate=${startDate}&thresHold=${threshold}`;
  return axios.post(url, data);
};

// Function to get SIEM threat hunting alert
getSIEMThreatHuntingAlert(dataSourceId: string, entity: string, entityValue: string, eventDate: string, startDate: string, endDate: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/hunting/threatHuntingThresHoldBasedAlertNew/${dataSourceId}/${entity}?&endDate=${endDate}&entityName=${entityValue}&eventDates=${eventDate}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function to get SIEM threat hunting all alerts
getSIEMThreatHuntingAllAlert (dataSourceId: string, entity: string, startDate: string, endDate: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/hunting/runAllThresholdAlertnew?datasourceId=${dataSourceId}&entityType=${entity}&endDate=${endDate}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function to get diversity threat hunting results
getDiversityThreatHunting(dataSourceId: string, attributeName: string, entity: string, timeFrame: string, startDate: string, endDate: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/diversityThreatHunting/${dataSourceId}/${entity}?attributeName=${attributeName}&duration=${timeFrame}&endDate=${endDate}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function to get diversity threat hunting trend results
getDiversityThreatHuntingTrend(dataSourceId: string, attributeName: string, entity: string, timeFrame: string, startDate: string, endDate: string, value: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/hunting/diversityThreatHuntingTrend/${dataSourceId}/${entity}?attributeName=${attributeName}&duration=${timeFrame}&endDate=${endDate}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function to get entity-based hunting details
getEntityBasedHuntingDetails(entityType: string, searchString: string, data: any): Promise<AxiosResponse> {
  searchString = encodeURIComponent(searchString);
  const url = `${environment.serverUrl}/v1/entity/entityBasedHuntingDetails?entityType=${entityType}&searchString=${searchString}`;
  return axios.post(url, data);
};

// Function to check other datasets for a given entity
checkOtherDataSetsEntity(entityType: string, startDate: string, endDate: string, value: string): Promise<AxiosResponse> {
  value = encodeURIComponent(value);
  const url = `${environment.serverUrl}/v1/entity/checkOtherDataSetsEntity?entityType=${entityType}&startDate=${startDate}&endDate=${endDate}&value=${value}`;
  return axios.post(url, '');
};
// Function for multiple threat hunting
getMultipleThreatHunting(page: number, dataSourceId: string, attributeName: string, entity: string, timeFrame: string, startDate: string, endDate: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/multipleThreatHunting/${dataSourceId}/${entity}?attributeList=${attributeName}&duration=${timeFrame}&endDate=${endDate}&page=${page}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function for MISP hunting
mispHunting(dataSourceId: string, attributeName: string, startDate: string, endDate: string, page: number, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/mispHunting/${dataSourceId}?attributeName=${attributeName}&endDate=${endDate}&page=${page}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function for MISP hunting info
mispHuntingInfo(dataSourceId: string, attributeName: string, startDate: string, endDate: string, page: number, value: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/mispHuntingInfo/${dataSourceId}?attributeName=${attributeName}&endDate=${endDate}&page=${page}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function for MISP hunting alert
mispHuntingAlert(dataSourceId: string, attributeName: string, startDate: string, endDate: string, page: number, value: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/mispHuntingAlert/${dataSourceId}?attributeName=${attributeName}&endDate=${endDate}&page=${page}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function to get deviations
getDeviations(pageX: number, pageY: number, pageZ: number, patternType: string, type: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/getDeviations?pageX=${pageX}&pageY=${pageY}&pageZ=${pageZ}&patternType=${patternType}&type=${type}`;
  return axios.post(url, data);
};

// Function for smart threat hunting alert
smartThreatHuntingAlert(dataSourceId: string, entity: string, attributeName: string, category: string, eventDate: string, startDate: string, endDate: string, value: string, attrValue: string, data: any): Promise<AxiosResponse> {
  value = encodeURIComponent(value);
  const url = `${environment.serverUrl}/v1/hunting/smartThreatHuntingAlert/${dataSourceId}/${entity}?attributeName=${attributeName}&category=${category}&startDate=${startDate}&endDate=${endDate}&eventDate=${eventDate}&value=${value}&attrValue=${attrValue}`;
  return axios.post(url, data);
};

// Function to check unusual pattern for entity-based
checkUnusualPatternEntityBasedMorePattern(entityValue: string, patternType: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/entity/checkUnusualPatternEntityBased?entityValue=${entityValue}&patternType=${patternType}`;
  return axios.post(url, data);
};

// Function for multiple threat hunting additional info
MultipleThreatHuntingAdditionalInfo(dataSourceId: string, entity: string, attributeName: string, eventDate: string, value: string, data: any): Promise<AxiosResponse> {
  value = encodeURIComponent(value);
  const url = `${environment.serverUrl}/v1/hunting/multipleThreatHuntingInfo/${dataSourceId}/${entity}?attributeName=${attributeName}&eventDate=${eventDate}&value=${value}`;
  return axios.post(url, data);
};

// Function for aggregation threat hunting
getAggregationThreatHunting(page: number, dataSourceId: string, attributeName: string, entity: string, timeFrame: string, startDate: string, endDate: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/aggregationThreatHunting/${dataSourceId}/${entity}?attributeList=${attributeName}&duration=${timeFrame}&endDate=${endDate}&page=${page}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function for aggregation threat hunting additional info
AggregationThreatHuntingAdditionalInfo(dataSourceId: string, entity: string, attributeName: string, eventDate: string, value: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/aggregationThreatHuntingInfo/${dataSourceId}/${entity}?attributeName=${attributeName}&eventDate=${eventDate}&value=${value}`;
  return axios.post(url, data);
};

// Function for adding custom policy multiple threat hunting
addCustomPolicyMultipleThreatHunting(dataSourceId: string, attributeName: string, entity: string, duration: string, eventDate: string, startDate: string, endDate: string, level: string, riskScore: string, value: string, data: any): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/hunting/addCustomPolicyMultipleThreatHunting/${dataSourceId}/${entity}?attributeName=${attributeName}&duration=${duration}&eventdate=${eventDate}&startDate=${startDate}&endDate=${endDate}&level=${level}&riskScore=${riskScore}&value=${value}`;
  return axios.post(url, data);
};

// Function for custom policy aggregation threat hunting
customPolicyAggregationThreatHunting(dataSourceId: string, attributeName: string, entity: string, duration: string, eventDate: string, riskScore: string, value: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/customPolicyAggregationThreatHunting/${dataSourceId}/${entity}?attributeName=${attributeName}&duration=${duration}&eventdate=${eventDate}&riskScore=${riskScore}&value=${value}`;
  return axios.post(url, data);
};

// Function for threat hunting additional info
threatHuntingAdditionalInfo(dataSourceId: string, attrValue: string, entity: string, duration: string, attributeName: string, value: string, data: any, startDate: string, endDate: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/threatHuntingAdditionalInfo/${dataSourceId}/${entity}?attributeName=${attributeName}&duration=${duration}&endDate=${endDate}&startDate=${startDate}&searchValue=${value}&attrValue=${attrValue}`;
  return axios.post(url, data);
};

// Function for threat hunting rarity additional info
threatHuntingRarityAdditionalInfo(dataSourceId: string, entity: string, duration: string, attributeName: string, attributevalue: string, value: string, data: any, startDate: string, endDate: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/hunting/threatHuntingRarityTrendingInfo/${dataSourceId}/${entity}?attributeName=${attributeName}&attributevalue=${attributevalue}&duration=${duration}&endDate=${endDate}&startDate=${startDate}&searchValue=${value}`;
  return axios.post(url, data);
};

// Function for rarity check other dataset
threatHuntingRaritycheckOtherDataset(dataSourceId: string, entity: string, value: string, data: any, startDate: string, endDate: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/checkOtherDataSets?dataSourceId=${dataSourceId}&endDate=${endDate}&entityType=${entity}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function for rarity check unusual patterns
threatHuntingRaritycheckUnusalPatterns(attributename: string, dataSourceId: string, entity: string, data: any, startDate: string, endDate: string, pageX: number, pageY: number, pageZ: number, patternType: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/checkUnusualPattern?attributeName=${attributename}&dataSourceId=${dataSourceId}&endDate=${endDate}&entityType=${entity}&pageX=${pageX}&pageY=${pageY}&pageZ=${pageZ}&patternType=${patternType}&startDate=${startDate}`;
  return axios.post(url, data);
};

// Function for volume threat hunting
threatHuntingVolume(dataSourceId: string, entity: string, duration: string, startDate: string, endDate: string, attributeName: string, value: string, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/hunting/threatHuntingVolume/${dataSourceId}/${entity}?attributeName=${attributeName}&duration=${duration}&endDate=${endDate}&startDate=${startDate}&attrValue=${value}`;
  return axios.post(url, data);
};

// Function for volume trend in threat hunting
threatHuntingVolumeTrend(dataSourceId: string, entity: string, duration: string, attributeName: string, attrValue: string, value: string, data: any, startDate: string, endDate: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/hunting/threatHuntingVolumeTrend/${dataSourceId}/${entity}?attributeName=${attributeName}&attrValue=${attrValue}&duration=${duration}&endDate=${endDate}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function for volume alert in threat hunting
threatHuntingVolumeAlert(dataSourceId: string, eventDate: string, entity: string, duration: string, value: string, data: any, startDate: string, endDate: string, attrvalue: string, attributename: string, riskScore: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/hunting/threatHuntingVolumeAlert/${dataSourceId}/${entity}?attrValue=${attrvalue}&attributeName=${attributename}&duration=${duration}&eventDate=${eventDate}&endDate=${endDate}&riskScore=${riskScore}&startDate=${startDate}&value=${value}`;
  return axios.post(url, data);
};

// Function for updating field names by datasource ID
updatefieldNamesByDatasourceId(data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/updatefieldNamesByDatasourceId`;
  return axios.post(url, data);
};

// Function for adding custom policy config by threat hunting
addCustomPolicyConfigByThreatHunting(dataSourceId: string, type: string, entity: string, duration: string, eventDate: string, riskScore: string, value: string, attrValue: string, attributeName: string, data: any): Promise<AxiosResponse> {
  type = type === 'VOLUME' ? 'SPIKE' : type;
  const url = `${environment.serverUrl}/v1/hunting/addCustomPolicyConfigByThreatHunting/${dataSourceId}/${entity}?attrValue=${attrValue}&attributeName=${attributeName}&category=${type}&duration=${duration}&eventdate=${eventDate}&riskScore=${riskScore}&searchValue=${value}`;
  return axios.post(url, data);
};

// Function for CISO to entity mapping
cisoToEntity(type: string, offset: number, size: number, data: any): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/cisoToEntity?entityType=${type}&offset=${offset}&size=${size}`;
  return axios.post(url, data);
};

// Function for model data source efficacy analytics
modelDataSourceEfficacyAnalytics(dataSourceId: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/modelDataSourceEfficacyAnalytics?dataSourceId=${dataSourceId}`;
  return axios.get(url);
};

// Function for getting data source policy details
getDataSourcePolicyDetails(dataSourceId: string): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/entity/dataSourcePolicyDetails?dataSourceId=${dataSourceId}`;
  return axios.get(url);
};

// Function for getting analyzed attributes and count
getAnalyzedAttributesAndCount(dataSourceId: string): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/entity/analyzedAttributesAndCount?dataSourceId=${dataSourceId}`;
  return axios.get(url);
};

// Function for getting analyzed models and count
getAnalyzedModelsAndCount(dataSourceId: string): Promise<AxiosResponse>  {
  const url = `${environment.serverUrl}/v1/entity/analyzedModelsAndCount?dataSourceId=${dataSourceId}`;
  return axios.get(url);
};

// Function to generate account compromise data
generateAccountCompromiseData(): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/generateAccountCompromiseData`;
  return axios.get(url);
};

// Function for getting top riskscore by attributes
getTopRiskscoreByAttributes(attributeType: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/entity/getTopRiskscoreByAttributes?attributeType=${attributeType}`;
  return axios.get(url);
};

// Function for getting top users counts and models
getTopUsersCountsAndModels(reqType: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}/v1/identity/getTopUsersCountsAndModels/${reqType}`;
  return axios.post(url, '');
};
 // data-ops--end//


//entities--start//

getAllEntities(entity: string, risk: string, offset: number, size: number, hibp: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getEntityview/${entity}/${risk}/DESC/${offset}/${size}/0/${hibp}`;
  return axiosInstance.get(url);
}

// Function to get malicious URL
getMaliciousURL(offset: number, size: number): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getMaliciousEntityview/DESC/${offset}/${size}/0`;
  return axiosInstance.get(url);
}

// Function to get filtered entities
getFilteredEntities(body: any, offset: number, size: number): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/groupUserBy/1/DESC/${offset}/${size}`;
  return axiosInstance.post(url, body);
}

// Function to get alerts to entity
getAlertsToEntity(entity: string, ruleId: string, size: number, startTime: number, supressionType: string): Promise<AxiosResponse> {
  if (startTime == null) {
    startTime = 0;
  }
  const url = `${mainURL}/entity/alertsToEntity/${ruleId}/${entity}/${size}/${startTime}?supressionType=${supressionType}`;
  return axiosInstance.get(url);
}

// Function to get SSD entity view
getSsdEntityview(offset: number, size: number, hibp: string, entity: string, violators: string): Promise<AxiosResponse> {
  const url = `${mainURL}/entity/getSsdEntityview/${entity}/0/ASC/${offset}/${size}/0/${hibp}?violators=${violators}`;
  return axiosInstance.get(url);
}

//entities--end//


//model-x--start//

    // Get all Policy Configurations with parameters
    getAllPolicyConfig(page: number, datasourceId: number, doctype: string, entityType: string, policyType: string, searchModel: string, threatCategory: string, mitreType: string): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/modelX/getAllPolicyConfig/${page}?dataSourceId=${datasourceId}&docType=${doctype}&entityType=${entityType}&mitreType=${mitreType}&policyType=${policyType}&searchModels=${searchModel}&threatCategory=${threatCategory}`;
        return axios.get(url);
    }

    // Get Model X Graph Info
    getModelXGraphInfo(): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/modelX/getModelXGraphInfo`;
        return axios.get(url);
    }

    // Get Enabled Policy Configurations
    getFilteredModelStatus(): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/getEnabledPolicyConfig`;
        return axios.get(url);
    }

    // Delete a specific Policy Config
    deletePolicyConfig(configId: number): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/deleteConfig/${configId}`;
        return axios.delete(url);
    }

    // Delete multiple Policy Configurations
    deletePolicyConfigs(configIds: number[]): Promise<AxiosResponse> {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                configIds: configIds
            }
        };
        const url = `${mainURL}/v1/policyConfig/deleteConfigs`;
        return axios.delete(url, options);
    }

    // Enable/Disable all Policy Configurations
    enableDisableAll(flag: boolean): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/getEnabledDisabledPolicyConfig/${flag}`;
        return axios.get(url);
    }

    // Enable/Disable Model by Policy ID
    enableDisableModel(id: number, flag: boolean): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/updateEnableByPolicyId/${id}/${flag}`;
        return axios.get(url);
    }

    // Get Model by Policy ID
    getModelByPolicyId(id: number): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/getPolicyConfigbyPolicyId/${id}`;
        return axios.get(url);
    }

    // Add a new Policy Configuration Model
    addPolicyConfigModel(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/savePolicyConfig`;
        return axios.post(url, data);
    }

    // Get All Data Sources
    getAllDataSource(): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/getAllDataSources`;
        return axios.get(url);
    }

    // Update Policy Configuration by Policy ID
    updateModelByPolicyId(id: number, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/policyConfig/updatePolicyConfig/${id}`;
        return axios.put(url, data);
    }

    // Get all NIST Values
    getAllNistValues(): Promise<AxiosResponse> {
        const url = `${mainURL}/getAllNistValues`;
        return axios.get(url);
    }

    // Get all MITRE Tactics
    getAllMitreTactics(): Promise<AxiosResponse> {
        const url = `${mainURL}/getAllMitreTactics`;
        return axios.get(url);
    }

    // Get MITRE Techniques by MITRE Tactic ID
    getMitreTechniquesByMitreTacticId(mitreTacticId: number): Promise<AxiosResponse> {
        const url = `${mainURL}/getMitreTechniquesByMitreTacticId/${mitreTacticId}`;
        return axios.get(url);
    }

    // Get Model Stat Graph Data
    getModelStatGraphData(modelId: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/getModelStatChat/${modelId}`;
        return axios.get(url);
    }

    // Get Prediction Stat Graph Data
    getPredictionStatGraphData(modelId: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/getPredictionStatChat/${modelId}`;
        return axios.get(url);
    }

    // Get Trigger Stat Graph Data
    getTriggerStatGraphData(modelId: any, entity: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/getTriggerStatChat/${modelId}/20?modelType=${entity}`;
        return axios.get(url);
    }

    // Get Trend Details
    getTrendDetails(modelId: any, entity: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/getTrendDetails/${modelId}/20?modelType=${entity}`;
        return axios.get(url);
    }

    // Export Trend Details
    getTrendDetailsExport(modelId: any, entity: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/getTrendDetailsExport/${modelId}?modelType=${entity}`;
        return axios.get(url);
    }

    // Get all Violation Type Details
    allViolationTypeDetails(): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/allViolationTypeDetails`;
        return axios.get(url);
    }

    // Run Model X Query Modelling Job
    runModelXQueryModellingJob(modelId: any, startDate: any, endDate: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/runQueryModel/${modelId}?endDate=${endDate}&startDate=${startDate}`;
        return axios.get(url);
    }

    // Get Model Rule Clone
    getModelRUleClone(modelId: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/cloneRuleModel/${modelId}`;
        return axios.get(url);
    }

    // Auto rule Configurations
    autoHeuristicsRuleGeneration(entity: any, datasourceId: any, duration: any, threshold: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoHeuristicsRuleGeneration/${datasourceId}/${entity}?duration=${duration}&threshold=${threshold}`;
        return axios.post(url, data);
    }

    autoSpikeRuleGeneration(entity: any, ColInterest: any, DistCountFlg: any, MinThresh: any, MulFactor: any, NumOfDays: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoSpikeRuleGeneration/${entity}?ColInterest=${ColInterest}&DistCountFlg=${DistCountFlg}&MinThresh=${MinThresh}&MulFactor=${MulFactor}&NumOfDays=${NumOfDays}`;
        return axios.post(url, data);
    }

    autoSpikeVolumeRuleGeneration(entity: any, MinThresh: any, MulFactor: any, NumOfDays: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoSpikeVolumeRuleGeneration/${entity}?MinThresh=${MinThresh}&MulFactor=${MulFactor}&NumOfDays=${NumOfDays}`;
        return axios.post(url, data);
    }

    autoSpikeDiversityRuleGeneration(entity: any, ColInterest: any, MinThresh: any, MulFactor: any, NumOfDays: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoSpikeDiversityRuleGeneration/${entity}?ColInterest=${ColInterest}&MinThresh=${MinThresh}&MulFactor=${MulFactor}&NumOfDays=${NumOfDays}`;
        return axios.post(url, data);
    }

    autoRarityRuleGeneration(entity: any, ColInterest: any, DistCountFlg: any, MinThresh: any, NumOfDays: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoRarityRuleGeneration/${entity}?ColInterest=${ColInterest}&DistCountFlg=${DistCountFlg}&MinThresh=${MinThresh}&NumOfDays=${NumOfDays}`;
        return axios.post(url, data);
    }

    autoTimeSeriesRuleGeneration(BaselineCol: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoTimeSeriesRuleGeneration?BaselineCol=${BaselineCol}`;
        return axios.post(url, data);
    }

    // Generate Auto Deviation Rule
    autoDeviationRuleGeneration(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoDeviationRuleGeneration`;
        return axios.post(url, data);
    }

    // Generate Auto Deviation XO Rule
    autoDeviationXORuleGeneration(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/entity/autoDeviationXORuleGeneration`;
        return axios.post(url, data);
    }

    // Generate Auto Threshold Based Rule
    autoThresHoldBasedRuleGeneration(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/v1/hunting/autoThresHoldBasedRuleGeneration`;
        return axios.post(url, data);
    }


//model-x--end//


//insights--start//

  getAllAlerts(milliSec: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/alertsInsight/${milliSec}`;
    return axios.post(url, data);
  }

  getAlertsInsightSoc(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/alertsInsightSoc`;
    return axios.post(url, data);
  }

  // getFilteredEntities(body: any): Promise<AxiosResponse> {
  //   const url = `${mainURL}/entity/groupUserBy/80/DESC/0/10000`;
  //   return axios.post(url, body);
  // }

  getAllIncidents(offset: any, size: any, startDateTime: any, endDateTime: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/caseMgmt/entity/getIncidents/${offset}/${size}/${startDateTime}/${endDateTime}`;
    return axios.post(url, data);
  }

  getFilteredIncidentStatus(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/caseMgmt/entity/getNonOpenIncidents`;
    return axios.post(url, data);
  }

  getAllIncidentData(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/caseMgmt/entity/getAllIncidents/`;
    return axios.post(url, data);
  }

  getAllIncidentsByDuration(duration: any, incidentType: any, ruleId: any, page: any, searchValue: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/insight/getAllIncidents?duration=${duration}&incidentType=${incidentType}&page=${page}&ruleId=${ruleId}&searchValue=${searchValue}`;
    return axios.post(url, data);
  }

  getAllRiskyAlert(duration: any, datasourceId: any, page: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/insight/getAllRiskyAlert?duration=${duration}&dataSourceId=${datasourceId}&page=${page}`;
    return axios.post(url, data);
  }

  getAllRiskyAlertSearch(duration: any, policyName: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/insight/getAllRiskyAlertSearch?duration=${duration}&policyName=${policyName}`;
    return axios.post(url, data);
  }

  getAllRemediation(entityType: any, offset: any, size: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/remediation/${entityType}/${offset}/${size}/`;
    return axios.post(url, data);
  }

  getAllNotification(page: any, size: any, type: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/nofification/getNotifications?page=${page}&size=${size}&type=${type}`;
    return axios.post(url, data);
  }

  getAllThreatStories(startDate: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/threats/getThreatStory/${startDate}`;
    return axios.post(url, data);
  }

  getEntityDetails(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/threats/getEntityDetails`;
    return axios.post(url, data);
  }

  getAllMitreChartData(threatType: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/threatCategory?threatType=${threatType}`;
    return axios.post(url, data);
  }

  getAllNistChartData(threatType: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/threatCategory?threatType=${threatType}`;
    return axios.post(url, data);
  }

  getFilteredByUserId(userId: any, data: any): Promise<AxiosResponse> {
    userId = encodeURI(userId);
    const url = `${mainURL}/caseMgmt/entity/getIncidentsById?entityId=${userId}`;
    return axios.post(url, data);
  }

  getFilteredByViolation(userId: any, data: any): Promise<AxiosResponse> {
    userId = encodeURI(userId);
    const url = `${mainURL}/entity/alertsInsightByEntity/0?entityId=${userId}`;
    return axios.post(url, data);
  }

  getAlertsInsightInfo(model: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/alertsInsightInfo/0?modelId=${model}`;
    return axios.post(url, data);
  }

  getSupressionViolationDetails(type: any, ruleId: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getSupressionViolationDetails/${ruleId}/${type}`;
    return axios.post(url, data);
  }

  undoSelectiveSupressAlert(type: any, ruleId: any, violator: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/undoSelectiveSupressAlert/${ruleId}/${type}?violator=${violator}`;
    return axios.post(url, data);
  }

  supressEligibleManualAlerts(ruleId: any, violator: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/supressEligibleManualAlerts/${ruleId}?violator=${violator}`;
    return axios.post(url, data);
  }

  getAllAlertsByDuration(duration: any, page: any, searchValue: any, data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/alerts/all-alerts?page=${page}&duration=${duration}`;
    return axios.post(url, data);
  }

  getAllKpiMetrics(data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/kpi-metrics/all`;
    return axios.post(url, data);
  }

  getAllMttd(data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/kpi-metrics/mttd/all`;
    return axios.post(url, data);
  }

  getAllMtta(data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/kpi-metrics/mtta-case/all`;
    return axios.post(url, data);
  }

  getAllMtti(data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/kpi-metrics/mtti-case/all`;
    return axios.post(url, data);
  }

  getAllAnalyst(data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/kpi-metrics/analyst-average-dwell/all`;
    return axios.post(url, data);
  }

  getAllSocAverageMetrics(data: any): Promise<AxiosResponse> {
    const url = `${serverUrl}/kpi-metrics/average-metrics`;
    return axios.post(url, data);
  }


//insights--end//


//identity-360--start//


// Get filtered entities with provided body
// getFilteredEntities(body: any): Promise<AxiosResponse> {
//   const url = `${this.mainURL}/entity/groupUserBy/80/DESC/0/10000`;
//   return axios.post(url, body);
// }

// Get users by status, type, and risk with the given offset, size, and body
getUsersByStatusOrType(body: any, offset: any, size: any, risk: any): Promise<AxiosResponse> {
  const url = `${mainURL}/identity/getUsersByStatusOrType/${offset}/${size}/${risk}`;
  return axios.post(url, body);
}

//identity-360--end//

//pulse---start//


// Get all cases
getAllCases(): Promise<AxiosResponse> {
  const url = `${mainURL}/api/dashboard/getAllCases`;
  return axios.get(url);
}

// Get all policy violations with date range, offset, and size
getAllPolicyViolations(startDateTime: string, endDateTime: string, offset: number, size: number): Promise<AxiosResponse> {
  const url = `${mainURL}/caseMgmt/entity/${startDateTime}/${endDateTime}/?offset=${offset}&size=${size}`;
  return axios.get(url);
}

// Get all incidents with offset, size, and date range
// getAllIncidents(offset: number, size: number, startDateTime: string, endDateTime: string): Promise<AxiosResponse> {
//   const url = `${mainURL}/caseMgmt/entity/getIncidents/${offset}/${size}/${startDateTime}/${endDateTime}`;
//   return axios.get(url);
// }

// Create a new incident
createIncident(violationData: any): Promise<AxiosResponse> {
  const url = `${mainURL}/incident/directIncidentCreation`;
  return axios.post(url, violationData, { responseType: 'text' });
}

// Create incident timeline
timelineCreateIncident(lastViolationId: string, eventDateTime: string, loggedInUser: any): Promise<AxiosResponse> {
  const url = `${mainURL}/pvCasemgmt/timelineCreateIncident/${lastViolationId}/${eventDateTime}?username=${loggedInUser.userName}`;
  return axios.post(url, {});
}


//pulse---end//



//reports--start//


// Get all reports
getAllReports(): Promise<AxiosResponse> {
  const url = `${mainURL}/report/getAllReports`;
  return axios.get(url);
}

// Download report
downloadReport(urlEndPoint: string): Promise<AxiosResponse> {
  const url = `${environment.serverUrl}${urlEndPoint}`;
  return axios.get(url);
}



//reports--end//


//playbooks--start//


// Create a new playbook
  playbookCreate(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/create`;
    return axios.post(url, data);
  }

  // Get all threats
  getAllThreats(): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/getAll`;
    return axios.get(url);
  }

  // Get a specific playbook by ID
  playbookGetPlayBook(id: string): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/getPlayBook?id=${id}`;
    return axios.get(url);
  }

  // Edit an existing playbook
  playbookEdit(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/edit`;
    return axios.post(url, data);
  }

  // Delete a threat by ID
  deleteThreats(id: string): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/delete?id=${id}`;
    return axios.delete(url);
  }

  // Check for duplicate playbook name
  CheckDuplicatePlayBookName(playbookname: string): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/checkDuplicatePlayBookName?name=${playbookname}`;
    return axios.get(url);
  }

  // Get playbook sequence
  getSequence(duration: string, sequenceType: string): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/sequence?duration=${duration}&sequenceType=${sequenceType}`;
    return axios.post(url, '');
  }

  // Get playbook sequence details
  getsequenceDetails(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/playbook/sequenceDetails`;
    return axios.post(url, data);
  }

//playbooks--end//


//configure--start//



  // ML Job Data
  getMlJobData(): Promise<AxiosResponse> {
    const url = `${mainURL}/amg/mlJob`;
    return axios.get(url);
  }

  // Prediction Job Data
  getPredictionJobData(): Promise<AxiosResponse> {
    const url = `${mainURL}/amg/predictionJob`;
    return axios.get(url);
  }

  // Total Job Data
  getvTotalJobData(): Promise<AxiosResponse> {
    const url = `${mainURL}/amg/vTotalJob`;
    return axios.get(url);
  }

  // Update All IP Address Type
  getupdateAllIpAddressType(): Promise<AxiosResponse> {
    const url = `${mainURL}/amg/updateAllIpAddressType`;
    return axios.get(url);
  }

  // Run AMC Job
  getRunAMC(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/createModels`;
    return axios.post(url, '');
  }

  // Reset Entity Risk Score Job
  getResetEntityRiskScoreJob(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/resetEntityRiskScoreJob`;
    return axios.get(url);
  }

  // Peers Job
  getPeersJob(): Promise<AxiosResponse> {
    const url = `${mainURL}/amg/peersJob`;
    return axios.get(url);
  }

  // Run Pwned Jobs
  getRunPwnedJob(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runPwnedJobs`;
    return axios.get(url);
  }

  // Run Violation Jobs
  getRunViolationJobs(endDate: string, runType: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runViolationJobs?endDate=${endDate}&runType=${runType}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Spike Jobs
  getRunSpikeJobs(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runSpikeJob?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Time Series Jobs
  getRunTimeSeriesJobs(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/timeSeries?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Geo Location Job
  getRunGeoLocationJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runGeoLocationJob?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Self Email Job
  getRunSelfEmailJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runSelfEmailJob?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Risk Score Jobs
  getRunRiskScoreJobs(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runRiskScoreJobs?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Prediction Driver Jobs
  getRunPredictionDriverJobs(targetDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runPredictionDriverJobs?targetDate=${targetDate}`;
    return axios.get(url);
  }

  // Get Job Config
  getJobConfig(jobName: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getJobConfig?jobName=${jobName}`;
    return axios.post(url, '');
  }

  // Save or Update Job Config
  saveOrUpdateJobConfig(jobName: string, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/saveOrUpdateJobConfig?jobName=${jobName}`;
    return axios.post(url, data);
  }

  // Dormant Jobs
  getRunI360DormantJobs(days: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/dormantJob`;
    return axios.get(url);
  }

  // New Users Jobs
  getRunI360NewJobs(days: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/newUsersJob`;
    return axios.get(url);
  }

  // Flight Risk Jobs
  getRunI360FlightRiskJobs(days: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/departingUserJob`;
    return axios.get(url);
  }

  // Privileged Jobs
  getRunI360PrivilegedJobs(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/identity/privilegedJob`;
    return axios.post(url, data);
  }

  // Service Jobs
  getRunI360ServiceJobs(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/identity/serviceJob`;
    return axios.post(url, data);
  }

  // External Jobs
  getRunI360ExternalJobs(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/identity/externalJob`;
    return axios.post(url, data);
  }

  // Disabled Jobs
  getRunI360DisabledJobs(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/identity/disabledJob`;
    return axios.post(url, data);
  }

  // Watch List Jobs
  getRunI360WatchListJobs(data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/identity/watchListJob`;
    return axios.post(url, data);
  }

  // Total URL Jobs
  getvTotalUrlJob(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/vTotalUrlJob`;
    return axios.get(url);
  }

  // Rarity Model Jobs
  getrunRarityModelJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runRarityModelJob?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Deviation X Job
  getrunDeviationXJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runDeviationX?endDate=${endDate}&startDate=${startDate}`;
    return axios.post(url, '');
  }

  // Deviation Y Job
  getrunDeviationYJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runDeviationY?endDate=${endDate}&startDate=${startDate}`;
    return axios.post(url, '');
  }

  // Deviation Z Job
  getrunDeviationZJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runDeviationZ?endDate=${endDate}&startDate=${startDate}`;
    return axios.post(url, '');
  }

  // Deviation A Job
  getrunDeviationAJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runDeviationA?endDate=${endDate}&startDate=${startDate}`;
    return axios.post(url, '');
  }

  // Off Hour Modelling Job
  offHourModellingJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/OffTimeJobs?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Off Day Modelling Job
  OffDayModellingJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/OffDaysJobs?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Spike Diversity Job
  runSpikeDiversityJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runSpikeDiversityJob?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Run Spike Volume Job
  runSpikeVolumeJob(endDate: string, startDate: string): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/runSpikeVolumeJob?endDate=${endDate}&startDate=${startDate}`;
    return axios.get(url);
  }

  // Update User Seen
  updateUserSeen(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/updateUserSeen`;
    return axios.get(url);
  }

  // Get All Data Resource
  getAllDataResource(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getAllDataResource`;
    return axios.get(url);
  }

  // Get All Attribute List
  getAllAttributeList(id: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getLikeAttributesNames/${id}/0?searchString=''`;
    return axios.get(url);
  }

  // Condition Match Job
  getConditionMatchjob(dataSourceId: any, entityType: any, criticality: any, endDate: any, riskScore: any, ruleName: any, startDate: any, data: any): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/addCustomPolicyConfig/${dataSourceId}/${entityType}?criticality=${criticality}&endDate=${endDate}&riskScore=${riskScore}&ruleName=${ruleName}&startDate=${startDate}`;
    return axios.post(url, data);
  }

  // Get All Triggered Rules
  getAllTriggeredRule(): Promise<AxiosResponse> {
    const url = `${mainURL}/entity/getAllTriggeredRules/0?searchString=''`;
    return axios.get(url);
  }
 
  
   
    // Anomaly Purge
    getAnomalyPurge(ruleId: any): Promise<AxiosResponse> {
      const url = `${mainURL}/entity/purgeUtility/${ruleId}`;
      return axios.get(url);
    }
  
    // Selective Entity Reset job
    getSelectiveEntityResetjob(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/entity/entityLevelPurge?entityName=${data.entityName}&entityType=${data.entityType}`;
      return axios.get(url);
    }
  
    // All AIR Jobs
    getAllAIRJobs(): Promise<AxiosResponse> {
      const url = `${mainURL}/jobs/allJobs`;
      return axios.get(url);
    }
  
    // AIR Job Details by ID
    getAIRJobDetailsById(jobId: any): Promise<AxiosResponse> {
      const url = `${mainURL}/jobs/getAirJobDetailsById/${jobId}`;
      return axios.get(url);
    }
  
    // Run All Query Jobs
    getRunAllQueryJobs(endDate: any, startDate: any): Promise<AxiosResponse> {
      const url = `${mainURL}/entity/runAllQueryModel?endDate=${endDate}&startDate=${startDate}`;
      return axios.get(url);
    }
  
    // Notification Jobs
    getNotificationJobs(type: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/getAll/${type}`;
      return axios.get(url);
    }
  
    // Email Alert Status
    getEmailAlertStatus(type: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/getEmailAlertStatus?type=${type}`;
      return axios.get(url);
    }
  
    // Update Email Alert Status
    updateEmailAlertStatus(id: string, status: string, type: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/updateEmailAlertStatus/${id}?status=${status}&type=${type}`;
      return axios.get(url);
    }
  
    // Save Notification Jobs
    saveNotificationJobs(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/saveNotificationEmail`;
      return axios.post(url, data);
    }
  
    // Default Email Subject and Body
    getDefaultEmailSubjectAndBody(type: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/getDefaultEmailSubjectAndBody?type=${type}`;
      return axios.get(url);
    }
  
    // Notification Jobs by ID
    getNotificationJobsById(id: any): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/getById/${id}`;
      return axios.get(url);
    }
  
    // Delete Notification Jobs by ID
    deletetNotificationJobsById(id: any): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/deleteEmailConfigById/${id}`;
      return axios.delete(url);
    }
  
    // Update Notification Jobs by ID
    updateNotificationJobsById(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/updateById`;
      return axios.put(url, data);
    }
  
    // Update Status Jobs by ID
    updateStatusJobsById(id: string, status: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/updateStatus/${id}?status=${status}`;
      return axios.get(url);
    }
  
    // Update Slack Config Status
    updateSlackConfigStatus(id: string, status: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/updateSlackStatus/${id}?status=${status}`;
      return axios.get(url);
    }
  
    // Delete Slack Config
    deleteSlackConfig(id: string, type: string): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/deleteSlackConfig?id=${id}&type=${type}`;
      return axios.delete(url);
    }
  
    // AMC Config
    getAmcConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getAmcConfig`;
      return axios.get(url);
    }
  
    // Update AMC Config
    updateAmcConfig(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateAmcConfig`;
      return axios.post(url, data);
    }
  
    // Spike Volume and Diversity Config
    getSpikeConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getThConfig`;
      return axios.get(url);
    }
  
    updateSpikeConfig(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateThConfig`;
      return axios.post(url, data);
    }
  
    // ML Risk Scoring Config
    getMLRiskScoringConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getMLRiskScoringConfig`;
      return axios.get(url);
    }
  
    updateMLRiskScoringConfig(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateMLRiskScoringConfig`;
      return axios.post(url, data);
    }
  
    // Excluded Models
    getExcludedModelsConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/entity/getFprExcludeModels`;
      return axios.post(url, '');
    }
  
    updateExcludedModelsConfig(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/entity/updateFprExcludeModels`;
      return axios.post(url, data);
    }
  
    // Deviation X and Y Thresholds
    getDeviationXThreshold(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getDeviationXThreshold`;
      return axios.get(url);
    }
  
    updateDeviationXThreshold(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateDeviationXThreshold`;
      return axios.post(url, data);
    }
  
    getDeviationYThreshold(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getDeviationYThreshold`;
      return axios.get(url);
    }
  
    updateDeviationYThreshold(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateDeviationYThreshold`;
      return axios.post(url, data);
    }
  
    // Deviation Z Config
    getDeviationZConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getDeviationZConfig`;
      return axios.get(url);
    }
  
    updateDeviationZConfig(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateDeviationZConfig`;
      return axios.post(url, data);
    }
  
    // Deviation A Config
    getDeviationAConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getDeviationAConfig`;
      return axios.get(url);
    }
  
    updateDeviationAConfig(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateDeviationAConfig`;
      return axios.post(url, data);
    }
  
    // Deviation Days
    getDeviationDays(deviationType: string): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getDeviationDays?deviationType=${deviationType}`;
      return axios.get(url);
    }
  
    updateDeviationDays(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateDeviationDays`;
      return axios.post(url, data);
    }
  
    // Deviation X Divisor
    getDeviationXDivisor(): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/getDeviationXDivisor`;
      return axios.get(url);
    }
  
    updateDeviationXDivisor(data: any): Promise<AxiosResponse> {
      const url = `${mainURL}/hunting/updateDeviationXDivisor`;
      return axios.post(url, data);
    }
  
    // Model Scheduler Job
    getModelScheduledRules(): Promise<AxiosResponse> {
      const url = `${mainURL}/jobs/getModelScheduledRules`;
      return axios.get(url);
    }
  
    addAndUpdateRulesForScheduler(scheduleType: string, statusFlag: string): Promise<AxiosResponse> {
      const url = `${mainURL}/jobs/addAndUpdateRulesForScheduler?scheduleType=${scheduleType}&statusFlag=${statusFlag}`;
      return axios.post(url, '');
    }
  
    // Rule Details by Name
    getRuleDetailsByName(search: string): Promise<AxiosResponse> {
      const url = `${mainURL}/jobs/getRuleDetailsByName/${search}`;
      return axios.get(url);
    }
  
    // Data Source Integration Config
    getAllDataSoutceIntegrationConfig(): Promise<AxiosResponse> {
      const url = `${mainURL}/nofification/getAllDataSoutceIntegrationConfig`;
      return axios.get(url);
    }
 
   
    
      // Get Data Source Integration Config by ID
      getDsIntegrationConfigById(id: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/getDsIntegrationConfigById?id=${id}`;
        return axios.get(url);
      }
    
      // Update Integration Config
      updateIntegrationConfig(id: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/updateIntegrationConfig?id=${id}`;
        return axios.post(url, data);
      }
    
      // Delete Data Source Integration Config by ID
      deleteDsIntegrationConfigById(id: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/deleteDsIntegrationConfigById?id=${id}`;
        return axios.delete(url);
      }
    
      // DS Connection Check
      dsConnectionCheck(id: any, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/connectors/dsConnectionCheck?id=${id}`;
        return axios.post(url, data);
      }
    
      // All Users Productivity Job
      allUsersProductivityJob(): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/allUsersProductivityJob`;
        return axios.get(url);
      }
    
      // All Users Custom Productivity Job
      allUsersCustomProductivityJob(productivityData: any): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/allUsersCustomProductivityJob`;
        return axios.post(url, productivityData);
      }
    
      // Schedule Cron Job
      scheduleCronJob(jobId: string, scheduleType: string, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/jobs/scheduleCronJob?jobId=${jobId}&scheduleType=${scheduleType}`;
        return axios.post(url, data);
      }
    
      // Delete Scheduled Job
      deleteSchdeduledJob(jobId: string): Promise<AxiosResponse> {
        const url = `${mainURL}/jobs/removeCronJob?jobId=${jobId}`;
        return axios.delete(url);
      }
    
      // Email SMTP Configuration Jobs
      getEmailSMTPConfigJobs(): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/getEmailConfiguration`;
        return axios.get(url);
      }
    
      saveEmailSMTPConfigJobs(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/saveEmailConfiguration`;
        return axios.post(url, data);
      }
    
      updateEmailSMTPConfigJobs(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/updateMailPropertyConfigDetailsById`;
        return axios.put(url, data);
      }
    
      testEmailSMTPConfigJobs(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/smtpTestConnedctionApi`;
        return axios.post(url, data);
      }
    
      // FPR Job
      getFPRjob(cleanupThreshold: string): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/fpr?cleanUpThreshold=${cleanupThreshold}`;
        return axios.get(url);
      }
    
      fprPreview(cleanupThreshold: string): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/fprPreview?cleanUpThreshold=${cleanupThreshold}`;
        return axios.get(url);
      }
    
      getDistinctDataAlertAttributes(): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/getDistinctDataAlertAttributes`;
        return axios.get(url);
      }
    
      deleteByAttributeName(attributeName: string): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/deleteByAttributeName?attributeName=${attributeName}`;
        return axios.get(url);
      }
    
      purgeRawData(endDate: string, startDate: string, requestType: string): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/purgeRawData?endDate=${endDate}&requestType=${requestType}&startDate=${startDate}`;
        return axios.get(url);
      }
    
      // Delete Data
      deleteData(datasourceId: string, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/hunting/deleteData/${datasourceId}`;
        return axios.post(url, data);
      }
    
      // Get Data Purge Count
      getDataPurgeCount(datasourceId: string, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/hunting/getDataPurgeCount/${datasourceId}`;
        return axios.post(url, data);
      }
    
      // Run Auto Data Quality Check
      runAutoDataQualityCheck(): Promise<AxiosResponse> {
        const url = `${mainURL}/dataQuality/runAutoDataQualityCheck`;
        return axios.get(url);
      }
    
      // Undo Suppressed Alerts
      unDoSupressedAllAlert(): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/unDoSupressedAllAlert`;
        return axios.get(url);
      }
    
      // ML Risk Scoring Job
      mlRiskScoringJob(): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/mlRiskScoringJob`;
        return axios.get(url);
      }
    
      // Get User Email ID
      getUserEmailId(userId: string): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/getUserEmailId?userId=${userId}`;
        return axios.get(url);
      }
    
      // Email Notification
      emailNotification(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/emailNotification`;
        return axios.post(url, data);
      }
    
      // Slack Configuration
      getSlackConfig(type: string): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/getSlackConfig?type=${type}`;
        return axios.get(url);
      }
    
      addSlackChannel(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/addSlackChannel`;
        return axios.post(url, data);
      }
    
      updateSlackConfig(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/updateSlackConfig`;
        return axios.put(url, data);
      }
    
      updateSlackStatus(id: string, status: string): Promise<AxiosResponse> {
        const url = `${mainURL}/nofification/updateSlackConfig/${id}?status=${status}`;
        return axios.get(url);
      }
    
      // Upload File
      uplodFile(formData: any, options: any): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/uplodFile`;
        return axios.post(url, formData, options);
      }
    
      // Upload Data Ingestion Details
      uploadDataIngestionDetails(uploadId: string, dataSourceId: string, dataSourceName: string, datasetType: string, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/uplodDataIngestionDetails?dataSourceId=${dataSourceId}&dataSourceName=${dataSourceName}&datasetType=${datasetType}&uploadId=${uploadId}`;
        return axios.post(url, data);
      }
    
      // Check Upload Status
      checkUploadStatus(uploadId: string): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/checkUploadStatus/${uploadId}`;
        return axios.get(url);
      }
    
      // Get All Data Source Attributes
      allDataSourceAttributes(): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/allDataSourceAttributes`;
        return axios.get(url);
      }
    
      // Get All Users Attributes
      getAllUsersAttributes(): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/getAllUsersAttributes`;
        return axios.get(url);
      }
    
      // Upload User Data File
      userDataUplodFile(formData: any, options: any): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/userDataUplodFile`;
        return axios.post(url, formData, options);
      }
    
      // User Data Ingestion Details
      userDataIngestionDetails(uploadId: string, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/userDataIngestionDetails?uploadId=${uploadId}`;
        return axios.post(url, data);
      }
    
      // Okta Connector Mapping
      getOktaConnectorMapping(dataSourceName: string, datasourceId: string, id: string, startDate: string, endDate: string): Promise<AxiosResponse> {
        const url = `${mainURL}/connectors/oktaConnectorsMapping?dataSourceName=${dataSourceName}&dataSourceid=${datasourceId}&endDate=${endDate}&id=${id}&startDate=${startDate}`;
        return axios.get(url);
      }
    
      // Zoom Connector Mapping
      getZoomConnectorMapping(dataSourceName: string, datasourceId: string, id: string, startDate: string, endDate: string): Promise<AxiosResponse> {
        const url = `${mainURL}/connectors/zoomConnectorsMapping?dataSourceName=${dataSourceName}&dataSourceid=${datasourceId}&endDate=${endDate}&id=${id}&startDate=${startDate}`;
        return axios.get(url);
      }
    
      // Generate Sample Data for SSD
      generateSampleData(datasourceId: string, analyzedAttribute: string, anomalousAttribute: string, baselineAttribute: string, input: string, targetAttribute: string): Promise<AxiosResponse> {
        input = encodeURI(input);
        const url = `${mainURL}/entity/generateSampleData/${datasourceId}?analyzedAttribute=${analyzedAttribute}&anomalousAttribute=${anomalousAttribute}&baselineAttribute=${baselineAttribute}&input=${input}&targetAttribute=${targetAttribute}`;
        return axios.get(url);
      }
    
      // Generate Spike Sample Data
      generateSpikeSampleData(datasourceId: string, analyzedAttribute: string, analyzedAttributeValue: string, baselineAttribute: string, baselineCount: number, input: string, outerlineCount: number): Promise<AxiosResponse> {
        input = encodeURI(input);
        const url = `${mainURL}/entity/generateSpikeSampleData/${datasourceId}?analyzedAttribute=${analyzedAttribute}&analyzedAttributeValue=${analyzedAttributeValue}&baselineAttribute=${baselineAttribute}&baselineCount=${baselineCount}&input=${input}&outerlineCount=${outerlineCount}`;
        return axios.get(url);
      }
    
      // Generate Abnormal Time Series Sample Data
      generateAbnormalTimeSeriesSampleData(datasourceId: string, analyzedAttribute: string, analyzedAttributeValue: string, baselineAttribute: string, input: string, typeOfAnomaly: string): Promise<AxiosResponse> {
        input = encodeURI(input);
        const url = `${mainURL}/entity/generateAbnormalTimeSeriesSampleData/${datasourceId}?analyzedAttribute=${analyzedAttribute}&analyzedAttributeValue=${analyzedAttributeValue}&baselineAttribute=${baselineAttribute}&input=${input}&typeOfAnomaly=${typeOfAnomaly}`;
        return axios.get(url);
      }
    
      // Upload SSP Data
      ssdFileIngestion(dataSourceId: string, dataSourceName: string, datasetType: string, uploadId: string, data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/dataIngestion/ssdFileIngestion?dataSourceId=${dataSourceId}&dataSourceName=${dataSourceName}&datasetType=${datasetType}&uploadId=${uploadId}`;
        return axios.post(url, data) 
      //   {
      //     reportProgress: true,
      //     observe: 'events'
      //   });
      // }
      }

      // ssdFileIngestion(dataSourceId: string, dataSourceName: string, datasetType: string, uploadId: string, data: any): Promise<AxiosResponse> {
      //   const url = `${mainURL}/dataIngestion/ssdFileIngestion?dataSourceId=${dataSourceId}&dataSourceName=${dataSourceName}&datasetType=${datasetType}&uploadId=${uploadId}`;
      //   return axios.post(url, data, {
      //     reportProgress: true,
      //     observe: 'events'
      //   });
      // }
    
    
      // Get Deviation Details
      getDeviationDetails(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/getDeviationDetails`;
        return axios.post(url, data);
      }
    
      // Get Noisy Models
      getNoisyModels(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/getNoisyModels`;
        return axios.post(url, data);
      }
    
      // Noisy Model Purge Utility
      noisyModelPurgeUtility(data: any): Promise<AxiosResponse> {
        const url = `${mainURL}/entity/noisyModelPurgeUtility`;
        return axios.post(url, data);
      }
    
//configure--end//


//roles--start//


// Get All Role Masters
  getAllRoleMasters(): Promise<AxiosResponse> {
    const url = `${mainURL}/getAllRoleMasters`;
    return axios.get(url);
  }

  // Get All Role Master Names
  getAllRoleMasterNames(): Promise<AxiosResponse> {
    const url = `${mainURL}/getAllRoleMasterNames`;
    return axios.get(url);
  }

  // Get Role Master by ID
  getRoleMasterById(roleMasterId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/getRoleMasterById/${roleMasterId}`;
    return axios.get(url);
  }

  // Get All Permissions
  getAllPermissions(): Promise<AxiosResponse> {
    const url = `${mainURL}/getAllPermissions`;
    return axios.get(url);
  }

  // Add Role Master
  addRoleMaster(roleMaster: any): Promise<AxiosResponse> {
    const url = `${mainURL}/addRoleMaster`;
    return axios.post(url, roleMaster);
  }

  // Update Role Master
  updateRoleMaster(roleMaster: any): Promise<AxiosResponse> {
    const url = `${mainURL}/updateRoleMaster`;
    return axios.put(url, roleMaster);
  }

  // Delete Role Master by ID
  deleteRoleMasterByRoleMasterId(roleMasterId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/deleteRoleMasterById/${roleMasterId}`;
    return axios.delete(url);
  }


//roles--end//


//users--start//


  getAllUsers(): Promise<AxiosResponse> {
    const url = `${mainURL}/getAllUsers`;
    return axios.get(url);
  }

  // Activate/Deactivate user
  activateDeactivateUser(userId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/activateDeactivateUser/${userId}`;
    return axios.get(url);
  }

  // Change password by admin
  changePasswordByAdmin(requestBody: any): Promise<AxiosResponse> {
    const url = `${mainURL}/changePasswordByAdmin`;
    return axios.put(url, requestBody);
  }

  // Get all user names
  getAllUserNames(): Promise<AxiosResponse> {
    const url = `${mainURL}/getAllUserNames`;
    return axios.get(url);
  }

  // Get user by user ID
  getUserByUserId(userId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/getUserByUserId/${userId}`;
    return axios.get(url);
  }

  // Get user by user name
  getUserByUserName(userName: string): Promise<AxiosResponse> {
    const url = `${mainURL}/getUserByUserName/${userName}`;
    return axios.get(url);
  }

  // Create a new user
  createUser(userMaster: any): Promise<AxiosResponse> {
    const url = `${mainURL}/createUser`;
    return axios.post(url, userMaster);
  }

  // Update an existing user
  updateUser(userMaster: any): Promise<AxiosResponse> {
    const url = `${mainURL}/updateUser`;
    return axios.put(url, userMaster);
  }

  // Delete a user by admin
  deleteUserByAdmin(userId: string): Promise<AxiosResponse> {
    const url = `${mainURL}/deleteUserByAdmin/${userId}`;
    return axios.delete(url);
  }

  // Get logged-in user details
  getLoggedinUser(): Promise<AxiosResponse> {
    const url = `${mainURL}/getLoggedinUser`;
    return axios.get(url);
  }


  //users--end//

  // Roster API--start//

  // Get all shift categories
  getAllShiftCategory(): Promise<AxiosResponse> {
    const url = `${newMainURL}/shift-management/shifts-category`;
    return axios.get(url);
  }

  // Get all shift management data
  getAllShiftManagement(): Promise<AxiosResponse> {
    const url = `${newMainURL}/shift-management/all`;
    return axios.get(url);
  }

  // Update all shift management data
  updateAllShiftManagement(shiftsData: any): Promise<AxiosResponse> {
    const url = `${newMainURL}/shift-management/update-roster/`;
    return axios.post(url, shiftsData);
  }

  // Get selected shift management for a specific week
  getSelectedShiftManagement(week: string): Promise<AxiosResponse> {
    const url = `${newMainURL}/shift-management/all?week=${week}`;
    return axios.get(url);
  }




  // Roster API--end//
}
export default new DashboardService();













































// import axios, { AxiosResponse } from 'axios';
// import { axiosInstance } from '../../core/services/addToken';



//     const pyServerURL = 'https://demo7.cetascyber.com/py-mba/'
//     const serverUrl = 'https://demo7.cetascyber.com/cybernetix'
//     const serverDomainUrl = 'https://demo7.cetascyber.com/'
//     const newServerUrl ='https://demo7.cetascyber.com/node/cybernetix/v1'

// const environment = {
// //   serverUrl: 'http://your-server-url', // Replace with your actual server URL
// //   entityURL: 'http://your-entity-url',
// //   identityURL: 'http://your-identity-url',
// //   mainURL: 'http://your-main-url',
// //   subURL: 'http://your-sub-url',
//         serverUrl : `${serverUrl}`,
//         mainURL : `${serverUrl}/v1/dashboard`,
//         subURL : `${serverUrl}/v1/caseMgmt`,
//         entityURL : `${serverUrl}/v1/entity`,
//         identityURL : `${serverUrl}/v1/identity`,
// };

// class DashboardService {
//   getDashboardCounts(duration: string): Promise<AxiosResponse> {
//     const url = `${environment.mainURL}/counts/all?duration=${duration}`;
//     return axiosInstance.get(url);
//   }

//   getDataQualityCount(): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/dataQuality/getDataQualityCount`;
//     return axiosInstance.get(url);
//   }

//   getUncorrelatedCount(): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/dataQuality/getUncorrelatedCount`;
//     return axiosInstance.get(url);
//   }

//   getTopEntityByCategory(): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/entity/getTopEntityByCategory`;
//     return axiosInstance.get(url);
//   }

//   getAlertChangePercentage(): Promise<AxiosResponse> {
//     const url = `${environment.entityURL}/getAlertChangePercentage`;
//     return axiosInstance.get(url);
//   }

//   // getIncidentChangePercentage(): Promise<AxiosResponse> {
//   //   const url = `${environment.entityURL}/getIncidentChangePercentage`;
//   //   return axiosInstance.get(url);
//   // }

//   // getFPChangePercentage(): Promise<AxiosResponse> {
//   //   const url = `${environment.entityURL}/getFPChangePercentage`;
//   //   return axiosInstance.get(url);
//   // }

//   // getDataSourceAttributesDetails(): Promise<AxiosResponse> {
//   //   const url = `${environment.entityURL}/dataSourceAttributesDetails`;
//   //   return axiosInstance.get(url);
//   // }

//   // getAllHealthDashboardInfo(): Promise<AxiosResponse> {
//   //   const url = `${environment.serverUrl}/dashboardInfo`;
//   //   return axiosInstance.get(url);
//   // }

//   // getAllFPR(): Promise<AxiosResponse> {
//   //   const url = `${environment.entityURL}/getAllFPR`;
//   //   return axiosInstance.get(url);
//   // }

//   // supressFPR(ruleId: number): Promise<AxiosResponse> {
//   //   const url = `${environment.entityURL}/supressManualAlert/${ruleId}`;
//   //   return axiosInstance.delete(url);
//   // }

//   // revokeFPR(ruleId: number, status: string): Promise<AxiosResponse> {
//   //   const url = `${environment.entityURL}/undoSupressAlert/${ruleId}/${status}`;
//   //   return axiosInstance.delete(url);
//   // }

//   // getRiskCountByDepartment(): Promise<AxiosResponse> {
//   //   const url = `${environment.mainURL}/riskscountbydepartment/0/50?size=5`;
//   //   return axiosInstance.get(url);
//   // }

//   // getRiskCountByTitle(): Promise<AxiosResponse> {
//   //   const url = `${environment.mainURL}/riskscountbytitle/0/0?size=5`;
//   //   return axiosInstance.get(url);
//   // }

//   // getRiskCountByLocation(): Promise<AxiosResponse> {
//   //   const url = `${environment.mainURL}/riskscountbycountry/0?size=5`;
//   //   return axiosInstance.get(url);
//   // }

//   // searchUserByName(entityName: string): Promise<AxiosResponse> {
//   //   const encodedEntityName = encodeURI(entityName);
//   //   const url = `${environment.mainURL}/searchRiskyEntities?entityName=${encodedEntityName}`;
//   //   return axiosInstance.get(url);
//   // }

//   // getAiPredictions(offset: number, size: number): Promise<AxiosResponse> {
//   //   const url = `${environment.mainURL}/getTopPredictions/${offset}/${size}`;
//   //   return axiosInstance.get(url);
//   // }

//   getRiskTrend(size: number): Promise<AxiosResponse> {
//     const url = `${environment.mainURL}/getRiskTrend/${size}`;
//     return axiosInstance.get(url);
//   }

//   getAlertGraph(): Promise<AxiosResponse> {
//     const url = `${environment.entityURL}/getAlertGraph`;
//     return axiosInstance.get(url);
//   }

//   getIncidentTrend(): Promise<AxiosResponse> {
//     const url = `${environment.entityURL}/getIncidentGraph/`;
//     return axiosInstance.get(url);
//   }

//   getAlertDetails(): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/entity/getAlertDetails`;
//     return axiosInstance.get(url);
//   }

//   getAllRiskyAlertGraph(alertype: string, duration: string): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/insight/getAllRiskyAlertGraph?alertype=${alertype}&duration=${duration}`;
//     return axiosInstance.get(url);
//   }

//   getFPRTrend(size: number): Promise<AxiosResponse> {
//     const url = `${environment.entityURL}/getFPRTrend/${size}`;
//     return axiosInstance.get(url);
//   }

//   getIncidentTrendPieChart(duration: string): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/insight/getIncidentsGraph?duration=${duration}`;
//     return axiosInstance.get(url);
//   }

//   getNoisyAlertGraph(): Promise<AxiosResponse> {
//     const url = `${environment.serverUrl}/v1/insight/getNoisyAlertGraph`;
//     return axiosInstance.get(url);
//   }

//   getTopViolators(entityType: string, size: number): Promise<AxiosResponse> {
//     const url = `${environment.entityURL}/getTopViolators/${entityType}/${size}`;
//     return axiosInstance.get(url);
//   }

//   getTrendingDatasourceandRuleId(): Promise<AxiosResponse> {
//     const url = `${environment.entityURL}/getTrendingDatasourceandRuleId`;
//     return axiosInstance.get(url);
//   }

//   // Add more methods as needed...
// }

// export default new DashboardService();
