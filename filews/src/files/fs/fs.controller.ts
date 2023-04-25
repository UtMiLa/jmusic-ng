import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { FileService } from '../file/file.service';


@Controller('fs')
export class FsController {
  constructor(private fservice: FileService) {
    //
  }

  @Get('/file/:name')
  @Header('Content-type', 'text/plain')
  getFile(@Param('name') name: string) {
    const dir = this.fservice.loadFile(name);
    return dir;
  }

  @Get()
  getData() {
    const dir = this.fservice.listFiles();
    return dir;
  }

  @Post('/file/:name')
  postData(@Param('name') name: string, @Body() body: {content: string}) {
    this.fservice.saveFile(name, body);
  }
}
