import { HttpClient } from "@angular/common/http";
import { Injectable, Optional } from "@angular/core";
import { User, UserRole } from '../domain/user';

export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface LoginResponse extends User {
    token: string;
  }
  
  const UserStorageKey = 'user';
  const TokenStorageKey = 'token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private currentToken?: string;
    get token(): string {
        return this.currentToken as string;
    }

    get isLoggedIn(): boolean {
        return !!this.token;
    }

    constructor(@Optional() private httpClient: HttpClient) {}

    async login(loginRequest: LoginRequest): Promise<void> {
        const token = await this.httpClient
            .post('api/user/login', loginRequest, { responseType: 'text'})
            .toPromise();
        this.setToken(token);
    }

    private setToken(token: string): void {
        this.currentToken = token;
    }
}