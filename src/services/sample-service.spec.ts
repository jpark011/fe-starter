import { SampleService } from './sample-service';

describe(`Sample Service`, () => {
  let service: SampleService;

  beforeAll(() => {
    service = SampleService.getInstance();
  });

  it('should be available', () => {
    expect(service).toBeDefined();
  });
});
