import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileIoService {

  constructor(private http: HttpClient) { }

  listFiles() {
    return this.http.get<string[]>('http://localhost:3000/api/fs');
  }

  loadFile(name: string) {
    return this.http.get('http://localhost:3000/api/fs/file/' + name, {responseType: 'text'});
  }

  saveFile(name: string, content: string) {
    //console.log('saveFile');
    return this.http.post('http://localhost:3000/api/fs/file/' + name, {content}).subscribe(_ => {});
  }
}
