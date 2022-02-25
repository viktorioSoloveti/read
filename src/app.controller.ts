import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { City, ID } from './interfaces/interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('cities')
  create(@Body() city: City) {
    return this.appService.create(city);
  }

  @Get('cities')
  findAll() {
    return this.appService.findAll();
  }

  @Get('cities/:id')
  findOne(@Param('id') id: ID) {
    return this.appService.findOne(id);
  }

  @Patch('cities/:id')
  update(@Param('id') id: ID, @Body() city: City) {
    return this.appService.update(id, city);
  }

  @Delete('cities/:id')
  remove(@Param('id') id: ID) {
    return this.appService.remove(id);
  }
}
