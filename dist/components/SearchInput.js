"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SearchInput;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_SearchIcon=require("./SearchIcon"),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _templateObject(){var a=_taggedTemplateLiteral(["\n  min-height: ",";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ",";\n  }\n\n  > svg {\n    flex-shrink: 0;\n    margin-left: 16px;\n    fill: ",";\n  }\n"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function SearchInput(a){var b=a.searchString,c=a.setSearchString,d=a.autoFocus,e=a.onBlur,f=a.onFocus,g=a.placeholder,h=a.showIcon;return _react.default.createElement(StyledSearchInput,null,h&&_react.default.createElement(_SearchIcon.SearchIcon,null),_react.default.createElement("input",{spellCheck:!1,value:b,onChange:c,onBlur:e,onFocus:f,placeholder:g,autoFocus:d,type:"number"}))}SearchInput.defaultProps={showIcon:!0},SearchInput.propTypes={searchString:_propTypes.default.number.isRequired,setSearchString:_propTypes.default.func.isRequired,autoFocus:_propTypes.default.bool,onBlur:_propTypes.default.func.isRequired,onFocus:_propTypes.default.func,placeholder:_propTypes.default.string,showIcon:_propTypes.default.bool};var StyledSearchInput=_styledComponents.default.div(_templateObject(),function(a){return a.theme.height},function(a){return a.theme.color},function(a){return a.theme.iconColor});