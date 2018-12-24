import * as log4js from 'log4js';
import { config } from './log4.config';


log4js.configure(config);

var logFun: any = {};

const errorLogger = log4js.getLogger('errorLogger');
const resLogger = log4js.getLogger('resLogger');

//封装错误日志
logFun.logError =  (ctx: any, error: any, resTime: any) => {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime))
    }
}

//封装响应日志
logFun.logResponse = (ctx: any, resTime: any) => {
    if (ctx) {
        resLogger.info(formatRes(ctx, resTime))
    }
}

//格式化响应日志
const formatRes = (ctx: { request: any; status: any; body: any; }, resTime: any) => {

    let logText =
        `
        \n ====================== response start ====================== \n
        ${formatReqLog(ctx.request, resTime)}
        response status:  ${ctx.status} \n
        response body: \n ${JSON.stringify(ctx.body)} \n
        ====================== response end ====================== \n
        `
    return logText

}

//格式化错误日志
const formatError = (ctx: { request: any; }, err: { name: any; messsage: any; stack: any; }, resTime: any) => {

    let logText =
        `
        \n ====================== error start ====================== \n
        ${formatReqLog(ctx.request, resTime)}
        error name:    ${err.name} \n
        error message: ${err.messsage} \n
        error stack:   ${err.stack} \n
        ====================== error end ====================== \n
        `
    return logText
};

//格式化请求日志
const formatReqLog = (req: { method: string; originalUrl: any; ip: any; query: any; body: any; }, resTime: any) => {
    let logText
    if (req.method === 'GET') {
        logText = 
        `
        request method:      ${req.method} \n
        request originalUrl: ${req.originalUrl} \n
        request client ip:   ${req.ip} \n
        request query:       ${JSON.stringify(req.query)} \n
        response time:       ${resTime} \n
        `
    } else if (req.method === 'OPTIONS') {
        logText = 
        `
        request method:      ${req.method} \n
        request originalUrl: ${req.originalUrl} \n
        request client ip:   ${req.ip} \n
        response time:       ${resTime} \n
        `
    } else {
        logText =
        `
        request method:      ${req.method} \n
        request originalUrl: ${req.originalUrl} \n
        request client ip:   ${req.ip} \n
        request body:        ${JSON.stringify(req.body)} \n
        response time:       ${resTime} \n
        `    
    }

    return logText
}

// module.exports = logFun
export default logFun;