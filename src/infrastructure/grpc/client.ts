import type { TokenServiceClient as _token_TokenServiceClient } from '../../proto/token/token/TokenService';

import { requestToken } from '../../application/services/tokenService';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../proto/token/token';
const PROTO_PATH = __dirname + '/../../interfaces/grpc/token.proto';
const packageDef = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObj = grpc.loadPackageDefinition(
  packageDef,
) as unknown as ProtoGrpcType
// Create gRPC client
const client = new grpcObj.token.TokenService('localhost:50051', grpc.credentials.createInsecure());

// Request tokens using the same client ID
requestToken(client, 'client1');
requestToken(client, 'client2');
requestToken(client, 'client1'); // This should retrieve the token from the cache
