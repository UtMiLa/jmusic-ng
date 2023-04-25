import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

const demoPath = 'C:/Temp/demo-io'

@Injectable()
export class FileService {
  listFiles() {
    return fs.readdirSync(demoPath);
  }

  loadFile(name: string) {
    return fs.readFileSync(demoPath + '/' + name).toString();
  }

  saveFile(name: string, content: {content: string}) {
    //console.log('save', name, content);
    fs.writeFileSync(demoPath + '/' + name, content.content);
  }
}
