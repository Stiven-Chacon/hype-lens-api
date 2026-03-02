import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './modules/videos/videos.module';

@Module({
  imports: [VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
