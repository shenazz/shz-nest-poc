import { Test, TestingModule } from '@nestjs/testing';
import { BunniesService } from './bunnies.service';

describe('BunniesService', () => {
  let service: BunniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BunniesService],
    }).compile();

    service = module.get<BunniesService>(BunniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
