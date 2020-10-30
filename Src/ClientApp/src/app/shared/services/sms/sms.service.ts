import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseModel} from '../../model/Response/responseModel';
import {QueryParamModel} from '../../model/Response/query-param.model';
import {NumberModel} from '../../model/number/number.model';
import {ComposeSMSModel} from '../../model/sms/compose-sms.model';
import {TemplateModel} from '../../model/sms/template.model';
import {PanelModel} from '../../model/sms/panel.model';
import {BusinessCardModel} from '../../model/sms/business-card.model';
import {PanelVersionModel} from '../../model/sms/panel-version.model';
import {of} from 'rxjs';
import {ScheduleSmsInfoModel} from '../../model/sms/schedule-sms-info.model';
import {ScheduleDetailModel} from '../../model/sms/schedule-detail.model';
import { baseUrl } from 'src/polyfills';

const API_BASE_USER = baseUrl;

@Injectable()
export class SmsService {
  constructor(private http: HttpClient) {
  }

  getAllNumbers(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/Numbers?queryParam=' + qpm);
  }

  ComposeSms(data: ComposeSMSModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/sendSms', data);
  }


  getUserTemplates(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserTemplate?queryParam=' + qpm);
  }

  addTemplate(template: TemplateModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/UserTemplate', template);
  }

  editTemplate(template: TemplateModel) {
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/UserTemplate', template);
  }

  deleteTemplate(templateId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/UserTemplate/' + templateId);
  }

  getUserPanels(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserPanel?queryParam=' + qpm);
  }

  getAllPanels(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminPanel?queryParam=' + qpm);
  }

  getPanelVersions(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminPanelVersion?queryParam=' + qpm);
  }

  getSSDForUser(userId, ssiId) {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserScheduleDetail?userId=' + userId + '&ssiId=' + ssiId);
  }

  addSSD(schedule: ScheduleDetailModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/UserScheduleDetail', schedule);
  }

  deleteSSD(ssdId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/UserScheduleDetail/' + ssdId);
  }

  addSSI(schedule: ScheduleSmsInfoModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/UserScheduledSms', schedule);
  }

  getUserSSI(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserScheduledSms?queryParam=' + qpm);
  }

  editSSI(schedule: ScheduleSmsInfoModel) {
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/UserScheduledSms', schedule);
  }

  deactivateSSI(schedule: ScheduleSmsInfoModel) {
    const ssi = {...schedule};
    ssi.status = 1 - ssi.status;
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/UserScheduledSms', ssi);
  }

  deleteSSI(ssiId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/UserScheduledSms/' + ssiId);
  }

  deactivatePanel(templateId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/UserPanel/' + templateId);
  }

  blockPanel(panel: PanelModel) {
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/AdminPanel/', panel);
  }

  deletePanel(templateId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/AdminPanel/' + templateId);
  }

  addPanel(panel: PanelModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/AdminPanel', panel);
  }

  editPanel(panel: PanelModel) {
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/UserPanel', panel);
  }

  getAllUsersForAssign() {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminPanel/GetAllUsers');
  }

  getUserGroupsForAssign(userId: number) {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminPanel/GetAllUserGroups/' + userId);
  }

  getUserNumbersForAssign(userId: number) {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminPanel/GetAllUserNumbers/' + userId);
  }

  getUserTemplatesForAssign(userId: number) {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminPanel/GetAllUserTemplates/' + userId);
  }

  createTemplateForUser(userId: number, template: TemplateModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/AdminPanel/CreateTemplateForUser/' + userId, template);
  }

  getAllBusinessCards(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/AdminBusinessCard?queryParam=' + qpm);
  }

  getUserBusinessCards(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserBusinessCard?queryParam=' + qpm);
  }

  addBusinessCard(card: BusinessCardModel) {
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/AdminBusinessCard', card);
  }

  deleteBusinessCard(businessCardId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/AdminBusinessCard/' + businessCardId);
  }

  editBusinessCard(card: BusinessCardModel) {
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/UserBusinessCard', card);
  }

  blockBusinessCard(card: BusinessCardModel) {
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/AdminBusinessCard/', card);
  }

  deactivateBusinessCard(businessCardId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/UserBusinessCard/' + businessCardId);
  }

  getUserSentSms(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/SendSms?queryParam=' + qpm);
  }

  getUserReceivedSms(queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/ReceiveSms?queryParam=' + qpm);
  }

  deletePanelVersion(panelVersionId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/AdminPanelVersion/' + panelVersionId);
  }

  addPanelVersion(model: PanelVersionModel, file: File) {
    if (!file) {
      return of(null);
    }

    // let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append(file.name, file);

    // for (const itm in cheque) {
    formData.append('model', JSON.stringify(model));
    // }
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<ResponseModel>(API_BASE_USER + 'api/AdminPanelVersion', formData);
  }

  getBankInfo() {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/BankInfo');
  }

  deleteNumber(numberId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/AdminNumber/' + numberId);
  }

  toggleBlockNumber(number: NumberModel) {
    const tmp: NumberModel = {
      isBlocked: !number.isBlocked,
      type: number.type,
      number: number.number,
      id: number.id,
      createDate: number.createDate,
      username: number.username,
      password: number.password,
      isShared: number.isShared,
      owner: number.owner,
      user: number.user
    };
    return this.http.put<ResponseModel>(API_BASE_USER + 'api/AdminNumber', tmp);
  }

  getGroupById(groupId: number) {
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserOwnedGroups/' + groupId);
  }

  getGroupContacts(groupId: number, queryParams: QueryParamModel) {
    const qpm = JSON.stringify(queryParams);
    return this.http.get<ResponseModel>(API_BASE_USER + 'api/UserGroupContacts/' + groupId + '?queryParam=' + qpm);
  }

  deleteContactFromGroup(contactId: number, groupId: number) {
    return this.http.delete<ResponseModel>(API_BASE_USER + 'api/UserGroupContacts/' + contactId + '?groupId=' + groupId);
  }
}
