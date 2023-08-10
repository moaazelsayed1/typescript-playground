"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERPCore = exports.erpApiConfig = void 0;
var erp_sdk_typescript_1 = require("@tactful/erp-sdk-typescript");
var config = {
    ERP_API_HOST_URL: "https://erp.qa.dev.tactful.ai",
};
var erpToken = {
    access_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJLeUtMcGNUSXkyMm5aeXhWNUZJMnBLdlU2RWZzSGFfbVpMYXNFVlB6NHlFIn0.eyJleHAiOjE2OTE3MDc2NjMsImlhdCI6MTY5MDQxMTY2MywiYXV0aF90aW1lIjoxNjkwNDExNjI0LCJqdGkiOiI4NzBhZTI2Yi1lMWQ2LTRjODctYTE0NS1kZmUxMzE5NTgzYWYiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLmVjby5kZXYudGFjdGZ1bC5haS9yZWFsbXMvZGV2IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImFhNzhhYjE5LTJiMjEtNDc3MC04YTdkLTM2YjZiOTJiOWY0ZiIsInR5cCI6IkJlYXJlciIsImF6cCI6InRhY3RmdWwiLCJzZXNzaW9uX3N0YXRlIjoiMTUwYTk1ZmItZTU3MS00M2YzLTg4N2YtMDAzNjJlYjc0Y2Q4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2FwcC5hbHBoYS5kZXYudGFjdGZ1bC5haS8qIiwiaHR0cDovL2xvY2FsaG9zdCoiLCJodHRwczovL2xvY2FsaG9zdCoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZGV2Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIxNTBhOTVmYi1lNTcxLTQzZjMtODg3Zi0wMDM2MmViNzRjZDgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInJvbGUiOiJhZ2VudCIsInByb2ZpbGVfaWQiOiIzMSIsIm5hbWUiOiJNYXJ5YW0gRWhhYiIsInByZWZlcnJlZF91c2VybmFtZSI6Im1hcnlhbS5laGFiQHRhY3RmdWwuYWkiLCJnaXZlbl9uYW1lIjoiTWFyeWFtIiwiZmFtaWx5X25hbWUiOiJFaGFiIiwicHJvZmlsZV9yb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im1hcnlhbS5laGFiQHRhY3RmdWwuYWkifQ.Id1q7W17u5tBvVRhQtIIHG7L1TBFNlYPCftpZ23nVgEqnBtaXGtX4ZIMuM4JY9Y27hOFdp7sJV_UH3NO9_MpPcqDfAIfX2y8NypLXBpWBLe12EEqxLGb30qrvVFXtDpvwfDJdTa_tG2T-vGgblmyEZzi_mPN_Bd4uahJJ8n3o2RB0Mh_J4yZln1h_mWYwx-Ld1VaSEt6NdDQhK5UKuOPnBJajNyvPyBdmPl4BKHo-6zOrZrKLktB5fIHm_j-LVXXN68CzJWKNqurmLWXaD6yTnA5_JdEawSRIUy3CEoJnpFqim_G72ZqJ8gEU_J31mvJfxGLzV_tYLFsijGEOj3maA", // Replace with your actual token
};
exports.erpApiConfig = new erp_sdk_typescript_1.Configuration({
    basePath: config.ERP_API_HOST_URL,
    apiKey: "Bearer ".concat(erpToken.access_token),
    options: {
        mode: "cors",
    },
});
exports.ERPCore = (0, erp_sdk_typescript_1.initializeTactful)(exports.erpApiConfig);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var customerId, customer, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                customerId = 27;
                return [4 /*yield*/, exports.ERPCore.customers.showCustomer({
                        customer: customerId,
                    })];
            case 1:
                customer = _a.sent();
                return [2 /*return*/, customer];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); })();
