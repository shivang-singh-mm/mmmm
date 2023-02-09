import { Request, Response } from "express";
import moment from "moment";
import axios, {AxiosError} from 'axios';
import { cleanPayload } from "../../utils/common/cleanPayload";
import { userService } from "../../services/services.factory";
export const forward = async (req: Request, resp: Response) => {
  
  const data = cleanPayload({
    ...req.body,
  })
  const {stage, message, status} = await userService.forwardRequest(data);
  // try {
    // const getJyotish = await axios({
    //   url: 'http://13.126.158.64:9000/getjyotish?timestamp=' + timeStamp,
    //   method: 'get',
    // });
    // data['fields']['Astro'] = getJyotish.data;
    // await axios({
    //   url: 'https://app.telecrm.in/api/b1/enterprise/63859df08e04300008781545/autoupdatelead',
    //   method: 'POST',
    //   data
    // });
    return resp.json({message, stage}).status(status);
  // } catch (error) {
  //   const err = error as AxiosError;
  //   console.log('from error', err?.response?.data, err?.response?.status);
  //   return resp.status(err?.response?.status || 400).send(err?.response?.data)
  // }
}