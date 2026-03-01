import { Controller, Get } from '@nestjs/common';
import { VideosService } from './videos.service';
import { TransformedVideo } from './interfaces/transformed-video.interface';

@Controller('/videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  findAll(): TransformedVideo[] {
    return this.videosService.findAll();
  }
}