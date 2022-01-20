import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<any> {
    return {
      code: 1,
      message: '',
      data: {}
    }
  }
}
