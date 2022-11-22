import { Test, TestingModule } from '@nestjs/testing';
import { VegsController } from './vegs.controller';

describe('VegsController', () => {
  let controller: VegsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VegsController],
    }).compile();

    controller = module.get<VegsController>(VegsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
