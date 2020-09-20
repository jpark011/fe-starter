import { KakaoAppElevator } from './kakao-app-elevator';

describe('KakaoAppElevator Component', () => {
    const COMPONENT_NAME = 'kakao-app-elevator';
    let component: KakaoAppElevator;

    beforeAll(() => {
        customElements.define(COMPONENT_NAME, KakaoAppElevator);
        component = new KakaoAppElevator();
    });

    it('should be registered', () => {
        expect(customElements.get(COMPONENT_NAME)).toBeDefined();
    });

    it('should have correct name', () => {
        expect(component.tagName).toBe(COMPONENT_NAME.toUpperCase());
    });
});
