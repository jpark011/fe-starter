import { KakaoElevatorButtons } from './kakao-elevator-buttons';

describe('KakaoElevatorButtons Component', () => {
    const COMPONENT_NAME = 'kakao-elevator-buttons';
    let component: KakaoElevatorButtons;

    beforeAll(() => {
        customElements.define(COMPONENT_NAME, KakaoElevatorButtons);
        component = new KakaoElevatorButtons();
    });

    it('should be registered', () => {
        expect(customElements.get(COMPONENT_NAME)).toBeDefined();
    });

    it('should have correct name', () => {
        expect(component.tagName).toBe(COMPONENT_NAME.toUpperCase());
    });

    it('should have a property/attribute', () => {
        expect(component.floors).toBeDefined();
        expect(component.arrived).toBeDefined();
    });
});
