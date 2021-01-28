import { AppSample } from './app-sample';
const COMPONENT_NAME = 'app-sample';

describe(`${COMPONENT_NAME} Component`, () => {
  let component: AppSample;

  beforeAll(() => {
    customElements.define(COMPONENT_NAME, AppSample);
    component = new AppSample();
  });

  it('should be registered', () => {
    expect(customElements.get(COMPONENT_NAME)).toBeDefined();
  });

  it('should have correct name', () => {
    expect(component.tagName).toBe(COMPONENT_NAME.toUpperCase());
  });
});
