import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BunniesService } from './bunnies.service';
import { CreateBunnyDto } from './dto/create-bunny.dto';
import { UpdateBunnyDto } from './dto/update-bunny.dto';

@Controller('bunnies')
export class BunniesController {
  constructor(private readonly bunniesService: BunniesService) {}

  @Post()
  create(@Body() createBunnyDto: CreateBunnyDto) {
    return this.bunniesService.create(createBunnyDto);
  }

  @Get()
  findAll() {
    return this.bunniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bunniesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBunnyDto: UpdateBunnyDto) {
    return this.bunniesService.update(+id, updateBunnyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bunniesService.remove(+id);
  }
}
