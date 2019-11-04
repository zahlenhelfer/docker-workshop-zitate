import { Controller, Get } from '@nestjs/common';
import { ZitatService } from './zitat.service';

@Controller()
export class AppController {
  constructor(private readonly zitatService: ZitatService) {}

  @Get('zitat')
  getZitat(): object {
    return this.zitatService.getZitat();
  }
}
