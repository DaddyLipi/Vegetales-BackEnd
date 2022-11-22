import { Test, TestingModule } from '@nestjs/testing';
import { VegsService } from './vegs.service';

describe('VegsService', () => {
  let service: VegsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VegsService],
    }).compile();

    service = module.get<VegsService>(VegsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
