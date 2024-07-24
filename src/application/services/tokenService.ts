import { TokenServiceClient } from '../../proto/token/token/TokenService';
import { TokenRequest } from '../../proto/token/token/TokenRequest';
import * as grpc from '@grpc/grpc-js';
import { TokenResponse } from '../../proto/token/token/TokenResponse';

export const requestToken = (client: TokenServiceClient, clientId: string) => {
  const request: TokenRequest = { clientId };

  client.getToken(request, (error: grpc.ServiceError | null, response: TokenResponse | undefined) => {
    if (error) {
      console.error(`Error retrieving token for client ID ${clientId}:`, error.message);
      return;
    }
    if (response) {
      console.log(`Token for client ID ${clientId}:`, response.token);
    } else {
      console.error(`No response received for client ID ${clientId}`);
    }
  });
};
