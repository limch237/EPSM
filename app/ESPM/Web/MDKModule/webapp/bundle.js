(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build.definitions/application-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../css-loader/dist/runtime/api.js":
/*!***************************************************************************!*\
  !*** /extbin/npm/globals/lib/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Name":"ESPM","Version":"/ESPM/Globals/AppDefinition_Version.global","MainPage":"/ESPM/Pages/Overview.page","OnLaunch":["/ESPM/Actions/Service/Initialize.action"],"OnWillUpdate":"/ESPM/Rules/OnWillUpdate.js","OnDidUpdate":"/ESPM/Actions/Service/Initialize.action","Styles":"/ESPM/Styles/Styles.less","Localization":"/ESPM/i18n/i18n.properties","StyleSheets":{"Styles":{"css":"/ESPM/Styles/Styles.css","ios":"/ESPM/Styles/Styles.nss","android":"/ESPM/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CloseModalPage_Cancel.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CloseModalPage_Cancel.action ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CloseModalPage_Complete.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CloseModalPage_Complete.action ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/ClosePage.action":
/*!*********************************************************!*\
  !*** ./build.definitions/ESPM/Actions/ClosePage.action ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CreateEntityFailureMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CreateEntityFailureMessage.action ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CreateEntitySuccessMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CreateEntitySuccessMessage.action ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/ESPM/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_Detail.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Customers/NavToCustomers_Detail.action ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Customers/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_List.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Customers/NavToCustomers_List.action ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Customers/Customers_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/DeleteEntityFailureMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/DeleteEntityFailureMessage.action ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/DeleteEntitySuccessMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/DeleteEntitySuccessMessage.action ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ESPM/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Logout.action":
/*!******************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Logout.action ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/NavToProducts_Detail.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/NavToProducts_Detail.action ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/NavToProducts_Edit.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/NavToProducts_Edit.action ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/Products/Products_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/NavToProducts_List.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/NavToProducts_List.action ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/Products_UpdateEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/Products_UpdateEntity.action ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","ReadLink":"{@odata.readLink}"},"Properties":{"Category":"#Control:ProductCategory/#SelectedValue","CategoryName":"#Control:ProductCategory/#SelectedValue","CurrencyCode":"#Control:ProductCurrencyCode/#Value","DimensionDepth":"#Control:ProductDepth/#Value","DimensionHeight":"#Control:ProductHeight/#Value","DimensionUnit":"#Control:ProductDimensionUnit/#Value","DimensionWidth":"#Control:ProductWidth/#Value","Name":"#Control:ProductName/#Value","Price":"#Control:ProductPrice/#Value","ShortDescription":"#Control:ProductDescription/#Value","Weight":"#Control:ProductWeight/#Value","WeightUnit":"#Control:ProductWeightUnit/#Value","SupplierId":"#Control:productSupplierID/#SelectedValue"},"UpdateLinks":[],"Headers":{"Accept":"application/json;IEEE754Compatible=true;ExponentialDecimals=false"},"ActionResult":{"_Name":"update"},"ShowActivityIndicator":true,"OnSuccess":"/ESPM/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/ESPM/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"CreateLinks":[],"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Control:currencyPkr/#SelectedValue","PurchaseOrderId":"#Control:poIdPrp/#Value","SupplierId":"#Control:supplierPkr/#SelectedValue"},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/ESPM/Services/ESPM.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ParentLink":{"Property":"Items","Target":{"EntitySet":"PurchaseOrderHeaders","ReadLink":"{@odata.readLink}"}},"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js","Properties":{"CurrencyCode":"#Control:currencyPrp/#Value","GrossAmount":"#Control:grossAmtPrp/#Value","ItemNumber":"#Control:itemNbrPrp/#Value","NetAmount":"#Control:netAmtPrp/#Value","ProductId":"#Control:productPkr/#SelectedValue","PurchaseOrderId":"#Control:poIdPrp/#Value","Quantity":"#Control:quantityPkr/#SelectedValue","TaxAmount":"#Control:taxPrp/#Value"},"Target":{"EntitySet":"PurchaseOrderItems","Service":"/ESPM/Services/ESPM.service"},"Headers":{"Accept":"application/json;IEEE754Compatible=true;ExponentialDecimals=false"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PurchaseOrderHeaders","ReadLink":"PurchaseOrderHeaders('{purchaseOrderId}')","Service":"/ESPM/Services/ESPM.service"},"Properties":{"GrossAmount":"{grossAmt}","NetAmount":"{netAmt}","TaxAmount":"{taxAmt}"},"Headers":{"Accept":"application/json;IEEE754Compatible=true;ExponentialDecimals=false"},"ActionResult":{"_Name":"update"},"ShowActivityIndicator":true,"OnFailure":"/ESPM/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/UpdateEntitySuccessMessage.action"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"CreateLinks":[],"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Control:currencyPkr/#SelectedValue","SalesOrderId":"#Control:SOIdPrp/#Value","CustomerId":"#Control:customerPkr/#SelectedValue","LifeCycleStatus":"N","LifeCycleStatusName":"New"},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/ESPM/Services/ESPM.service"},"ActionResult":{"_Name":"create"},"ShowActivityIndicator":true,"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ParentLink":{"Property":"Items","Target":{"EntitySet":"SalesOrderHeaders","ReadLink":"{@odata.readLink}"}},"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js","Properties":{"CurrencyCode":"#Control:currencyPrp/#Value","GrossAmount":"#Control:grossAmtPrp/#Value","ItemNumber":"#Control:itemNbrPrp/#Value","NetAmount":"#Control:netAmtPrp/#Value","ProductId":"#Control:productPkr/#SelectedValue","SalesOrderId":"#Control:SOIdPrp/#Value","Quantity":"#Control:quantityPkr/#SelectedValue","TaxAmount":"#Control:taxPrp/#Value"},"Target":{"EntitySet":"SalesOrderItems","Service":"/ESPM/Services/ESPM.service"},"Headers":{"Accept":"application/json;IEEE754Compatible=true;ExponentialDecimals=false"},"ActionResult":{"_Name":"create"},"ShowActivityIndicator":true,"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"SalesOrderHeaders","ReadLink":"SalesOrderHeaders('{salesOrderId}')","Service":"/ESPM/Services/ESPM.service"},"Properties":{"GrossAmount":"{grossAmt}","NetAmount":"{netAmt}","TaxAmount":"{taxAmt}"},"Headers":{"Accept":"application/json;IEEE754Compatible=true;ExponentialDecimals=false"},"ActionResult":{"_Name":"update"},"ShowActivityIndicator":true,"OnFailure":"/ESPM/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/UpdateEntitySuccessMessage.action"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Service/Initialize.action":
/*!******************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Service/Initialize.action ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Service":"/ESPM/Services/ESPM.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/ESPM/Rules/Service/InitializeSuccess.js","OnFailure":"/ESPM/Actions/Service/InitializeFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Service/InitializeFailureMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Service/InitializeFailureMessage.action ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Service/InitializeSuccessMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Service/InitializeSuccessMessage.action ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Suppliers/Suppliers_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_List.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_List.action ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Suppliers/Suppliers_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/UpdateEntityFailureMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/UpdateEntityFailureMessage.action ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/UpdateEntitySuccessMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/UpdateEntitySuccessMessage.action ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ESPM/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Globals/AppDefinition_Version.global":
/*!*********************************************************************!*\
  !*** ./build.definitions/ESPM/Globals/AppDefinition_Version.global ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Customers/Customers_Detail.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Customers/Customers_Detail.page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'customer_details')","Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"/ESPM/Rules/Customers/Customers_Image.js","DetailImageIsCircular":true,"HeadlineText":"{LastName}","Subhead":"{FirstName}","Tags":[],"BodyText":"","Footnote":"{CustomerId}","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Address","Value":"{Street}"},{"KeyName":"City","Value":"{City}"},{"KeyName":"Postal Code","Value":"{PostalCode}"},{"KeyName":"Country","Value":"{Country}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"EmptySection":{"Caption":"$(L,'no_order')"},"Header":{"Grid":{"Items":[{"NumberOfLines":1,"Text":"Order ID"},{"NumberOfLines":1,"Text":"Created At"},{"NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Taxes","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Currency"}]},"UseTopPadding":true},"Row":{"AccessoryType":"none","Items":[{"NumberOfLines":1,"Text":"{SalesOrderId}"},{"NumberOfLines":1,"Text":"$(D,{CreatedAt})"},{"NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"{CurrencyCode}"}],"Layout":{"ColumnWidthPercentage":[0.2,-1,0.15,0.15,0.15]},"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action"},"Target":{"EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerId eq '{CustomerId}'","Service":"/ESPM/Services/ESPM.service"},"_Type":"Section.Type.GridTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Customers/Customers_List.page":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Customers/Customers_List.page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"UseTopPadding":false},"_Type":"Section.Type.ContactCell","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"Customers"},"_Name":"SectionContactCellTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"DetailImage":"/ESPM/Rules/Customers/Customers_Image.js","Headline":"{FirstName} {LastName}","Subheadline":"{City}, {Country}","OnPress":"/ESPM/Actions/Customers/NavToCustomers_Detail.action","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"ActivityType":"Email","ActivityValue":"{EmailAddress}"}],"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true}},"Search":{"Enabled":true,"Placeholder":"Customer Search","MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50}}]}],"Target":"","_Type":"Page","_Name":"Customers_List","Caption":"$(L,'customers')"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Overview.page":
/*!****************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Overview.page ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"Enterprise Sales Procurement Model (ESPM) Application","Description":"Sample Application utliizing sample data models, services to illustrates the various building blocks of creating a multi-channel application","StatusText":"v1.0.0","DetailImage":"/ESPM/Images/mdk_logo.png","DetailImageIsCircular":false,"HeadlineText":"SAP BTP Multi-channel Application","Tags":["/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js","/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js"],"Target":""},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Footer":{"Caption":"$(L,'see_all_customers')","AttributeLabel":"/ESPM/Rules/Customers/Customers_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","OnPress":"/ESPM/Actions/Customers/NavToCustomers_List.action","UseBottomPadding":true},"Header":{"UseTopPadding":false,"Caption":"$(L,'my_customers')"},"_Type":"Section.Type.ObjectCollection","Target":{"EntitySet":"Customers","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionObjectCollection0","EmptySection":{"Caption":"$(L,'no_customer')","FooterVisible":true},"ObjectCell":{"Title":"{LastName}","Subhead":"{FirstName}","DetailImage":"/ESPM/Rules/Customers/Customers_Image.js","DetailImageIsCircular":true,"AccessoryType":"none","OnPress":"/ESPM/Actions/Customers/NavToCustomers_Detail.action"},"MaxItemCount":4,"Layout":{"NumberOfColumns":2}},{"Footer":{"Caption":"$(L,'see_all_suppliers')","AttributeLabel":"/ESPM/Rules/Suppliers/Suppliers_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","OnPress":"/ESPM/Actions/Suppliers/NavToSuppliers_List.action","UseBottomPadding":true},"Header":{"UseTopPadding":false,"Caption":"$(L,'my_suppliers')"},"_Type":"Section.Type.ObjectCollection","Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionObjectCollection1","EmptySection":{"Caption":"$(L,'no_supplier') ","FooterVisible":true},"ObjectCell":{"Title":"{SupplierName}","Subhead":"{SupplierId}","DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","DetailImageIsCircular":true,"AccessoryType":"none","OnPress":"/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action"},"MaxItemCount":4,"Layout":{"NumberOfColumns":2}},{"_Type":"Section.Type.ImageCollection","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"Products","QueryOptions":"$top=15"},"_Name":"SectionImageCollection0","Header":{"UseTopPadding":false,"Caption":"$(L,'product_catalog')"},"Footer":{"Caption":"$(L,'see_all_products')","AttributeLabel":"/ESPM/Rules/Products/Products_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","OnPress":"/ESPM/Actions/Products/NavToProducts_List.action","UseBottomPadding":true},"Visible":true,"EmptySection":{"FooterVisible":false},"ImageCell":{"Title":"{Name}","Subtitle":"{Category}","Image":"{PictureUrl}","ImageIsCircular":false,"OnPress":"/ESPM/Actions/Products/NavToProducts_Detail.action"},"Layout":{"LayoutType":"HorizontalScroll"}},{"Target":"","_Type":"Section.Type.SimplePropertyCollection","DataSubscriptions":["PurchaseOrderHeaders","SalesOrderHeaders"],"_Name":"OverviewSimplePropertyCollection","Header":{"UseTopPadding":false,"Caption":"$(L,'orders')"},"EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"Target":"","Value":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js","KeyName":"Purchase Orders","AccessoryType":"disclosureIndicator","OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action"}},{"SimplePropertyCell":{"Target":"","Value":"/ESPM/Rules/SalesOrders/SalesOrders_Count.js","KeyName":"Sales Orders","AccessoryType":"disclosureIndicator","OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action"}}],"Layout":{"NumberOfColumns":2,"MinimumInteritemSpacing":66}}]}],"Target":"","_Type":"Page","_Name":"Overview","Caption":"$(L,'title')"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Products/Products_Detail.page":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Products/Products_Detail.page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'product_details')","ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/Products/NavToProducts_Edit.action","Position":"right","SystemItem":"Edit"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"{PictureUrl}","HeadlineText":"","Subhead":"{Category}","Tags":[],"BodyText":"{Name}","Footnote":"{DimensionHeight} x {DimensionWidth} x {DimensionDepth} {DimensionUnit}","Description":"{ShortDescription}","StatusText":"{Price}","StatusImage":"","SubstatusImage":"","SubstatusText":"{CurrencyCode}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Description","Value":"{ShortDescription}"}],"Layout":{"NumberOfColumns":1},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"Header":{"UseTopPadding":true},"KeyAndValues":[{"KeyName":"Category","Value":"{CategoryName}"},{"KeyName":"Quantity Unit","Value":"{QuantityUnit}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Dimensions","UseTopPadding":true},"Layout":{"NumberOfColumns":2},"SimplePropertyCells":[{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Height","Value":"{DimensionHeight} {DimensionUnit}"}},{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Width","Value":"{DimensionWidth} {DimensionUnit}"}},{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Depth","Value":"{DimensionDepth} {DimensionUnit}"}},{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Weight","Value":"{Weight} {WeightUnit}"}}],"_Type":"Section.Type.SimplePropertyCollection"},{"EmptySection":{"Caption":"$(L,'no_supplier')"},"Header":{"Caption":"Supplier Details","UseTopPadding":false},"ObjectCell":{"AccessoryType":"none","DetailImageIsCircular":true,"DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","Footnote":"{EmailAddress}","PreserveIconStackSpacing":true,"Subhead":"{Street}, {City}, {Country}","Title":"{SupplierName}"},"Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service","QueryOptions":"$filter=SupplierId eq '{SupplierId}'"},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Products/Products_Edit.page":
/*!******************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Products/Products_Edit.page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'update_product')","ActionBar":{"Items":[{"Position":"left","SystemItem":"Cancel","OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action"},{"Position":"right","SystemItem":"Save","OnPress":"/ESPM/Actions/Products/Products_UpdateEntity.action"}]},"Controls":[{"Sections":[{"Caption":"Product","Controls":[{"Caption":"ID","IsEditable":false,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{ProductId}","_Name":"ProductID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{Name}","_Name":"ProductName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Description","IsEditable":true,"IsVisible":true,"PlaceHolder":"Description","Value":"{ShortDescription}","_Name":"ProductDescription","_Type":"Control.Type.FormCell.Note"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Category","IsBarcodeScanEnabled":true,"IsEditable":true,"IsSearchEnabled":false,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{CategoryName}","ReturnValue":"{Category}","Target":{"EntitySet":"ProductCategories","Service":"/ESPM/Services/ESPM.service"}},"PickerPrompt":"Please select one single item","Search":{"Enabled":true,"Placeholder":"Category Search"},"Value":"{Category}","_Name":"ProductCategory","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Price","IsEditable":true,"Value":"{Price}","_Name":"ProductPrice","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Currency","IsEditable":true,"Value":"{CurrencyCode}","_Name":"ProductCurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"}]},{"Caption":"Dimensions","Controls":[{"Caption":"Height","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{DimensionHeight}","_Name":"ProductHeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Width","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{DimensionWidth}","_Name":"ProductWidth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Depth","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{DimensionDepth}","_Name":"ProductDepth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{DimensionUnit}","_Name":"ProductDimensionUnit","_Type":"Control.Type.FormCell.SimpleProperty"}]},{"Caption":"Weight","Controls":[{"Caption":"Weight","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{Weight}","_Name":"ProductWeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{WeightUnit}","_Name":"ProductWeightUnit","_Type":"Control.Type.FormCell.SimpleProperty"}]},{"Caption":"Supplier","Controls":[{"AllowEmptySelection":false,"AllowMultipleSelection":false,"Caption":"Supplier","IsEditable":true,"IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"IsVisible":true,"PickerItems":{"DisplayValue":"{SupplierId} - {SupplierName}","ReturnValue":"{SupplierId}","Target":{"EntitySet":"Suppliers","QueryOptions":"$top=40","Service":"/ESPM/Services/ESPM.service"}},"PickerPrompt":"Choose Supplier","Search":{"BarcodeScanner":true,"Enabled":true,"MinimumCharacterThreshold":3},"Value":"{SupplierId}","_Name":"productSupplierID","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"Products_Edit"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Products/Products_List.page":
/*!******************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Products/Products_List.page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'products')","Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{ShortDescription}","DetailImage":"{PictureUrl}","DetailImageIsCircular":false,"Icons":[],"OnPress":"/ESPM/Actions/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"{CategoryName}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{ProductId}","SubstatusText":""},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_List"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel"},{"OnPress":"/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action","Position":"right","SystemItem":"Save"}]},"Caption":"$(L,'create_purchase_order')","Controls":[{"Sections":[{"Controls":[{"Caption":"PurchaseOrder ID","IsEditable":false,"PlaceHolder":"value","Value":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js","_Name":"poIdPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Supplier","PickerItems":{"DisplayValue":"{SupplierId} - {SupplierName}","ReturnValue":"{SupplierId}","Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}},"PickerPrompt":"Choose Supplier from","Value":"100000048","_Name":"supplierPkr","_Type":"Control.Type.FormCell.ListPicker"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Currency","PickerItems":"/ESPM/Rules/Common/CurrencyPickerItems.js","PickerPrompt":"Select Currency ","Value":"EUR","_Name":"currencyPkr","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"PurchaseOrders_Create"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel","Text":"Item"},{"OnPress":"/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action","Position":"right","SystemItem":"Save","Text":"Item"}]},"Caption":"$(L,'create_purchase_order_item')","Controls":[{"Sections":[{"Controls":[{"Caption":"PurchaseOrder ID","IsEditable":false,"PlaceHolder":"value","Value":"{PurchaseOrderId}","_Name":"poIdPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","IsEditable":false,"PlaceHolder":"value","Value":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOItemNumber.js","_Name":"itemNbrPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"AllowEmptySelection":false,"AllowMultipleSelection":false,"IsSelectedSectionEnabled":true,"Caption":"Product","PickerItems":{"DisplayValue":"{ProductId} - {Name}","ReturnValue":"{ProductId}","Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}},"PickerPrompt":"Select Product","OnValueChange":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js","IsPickerDismissedOnSelection":true,"Value":"HT-1037","_Name":"productPkr","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Currency Code","IsEditable":false,"_Name":"currencyPrp","Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity","AllowEmptySelection":false,"AllowMultipleSelection":false,"IsEditable":true,"IsVisible":true,"IsSelectedSectionEnabled":true,"PickerPrompt":"Pick Quantity","Value":"1","PickerItems":["1","2","3","4","5","6","7","8","9","10"],"OnValueChange":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js","IsPickerDismissedOnSelection":true,"_Name":"quantityPkr","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Net Amount","IsEditable":false,"Value":"1230.00","_Name":"netAmtPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax","IsEditable":false,"Value":"61.50","_Name":"taxPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","IsEditable":false,"Value":"1291.50","_Name":"grossAmtPrp","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Name":"PurchaseOrders_CreateItem","_Type":"Page"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'purchase_order_details')","ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action","Position":"right","Text":"Add Item"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"","HeadlineText":"{PurchaseOrderId}","Subhead":"","Tags":[],"BodyText":"","Footnote":"","Description":"","StatusText":"{GrossAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{CurrencyCode}"},"_Type":"Section.Type.ObjectHeader"},{"EmptySection":{"Caption":"$(L,'no_order')"},"Header":{"Caption":"Items","Grid":{"Items":[{"NumberOfLines":1,"Text":"Product ID"},{"NumberOfLines":1,"Text":"Quantity"},{"NumberOfLines":1,"Text":"Net Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Tax Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Currency"}]},"UseTopPadding":true},"Row":{"AccessoryType":"none","Items":[{"NumberOfLines":1,"Text":"{ProductId}"},{"NumberOfLines":1,"Text":"{Quantity} {QuantityUnit}"},{"NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"{CurrencyCode}"}],"Layout":{"ColumnWidthPercentage":[0.2,-1,0.15,0.15,0.15,0.15]}},"Target":{"EntitySet":"PurchaseOrderItems","QueryOptions":"$filter=PurchaseOrderId eq '{PurchaseOrderId}'","Service":"/ESPM/Services/ESPM.service"},"DataSubscriptions":["PurchaseOrderItems"],"_Type":"Section.Type.GridTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrders_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'purchase_orders')","ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action","Position":"right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{SupplierId}","DetailImage":"","DetailImageIsCircular":false,"Icons":[],"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action","StatusImage":"","Title":"{PurchaseOrderId}","Footnote":"{CurrencyCode}","PreserveIconStackSpacing":true,"StatusText":"{NetAmount}","Subhead":"{GrossAmount}","SubstatusText":"{TaxAmount}"},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/ESPM/Services/ESPM.service","QueryOptions":"$expand=Items"},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrders_List"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Create.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Create.page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel"},{"OnPress":"/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action","Position":"right","SystemItem":"Save"}]},"Caption":"$(L,'create_sales_order')","Controls":[{"Sections":[{"Controls":[{"Caption":"SalesOrder Id","IsEditable":false,"PlaceHolder":"value","Value":"/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js","_Name":"SOIdPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Customer","PickerItems":{"DisplayValue":"{FirstName}, {LastName}","ReturnValue":"{CustomerId}","Target":{"EntitySet":"Customers","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}},"PickerPrompt":"Choose Supplier from","Value":"100000037","_Name":"customerPkr","_Type":"Control.Type.FormCell.ListPicker"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Currency","PickerItems":"/ESPM/Rules/Common/CurrencyPickerItems.js","PickerPrompt":"Select Currency ","Value":"EUR","_Name":"currencyPkr","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"SalesOrders_Create"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel","Text":"Item"},{"OnPress":"/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action","Position":"right","SystemItem":"Save","Text":"Item"}]},"Caption":"Create Sales Order","Controls":[{"Sections":[{"Controls":[{"Caption":"SalesOrder Id","IsEditable":false,"PlaceHolder":"value","Value":"{SalesOrderId}","_Name":"SOIdPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","IsEditable":false,"PlaceHolder":"value","Value":"/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOItemNumber.js","_Name":"itemNbrPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Product","OnValueChange":"/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js","PickerItems":{"DisplayValue":"{ProductId} - {Name}","ReturnValue":"{ProductId}","Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}},"IsPickerDismissedOnSelection":true,"PickerPrompt":"Select Product","Value":"HT-1037","_Name":"productPkr","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Unit Price","IsEditable":false,"Value":"1230.00","_Name":"pricePrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Currency Code","IsEditable":false,"_Name":"currencyPrp","Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Quantity","AllowEmptySelection":false,"AllowMultipleSelection":false,"IsEditable":true,"IsVisible":true,"IsSelectedSectionEnabled":true,"PickerPrompt":"Pick Quantity","Value":"1","PickerItems":["1","2","3","4","5","6","7","8","9","10"],"OnValueChange":"/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js","IsPickerDismissedOnSelection":true,"_Name":"quantityPkr","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Net Amount","IsEditable":false,"Value":"1230.00","_Name":"netAmtPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax","IsEditable":false,"Value":"61.50","_Name":"taxPrp","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","IsEditable":false,"Value":"1291.50","_Name":"grossAmtPrp","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Name":"SalesOrders_CreateItem","_Type":"Page"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Detail.page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'sales_orders_details')","ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action","Position":"right","Text":"Add Item"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"","HeadlineText":"{SalesOrderId}","Subhead":"{CustomerId}","Tags":[],"BodyText":"","Footnote":"","Description":"","StatusText":"$(C,{NetAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","StatusImage":"","SubstatusImage":"","SubstatusText":"$(C,{TaxAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})"},"_Type":"Section.Type.ObjectHeader"},{"EmptySection":{"Caption":"$(L,'no_order')"},"Header":{"Grid":{"Items":[{"NumberOfLines":1,"Text":"Product ID"},{"NumberOfLines":1,"Text":"Quantity"},{"NumberOfLines":1,"Text":"Net Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Tax Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Delivery Date"}]},"UseTopPadding":true},"Row":{"AccessoryType":"none","Items":[{"NumberOfLines":1,"Text":"{ProductId}"},{"NumberOfLines":1,"Text":"{Quantity} {QuantityUnit}"},{"NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"{DeliveryDate}"}],"Layout":{"ColumnWidthPercentage":[0.2,0.15,0.15,0.15,0.15,0.2]}},"Target":{"EntitySet":"SalesOrderItems","Service":"/ESPM/Services/ESPM.service","QueryOptions":"$filter=SalesOrderId eq '{SalesOrderId}'"},"DataSubscriptions":["SalesOrderItems"],"_Type":"Section.Type.GridTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrders_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_List.page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"$(L,'sales_orders')","ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action","Position":"right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"","DetailImage":"","DetailImageIsCircular":false,"Icons":[],"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action","StatusImage":"","Title":"{SalesOrderId}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"$(N,{NetAmount},'',{minimumFractionDigits:2,useGrouping:true})","Subhead":"{CustomerId}","SubstatusText":"{CurrencyCode}"},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/ESPM/Services/ESPM.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrders_List"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_Detail.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Suppliers/Suppliers_Detail.page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"Supplier Details","Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","DetailImageIsCircular":true,"HeadlineText":"{SupplierName}","Subhead":"{SupplierId}","Tags":[],"BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Address","Value":"{Street}"},{"KeyName":"City","Value":"{City}"},{"KeyName":"Postal Code","Value":"{PostalCode}"},{"KeyName":"Country","Value":"{Country}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"EmptySection":{"Caption":"$(L,'no_order')"},"Header":{"Grid":{"Items":[{"NumberOfLines":1,"Text":"PurchaseOrder ID"},{"NumberOfLines":1,"Text":"Net Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Taxes","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Currency"}]},"UseTopPadding":true},"Row":{"AccessoryType":"none","Items":[{"NumberOfLines":1,"Text":"{PurchaseOrderId}"},{"NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"{CurrencyCode}"}],"Layout":{"ColumnWidthPercentage":[0.25,0.15,0.15,0.15,0.15]},"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action"},"Target":{"EntitySet":"PurchaseOrderHeaders","QueryOptions":"$filter=SupplierId eq '{SupplierId}'","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionGridTable","_Type":"Section.Type.GridTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_List.page":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Suppliers/Suppliers_List.page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"Caption":"Suppliers","Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"","DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","DetailImageIsCircular":true,"Icons":[],"OnPress":"/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action","StatusImage":"","Title":"{SupplierName}","Footnote":"{#Property:City}, {#Property:Country} - {#Property:PostalCode}","PreserveIconStackSpacing":true,"StatusText":"{PhoneNumber}","Subhead":"{SupplierId}","SubstatusText":"{EmailAddress}"},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_List"}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Common/CurrencyPickerItems.js":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Common/CurrencyPickerItems.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CurrencyPickerItems; });

function CurrencyPickerItems(controlProxy) {
	let results = [];
	const currencyCodeArray = ['USD','EUR','SGD',"AUD",'INR',"SAR",'HKD','JPY','CNY'];
	const currecnyNameArray = [
	'United States Dollar',
	'European Euro',
	'Singapore Dollar',
	'Australian Dollar',
	'Indian Rupees',
	'Saudi Riyal',
	'Hong Kong Dollar',
	'Japanese Yen',
	'Chinese Yuan'
	];
	
	for (let i = 0; i < currencyCodeArray.length; i++){
		var obj = new Object();
		obj.DisplayValue = currecnyNameArray[i];
		obj.ReturnValue = currencyCodeArray[i];
		results.push(obj);
	}
	return results
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Customers/Customers_Count.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Customers/Customers_Count.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_Count; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Customers";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Customers/Customers_Image.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Customers/Customers_Image.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customers_Image; });

function Customers_Image(clientAPI) {
	var CustImagePath = '/ESPM/Images/cf';
	CustImagePath = String(CustImagePath) + String(clientAPI.evaluateTargetPath("#Property:CustomerId") % 12 + 1);
	CustImagePath = String(CustImagePath) + String('.png');
	console.log("Path->" + CustImagePath); 
	return CustImagePath;
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js":
/*!***************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Library/CommonLibrary.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {
	static retrieveProduct(context, productId) {
		let serviceName = "/ESPM/Services/ESPM.service";
		let entitySet = "Products('" + productId + "')"
		let properties = [];
		
		return context.read(serviceName, entitySet, properties).then((result) => {
			let length = result.length;
			console.log(`Query Result length @ ${length}`)
			if (result && result.length) {
				return result.getItem(length - 1);
			}
			else {
				return 0;
			}
		 });
	}
	
	static retrievePOHeader(context, purchaseOrderId){
		let serviceName = "/ESPM/Services/ESPM.service";
		let entitySet = "PurchaseOrderHeaders('" + purchaseOrderId + "')"
		let properties = [];
		return context.read(serviceName, entitySet, properties).then((result) => {
			let length = result.length;
			console.log(`Query Result length @ ${length}`)
			if (result && result.length) {
				return result.getItem(length - 1);
			}
			else {
				return 0;
			}
		 });
	}
	
	static getEntitySetData(context, serviceName, entitySet, colProperties, queryOptions) {
		return context.read(serviceName, entitySet, colProperties, queryOptions).then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return null;
		});
	}
	
	static getEntitySetCount(context, serviceName, entitySet, queryOptions){
		return context.count(serviceName, entitySet, queryOptions).then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return 0;
		});
	}
});

/***/ }),

/***/ "./build.definitions/ESPM/Rules/OnWillUpdate.js":
/*!******************************************************!*\
  !*** ./build.definitions/ESPM/Rules/OnWillUpdate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnWillUpdate; });
function OnWillUpdate(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Update now?").then((result) => {
		console.log("Update now? " + result);
		if (result === true) {
			return Promise.resolve();
		} else {
			return Promise.reject('User Deferred');
		}
	});
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overview_DaysLeftInQuarter; });

var clientAPI;

/**
 * Describe this function...
 */
function Overview_DaysLeftInQuarter(clientAPI) {
  var d = new Date();
  var qEnd = new Date(d);
  qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
  var qNum = Math.floor((qEnd - d) / 8.64e7);
  let returnStr = String(qNum + " Days Left");
  return returnStr;
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overview_GetCurrentQuarter; });

var clientAPI;

/**
 * Describe this function...
 */
function Overview_GetCurrentQuarter(clientAPI) {
  var d = new Date();
  var q = [1,2,3,4];
  var qNum = q[Math.floor(d.getMonth() / 3)];
  
  return String("Q" + qNum);
  
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Products/Products_Count.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Products/Products_Count.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_Count; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Products";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_Count; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "PurchaseOrderHeaders";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_DataOnValueChange; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_DataOnValueChange(clientAPI) {
	const productPkr = clientAPI.evaluateTargetPathForAPI('#Page:PurchaseOrders_CreateItem/#Control:productPkr');
	const productId = productPkr.getValue()[0].ReturnValue;

  let qtyPkr = clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:quantityPkr");
	let qty = qtyPkr.getValue()[0].ReturnValue;
	
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProduct(clientAPI, productId).then(function(data) {
		let price = data.Price
		let netAmount = qty * price;
		let tax = netAmount * 0.05;
		let grossAmount = netAmount+tax;
		let formatOptions = {minimumFractionDigits: 2,useGrouping: false};
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:currencyPrp").setValue(data.CurrencyCode);
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:netAmtPrp").setValue(clientAPI.formatNumber(netAmount,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:taxPrp").setValue(clientAPI.formatNumber(tax,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:grossAmtPrp").setValue(clientAPI.formatNumber(grossAmount,'',formatOptions)); 
	},function(error){
		console.log("Error "+error);
	})	
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_GenerateNextPOId; });
function PurchaseOrders_GenerateNextPOId(clientAPI) {
	return clientAPI.read('/ESPM/Services/ESPM.service', 'PurchaseOrderHeaders', ['PurchaseOrderId']).then((POList) => {
    let length = POList.length;
    console.log(`Calculating POList length @ ${length}`)
    let nextId = Math.max.apply(Math, POList.map(function(item) { return item.PurchaseOrderId;}));
    nextId++;
    console.log(`Calculating next PurchaseOrderId @ ${nextId}`)
    return nextId.toString();
  });
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOItemNumber.js":
/*!************************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOItemNumber.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_GenerateNextPOItemNumber; });
function PurchaseOrders_GenerateNextPOItemNumber(clientAPI) {
	let purchaseOrderId = clientAPI.evaluateTargetPath('#Property:PurchaseOrderId');
	let queryOptions = encodeURI("$filter=PurchaseOrderId eq '"+purchaseOrderId+"'");
	
	return clientAPI.read('/ESPM/Services/ESPM.service', 'PurchaseOrderItems', [],queryOptions).then((POItemList) => {
    let length = POItemList.length;
    console.log(`Calculating POItemList length @ ${length}`)
		let nextItem = length;
    nextItem++;
    let nextId = nextItem * 10
		console.log(`Calculating next POItem Number @ ${nextId}`)
    return nextId.toString();
  });
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_UpdateHeaderAmounts; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_UpdateHeaderAmounts(clientAPI) {
	var netAmt = 0;
	var taxAmt = 0;
	var grossAmt = 0;
	try {
		var purchaseOrderId = clientAPI.evaluateTargetPath('#Property:PurchaseOrderId');
		const serviceName = "/ESPM/Services/ESPM.service";
		const entitySet = "PurchaseOrderItems";
		const properties = [];
		let queryOptions = encodeURI("$filter=PurchaseOrderId eq '" + purchaseOrderId + "'");
		let POItemList = _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetData(clientAPI, serviceName, entitySet, properties, queryOptions);
		
		POItemList.then(function(list){
			list.forEach(function(item){
				netAmt += parseFloat(item.NetAmount);
				taxAmt += parseFloat(item.TaxAmount);
				grossAmt += parseFloat(item.GrossAmount);
			});
			
			grossAmt  = Number(Number.parseFloat(grossAmt).toFixed(2));
			taxAmt = Number(Number.parseFloat(taxAmt).toFixed(2));
			netAmt = Number(Number.parseFloat(netAmt).toFixed(2));
            
			clientAPI.setActionBinding({"purchaseOrderId": purchaseOrderId, "grossAmt": grossAmt, "netAmt": netAmt, "taxAmt": taxAmt});
			return clientAPI.executeAction("/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action");
		},function(err){});
	}
	catch(error) {
		console.log(error);
	}
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_Count.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_Count.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalesOrders_Count; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function SalesOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "SalesOrderHeaders";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');   
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalesOrders_DataOnValueChange; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function SalesOrders_DataOnValueChange(clientAPI) {
	const productPkr = clientAPI.evaluateTargetPathForAPI('#Page:SalesOrders_CreateItem/#Control:productPkr');
	const productId = productPkr.getValue()[0].ReturnValue;

	let qtyPkr = clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:quantityPkr");
    let qty = qtyPkr.getValue()[0].ReturnValue;

	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProduct(clientAPI, productId).then(function(data) {
		
		let price = data.Price
		let netAmount = qty * price;
		let tax = netAmount * 0.07;
		let grossAmount = netAmount + tax;
		let formatOptions = {minimumFractionDigits: 2, useGrouping: false};
		clientAPI.evaluateTargetPathForAPI('#Page:SalesOrders_CreateItem/#Control:pricePrp').setValue(clientAPI.formatNumber(price,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:currencyPrp").setValue(data.CurrencyCode);
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:netAmtPrp").setValue(clientAPI.formatNumber(netAmount,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:taxPrp").setValue(clientAPI.formatNumber(tax,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:grossAmtPrp").setValue(clientAPI.formatNumber(grossAmount,'',formatOptions));
	},function(error){
		console.log("Error "+error);
	})	
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateNextSOId; });
function GenerateNextSOId(clientAPI) {
	return clientAPI.read('/ESPM/Services/ESPm.service', 'SalesOrderHeaders', ['SalesOrderId']).then((SOList) => {
    let length = SOList.length;
    console.log(`Calculating SOList length @ ${length}`)
    let nextId = Math.max.apply(Math, SOList.map(function(item) { return item.SalesOrderId;}));
    nextId++;
    console.log(`Calculating next SalesOrderId @ ${nextId}`)
    return nextId.toString();
  });
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOItemNumber.js":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOItemNumber.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalesOrders_GenerateNextSOItemNumber; });
function SalesOrders_GenerateNextSOItemNumber(clientAPI) {
	let salesOrderId = clientAPI.evaluateTargetPath('#Property:SalesOrderId');
	let queryOptions = encodeURI("$filter=SalesOrderId eq '" + salesOrderId + "'");
	return clientAPI.read('/ESPM/Services/ESPM.service', 'SalesOrderItems', [],queryOptions).then((SOItemList) => {
    	let length = SOItemList.length;
    	console.log(`Calculating SOItemList length @ ${length}`)
		let nextItem = length;
    	nextItem++;
    	let nextId = nextItem * 10
		console.log(`Calculating next SOItem Number @ ${nextId}`)
    	return nextId.toString();
  });
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalesOrders_UpdateHeaderAmounts; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function SalesOrders_UpdateHeaderAmounts(clientAPI) {
	var netAmt = 0;
	var taxAmt = 0;
	var grossAmt = 0;

	try {
		var salesOrderId = clientAPI.evaluateTargetPath('#Property:SalesOrderId');
		const serviceName = "/ESPM/Services/ESPM.service";
		const entitySet = "SalesOrderItems";
		const properties = [];
		let queryOptions = encodeURI("$filter=SalesOrderId eq '" + salesOrderId + "'");
		let SOItemList = _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetData(clientAPI, serviceName, entitySet, properties, queryOptions);
		
		SOItemList.then(function(list) {
			list.forEach(function(item){
				netAmt += parseFloat(item.NetAmount);
				taxAmt += parseFloat(item.TaxAmount);
				grossAmt += parseFloat(item.GrossAmount);
			});

			grossAmt  = Number(Number.parseFloat(grossAmt).toFixed(2));
			taxAmt = Number(Number.parseFloat(taxAmt).toFixed(2));
			netAmt = Number(Number.parseFloat(netAmt).toFixed(2));
			
			clientAPI.setActionBinding({"salesOrderId": salesOrderId, "grossAmt": grossAmt, "netAmt": netAmt, "taxAmt": taxAmt});
			
			return clientAPI.executeAction("/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action");
		},function(err){});
	}
	catch(error) {
		console.log(error);
	}
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Service/InitializeSuccess.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Service/InitializeSuccess.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitializeSuccess; });
function InitializeSuccess(context) {
  var sectionedTable = context.getPageProxy().getControl('SectionedTable');
  if (sectionedTable) {
    sectionedTable.getSections().forEach((section) => {
      if (section.getName() === "OverviewSimplePropertyCollection") {
        section.redraw();
      }
    });
  }
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Count.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Suppliers/Suppliers_Count.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PurchaseOrders_Count; });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Suppliers";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Image.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Suppliers/Suppliers_Image.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SupplierImage; });

function SupplierImage(clientAPI) {
	var ImagePath = '/ESPM/Images/sf';
	ImagePath = String(ImagePath) + String(clientAPI.evaluateTargetPath("#Property:SupplierId") % 12 + 1);
	ImagePath = String(ImagePath) + String('.png');
	console.log("Path->" + ImagePath); 
	return ImagePath;
}


/***/ }),

/***/ "./build.definitions/ESPM/Services/ESPM.service":
/*!******************************************************!*\
  !*** ./build.definitions/ESPM/Services/ESPM.service ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"DestinationName":"../service/ESPM","OfflineEnabled":false,"LanguageURLParam":"sap-language","OnlineOptions":{"ServiceOptions":{"ieee754Compatible":true}},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.css":
/*!**************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "../../css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All div.MDKPages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.json":
/*!***************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.json ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.less":
/*!***************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "../../css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.nss":
/*!**************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.nss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "../../css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./build.definitions/ESPM/i18n/i18n.properties":
/*!*****************************************************!*\
  !*** ./build.definitions/ESPM/i18n/i18n.properties ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "create_purchase_order=Create Purchase Order\ncreate_purchase_order_item=Create Purchase Order Item\ncreate_sales_order=Create Sales Order\ncreate_sales_order_item=Create Sales Order Item\ncustomers=Customers\ncustomer_details=Customer Details\nno_customer=No Customer Found\nno_product=No Product Found\nno_order=No Order Found\nno_supplier=No Supplier Found\nmy_customers=My Customers\nmy_suppliers=My Suppliers\norders=Orders\nproduct_catalog=Product Catalog\nproducts=Products\nproduct_details=Product Details\npurchase_orders=Purchase Orders\npurchase_order_details=Purchase Order Details\nsales_orders=Sales Orders\nsales_orders_details=Sales Order Details\nsearch=Search\nsee_all_customers=All Customers\nsee_all_products=All Products\nsee_all_suppliers=All Suppliers\ntitle=ESPM\nupdate_product=Update Product\n"

/***/ }),

/***/ "./build.definitions/ESPM/jsconfig.json":
/*!**********************************************!*\
  !*** ./build.definitions/ESPM/jsconfig.json ***!
  \**********************************************/
/*! exports provided: include, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"include\":[\"Rules/**/*\",\".typings/**/*\"]}");

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let espm_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./ESPM/Actions/CloseModalPage_Cancel.action */ "./build.definitions/ESPM/Actions/CloseModalPage_Cancel.action")
let espm_actions_closemodalpage_complete_action = __webpack_require__(/*! ./ESPM/Actions/CloseModalPage_Complete.action */ "./build.definitions/ESPM/Actions/CloseModalPage_Complete.action")
let espm_actions_closepage_action = __webpack_require__(/*! ./ESPM/Actions/ClosePage.action */ "./build.definitions/ESPM/Actions/ClosePage.action")
let espm_actions_createentityfailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/CreateEntityFailureMessage.action */ "./build.definitions/ESPM/Actions/CreateEntityFailureMessage.action")
let espm_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/ESPM/Actions/CreateEntitySuccessMessage.action")
let espm_actions_customers_navtocustomers_detail_action = __webpack_require__(/*! ./ESPM/Actions/Customers/NavToCustomers_Detail.action */ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_Detail.action")
let espm_actions_customers_navtocustomers_list_action = __webpack_require__(/*! ./ESPM/Actions/Customers/NavToCustomers_List.action */ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_List.action")
let espm_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/ESPM/Actions/DeleteEntityFailureMessage.action")
let espm_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/ESPM/Actions/DeleteEntitySuccessMessage.action")
let espm_actions_logout_action = __webpack_require__(/*! ./ESPM/Actions/Logout.action */ "./build.definitions/ESPM/Actions/Logout.action")
let espm_actions_products_navtoproducts_detail_action = __webpack_require__(/*! ./ESPM/Actions/Products/NavToProducts_Detail.action */ "./build.definitions/ESPM/Actions/Products/NavToProducts_Detail.action")
let espm_actions_products_navtoproducts_edit_action = __webpack_require__(/*! ./ESPM/Actions/Products/NavToProducts_Edit.action */ "./build.definitions/ESPM/Actions/Products/NavToProducts_Edit.action")
let espm_actions_products_navtoproducts_list_action = __webpack_require__(/*! ./ESPM/Actions/Products/NavToProducts_List.action */ "./build.definitions/ESPM/Actions/Products/NavToProducts_List.action")
let espm_actions_products_products_updateentity_action = __webpack_require__(/*! ./ESPM/Actions/Products/Products_UpdateEntity.action */ "./build.definitions/ESPM/Actions/Products/Products_UpdateEntity.action")
let espm_actions_purchaseorders_navtopurchaseorders_create_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action")
let espm_actions_purchaseorders_navtopurchaseorders_createitem_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action")
let espm_actions_purchaseorders_navtopurchaseorders_detail_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action")
let espm_actions_purchaseorders_navtopurchaseorders_list_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action")
let espm_actions_purchaseorders_purchaseorders_createentity_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action")
let espm_actions_purchaseorders_purchaseorders_createitementity_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action")
let espm_actions_purchaseorders_purchaseorders_updateamount_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action")
let espm_actions_salesorders_navtosalesorders_create_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action")
let espm_actions_salesorders_navtosalesorders_createitem_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action")
let espm_actions_salesorders_navtosalesorders_detail_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action")
let espm_actions_salesorders_navtosalesorders_list_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_List.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action")
let espm_actions_salesorders_salesorders_createentity_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action")
let espm_actions_salesorders_salesorders_createitementity_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action")
let espm_actions_salesorders_salesorders_updateamount_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action")
let espm_actions_service_initialize_action = __webpack_require__(/*! ./ESPM/Actions/Service/Initialize.action */ "./build.definitions/ESPM/Actions/Service/Initialize.action")
let espm_actions_service_initializefailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/Service/InitializeFailureMessage.action */ "./build.definitions/ESPM/Actions/Service/InitializeFailureMessage.action")
let espm_actions_service_initializesuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/Service/InitializeSuccessMessage.action */ "./build.definitions/ESPM/Actions/Service/InitializeSuccessMessage.action")
let espm_actions_suppliers_navtosuppliers_detail_action = __webpack_require__(/*! ./ESPM/Actions/Suppliers/NavToSuppliers_Detail.action */ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action")
let espm_actions_suppliers_navtosuppliers_list_action = __webpack_require__(/*! ./ESPM/Actions/Suppliers/NavToSuppliers_List.action */ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_List.action")
let espm_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/ESPM/Actions/UpdateEntityFailureMessage.action")
let espm_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/ESPM/Actions/UpdateEntitySuccessMessage.action")
let espm_globals_appdefinition_version_global = __webpack_require__(/*! ./ESPM/Globals/AppDefinition_Version.global */ "./build.definitions/ESPM/Globals/AppDefinition_Version.global")
let espm_i18n_i18n_properties = __webpack_require__(/*! ./ESPM/i18n/i18n.properties */ "./build.definitions/ESPM/i18n/i18n.properties")
let espm_jsconfig_json = __webpack_require__(/*! ./ESPM/jsconfig.json */ "./build.definitions/ESPM/jsconfig.json")
let espm_pages_customers_customers_detail_page = __webpack_require__(/*! ./ESPM/Pages/Customers/Customers_Detail.page */ "./build.definitions/ESPM/Pages/Customers/Customers_Detail.page")
let espm_pages_customers_customers_list_page = __webpack_require__(/*! ./ESPM/Pages/Customers/Customers_List.page */ "./build.definitions/ESPM/Pages/Customers/Customers_List.page")
let espm_pages_overview_page = __webpack_require__(/*! ./ESPM/Pages/Overview.page */ "./build.definitions/ESPM/Pages/Overview.page")
let espm_pages_products_products_detail_page = __webpack_require__(/*! ./ESPM/Pages/Products/Products_Detail.page */ "./build.definitions/ESPM/Pages/Products/Products_Detail.page")
let espm_pages_products_products_edit_page = __webpack_require__(/*! ./ESPM/Pages/Products/Products_Edit.page */ "./build.definitions/ESPM/Pages/Products/Products_Edit.page")
let espm_pages_products_products_list_page = __webpack_require__(/*! ./ESPM/Pages/Products/Products_List.page */ "./build.definitions/ESPM/Pages/Products/Products_List.page")
let espm_pages_purchaseorders_purchaseorders_create_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page")
let espm_pages_purchaseorders_purchaseorders_createitem_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page")
let espm_pages_purchaseorders_purchaseorders_detail_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page")
let espm_pages_purchaseorders_purchaseorders_list_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page")
let espm_pages_salesorders_salesorders_create_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_Create.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Create.page")
let espm_pages_salesorders_salesorders_createitem_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page")
let espm_pages_salesorders_salesorders_detail_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_Detail.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Detail.page")
let espm_pages_salesorders_salesorders_list_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_List.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_List.page")
let espm_pages_suppliers_suppliers_detail_page = __webpack_require__(/*! ./ESPM/Pages/Suppliers/Suppliers_Detail.page */ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_Detail.page")
let espm_pages_suppliers_suppliers_list_page = __webpack_require__(/*! ./ESPM/Pages/Suppliers/Suppliers_List.page */ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_List.page")
let espm_rules_common_currencypickeritems_js = __webpack_require__(/*! ./ESPM/Rules/Common/CurrencyPickerItems.js */ "./build.definitions/ESPM/Rules/Common/CurrencyPickerItems.js")
let espm_rules_customers_customers_count_js = __webpack_require__(/*! ./ESPM/Rules/Customers/Customers_Count.js */ "./build.definitions/ESPM/Rules/Customers/Customers_Count.js")
let espm_rules_customers_customers_image_js = __webpack_require__(/*! ./ESPM/Rules/Customers/Customers_Image.js */ "./build.definitions/ESPM/Rules/Customers/Customers_Image.js")
let espm_rules_library_commonlibrary_js = __webpack_require__(/*! ./ESPM/Rules/Library/CommonLibrary.js */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js")
let espm_rules_onwillupdate_js = __webpack_require__(/*! ./ESPM/Rules/OnWillUpdate.js */ "./build.definitions/ESPM/Rules/OnWillUpdate.js")
let espm_rules_overview_overview_daysleftinquarter_js = __webpack_require__(/*! ./ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js */ "./build.definitions/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js")
let espm_rules_overview_overview_getcurrentquarter_js = __webpack_require__(/*! ./ESPM/Rules/Overview/Overview_GetCurrentQuarter.js */ "./build.definitions/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js")
let espm_rules_products_products_count_js = __webpack_require__(/*! ./ESPM/Rules/Products/Products_Count.js */ "./build.definitions/ESPM/Rules/Products/Products_Count.js")
let espm_rules_purchaseorders_purchaseorders_count_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js")
let espm_rules_purchaseorders_purchaseorders_dataonvaluechange_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js")
let espm_rules_purchaseorders_purchaseorders_generatenextpoid_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js")
let espm_rules_purchaseorders_purchaseorders_generatenextpoitemnumber_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOItemNumber.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOItemNumber.js")
let espm_rules_purchaseorders_purchaseorders_updateheaderamounts_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js")
let espm_rules_salesorders_salesorders_count_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_Count.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_Count.js")
let espm_rules_salesorders_salesorders_dataonvaluechange_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js")
let espm_rules_salesorders_salesorders_generatenextsoid_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js")
let espm_rules_salesorders_salesorders_generatenextsoitemnumber_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOItemNumber.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOItemNumber.js")
let espm_rules_salesorders_salesorders_updateheaderamounts_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js")
let espm_rules_service_initializesuccess_js = __webpack_require__(/*! ./ESPM/Rules/Service/InitializeSuccess.js */ "./build.definitions/ESPM/Rules/Service/InitializeSuccess.js")
let espm_rules_suppliers_suppliers_count_js = __webpack_require__(/*! ./ESPM/Rules/Suppliers/Suppliers_Count.js */ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Count.js")
let espm_rules_suppliers_suppliers_image_js = __webpack_require__(/*! ./ESPM/Rules/Suppliers/Suppliers_Image.js */ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Image.js")
let espm_services_espm_service = __webpack_require__(/*! ./ESPM/Services/ESPM.service */ "./build.definitions/ESPM/Services/ESPM.service")
let espm_styles_styles_css = __webpack_require__(/*! ./ESPM/Styles/Styles.css */ "./build.definitions/ESPM/Styles/Styles.css")
let espm_styles_styles_json = __webpack_require__(/*! ./ESPM/Styles/Styles.json */ "./build.definitions/ESPM/Styles/Styles.json")
let espm_styles_styles_less = __webpack_require__(/*! ./ESPM/Styles/Styles.less */ "./build.definitions/ESPM/Styles/Styles.less")
let espm_styles_styles_nss = __webpack_require__(/*! ./ESPM/Styles/Styles.nss */ "./build.definitions/ESPM/Styles/Styles.nss")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	espm_actions_closemodalpage_cancel_action : espm_actions_closemodalpage_cancel_action,
	espm_actions_closemodalpage_complete_action : espm_actions_closemodalpage_complete_action,
	espm_actions_closepage_action : espm_actions_closepage_action,
	espm_actions_createentityfailuremessage_action : espm_actions_createentityfailuremessage_action,
	espm_actions_createentitysuccessmessage_action : espm_actions_createentitysuccessmessage_action,
	espm_actions_customers_navtocustomers_detail_action : espm_actions_customers_navtocustomers_detail_action,
	espm_actions_customers_navtocustomers_list_action : espm_actions_customers_navtocustomers_list_action,
	espm_actions_deleteentityfailuremessage_action : espm_actions_deleteentityfailuremessage_action,
	espm_actions_deleteentitysuccessmessage_action : espm_actions_deleteentitysuccessmessage_action,
	espm_actions_logout_action : espm_actions_logout_action,
	espm_actions_products_navtoproducts_detail_action : espm_actions_products_navtoproducts_detail_action,
	espm_actions_products_navtoproducts_edit_action : espm_actions_products_navtoproducts_edit_action,
	espm_actions_products_navtoproducts_list_action : espm_actions_products_navtoproducts_list_action,
	espm_actions_products_products_updateentity_action : espm_actions_products_products_updateentity_action,
	espm_actions_purchaseorders_navtopurchaseorders_create_action : espm_actions_purchaseorders_navtopurchaseorders_create_action,
	espm_actions_purchaseorders_navtopurchaseorders_createitem_action : espm_actions_purchaseorders_navtopurchaseorders_createitem_action,
	espm_actions_purchaseorders_navtopurchaseorders_detail_action : espm_actions_purchaseorders_navtopurchaseorders_detail_action,
	espm_actions_purchaseorders_navtopurchaseorders_list_action : espm_actions_purchaseorders_navtopurchaseorders_list_action,
	espm_actions_purchaseorders_purchaseorders_createentity_action : espm_actions_purchaseorders_purchaseorders_createentity_action,
	espm_actions_purchaseorders_purchaseorders_createitementity_action : espm_actions_purchaseorders_purchaseorders_createitementity_action,
	espm_actions_purchaseorders_purchaseorders_updateamount_action : espm_actions_purchaseorders_purchaseorders_updateamount_action,
	espm_actions_salesorders_navtosalesorders_create_action : espm_actions_salesorders_navtosalesorders_create_action,
	espm_actions_salesorders_navtosalesorders_createitem_action : espm_actions_salesorders_navtosalesorders_createitem_action,
	espm_actions_salesorders_navtosalesorders_detail_action : espm_actions_salesorders_navtosalesorders_detail_action,
	espm_actions_salesorders_navtosalesorders_list_action : espm_actions_salesorders_navtosalesorders_list_action,
	espm_actions_salesorders_salesorders_createentity_action : espm_actions_salesorders_salesorders_createentity_action,
	espm_actions_salesorders_salesorders_createitementity_action : espm_actions_salesorders_salesorders_createitementity_action,
	espm_actions_salesorders_salesorders_updateamount_action : espm_actions_salesorders_salesorders_updateamount_action,
	espm_actions_service_initialize_action : espm_actions_service_initialize_action,
	espm_actions_service_initializefailuremessage_action : espm_actions_service_initializefailuremessage_action,
	espm_actions_service_initializesuccessmessage_action : espm_actions_service_initializesuccessmessage_action,
	espm_actions_suppliers_navtosuppliers_detail_action : espm_actions_suppliers_navtosuppliers_detail_action,
	espm_actions_suppliers_navtosuppliers_list_action : espm_actions_suppliers_navtosuppliers_list_action,
	espm_actions_updateentityfailuremessage_action : espm_actions_updateentityfailuremessage_action,
	espm_actions_updateentitysuccessmessage_action : espm_actions_updateentitysuccessmessage_action,
	espm_globals_appdefinition_version_global : espm_globals_appdefinition_version_global,
	espm_i18n_i18n_properties : espm_i18n_i18n_properties,
	espm_jsconfig_json : espm_jsconfig_json,
	espm_pages_customers_customers_detail_page : espm_pages_customers_customers_detail_page,
	espm_pages_customers_customers_list_page : espm_pages_customers_customers_list_page,
	espm_pages_overview_page : espm_pages_overview_page,
	espm_pages_products_products_detail_page : espm_pages_products_products_detail_page,
	espm_pages_products_products_edit_page : espm_pages_products_products_edit_page,
	espm_pages_products_products_list_page : espm_pages_products_products_list_page,
	espm_pages_purchaseorders_purchaseorders_create_page : espm_pages_purchaseorders_purchaseorders_create_page,
	espm_pages_purchaseorders_purchaseorders_createitem_page : espm_pages_purchaseorders_purchaseorders_createitem_page,
	espm_pages_purchaseorders_purchaseorders_detail_page : espm_pages_purchaseorders_purchaseorders_detail_page,
	espm_pages_purchaseorders_purchaseorders_list_page : espm_pages_purchaseorders_purchaseorders_list_page,
	espm_pages_salesorders_salesorders_create_page : espm_pages_salesorders_salesorders_create_page,
	espm_pages_salesorders_salesorders_createitem_page : espm_pages_salesorders_salesorders_createitem_page,
	espm_pages_salesorders_salesorders_detail_page : espm_pages_salesorders_salesorders_detail_page,
	espm_pages_salesorders_salesorders_list_page : espm_pages_salesorders_salesorders_list_page,
	espm_pages_suppliers_suppliers_detail_page : espm_pages_suppliers_suppliers_detail_page,
	espm_pages_suppliers_suppliers_list_page : espm_pages_suppliers_suppliers_list_page,
	espm_rules_common_currencypickeritems_js : espm_rules_common_currencypickeritems_js,
	espm_rules_customers_customers_count_js : espm_rules_customers_customers_count_js,
	espm_rules_customers_customers_image_js : espm_rules_customers_customers_image_js,
	espm_rules_library_commonlibrary_js : espm_rules_library_commonlibrary_js,
	espm_rules_onwillupdate_js : espm_rules_onwillupdate_js,
	espm_rules_overview_overview_daysleftinquarter_js : espm_rules_overview_overview_daysleftinquarter_js,
	espm_rules_overview_overview_getcurrentquarter_js : espm_rules_overview_overview_getcurrentquarter_js,
	espm_rules_products_products_count_js : espm_rules_products_products_count_js,
	espm_rules_purchaseorders_purchaseorders_count_js : espm_rules_purchaseorders_purchaseorders_count_js,
	espm_rules_purchaseorders_purchaseorders_dataonvaluechange_js : espm_rules_purchaseorders_purchaseorders_dataonvaluechange_js,
	espm_rules_purchaseorders_purchaseorders_generatenextpoid_js : espm_rules_purchaseorders_purchaseorders_generatenextpoid_js,
	espm_rules_purchaseorders_purchaseorders_generatenextpoitemnumber_js : espm_rules_purchaseorders_purchaseorders_generatenextpoitemnumber_js,
	espm_rules_purchaseorders_purchaseorders_updateheaderamounts_js : espm_rules_purchaseorders_purchaseorders_updateheaderamounts_js,
	espm_rules_salesorders_salesorders_count_js : espm_rules_salesorders_salesorders_count_js,
	espm_rules_salesorders_salesorders_dataonvaluechange_js : espm_rules_salesorders_salesorders_dataonvaluechange_js,
	espm_rules_salesorders_salesorders_generatenextsoid_js : espm_rules_salesorders_salesorders_generatenextsoid_js,
	espm_rules_salesorders_salesorders_generatenextsoitemnumber_js : espm_rules_salesorders_salesorders_generatenextsoitemnumber_js,
	espm_rules_salesorders_salesorders_updateheaderamounts_js : espm_rules_salesorders_salesorders_updateheaderamounts_js,
	espm_rules_service_initializesuccess_js : espm_rules_service_initializesuccess_js,
	espm_rules_suppliers_suppliers_count_js : espm_rules_suppliers_suppliers_count_js,
	espm_rules_suppliers_suppliers_image_js : espm_rules_suppliers_suppliers_image_js,
	espm_services_espm_service : espm_services_espm_service,
	espm_styles_styles_css : espm_styles_styles_css,
	espm_styles_styles_json : espm_styles_styles_json,
	espm_styles_styles_less : espm_styles_styles_less,
	espm_styles_styles_nss : espm_styles_styles_nss,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "1.1\n"

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map