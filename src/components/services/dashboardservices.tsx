import axios, { AxiosResponse } from 'axios';


    const pyServerURL = 'https://demo7.cetascyber.com/py-mba/'
    const serverUrl = 'https://demo7.cetascyber.com/cybernetix'
    const serverDomainUrl = 'https://demo7.cetascyber.com/'
    const newServerUrl ='https://demo7.cetascyber.com/node/cybernetix/v1'

const environment = {
//   serverUrl: 'http://your-server-url', // Replace with your actual server URL
//   entityURL: 'http://your-entity-url',
//   identityURL: 'http://your-identity-url',
//   mainURL: 'http://your-main-url',
//   subURL: 'http://your-sub-url',
        serverUrl : `${serverUrl}`,
        mainURL : `${serverUrl}/v1/dashboard`,
        subURL : `${serverUrl}/v1/caseMgmt`,
        entityURL : `${serverUrl}/v1/entity`,
        identityURL : `${serverUrl}/v1/identity`,
};

class DashboardService {
  getDashboardCounts(duration: string): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/counts/all?duration=${duration}`;
    return axios.get(url);
  }

  getDataQualityCount(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/dataQuality/getDataQualityCount`;
    return axios.get(url);
  }

  getUncorrelatedCount(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/dataQuality/getUncorrelatedCount`;
    return axios.get(url);
  }

  getTopEntityByCategory(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/entity/getTopEntityByCategory`;
    return axios.get(url);
  }

  getAlertChangePercentage(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getAlertChangePercentage`;
    return axios.get(url);
  }

  getIncidentChangePercentage(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getIncidentChangePercentage`;
    return axios.get(url);
  }

  getFPChangePercentage(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getFPChangePercentage`;
    return axios.get(url);
  }

  getDataSourceAttributesDetails(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/dataSourceAttributesDetails`;
    return axios.get(url);
  }

  getAllHealthDashboardInfo(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/dashboardInfo`;
    return axios.get(url);
  }

  getAllFPR(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getAllFPR`;
    return axios.get(url);
  }

  supressFPR(ruleId: number): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/supressManualAlert/${ruleId}`;
    return axios.delete(url);
  }

  revokeFPR(ruleId: number, status: string): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/undoSupressAlert/${ruleId}/${status}`;
    return axios.delete(url);
  }

  getRiskCountByDepartment(): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/riskscountbydepartment/0/50?size=5`;
    return axios.get(url);
  }

  getRiskCountByTitle(): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/riskscountbytitle/0/0?size=5`;
    return axios.get(url);
  }

  getRiskCountByLocation(): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/riskscountbycountry/0?size=5`;
    return axios.get(url);
  }

  searchUserByName(entityName: string): Promise<AxiosResponse> {
    const encodedEntityName = encodeURI(entityName);
    const url = `${environment.mainURL}/searchRiskyEntities?entityName=${encodedEntityName}`;
    return axios.get(url);
  }

  getAiPredictions(offset: number, size: number): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/getTopPredictions/${offset}/${size}`;
    return axios.get(url);
  }

  getRiskTrend(size: number): Promise<AxiosResponse> {
    const url = `${environment.mainURL}/getRiskTrend/${size}`;
    return axios.get(url);
  }

  getAlertGraph(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getAlertGraph`;
    return axios.get(url);
  }

  getIncidentTrend(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getIncidentGraph/`;
    return axios.get(url);
  }

  getAlertDetails(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/entity/getAlertDetails`;
    return axios.get(url);
  }

  getAllRiskyAlertGraph(alertype: string, duration: string): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/insight/getAllRiskyAlertGraph?alertype=${alertype}&duration=${duration}`;
    return axios.get(url);
  }

  getFPRTrend(size: number): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getFPRTrend/${size}`;
    return axios.get(url);
  }

  getIncidentTrendPieChart(duration: string): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/insight/getIncidentsGraph?duration=${duration}`;
    return axios.get(url);
  }

  getNoisyAlertGraph(): Promise<AxiosResponse> {
    const url = `${environment.serverUrl}/v1/insight/getNoisyAlertGraph`;
    return axios.get(url);
  }

  getTopViolators(entityType: string, size: number): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getTopViolators/${entityType}/${size}`;
    return axios.get(url);
  }

  getTrendingDatasourceandRuleId(): Promise<AxiosResponse> {
    const url = `${environment.entityURL}/getTrendingDatasourceandRuleId`;
    return axios.get(url);
  }

  // Add more methods as needed...
}

export default new DashboardService();
