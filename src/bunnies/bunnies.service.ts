import { Injectable } from '@nestjs/common';
import { CreateBunnyDto } from './dto/create-bunny.dto';
import { UpdateBunnyDto } from './dto/update-bunny.dto';

@Injectable()
export class BunniesService {
  create(createBunnyDto: CreateBunnyDto) {
    return 'This action adds a new bunny';
  }

  findAll() {
    return `This action returns all bunnies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bunny`;
  }

  update(id: number, updateBunnyDto: UpdateBunnyDto) {
    return `This action updates a #${id} bunny`;
  }

  remove(id: number) {
    return `This action removes a #${id} bunny`;
  }
}
