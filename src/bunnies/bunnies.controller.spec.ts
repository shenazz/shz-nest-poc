import { Test, TestingModule } from '@nestjs/testing';
import { BunniesController } from './bunnies.controller';
import { BunniesService } from './bunnies.service';

describe('BunniesController', () => {
  let controller: BunniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BunniesController],
      providers: [BunniesService],
    }).compile();

    controller = module.get<BunniesController>(BunniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
