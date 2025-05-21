"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'triodos/1.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * The Authorization Endpoint performs Authentication of the End-User. This is done by
     * sending the User Agent to the Authorization Server's Authorization Endpoint for
     * Authentication and Authorization, using request parameters defined by OAuth 2.0 and
     * additional parameters and parameter values defined by OpenID Connect.
     *
     * @summary Authorize end-user
     */
    SDK.prototype.authorizeGet = function (metadata) {
        return this.core.fetch('/{tenant}/v1/auth', 'get', metadata);
    };
    /**
     * The Authorization Endpoint performs Authentication of the End-User. This is done by
     * sending the User Agent to the Authorization Server's Authorization Endpoint for
     * Authentication and Authorization, using request parameters defined by OAuth 2.0 and
     * additional parameters and parameter values defined by OpenID Connect.
     *
     * @summary Authorize end-user
     */
    SDK.prototype.authorizePost = function (body, metadata) {
        return this.core.fetch('/{tenant}/v1/auth', 'post', body, metadata);
    };
    /**
     * The Configuration Endpoint allows the OpenID Provider's configuration information to be
     * retrieved.
     *
     * @summary Get configuration
     */
    SDK.prototype.configuration = function (metadata) {
        return this.core.fetch('/{tenant}/.well-known/openid-configuration', 'get', metadata);
    };
    /**
     * The Client Registration Endpoint is an OAuth 2.0 Protected Resource through which a new
     * Client registration can be requested. The OpenID Provider requires an Initial Access
     * Token that is provisioned in the service the client wants to access, to restrict
     * registration requests to only authorized Clients or developers.
     *
     * @summary Register client
     */
    SDK.prototype.authorizePost_1 = function (body, metadata) {
        return this.core.fetch('/{tenant}/v1/registration', 'post', body, metadata);
    };
    /**
     * To obtain an Access Token and a Refresh Token, the RP (Client) sends a Token Request to
     * the Token Endpoint to obtain a Token Response, as described in Section 3.2 of OAuth 2.0.
     *
     * @summary Get token
     */
    SDK.prototype.token = function (body, metadata) {
        return this.core.fetch('/{tenant}/v1/token', 'post', body, metadata);
    };
    /**
     * The client requests the revocation of a particular token by making an HTTP POST request
     * to the token revocation endpoint URL. See RFC7009 for more information.
     *
     * @summary Revoke token
     */
    SDK.prototype.tokenRevocation = function (body, metadata) {
        return this.core.fetch('/{tenant}/v1/token/revoke', 'post', body, metadata);
    };
    /**
     * The UserInfo Endpoint is an OAuth 2.0 Protected Resource that returns Claims about the
     * authenticated End-User. To obtain the requested Claims about the End-User, the Client
     * makes a request to the UserInfo Endpoint using an Access Token obtained through OpenID
     * Connect Authentication. These Claims are normally represented by a JSON object that
     * contains a collection of name and value pairs for the Claims.
     *
     * @summary Get UserInfo
     */
    SDK.prototype.doGet = function (metadata) {
        return this.core.fetch('/{tenant}/v1/userinfo', 'get', metadata);
    };
    /**
     * The UserInfo Endpoint is an OAuth 2.0 Protected Resource that returns Claims about the
     * authenticated End-User. To obtain the requested Claims about the End-User, the Client
     * makes a request to the UserInfo Endpoint using an Access Token obtained through OpenID
     * Connect Authentication. These Claims are normally represented by a JSON object that
     * contains a collection of name and value pairs for the Claims.
     *
     * @summary Get UserInfo
     */
    SDK.prototype.doPost = function (metadata) {
        return this.core.fetch('/{tenant}/v1/userinfo', 'post', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
