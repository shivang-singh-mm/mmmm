import { AxiosError } from "axios";
import moment from "moment";
import { UserServiceParams } from "../types";
import { BaseService } from "./base.service";


export default class UserService extends BaseService {


  constructor(params: UserServiceParams) {
    super(params);
  }
  private _getJyotish(timeStamp: string) {
    const url = 'http://13.126.158.64:9000/getjyotish?timestamp=' + timeStamp;
    return this.callApi(url, 'GET');
  }
  public forwardRequest = async (data: any) => {
    let stage = 'pre-process';
    const name: string = data?.fields?.name;
    const phone: string = data?.fields?.phone;
    const dob: string = data?.fields?.['Date of Birth'];
    const cob: string = data?.fields?.['City of Birth'];
    const sob: string = data?.fields?.['State of Birth'];
    const tob: string = data?.fields?.['Time of Birth'];
    const hand_image: string[] = data?.field?.hand_image || [];
    const calling_number: string[] = [];
    const timeStamp = moment().tz('Asia/Kolkata').format('DD-MM-YYYY hh:mm:ss a');
    if (!data.fields) {
      return {
        status: 400,
        message: 'missing fields',
        stage
      }     
    }
    data['fields']['timeStamp'] = timeStamp;
    stage = 'db insert';
    console.log(stage);
    
    try {
      await this.userRepo.saveDataToDb({
        name,
        dob,
        city_of_birth: cob,
        phone_number: phone,
        hand_image,
        calling_number,
        tob
      })
    } catch (err: any) { return { stage, status: 500, message: err?.message } }
    return this.#_forwardRequest(data, timeStamp);
  }

  #_forwardRequest = async (data: any, timeStamp: string) => {
    let stage = '';
    try {
      stage = 'get_jyotish'
      const jyotish = (await this._getJyotish(timeStamp))?.data;

      data['fields']['Astro'] = jyotish

      stage = 'update to telecrm'
      // await this.updateTeleCRM(data)
      return {
        status: 200,
        message: data
      }
    } catch (err) {
      const error = err as AxiosError
      return {
        stage,
        status: error?.response?.status || 400,
        message: error?.response?.data

      }
    }
  }
  updateTeleCRM(data: any) {
    // const url = 'https://app.telecrm.in/api/b1/enterprise/63859df08e04300008781545/autoupdatelead';
    // return this.callApi(url, 'POST', data);
  }
}