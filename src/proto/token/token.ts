import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EnrichmentServiceClient as _enrichmentPackage_EnrichmentServiceClient, EnrichmentServiceDefinition as _enrichmentPackage_EnrichmentServiceDefinition } from './enrichmentPackage/EnrichmentService';
import type { TokenServiceClient as _enrichmentPackage_TokenServiceClient, TokenServiceDefinition as _enrichmentPackage_TokenServiceDefinition } from './enrichmentPackage/TokenService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  token: any;
  enrichmentPackage: {
    EnrichmentRequest: MessageTypeDefinition
    EnrichmentResponse: MessageTypeDefinition
    EnrichmentService: SubtypeConstructor<typeof grpc.Client, _enrichmentPackage_EnrichmentServiceClient> & { service: _enrichmentPackage_EnrichmentServiceDefinition }
    TokenRequest: MessageTypeDefinition
    TokenResponse: MessageTypeDefinition
    TokenService: SubtypeConstructor<typeof grpc.Client, _enrichmentPackage_TokenServiceClient> & { service: _enrichmentPackage_TokenServiceDefinition }
  }
}

