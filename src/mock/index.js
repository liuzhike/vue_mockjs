/***
 * 拦截 api 列表
 * @type {MockXMLHttpRequest}
 */
import {queryApi,queryApiTwo} from '../store/api'
const Mock = require('mockjs')

// 拦截接口列表
Mock.mock(queryApi, /post|get/i, require('./modules/list'))
Mock.mock(queryApiTwo, /post|get/i, require('./modules/list2'))
