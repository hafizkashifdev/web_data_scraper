declare const AuthorizeGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly request: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Not supported.";
                };
                readonly request_uri: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Not supported.";
                };
                readonly registration: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Not supported.";
                };
                readonly response_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Always set to \"code\".";
                };
                readonly client_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "OAuth 2.0 Client Identifier valid at the Authorization Server.";
                };
                readonly redirect_uri: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Redirection URI to which the response will be sent. This URI MUST exactly match one of the Redirection URI values for the Client pre-registered at the OpenID Provider, with the matching performed as described in Section 6.2.1 of RFC3986 (Simple String Comparison). When using this flow, the Redirection URI SHOULD use the https scheme; however, it MAY use the http scheme, provided that the Client Type is confidential, as defined in Section 2.1 of OAuth 2.0, and provided the OP allows the use of http Redirection URIs in this case. The Redirection URI MAY use an alternate scheme, such as one that is intended to identify a callback into a native application.";
                };
                readonly scope: {
                    readonly type: "object";
                    readonly properties: {
                        readonly types: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["OPENID", "OFFLINE_ACCESS", "ACCESS_ACCOUNTS", "EXECUTE_PAYMENTS", "CANCEL_PAYMENTS", "CONFIRMATION_OF_FUNDS"];
                            };
                        };
                        readonly applicationValue: {
                            readonly type: "string";
                        };
                        readonly applicationType: {
                            readonly type: "string";
                            readonly enum: readonly ["OPENID", "OFFLINE_ACCESS", "ACCESS_ACCOUNTS", "EXECUTE_PAYMENTS", "CANCEL_PAYMENTS", "CONFIRMATION_OF_FUNDS"];
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "OpenID Connect requests MUST contain the openid scope value. Scope values used that are not understood by an implementation SHOULD be ignored. See OpenID Connect Core 1.0 - Sections 5.4 and 11 for additional scope values defined by this specification.";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Opaque value used to maintain state between the request and the callback. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically binding the value of this parameter with a browser cookie.";
                };
                readonly nonce: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values. For implementation notes, see Section 15.5.2.";
                };
                readonly response_mode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Informs the Authorization Server of the mechanism to be used for returning parameters from the Authorization Endpoint. This use of this parameter is NOT RECOMMENDED when the Response Mode that would be requested is the default mode specified for the Response Type.";
                };
                readonly prompt: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Space delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent.";
                };
                readonly max_age: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum Authentication Age. Specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated by the OP. If the elapsed time is greater than this value, the OP MUST attempt to actively re-authenticate the End-User. (The max_age request parameter corresponds to the OpenID 2.0 PAPE max_auth_age request parameter.) When max_age is used, the ID Token returned MUST include an auth_time Claim Value.";
                };
                readonly code_challenge: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Code challenge, see RFC7636 for more information.";
                };
                readonly code_challenge_method: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Always set to \"S256\".";
                };
                readonly id_token_hint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID Token previously issued by the Authorization Server being passed as a hint about the End-User's current or past authenticated session with the Client. If the End-User identified by the ID Token is logged in or is logged in by the request, then the Authorization Server returns a positive response; otherwise, it returns an error. When possible, an id_token_hint SHOULD be present when prompt=none is used and an invalid_request error MAY be returned if it is not; however, the server SHOULD respond successfully when possible, even if it is not present. The Authorization Server need not be listed as an audience of the ID Token when it is used as an id_token_hint value. If the ID Token received by the RP from the OP is encrypted, to use it as an id_token_hint, the Client MUST decrypt the signed ID Token contained within the encrypted ID Token. The Client MAY re-encrypt the signed ID token to the Authentication Server using a key that enables the server to decrypt the ID Token, and use the re-encrypted ID token as the id_token_hint value.";
                };
            };
            readonly required: readonly ["response_type", "client_id", "redirect_uri", "scope", "code_challenge", "code_challenge_method"];
        }];
    };
};
declare const AuthorizePost: {
    readonly body: {
        readonly required: readonly ["client_id", "code_challenge", "code_challenge_method", "redirect_uri", "response_type", "scope"];
        readonly type: "object";
        readonly properties: {
            readonly request: {
                readonly type: "string";
                readonly description: "Not supported.";
            };
            readonly request_uri: {
                readonly type: "string";
                readonly description: "Not supported.";
            };
            readonly registration: {
                readonly type: "string";
                readonly description: "Not supported.";
            };
            readonly response_type: {
                readonly type: "string";
                readonly description: "Always set to \"code\".";
            };
            readonly client_id: {
                readonly type: "string";
                readonly description: "OAuth 2.0 Client Identifier valid at the Authorization Server.";
            };
            readonly redirect_uri: {
                readonly type: "string";
                readonly description: "Redirection URI to which the response will be sent. This URI MUST exactly match one of the Redirection URI values for the Client pre-registered at the OpenID Provider, with the matching performed as described in Section 6.2.1 of RFC3986 (Simple String Comparison). When using this flow, the Redirection URI SHOULD use the https scheme; however, it MAY use the http scheme, provided that the Client Type is confidential, as defined in Section 2.1 of OAuth 2.0, and provided the OP allows the use of http Redirection URIs in this case. The Redirection URI MAY use an alternate scheme, such as one that is intended to identify a callback into a native application.";
            };
            readonly scope: {
                readonly type: "object";
                readonly properties: {
                    readonly types: {
                        readonly uniqueItems: true;
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["OPENID", "OFFLINE_ACCESS", "ACCESS_ACCOUNTS", "EXECUTE_PAYMENTS", "CANCEL_PAYMENTS", "CONFIRMATION_OF_FUNDS"];
                        };
                    };
                    readonly applicationValue: {
                        readonly type: "string";
                    };
                    readonly applicationType: {
                        readonly type: "string";
                        readonly enum: readonly ["OPENID", "OFFLINE_ACCESS", "ACCESS_ACCOUNTS", "EXECUTE_PAYMENTS", "CANCEL_PAYMENTS", "CONFIRMATION_OF_FUNDS"];
                    };
                };
            };
            readonly state: {
                readonly type: "string";
                readonly description: "Opaque value used to maintain state between the request and the callback. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically binding the value of this parameter with a browser cookie.";
            };
            readonly nonce: {
                readonly type: "string";
                readonly description: "String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values. For implementation notes, see Section 15.5.2.";
            };
            readonly response_mode: {
                readonly type: "string";
                readonly description: "Informs the Authorization Server of the mechanism to be used for returning parameters from the Authorization Endpoint. This use of this parameter is NOT RECOMMENDED when the Response Mode that would be requested is the default mode specified for the Response Type.";
            };
            readonly prompt: {
                readonly type: "string";
                readonly description: "Space delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent.";
            };
            readonly max_age: {
                readonly type: "string";
                readonly description: "Maximum Authentication Age. Specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated by the OP. If the elapsed time is greater than this value, the OP MUST attempt to actively re-authenticate the End-User. (The max_age request parameter corresponds to the OpenID 2.0 PAPE max_auth_age request parameter.) When max_age is used, the ID Token returned MUST include an auth_time Claim Value.";
            };
            readonly code_challenge: {
                readonly type: "string";
                readonly description: "Code challenge, see RFC7636 for more information.";
            };
            readonly code_challenge_method: {
                readonly type: "string";
                readonly description: "Always set to \"S256\".";
            };
            readonly id_token_hint: {
                readonly type: "string";
                readonly description: "ID Token previously issued by the Authorization Server being passed as a hint about the End-User's current or past authenticated session with the Client. If the End-User identified by the ID Token is logged in or is logged in by the request, then the Authorization Server returns a positive response; otherwise, it returns an error. When possible, an id_token_hint SHOULD be present when prompt=none is used and an invalid_request error MAY be returned if it is not; however, the server SHOULD respond successfully when possible, even if it is not present. The Authorization Server need not be listed as an audience of the ID Token when it is used as an id_token_hint value. If the ID Token received by the RP from the OP is encrypted, to use it as an id_token_hint, the Client MUST decrypt the signed ID Token contained within the encrypted ID Token. The Client MAY re-encrypt the signed ID token to the Authentication Server using a key that enables the server to decrypt the ID Token, and use the re-encrypted ID token as the id_token_hint value.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }];
    };
};
declare const AuthorizePost1: {
    readonly body: {
        readonly required: readonly ["redirect_uris"];
        readonly type: "object";
        readonly properties: {
            readonly sector_identifier_uri: {
                readonly type: "string";
                readonly description: "This parameter defines the sector identifier URI.";
            };
            readonly redirect_uris: {
                readonly type: "array";
                readonly description: "This parameter defines the used redirect URIs.";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Bearer access token.";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                    };
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly responseTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly properties: {
                                    readonly empty: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly grantTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly shortName: {
                                        readonly type: "string";
                                    };
                                    readonly scopeRequirementInTokenRequest: {
                                        readonly type: "string";
                                        readonly enum: readonly ["REQUIRED", "OPTIONAL", "NOT_ALLOWED"];
                                        readonly description: "`REQUIRED` `OPTIONAL` `NOT_ALLOWED`";
                                    };
                                    readonly requestParameterNames: {
                                        readonly uniqueItems: true;
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly nameEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly logoURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly policyURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly signedJWKSetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly requestObjectURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly requestObjectJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly softwareID: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareVersion: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareStatement: {
                            readonly type: "object";
                            readonly properties: {
                                readonly payload: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly origin: {
                                            readonly type: "string";
                                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                                        };
                                    };
                                };
                                readonly parsedParts: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly header: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customParams: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly parsedBase64URL: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly jwk: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly keyStore: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly provider: {
                                                            readonly type: "object";
                                                            readonly additionalProperties: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly private: {
                                                    readonly type: "boolean";
                                                };
                                                readonly algorithm: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyType: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyID: {
                                                    readonly type: "string";
                                                };
                                                readonly keyUse: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly keyOperations: {
                                                    readonly uniqueItems: true;
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                    };
                                                };
                                                readonly parsedX509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly extendedKeyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly subjectAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly issuerAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgName: {
                                                                readonly type: "string";
                                                            };
                                                            readonly sigAlgParams: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly tbscertificate: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly issuerDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgOID: {
                                                                readonly type: "string";
                                                            };
                                                            readonly issuerUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly subjectUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly signature: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly basicConstraints: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly issuerX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly version: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly serialNumber: {
                                                                readonly type: "integer";
                                                            };
                                                            readonly notAfter: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly notBefore: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly keyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly criticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly nonCriticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly encoded: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly publicKey: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                    readonly format: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly algorithm: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly keyRevocation: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly reason: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly value: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly revocationTime: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                };
                                                readonly requiredParams: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly x509CertURL: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                                readonly x509CertThumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertSHA256Thumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly expirationTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly notBeforeTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly issueTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                        };
                                        readonly algorithm: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly requirement: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                };
                                            };
                                        };
                                        readonly base64URLEncodePayload: {
                                            readonly type: "boolean";
                                        };
                                        readonly includedParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly keyID: {
                                            readonly type: "string";
                                        };
                                        readonly jwkurl: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertURL: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertThumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertSHA256Thumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertChain: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly type: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly criticalParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly contentType: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly signature: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                                };
                                readonly jwtclaimsSet: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly claims: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                        };
                                        readonly issuer: {
                                            readonly type: "string";
                                        };
                                        readonly audience: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly expirationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly notBeforeTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly issueTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly jwtid: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly parsedString: {
                                    readonly type: "string";
                                };
                                readonly signingInput: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly format: "byte";
                                    };
                                };
                            };
                        };
                        readonly backChannelTokenDeliveryMode: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backChannelClientNotificationEndpoint: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelAuthRequestJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly clientRegistrationTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly organizationName: {
                            readonly type: "string";
                        };
                        readonly customFields: {
                            readonly type: "object";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly emailContacts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly urientries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly termsOfServiceURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly tokenEndpointAuthJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly tokenEndpointAuthMethod: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly tlsclientCertificateBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly tlsclientAuthSubjectDN: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanDNS: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanURI: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanIP: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanEmail: {
                            readonly type: "string";
                        };
                        readonly dpoPBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly authorizationJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationDetailsTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                    };
                                };
                            };
                        };
                        readonly logoURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly policyURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly termsOfServiceURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwksetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwkset: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keys: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly keyStore: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly provider: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly private: {
                                                readonly type: "boolean";
                                            };
                                            readonly algorithm: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyType: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyID: {
                                                readonly type: "string";
                                            };
                                            readonly keyUse: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly keyOperations: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                    readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                };
                                            };
                                            readonly parsedX509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly extendedKeyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly subjectAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly issuerAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgName: {
                                                            readonly type: "string";
                                                        };
                                                        readonly sigAlgParams: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly tbscertificate: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly issuerDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly subjectDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgOID: {
                                                            readonly type: "string";
                                                        };
                                                        readonly issuerUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly subjectUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly signature: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly basicConstraints: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly issuerX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly subjectX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly version: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly serialNumber: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly notAfter: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly notBefore: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly keyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly criticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly nonCriticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly encoded: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly publicKey: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                                readonly format: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly algorithm: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly keyRevocation: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reason: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly revocationTime: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                            readonly requiredParams: {
                                                readonly type: "object";
                                                readonly additionalProperties: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly x509CertURL: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                            readonly x509CertThumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertSHA256Thumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly expirationTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBeforeTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly issueTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                                readonly additionalMembers: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                            };
                        };
                        readonly supportsBackChannelUserCodeParam: {
                            readonly type: "boolean";
                            readonly writeOnly: true;
                        };
                        readonly redirectionURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIStrings: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly mutualTLSSenderConstrainedAccessTokens: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly secret: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly expirationDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly sha256: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "byte";
                            };
                        };
                        readonly valueBytes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "byte";
                            };
                        };
                    };
                };
                readonly registrationURI: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly oidcmetadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly responseTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly properties: {
                                    readonly empty: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly grantTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly shortName: {
                                        readonly type: "string";
                                    };
                                    readonly scopeRequirementInTokenRequest: {
                                        readonly type: "string";
                                        readonly enum: readonly ["REQUIRED", "OPTIONAL", "NOT_ALLOWED"];
                                        readonly description: "`REQUIRED` `OPTIONAL` `NOT_ALLOWED`";
                                    };
                                    readonly requestParameterNames: {
                                        readonly uniqueItems: true;
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly nameEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly logoURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly policyURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly signedJWKSetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly requestObjectURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly requestObjectJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly softwareID: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareVersion: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareStatement: {
                            readonly type: "object";
                            readonly properties: {
                                readonly payload: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly origin: {
                                            readonly type: "string";
                                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                                        };
                                    };
                                };
                                readonly parsedParts: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly header: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customParams: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly parsedBase64URL: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly jwk: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly keyStore: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly provider: {
                                                            readonly type: "object";
                                                            readonly additionalProperties: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly private: {
                                                    readonly type: "boolean";
                                                };
                                                readonly algorithm: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyType: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyID: {
                                                    readonly type: "string";
                                                };
                                                readonly keyUse: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly keyOperations: {
                                                    readonly uniqueItems: true;
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                    };
                                                };
                                                readonly parsedX509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly extendedKeyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly subjectAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly issuerAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgName: {
                                                                readonly type: "string";
                                                            };
                                                            readonly sigAlgParams: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly tbscertificate: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly issuerDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgOID: {
                                                                readonly type: "string";
                                                            };
                                                            readonly issuerUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly subjectUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly signature: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly basicConstraints: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly issuerX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly version: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly serialNumber: {
                                                                readonly type: "integer";
                                                            };
                                                            readonly notAfter: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly notBefore: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly keyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly criticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly nonCriticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly encoded: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly publicKey: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                    readonly format: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly algorithm: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly keyRevocation: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly reason: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly value: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly revocationTime: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                };
                                                readonly requiredParams: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly x509CertURL: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                                readonly x509CertThumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertSHA256Thumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly expirationTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly notBeforeTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly issueTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                        };
                                        readonly algorithm: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly requirement: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                };
                                            };
                                        };
                                        readonly base64URLEncodePayload: {
                                            readonly type: "boolean";
                                        };
                                        readonly includedParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly keyID: {
                                            readonly type: "string";
                                        };
                                        readonly jwkurl: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertURL: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertThumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertSHA256Thumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertChain: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly type: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly criticalParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly contentType: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly signature: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                                };
                                readonly jwtclaimsSet: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly claims: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                        };
                                        readonly issuer: {
                                            readonly type: "string";
                                        };
                                        readonly audience: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly expirationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly notBeforeTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly issueTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly jwtid: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly parsedString: {
                                    readonly type: "string";
                                };
                                readonly signingInput: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly format: "byte";
                                    };
                                };
                            };
                        };
                        readonly backChannelTokenDeliveryMode: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backChannelClientNotificationEndpoint: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelAuthRequestJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly clientRegistrationTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly organizationName: {
                            readonly type: "string";
                        };
                        readonly customFields: {
                            readonly type: "object";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly applicationType: {
                            readonly type: "string";
                            readonly enum: readonly ["native", "web"];
                            readonly description: "`native` `web`";
                        };
                        readonly subjectType: {
                            readonly type: "string";
                            readonly enum: readonly ["pairwise", "public"];
                            readonly description: "`pairwise` `public`";
                        };
                        readonly sectorIDURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly userInfoJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly userInfoJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly userInfoJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly defaultMaxAge: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly defaultACRs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly initiateLoginURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly frontChannelLogoutURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelLogoutURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly attachmentDigestAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly idtokenJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly idtokenJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly idtokenJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly postLogoutRedirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly emailContacts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly urientries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly termsOfServiceURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly tokenEndpointAuthJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly tokenEndpointAuthMethod: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly tlsclientCertificateBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly tlsclientAuthSubjectDN: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanDNS: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanURI: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanIP: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanEmail: {
                            readonly type: "string";
                        };
                        readonly dpoPBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly authorizationJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationDetailsTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                    };
                                };
                            };
                        };
                        readonly logoURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly policyURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly termsOfServiceURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwksetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwkset: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keys: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly keyStore: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly provider: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly private: {
                                                readonly type: "boolean";
                                            };
                                            readonly algorithm: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyType: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyID: {
                                                readonly type: "string";
                                            };
                                            readonly keyUse: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly keyOperations: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                    readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                };
                                            };
                                            readonly parsedX509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly extendedKeyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly subjectAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly issuerAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgName: {
                                                            readonly type: "string";
                                                        };
                                                        readonly sigAlgParams: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly tbscertificate: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly issuerDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly subjectDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgOID: {
                                                            readonly type: "string";
                                                        };
                                                        readonly issuerUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly subjectUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly signature: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly basicConstraints: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly issuerX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly subjectX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly version: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly serialNumber: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly notAfter: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly notBefore: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly keyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly criticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly nonCriticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly encoded: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly publicKey: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                                readonly format: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly algorithm: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly keyRevocation: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reason: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly revocationTime: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                            readonly requiredParams: {
                                                readonly type: "object";
                                                readonly additionalProperties: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly x509CertURL: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                            readonly x509CertThumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertSHA256Thumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly expirationTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBeforeTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly issueTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                                readonly additionalMembers: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                            };
                        };
                        readonly supportsBackChannelUserCodeParam: {
                            readonly type: "boolean";
                            readonly writeOnly: true;
                        };
                        readonly redirectionURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIStrings: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly mutualTLSSenderConstrainedAccessTokens: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly idissueDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly registrationAccessToken: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly lifetime: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly authorizationDetails: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly actions: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly type: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                        };
                                    };
                                    readonly locations: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                            };
                                        };
                                    };
                                    readonly dataTypes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly privileges: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly identifier: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly issuedTokenType: {
                            readonly type: "object";
                            readonly properties: {
                                readonly uri: {
                                    readonly type: "string";
                                    readonly format: "uri";
                                };
                            };
                        };
                        readonly parameterNames: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly customParameters: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Configuration: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly issuer: {
                    readonly type: "string";
                };
                readonly authorization_endpoint: {
                    readonly type: "string";
                };
                readonly token_endpoint: {
                    readonly type: "string";
                };
                readonly userinfo_endpoint: {
                    readonly type: "string";
                };
                readonly revocation_endpoint: {
                    readonly type: "string";
                };
                readonly registration_endpoint: {
                    readonly type: "string";
                };
                readonly jwks_uri: {
                    readonly type: "string";
                };
                readonly request_parameter_supported: {
                    readonly type: "boolean";
                };
                readonly request_uri_parameter_supported: {
                    readonly type: "boolean";
                };
                readonly claims_parameter_supported: {
                    readonly type: "boolean";
                };
                readonly require_request_uri_registration: {
                    readonly type: "boolean";
                };
                readonly mutual_tls_sender_constrained_access_tokens: {
                    readonly type: "boolean";
                };
                readonly response_types_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly response_modes_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly display_values_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly subject_types_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly scopes_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly claims_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly claim_types_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly grant_types_supported: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly token_endpoint_auth_methods_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly token_endpoint_auth_signing_alg_values_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly revocation_endpoint_auth_methods_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly revocation_endpoint_auth_signing_alg_values_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly code_challenge_methods_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly id_token_signing_alg_values_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly userinfo_signing_alg_values_supported: {
                    readonly uniqueItems: true;
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DoGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Bearer access token.";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly payload: {
                    readonly type: "object";
                    readonly properties: {
                        readonly origin: {
                            readonly type: "string";
                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                        };
                    };
                };
                readonly parsedParts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly header: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customParams: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly parsedBase64URL: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly jwk: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keyStore: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly provider: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                                readonly private: {
                                    readonly type: "boolean";
                                };
                                readonly algorithm: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly requirement: {
                                            readonly type: "string";
                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                        };
                                    };
                                };
                                readonly keyType: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                        readonly requirement: {
                                            readonly type: "string";
                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                        };
                                    };
                                };
                                readonly keyID: {
                                    readonly type: "string";
                                };
                                readonly keyUse: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly keyOperations: {
                                    readonly uniqueItems: true;
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                    };
                                };
                                readonly parsedX509CertChain: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                            };
                                            readonly extendedKeyUsage: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly subjectAlternativeNames: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                            };
                                            readonly issuerAlternativeNames: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                            };
                                            readonly sigAlgName: {
                                                readonly type: "string";
                                            };
                                            readonly sigAlgParams: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly tbscertificate: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly issuerDN: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly subjectDN: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly sigAlgOID: {
                                                readonly type: "string";
                                            };
                                            readonly issuerUniqueID: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly subjectUniqueID: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly signature: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly basicConstraints: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly issuerX500Principal: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly encoded: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly format: "byte";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly subjectX500Principal: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly encoded: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly format: "byte";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly version: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly serialNumber: {
                                                readonly type: "integer";
                                            };
                                            readonly notAfter: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBefore: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly keyUsage: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly criticalExtensionOIDs: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly nonCriticalExtensionOIDs: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly encoded: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly publicKey: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly encoded: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly format: "byte";
                                                        };
                                                    };
                                                    readonly format: {
                                                        readonly type: "string";
                                                    };
                                                    readonly algorithm: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly keyRevocation: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly reason: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly revocationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                                readonly requiredParams: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly x509CertURL: {
                                    readonly type: "string";
                                    readonly format: "uri";
                                };
                                readonly x509CertThumbprint: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly x509CertSHA256Thumbprint: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly x509CertChain: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly expirationTime: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly notBeforeTime: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly issueTime: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                        };
                        readonly algorithm: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly base64URLEncodePayload: {
                            readonly type: "boolean";
                        };
                        readonly includedParams: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly keyID: {
                            readonly type: "string";
                        };
                        readonly jwkurl: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly x509CertURL: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly x509CertThumbprint: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly x509CertSHA256Thumbprint: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly x509CertChain: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly criticalParams: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly contentType: {
                            readonly type: "string";
                        };
                    };
                };
                readonly signature: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                };
                readonly jwtclaimsSet: {
                    readonly type: "object";
                    readonly properties: {
                        readonly claims: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly subject: {
                            readonly type: "string";
                        };
                        readonly issuer: {
                            readonly type: "string";
                        };
                        readonly audience: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly expirationTime: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly notBeforeTime: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly issueTime: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly jwtid: {
                            readonly type: "string";
                        };
                    };
                };
                readonly parsedString: {
                    readonly type: "string";
                };
                readonly signingInput: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DoPost: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Bearer access token.";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly payload: {
                    readonly type: "object";
                    readonly properties: {
                        readonly origin: {
                            readonly type: "string";
                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                        };
                    };
                };
                readonly parsedParts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly header: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customParams: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly parsedBase64URL: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly jwk: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keyStore: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly provider: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                                readonly private: {
                                    readonly type: "boolean";
                                };
                                readonly algorithm: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly requirement: {
                                            readonly type: "string";
                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                        };
                                    };
                                };
                                readonly keyType: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                        readonly requirement: {
                                            readonly type: "string";
                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                        };
                                    };
                                };
                                readonly keyID: {
                                    readonly type: "string";
                                };
                                readonly keyUse: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly keyOperations: {
                                    readonly uniqueItems: true;
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                    };
                                };
                                readonly parsedX509CertChain: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                            };
                                            readonly extendedKeyUsage: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly subjectAlternativeNames: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                            };
                                            readonly issuerAlternativeNames: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                            };
                                            readonly sigAlgName: {
                                                readonly type: "string";
                                            };
                                            readonly sigAlgParams: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly tbscertificate: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly issuerDN: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly subjectDN: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly sigAlgOID: {
                                                readonly type: "string";
                                            };
                                            readonly issuerUniqueID: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly subjectUniqueID: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly signature: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly basicConstraints: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly issuerX500Principal: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly encoded: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly format: "byte";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly subjectX500Principal: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly encoded: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly format: "byte";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly version: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly serialNumber: {
                                                readonly type: "integer";
                                            };
                                            readonly notAfter: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBefore: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly keyUsage: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly criticalExtensionOIDs: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly nonCriticalExtensionOIDs: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly encoded: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly format: "byte";
                                                };
                                            };
                                            readonly publicKey: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly encoded: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly format: "byte";
                                                        };
                                                    };
                                                    readonly format: {
                                                        readonly type: "string";
                                                    };
                                                    readonly algorithm: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly keyRevocation: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly reason: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly revocationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                                readonly requiredParams: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly x509CertURL: {
                                    readonly type: "string";
                                    readonly format: "uri";
                                };
                                readonly x509CertThumbprint: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly x509CertSHA256Thumbprint: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly x509CertChain: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly expirationTime: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly notBeforeTime: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly issueTime: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                        };
                        readonly algorithm: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly base64URLEncodePayload: {
                            readonly type: "boolean";
                        };
                        readonly includedParams: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly keyID: {
                            readonly type: "string";
                        };
                        readonly jwkurl: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly x509CertURL: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly x509CertThumbprint: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly x509CertSHA256Thumbprint: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly x509CertChain: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly criticalParams: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly contentType: {
                            readonly type: "string";
                        };
                    };
                };
                readonly signature: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                };
                readonly jwtclaimsSet: {
                    readonly type: "object";
                    readonly properties: {
                        readonly claims: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly subject: {
                            readonly type: "string";
                        };
                        readonly issuer: {
                            readonly type: "string";
                        };
                        readonly audience: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly expirationTime: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly notBeforeTime: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly issueTime: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly jwtid: {
                            readonly type: "string";
                        };
                    };
                };
                readonly parsedString: {
                    readonly type: "string";
                };
                readonly signingInput: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Token: {
    readonly body: {
        readonly required: readonly ["grant_type"];
        readonly type: "object";
        readonly properties: {
            readonly redirect_uri: {
                readonly type: "string";
                readonly description: "Must be identical to the \"redirect_uri\" parameter that was included in the authorization request. Not needed when requesting a refresh token.";
            };
            readonly code: {
                readonly type: "string";
                readonly description: "The authorization code received from the authorization server. Not needed when requesting a refresh token.";
            };
            readonly refresh_token: {
                readonly type: "string";
                readonly description: "The refresh token received from the authorization server. Not needed when using an authorization code.";
            };
            readonly grant_type: {
                readonly type: "string";
                readonly description: "Specify \"authorization_code\" when an authorization code is provided or \"refresh_token\" when a refresh token is provided.";
                readonly enum: readonly ["IMPLICIT", "AUTHORIZATION_CODE", "REFRESH_TOKEN", "PASSWORD", "CLIENT_CREDENTIALS", "JWT_BEARER"];
            };
            readonly code_verifier: {
                readonly type: "string";
                readonly description: "Client provided code verifier for additional challenge-response verification, see RFC7636 for more information. Not needed when requesting a refresh token.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Client secret basic authentication.";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                    };
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly responseTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly properties: {
                                    readonly empty: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly grantTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly shortName: {
                                        readonly type: "string";
                                    };
                                    readonly scopeRequirementInTokenRequest: {
                                        readonly type: "string";
                                        readonly enum: readonly ["REQUIRED", "OPTIONAL", "NOT_ALLOWED"];
                                        readonly description: "`REQUIRED` `OPTIONAL` `NOT_ALLOWED`";
                                    };
                                    readonly requestParameterNames: {
                                        readonly uniqueItems: true;
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly nameEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly logoURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly policyURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly signedJWKSetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly requestObjectURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly requestObjectJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly softwareID: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareVersion: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareStatement: {
                            readonly type: "object";
                            readonly properties: {
                                readonly payload: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly origin: {
                                            readonly type: "string";
                                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                                        };
                                    };
                                };
                                readonly parsedParts: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly header: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customParams: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly parsedBase64URL: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly jwk: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly keyStore: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly provider: {
                                                            readonly type: "object";
                                                            readonly additionalProperties: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly private: {
                                                    readonly type: "boolean";
                                                };
                                                readonly algorithm: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyType: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyID: {
                                                    readonly type: "string";
                                                };
                                                readonly keyUse: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly keyOperations: {
                                                    readonly uniqueItems: true;
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                    };
                                                };
                                                readonly parsedX509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly extendedKeyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly subjectAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly issuerAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgName: {
                                                                readonly type: "string";
                                                            };
                                                            readonly sigAlgParams: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly tbscertificate: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly issuerDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgOID: {
                                                                readonly type: "string";
                                                            };
                                                            readonly issuerUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly subjectUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly signature: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly basicConstraints: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly issuerX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly version: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly serialNumber: {
                                                                readonly type: "integer";
                                                            };
                                                            readonly notAfter: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly notBefore: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly keyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly criticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly nonCriticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly encoded: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly publicKey: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                    readonly format: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly algorithm: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly keyRevocation: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly reason: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly value: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly revocationTime: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                };
                                                readonly requiredParams: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly x509CertURL: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                                readonly x509CertThumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertSHA256Thumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly expirationTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly notBeforeTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly issueTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                        };
                                        readonly algorithm: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly requirement: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                };
                                            };
                                        };
                                        readonly base64URLEncodePayload: {
                                            readonly type: "boolean";
                                        };
                                        readonly includedParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly keyID: {
                                            readonly type: "string";
                                        };
                                        readonly jwkurl: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertURL: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertThumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertSHA256Thumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertChain: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly type: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly criticalParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly contentType: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly signature: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                                };
                                readonly jwtclaimsSet: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly claims: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                        };
                                        readonly issuer: {
                                            readonly type: "string";
                                        };
                                        readonly audience: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly expirationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly notBeforeTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly issueTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly jwtid: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly parsedString: {
                                    readonly type: "string";
                                };
                                readonly signingInput: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly format: "byte";
                                    };
                                };
                            };
                        };
                        readonly backChannelTokenDeliveryMode: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backChannelClientNotificationEndpoint: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelAuthRequestJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly clientRegistrationTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly organizationName: {
                            readonly type: "string";
                        };
                        readonly customFields: {
                            readonly type: "object";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly emailContacts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly urientries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly termsOfServiceURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly tokenEndpointAuthJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly tokenEndpointAuthMethod: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly tlsclientCertificateBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly tlsclientAuthSubjectDN: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanDNS: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanURI: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanIP: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanEmail: {
                            readonly type: "string";
                        };
                        readonly dpoPBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly authorizationJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationDetailsTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                    };
                                };
                            };
                        };
                        readonly logoURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly policyURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly termsOfServiceURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwksetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwkset: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keys: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly keyStore: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly provider: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly private: {
                                                readonly type: "boolean";
                                            };
                                            readonly algorithm: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyType: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyID: {
                                                readonly type: "string";
                                            };
                                            readonly keyUse: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly keyOperations: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                    readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                };
                                            };
                                            readonly parsedX509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly extendedKeyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly subjectAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly issuerAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgName: {
                                                            readonly type: "string";
                                                        };
                                                        readonly sigAlgParams: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly tbscertificate: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly issuerDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly subjectDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgOID: {
                                                            readonly type: "string";
                                                        };
                                                        readonly issuerUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly subjectUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly signature: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly basicConstraints: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly issuerX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly subjectX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly version: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly serialNumber: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly notAfter: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly notBefore: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly keyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly criticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly nonCriticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly encoded: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly publicKey: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                                readonly format: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly algorithm: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly keyRevocation: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reason: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly revocationTime: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                            readonly requiredParams: {
                                                readonly type: "object";
                                                readonly additionalProperties: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly x509CertURL: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                            readonly x509CertThumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertSHA256Thumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly expirationTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBeforeTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly issueTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                                readonly additionalMembers: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                            };
                        };
                        readonly supportsBackChannelUserCodeParam: {
                            readonly type: "boolean";
                            readonly writeOnly: true;
                        };
                        readonly redirectionURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIStrings: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly mutualTLSSenderConstrainedAccessTokens: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly secret: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly expirationDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly sha256: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "byte";
                            };
                        };
                        readonly valueBytes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "byte";
                            };
                        };
                    };
                };
                readonly registrationURI: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly oidcmetadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly responseTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly properties: {
                                    readonly empty: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly grantTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly shortName: {
                                        readonly type: "string";
                                    };
                                    readonly scopeRequirementInTokenRequest: {
                                        readonly type: "string";
                                        readonly enum: readonly ["REQUIRED", "OPTIONAL", "NOT_ALLOWED"];
                                        readonly description: "`REQUIRED` `OPTIONAL` `NOT_ALLOWED`";
                                    };
                                    readonly requestParameterNames: {
                                        readonly uniqueItems: true;
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly nameEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly logoURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly policyURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly signedJWKSetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly requestObjectURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly requestObjectJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly softwareID: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareVersion: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareStatement: {
                            readonly type: "object";
                            readonly properties: {
                                readonly payload: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly origin: {
                                            readonly type: "string";
                                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                                        };
                                    };
                                };
                                readonly parsedParts: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly header: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customParams: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly parsedBase64URL: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly jwk: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly keyStore: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly provider: {
                                                            readonly type: "object";
                                                            readonly additionalProperties: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly private: {
                                                    readonly type: "boolean";
                                                };
                                                readonly algorithm: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyType: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyID: {
                                                    readonly type: "string";
                                                };
                                                readonly keyUse: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly keyOperations: {
                                                    readonly uniqueItems: true;
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                    };
                                                };
                                                readonly parsedX509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly extendedKeyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly subjectAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly issuerAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgName: {
                                                                readonly type: "string";
                                                            };
                                                            readonly sigAlgParams: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly tbscertificate: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly issuerDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgOID: {
                                                                readonly type: "string";
                                                            };
                                                            readonly issuerUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly subjectUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly signature: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly basicConstraints: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly issuerX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly version: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly serialNumber: {
                                                                readonly type: "integer";
                                                            };
                                                            readonly notAfter: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly notBefore: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly keyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly criticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly nonCriticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly encoded: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly publicKey: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                    readonly format: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly algorithm: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly keyRevocation: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly reason: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly value: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly revocationTime: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                };
                                                readonly requiredParams: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly x509CertURL: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                                readonly x509CertThumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertSHA256Thumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly expirationTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly notBeforeTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly issueTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                        };
                                        readonly algorithm: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly requirement: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                };
                                            };
                                        };
                                        readonly base64URLEncodePayload: {
                                            readonly type: "boolean";
                                        };
                                        readonly includedParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly keyID: {
                                            readonly type: "string";
                                        };
                                        readonly jwkurl: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertURL: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertThumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertSHA256Thumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertChain: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly type: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly criticalParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly contentType: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly signature: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                                };
                                readonly jwtclaimsSet: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly claims: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                        };
                                        readonly issuer: {
                                            readonly type: "string";
                                        };
                                        readonly audience: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly expirationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly notBeforeTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly issueTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly jwtid: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly parsedString: {
                                    readonly type: "string";
                                };
                                readonly signingInput: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly format: "byte";
                                    };
                                };
                            };
                        };
                        readonly backChannelTokenDeliveryMode: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backChannelClientNotificationEndpoint: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelAuthRequestJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly clientRegistrationTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly organizationName: {
                            readonly type: "string";
                        };
                        readonly customFields: {
                            readonly type: "object";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly applicationType: {
                            readonly type: "string";
                            readonly enum: readonly ["native", "web"];
                            readonly description: "`native` `web`";
                        };
                        readonly subjectType: {
                            readonly type: "string";
                            readonly enum: readonly ["pairwise", "public"];
                            readonly description: "`pairwise` `public`";
                        };
                        readonly sectorIDURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly userInfoJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly userInfoJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly userInfoJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly defaultMaxAge: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly defaultACRs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly initiateLoginURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly frontChannelLogoutURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelLogoutURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly attachmentDigestAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly idtokenJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly idtokenJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly idtokenJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly postLogoutRedirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly emailContacts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly urientries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly termsOfServiceURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly tokenEndpointAuthJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly tokenEndpointAuthMethod: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly tlsclientCertificateBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly tlsclientAuthSubjectDN: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanDNS: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanURI: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanIP: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanEmail: {
                            readonly type: "string";
                        };
                        readonly dpoPBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly authorizationJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationDetailsTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                    };
                                };
                            };
                        };
                        readonly logoURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly policyURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly termsOfServiceURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwksetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwkset: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keys: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly keyStore: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly provider: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly private: {
                                                readonly type: "boolean";
                                            };
                                            readonly algorithm: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyType: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyID: {
                                                readonly type: "string";
                                            };
                                            readonly keyUse: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly keyOperations: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                    readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                };
                                            };
                                            readonly parsedX509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly extendedKeyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly subjectAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly issuerAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgName: {
                                                            readonly type: "string";
                                                        };
                                                        readonly sigAlgParams: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly tbscertificate: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly issuerDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly subjectDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgOID: {
                                                            readonly type: "string";
                                                        };
                                                        readonly issuerUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly subjectUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly signature: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly basicConstraints: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly issuerX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly subjectX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly version: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly serialNumber: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly notAfter: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly notBefore: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly keyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly criticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly nonCriticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly encoded: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly publicKey: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                                readonly format: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly algorithm: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly keyRevocation: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reason: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly revocationTime: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                            readonly requiredParams: {
                                                readonly type: "object";
                                                readonly additionalProperties: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly x509CertURL: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                            readonly x509CertThumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertSHA256Thumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly expirationTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBeforeTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly issueTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                                readonly additionalMembers: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                            };
                        };
                        readonly supportsBackChannelUserCodeParam: {
                            readonly type: "boolean";
                            readonly writeOnly: true;
                        };
                        readonly redirectionURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIStrings: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly mutualTLSSenderConstrainedAccessTokens: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly idissueDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly registrationAccessToken: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly lifetime: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly authorizationDetails: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly actions: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly type: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                        };
                                    };
                                    readonly locations: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                            };
                                        };
                                    };
                                    readonly dataTypes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly privileges: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly identifier: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly issuedTokenType: {
                            readonly type: "object";
                            readonly properties: {
                                readonly uri: {
                                    readonly type: "string";
                                    readonly format: "uri";
                                };
                            };
                        };
                        readonly parameterNames: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly customParameters: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TokenRevocation: {
    readonly body: {
        readonly required: readonly ["token"];
        readonly type: "object";
        readonly properties: {
            readonly token: {
                readonly type: "string";
                readonly description: "The token that the client wants to get revoked.";
            };
            readonly token_type_hint: {
                readonly type: "string";
                readonly description: "A hint about the type of the token submitted for revocation.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tenant: {
                    readonly type: "string";
                    readonly enum: readonly ["uk", "nl", "be_fr", "be_nl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Branch of the request.";
                };
            };
            readonly required: readonly ["tenant"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Client secret basic authentication.";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                    };
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly responseTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly properties: {
                                    readonly empty: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly grantTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly shortName: {
                                        readonly type: "string";
                                    };
                                    readonly scopeRequirementInTokenRequest: {
                                        readonly type: "string";
                                        readonly enum: readonly ["REQUIRED", "OPTIONAL", "NOT_ALLOWED"];
                                        readonly description: "`REQUIRED` `OPTIONAL` `NOT_ALLOWED`";
                                    };
                                    readonly requestParameterNames: {
                                        readonly uniqueItems: true;
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly nameEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly logoURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly policyURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly signedJWKSetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly requestObjectURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly requestObjectJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly softwareID: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareVersion: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareStatement: {
                            readonly type: "object";
                            readonly properties: {
                                readonly payload: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly origin: {
                                            readonly type: "string";
                                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                                        };
                                    };
                                };
                                readonly parsedParts: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly header: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customParams: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly parsedBase64URL: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly jwk: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly keyStore: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly provider: {
                                                            readonly type: "object";
                                                            readonly additionalProperties: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly private: {
                                                    readonly type: "boolean";
                                                };
                                                readonly algorithm: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyType: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyID: {
                                                    readonly type: "string";
                                                };
                                                readonly keyUse: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly keyOperations: {
                                                    readonly uniqueItems: true;
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                    };
                                                };
                                                readonly parsedX509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly extendedKeyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly subjectAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly issuerAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgName: {
                                                                readonly type: "string";
                                                            };
                                                            readonly sigAlgParams: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly tbscertificate: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly issuerDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgOID: {
                                                                readonly type: "string";
                                                            };
                                                            readonly issuerUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly subjectUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly signature: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly basicConstraints: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly issuerX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly version: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly serialNumber: {
                                                                readonly type: "integer";
                                                            };
                                                            readonly notAfter: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly notBefore: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly keyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly criticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly nonCriticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly encoded: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly publicKey: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                    readonly format: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly algorithm: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly keyRevocation: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly reason: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly value: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly revocationTime: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                };
                                                readonly requiredParams: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly x509CertURL: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                                readonly x509CertThumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertSHA256Thumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly expirationTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly notBeforeTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly issueTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                        };
                                        readonly algorithm: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly requirement: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                };
                                            };
                                        };
                                        readonly base64URLEncodePayload: {
                                            readonly type: "boolean";
                                        };
                                        readonly includedParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly keyID: {
                                            readonly type: "string";
                                        };
                                        readonly jwkurl: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertURL: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertThumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertSHA256Thumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertChain: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly type: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly criticalParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly contentType: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly signature: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                                };
                                readonly jwtclaimsSet: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly claims: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                        };
                                        readonly issuer: {
                                            readonly type: "string";
                                        };
                                        readonly audience: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly expirationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly notBeforeTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly issueTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly jwtid: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly parsedString: {
                                    readonly type: "string";
                                };
                                readonly signingInput: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly format: "byte";
                                    };
                                };
                            };
                        };
                        readonly backChannelTokenDeliveryMode: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backChannelClientNotificationEndpoint: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelAuthRequestJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly clientRegistrationTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly organizationName: {
                            readonly type: "string";
                        };
                        readonly customFields: {
                            readonly type: "object";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly emailContacts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly urientries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly termsOfServiceURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly tokenEndpointAuthJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly tokenEndpointAuthMethod: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly tlsclientCertificateBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly tlsclientAuthSubjectDN: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanDNS: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanURI: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanIP: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanEmail: {
                            readonly type: "string";
                        };
                        readonly dpoPBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly authorizationJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationDetailsTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                    };
                                };
                            };
                        };
                        readonly logoURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly policyURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly termsOfServiceURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwksetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwkset: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keys: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly keyStore: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly provider: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly private: {
                                                readonly type: "boolean";
                                            };
                                            readonly algorithm: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyType: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyID: {
                                                readonly type: "string";
                                            };
                                            readonly keyUse: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly keyOperations: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                    readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                };
                                            };
                                            readonly parsedX509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly extendedKeyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly subjectAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly issuerAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgName: {
                                                            readonly type: "string";
                                                        };
                                                        readonly sigAlgParams: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly tbscertificate: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly issuerDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly subjectDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgOID: {
                                                            readonly type: "string";
                                                        };
                                                        readonly issuerUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly subjectUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly signature: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly basicConstraints: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly issuerX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly subjectX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly version: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly serialNumber: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly notAfter: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly notBefore: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly keyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly criticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly nonCriticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly encoded: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly publicKey: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                                readonly format: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly algorithm: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly keyRevocation: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reason: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly revocationTime: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                            readonly requiredParams: {
                                                readonly type: "object";
                                                readonly additionalProperties: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly x509CertURL: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                            readonly x509CertThumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertSHA256Thumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly expirationTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBeforeTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly issueTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                                readonly additionalMembers: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                            };
                        };
                        readonly supportsBackChannelUserCodeParam: {
                            readonly type: "boolean";
                            readonly writeOnly: true;
                        };
                        readonly redirectionURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIStrings: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly mutualTLSSenderConstrainedAccessTokens: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly secret: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly expirationDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly sha256: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "byte";
                            };
                        };
                        readonly valueBytes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "byte";
                            };
                        };
                    };
                };
                readonly registrationURI: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly oidcmetadata: {
                    readonly type: "object";
                    readonly properties: {
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly responseTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly properties: {
                                    readonly empty: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly grantTypes: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly shortName: {
                                        readonly type: "string";
                                    };
                                    readonly scopeRequirementInTokenRequest: {
                                        readonly type: "string";
                                        readonly enum: readonly ["REQUIRED", "OPTIONAL", "NOT_ALLOWED"];
                                        readonly description: "`REQUIRED` `OPTIONAL` `NOT_ALLOWED`";
                                    };
                                    readonly requestParameterNames: {
                                        readonly uniqueItems: true;
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly nameEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                            };
                        };
                        readonly logoURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly policyURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly signedJWKSetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly requestObjectURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly requestObjectJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly requestObjectJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly softwareID: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareVersion: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly softwareStatement: {
                            readonly type: "object";
                            readonly properties: {
                                readonly payload: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly origin: {
                                            readonly type: "string";
                                            readonly enum: readonly ["JSON", "STRING", "BYTE_ARRAY", "BASE64URL", "JWS_OBJECT", "SIGNED_JWT"];
                                            readonly description: "`JSON` `STRING` `BYTE_ARRAY` `BASE64URL` `JWS_OBJECT` `SIGNED_JWT`";
                                        };
                                    };
                                };
                                readonly parsedParts: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly header: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customParams: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly parsedBase64URL: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly jwk: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly keyStore: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly provider: {
                                                            readonly type: "object";
                                                            readonly additionalProperties: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly private: {
                                                    readonly type: "boolean";
                                                };
                                                readonly algorithm: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyType: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                        readonly requirement: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                            readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                        };
                                                    };
                                                };
                                                readonly keyID: {
                                                    readonly type: "string";
                                                };
                                                readonly keyUse: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                                readonly keyOperations: {
                                                    readonly uniqueItems: true;
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                        readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                    };
                                                };
                                                readonly parsedX509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly extendedKeyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly subjectAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly issuerAlternativeNames: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly additionalProperties: true;
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgName: {
                                                                readonly type: "string";
                                                            };
                                                            readonly sigAlgParams: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly tbscertificate: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly issuerDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectDN: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                            readonly sigAlgOID: {
                                                                readonly type: "string";
                                                            };
                                                            readonly issuerUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly subjectUniqueID: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly signature: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly basicConstraints: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly issuerX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly subjectX500Principal: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly name: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly version: {
                                                                readonly type: "integer";
                                                                readonly format: "int32";
                                                                readonly minimum: -2147483648;
                                                                readonly maximum: 2147483647;
                                                            };
                                                            readonly serialNumber: {
                                                                readonly type: "integer";
                                                            };
                                                            readonly notAfter: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly notBefore: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                            };
                                                            readonly keyUsage: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "boolean";
                                                                };
                                                            };
                                                            readonly criticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly nonCriticalExtensionOIDs: {
                                                                readonly uniqueItems: true;
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly encoded: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                    readonly format: "byte";
                                                                };
                                                            };
                                                            readonly publicKey: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly encoded: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                            readonly format: "byte";
                                                                        };
                                                                    };
                                                                    readonly format: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly algorithm: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly keyRevocation: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly reason: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly value: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly revocationTime: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                    };
                                                };
                                                readonly requiredParams: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly x509CertURL: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                                readonly x509CertThumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertSHA256Thumbprint: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly x509CertChain: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: true;
                                                    };
                                                };
                                                readonly expirationTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly notBeforeTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly issueTime: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                            };
                                        };
                                        readonly algorithm: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly requirement: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                };
                                            };
                                        };
                                        readonly base64URLEncodePayload: {
                                            readonly type: "boolean";
                                        };
                                        readonly includedParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly keyID: {
                                            readonly type: "string";
                                        };
                                        readonly jwkurl: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertURL: {
                                            readonly type: "string";
                                            readonly format: "uri";
                                        };
                                        readonly x509CertThumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertSHA256Thumbprint: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly x509CertChain: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly type: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly criticalParams: {
                                            readonly uniqueItems: true;
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly contentType: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly signature: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly enum: readonly ["UNSIGNED", "SIGNED", "VERIFIED"];
                                    readonly description: "`UNSIGNED` `SIGNED` `VERIFIED`";
                                };
                                readonly jwtclaimsSet: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly claims: {
                                            readonly type: "object";
                                            readonly additionalProperties: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                        };
                                        readonly issuer: {
                                            readonly type: "string";
                                        };
                                        readonly audience: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly expirationTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly notBeforeTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly issueTime: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly jwtid: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly parsedString: {
                                    readonly type: "string";
                                };
                                readonly signingInput: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly format: "byte";
                                    };
                                };
                            };
                        };
                        readonly backChannelTokenDeliveryMode: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backChannelClientNotificationEndpoint: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelAuthRequestJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly clientRegistrationTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly organizationName: {
                            readonly type: "string";
                        };
                        readonly customFields: {
                            readonly type: "object";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly applicationType: {
                            readonly type: "string";
                            readonly enum: readonly ["native", "web"];
                            readonly description: "`native` `web`";
                        };
                        readonly subjectType: {
                            readonly type: "string";
                            readonly enum: readonly ["pairwise", "public"];
                            readonly description: "`pairwise` `public`";
                        };
                        readonly sectorIDURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly userInfoJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly userInfoJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly userInfoJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly defaultMaxAge: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly defaultACRs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly initiateLoginURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly frontChannelLogoutURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly backChannelLogoutURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly attachmentDigestAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly idtokenJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly idtokenJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly idtokenJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly postLogoutRedirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIs: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly emailContacts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly urientries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly termsOfServiceURIEntries: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly format: "uri";
                            };
                        };
                        readonly tokenEndpointAuthJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly tokenEndpointAuthMethod: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly tlsclientCertificateBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly tlsclientAuthSubjectDN: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanDNS: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanURI: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanIP: {
                            readonly type: "string";
                        };
                        readonly tlsclientAuthSanEmail: {
                            readonly type: "string";
                        };
                        readonly dpoPBoundAccessTokens: {
                            readonly type: "boolean";
                        };
                        readonly authorizationJWSAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEAlg: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationJWEEnc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly requirement: {
                                    readonly type: "string";
                                    readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                    readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                };
                            };
                        };
                        readonly authorizationDetailsTypes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                    };
                                };
                            };
                        };
                        readonly logoURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly policyURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly termsOfServiceURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwksetURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly jwkset: {
                            readonly type: "object";
                            readonly properties: {
                                readonly keys: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly keyStore: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly provider: {
                                                        readonly type: "object";
                                                        readonly additionalProperties: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly private: {
                                                readonly type: "boolean";
                                            };
                                            readonly algorithm: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyType: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                    readonly requirement: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["REQUIRED", "RECOMMENDED", "OPTIONAL"];
                                                        readonly description: "`REQUIRED` `RECOMMENDED` `OPTIONAL`";
                                                    };
                                                };
                                            };
                                            readonly keyID: {
                                                readonly type: "string";
                                            };
                                            readonly keyUse: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly keyOperations: {
                                                readonly uniqueItems: true;
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"];
                                                    readonly description: "`sign` `verify` `encrypt` `decrypt` `wrapKey` `unwrapKey` `deriveKey` `deriveBits`";
                                                };
                                            };
                                            readonly parsedX509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                        };
                                                        readonly extendedKeyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly subjectAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly issuerAlternativeNames: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly additionalProperties: true;
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgName: {
                                                            readonly type: "string";
                                                        };
                                                        readonly sigAlgParams: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly tbscertificate: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly issuerDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly subjectDN: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                        readonly sigAlgOID: {
                                                            readonly type: "string";
                                                        };
                                                        readonly issuerUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly subjectUniqueID: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly signature: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly basicConstraints: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly issuerX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly subjectX500Principal: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly version: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly serialNumber: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly notAfter: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly notBefore: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                        };
                                                        readonly keyUsage: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly criticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly nonCriticalExtensionOIDs: {
                                                            readonly uniqueItems: true;
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly encoded: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly format: "byte";
                                                            };
                                                        };
                                                        readonly publicKey: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly encoded: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly format: "byte";
                                                                    };
                                                                };
                                                                readonly format: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly algorithm: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly keyRevocation: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reason: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly revocationTime: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                            readonly requiredParams: {
                                                readonly type: "object";
                                                readonly additionalProperties: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly x509CertURL: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                            readonly x509CertThumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertSHA256Thumbprint: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                            readonly x509CertChain: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly expirationTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly notBeforeTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly issueTime: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                                readonly additionalMembers: {
                                    readonly type: "object";
                                    readonly additionalProperties: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                };
                            };
                        };
                        readonly supportsBackChannelUserCodeParam: {
                            readonly type: "boolean";
                            readonly writeOnly: true;
                        };
                        readonly redirectionURI: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                        readonly redirectionURIStrings: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly mutualTLSSenderConstrainedAccessTokens: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly idissueDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly registrationAccessToken: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly lifetime: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly scope: {
                            readonly type: "array";
                            readonly properties: {
                                readonly empty: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly authorizationDetails: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly actions: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly type: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly format: "uri";
                                            };
                                        };
                                    };
                                    readonly locations: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                };
                                            };
                                        };
                                    };
                                    readonly dataTypes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly privileges: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly identifier: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly issuedTokenType: {
                            readonly type: "object";
                            readonly properties: {
                                readonly uri: {
                                    readonly type: "string";
                                    readonly format: "uri";
                                };
                            };
                        };
                        readonly parameterNames: {
                            readonly uniqueItems: true;
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly customParameters: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AuthorizeGet, AuthorizePost, AuthorizePost1, Configuration, DoGet, DoPost, Token, TokenRevocation };
