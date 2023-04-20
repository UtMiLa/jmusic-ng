import { Module } from '@nestjs/common';
import { FsController } from './fs/fs.controller';
import { FileService } from './file/file.service';

@Module({
  controllers: [FsController],
  providers: [FileService],
})
export class FilesModule {}
