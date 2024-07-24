// Original file: proto/token/token.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TokenRequest as _enrichmentPackage_TokenRequest, TokenRequest__Output as _enrichmentPackage_TokenRequest__Output } from '../enrichmentPackage/TokenRequest';
import type { TokenResponse as _enrichmentPackage_TokenResponse, TokenResponse__Output as _enrichmentPackage_TokenResponse__Output } from '../enrichmentPackage/TokenResponse';

export interface TokenServiceClient extends grpc.Client {
  SendToken(argument: _enrichmentPackage_TokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  SendToken(argument: _enrichmentPackage_TokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  SendToken(argument: _enrichmentPackage_TokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  SendToken(argument: _enrichmentPackage_TokenRequest, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  sendToken(argument: _enrichmentPackage_TokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  sendToken(argument: _enrichmentPackage_TokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  sendToken(argument: _enrichmentPackage_TokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  sendToken(argument: _enrichmentPackage_TokenRequest, callback: grpc.requestCallback<_enrichmentPackage_TokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TokenServiceHandlers extends grpc.UntypedServiceImplementation {
  SendToken: grpc.handleUnaryCall<_enrichmentPackage_TokenRequest__Output, _enrichmentPackage_TokenResponse>;
  
}

export interface TokenServiceDefinition extends grpc.ServiceDefinition {
  SendToken: MethodDefinition<_enrichmentPackage_TokenRequest, _enrichmentPackage_TokenResponse, _enrichmentPackage_TokenRequest__Output, _enrichmentPackage_TokenResponse__Output>
}
