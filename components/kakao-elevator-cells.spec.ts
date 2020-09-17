import { KakaoElevatorCells } from './kakao-elevator-cells';

describe('KakaoElevatorCells Component', () => {
    const COMPONENT_NAME = 'kakao-elevator-cells';
    let component: KakaoElevatorCells;

    beforeAll(() => {
        customElements.define(COMPONENT_NAME, KakaoElevatorCells);
        component = new KakaoElevatorCells();
    });

    it('should be registered', () => {
        expect(customElements.get(COMPONENT_NAME)).toBeDefined();
    });

    it('should have correct name', () => {
        expect(component.tagName).toBe(COMPONENT_NAME.toUpperCase());
    });

    it('should have a property/attribute', () => {
        expect(component.elevators).toBeDefined();
        expect(component.buttonPressed).toBeDefined();
    });
});
