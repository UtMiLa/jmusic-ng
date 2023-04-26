import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

const demoPath = './demos';

@Injectable()
export class FileService {
  listFiles(ext: string) {
    return fs.readdirSync(demoPath)//.filter(dir => dir.endsWith('.' + ext));
  }

  loadFile(name: string) {
    return fs.readFileSync(demoPath + '/' + name).toString();
  }

  saveFile(name: string, content: {content: string}) {
    //console.log('save', name, content);
    fs.writeFileSync(demoPath + '/' + name, content.content);
  }
}
