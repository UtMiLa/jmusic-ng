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
}
