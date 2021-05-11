import { Observable, of } from "rxjs";


interface HttpHeaders {
  constructor(headers?: string | { [name: string]: string | string[]; })
  has(name: string): boolean
  get(name: string): string | null
  keys(): string[]
  getAll(name: string): string[] | null
  append(name: string, value: string | string[]): HttpHeaders
  set(name: string, value: string | string[]): HttpHeaders
  delete(name: string, value?: string | string[]): HttpHeaders
}

interface HttpParams {
  constructor: Function
  has(param: string): boolean
  get(param: string): string | null
  getAll(param: string): string[] | null
  keys(): string[]
  append(param: string, value: string): HttpParams
  appendAll(params: { [param: string]: string | string[]; }): HttpParams
  set(param: string, value: string): HttpParams
  delete(param: string, value?: string): HttpParams
  toString(): string
}
export class HttpClientMock {

  patch(url: string, body: any, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "json"; withCredentials?: boolean; }):Observable<Object> {
    return of({
      status: 201,
      message: "success"
    });
  }

  get(url: string, options?: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "json"; withCredentials?: boolean; }):Observable<Object> {
    return of({
      _id: 1234567890,
      author: "Miguel de Cervantes",
      quote: "The truth may be stretched thin, but it never breaks, and it always surfaces above lies, as oil floats on water."
    });
  }

  post(url: string, body: any, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "json"; withCredentials?: boolean; }):Observable<Object> {
    return of({
      status: 201,
      message: "success"
    });
  }

  delete(url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "json"; withCredentials?: boolean; }):Observable<Object> {
    return of({
      status: 204,
      message: "no content"
    });
  }
}