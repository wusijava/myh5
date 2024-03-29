import axios from '../config/axios'
import api from './'

export async function taoList(params){
    const result = await axios.post(api.order.taoList,params);
    return result;
}

export async function orderDetail(params){
    const result = await axios.post(api.order.detail,params);
    return result;
}
export async function taoDetail(params){
    const result = await axios.post(api.order.taoDetail,params);
    return result;
}
export async function orderList(params){
    const result = await axios.post(api.order.orderList,params);
    return result;
}
export async function showProductState(params){
    const result = await axios.post(api.order.showProductState,params);
    return result;
}
export async function monitorRecord(params){
    const result = await axios.post(api.order.monitorRecord,params);
    return result;
}
export async function changeState(params){
    const result = await axios.post(api.order.changeState,params);
    return result;
}
export async function deleteRow(params){
    const result = await axios.post(api.order.deleteRow,params);
    return result;
}
export async function myTask(params){
    const result = await axios.post(api.order.myTask,params);
    return result;
}
export async function receiveWork(params){
    const result = await axios.post(api.order.receiveWork,params);
    return result;
}

export async function myAddress(params){
    const result = await axios.post(api.order.address,params);
    return result;
}

export async function remind(params){
    const result = await axios.post(api.order.remind,params);
    return result;
}
export async function deleteRec(params){
    const result = await axios.post(api.order.deleteRec,params);
    return result;
}
export async function ssqRecord(params){
    const result = await axios.post(api.order.ssqRecord,params);
    return result;
}
export async function buyRecord(params){
    const result = await axios.post(api.order.buyRecord,params);
    return result;
}
export async function changeSsqState(params){
    const result = await axios.post(api.order.changeSsqState,params);
    return result;
}
export async function history(params){
    const result = await axios.post(api.order.history,params);
    return result;
}

export async function gaiLv(params){
    const result = await axios.post(api.order.gaiLv,params);
    return result;
}
export async function blueThree(params){
    const result = await axios.post(api.order.blueThree,params);
    return result;
}
export async function mathLog(params){
    const result = await axios.post(api.order.mathLog,params);
    return result;
}
export async function handleState(params){
    const result = await axios.post(api.order.handleState,params);
    return result;
}
export async function homeworkTotal(params){
    const result = await axios.post(api.order.homeworkTotal,params);
    return result;
}
export async function mind(params){
    const result = await axios.post(api.order.mind,params);
    return result;
}
export async function getTime(params){
    const result = await axios.post(api.order.getTime,params);
    return result;
}
export async function monthSpend(params){
    const result = await axios.post(api.order.monthSpend,params);
    return result;
}
export async function shouDongSaoMiao(params){
    const result = await axios.post(api.order.shouDongSaoMiao,params);
    return result;
}
export async function refundMoney(params){
    const result = await axios.post(api.order.refundMoney,params);
    return result;
}
export async function passwordList(params){
    const result = await axios.post(api.order.passwordList,params);
    return result;
}
export async function save(params){
    const result = await axios.post(api.order.save,params);
    return result;
}
export async function showPwd(params){
    const result = await axios.post(api.order.showPwd,params);
    return result;
}
export async function deletePassword(params){
    const result = await axios.post(api.order.deletePassword,params);
    return result;
}
export async function getAwardList(params){
    const result = await axios.post(api.order.getAwardList,params);
    return result;
}
export async function handleAwardState(params){
    const result = await axios.post(api.order.handleAwardState,params);
    return result;
}
export async function paiBan(params){
    const result = await axios.post(api.order.paiBan,params);
    return result;
}
export async function waterLevel(params){
    const result = await axios.post(api.order.waterLevel,params);
    return result;
}
export async function getWaterLevel(params){
    const result = await axios.post(api.order.getWaterLevel,params);
    return result;
}

export async function weatherList(params){
    const result = await axios.post(api.order.weatherList,params);
    return result;
}
export async function weatherInfo(params){
    const result = await axios.post(api.order.weatherInfo,params);
    return result;
}