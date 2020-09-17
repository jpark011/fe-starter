import htmlContent from './kakao-elevator-buttons.html';

const templateElement = document.createElement('template');
templateElement.innerHTML = htmlContent;

export const ELEVATOR_BUTTON_PRESS = 'elevator-button-press';
export interface ElevatorButtonPressData {
    floor: number;
}

type MyWindow = Window & {
    enableButton?(floor: number): void | undefined;
    isButtonEnabled?(floor: number): boolean | undefined;
};

export const enum KakaoElevatorButtonsAttr {
    Floors = 'floors',
    Arrived = 'arrived',
}
export class KakaoElevatorButtons extends HTMLElement {
    static get observedAttributes(): KakaoElevatorButtonsAttr[] {
        return [KakaoElevatorButtonsAttr.Floors, KakaoElevatorButtonsAttr.Arrived];
    }
    static readonly MIN_FLOORS = 2;
    static readonly MAX_FLOORS = 5;

    private _btnContainer: HTMLElement;
    private _buttons = [...Array(KakaoElevatorButtons.MAX_FLOORS)].map((_, index) => {
        const btn = document.createElement('button');
        btn.dataset.floor = `${index + 1}`;
        btn.innerHTML = `${index + 1} 층`;
        return btn;
    });

    private _validateFloor(floors: number) {
        return KakaoElevatorButtons.MIN_FLOORS <= floors && floors <= KakaoElevatorButtons.MAX_FLOORS;
    }

    private _updateButtons(oldFloors: number, newFloors: number) {
        if (this._validateFloor(oldFloors)) {
            // Remove buttons from DOM
            this._buttons.filter((_, index) => index < oldFloors).forEach((button) => this._btnContainer.removeChild(button));
        }

        // Add buttons to DOM
        this._buttons
            .filter((_, index) => index < newFloors)
            .reverse()
            .forEach((button) => this._btnContainer.appendChild(button));
    }

    private _onButtonClick = (event: MouseEvent) => {
        const buttonPressed = event.target as HTMLElement;

        buttonPressed.setAttribute('disabled', '');
        this.dispatchEvent(
            new CustomEvent<ElevatorButtonPressData>(ELEVATOR_BUTTON_PRESS, {
                bubbles: true,
                composed: true,
                detail: {
                    floor: parseInt(buttonPressed.dataset.floor as string),
                },
            }),
        );
    };

    private _enableButton = (floor: number) => {
        if (!this._validateFloor(floor)) {
            console.error(`올바른 층수를 입력해주세요 (${KakaoElevatorButtons.MIN_FLOORS}층 - ${KakaoElevatorButtons.MAX_FLOORS}층) `);
            return;
        }

        this._buttons[floor - 1].removeAttribute('disabled');
    };

    private _isButtonEnabled = (floor: number) => {
        if (!this._validateFloor(floor)) {
            console.error(`올바른 층수를 입력해주세요 (${KakaoElevatorButtons.MIN_FLOORS}층 - ${KakaoElevatorButtons.MAX_FLOORS}층) `);
            return;
        }

        return !this._buttons[floor - 1].hasAttribute('disabled');
    };

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateElement.content.cloneNode(true));

        this._btnContainer = shadowRoot.querySelector('.button-container') as HTMLElement;
    }

    get floors(): number | null {
        const attr = this.getAttribute(KakaoElevatorButtonsAttr.Floors);
        return attr ? parseInt(attr) : null;
    }

    set floors(floors: number | null) {
        if (floors) {
            if (this._validateFloor(floors)) {
                this.setAttribute(KakaoElevatorButtonsAttr.Floors, `${floors}`);
            }
        } else {
            this.removeAttribute(KakaoElevatorButtonsAttr.Floors);
        }
    }

    get arrived(): number | null {
        const attr = this.getAttribute(KakaoElevatorButtonsAttr.Arrived);
        return attr ? parseInt(attr) : null;
    }

    set arrived(floor: number | null) {
        if (floor) {
            this.setAttribute(KakaoElevatorButtonsAttr.Arrived, `${floor}`);
        } else {
            this.removeAttribute(KakaoElevatorButtonsAttr.Arrived);
        }
    }

    connectedCallback(): void {
        this._buttons.forEach((button) => button.addEventListener('click', this._onButtonClick));
        // For Public API
        (window as MyWindow).enableButton = this._enableButton;
        // For Public API
        (window as MyWindow).isButtonEnabled = this._isButtonEnabled;
    }

    disconnectedCallback(): void {
        this._buttons.forEach((button) => button.removeEventListener('click', this._onButtonClick));
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        const intOldValue = parseInt(oldValue) || 0;
        const intNewValue = parseInt(newValue);
        switch (name) {
            case KakaoElevatorButtonsAttr.Floors:
                if (this._validateFloor(intNewValue)) {
                    this._updateButtons(intOldValue, intNewValue);
                } else {
                    console.error(`올바른 층수를 입력해주세요 (${KakaoElevatorButtons.MIN_FLOORS}층 - ${KakaoElevatorButtons.MAX_FLOORS}층) `);
                }
                break;
            case KakaoElevatorButtonsAttr.Arrived:
                if (newValue) {
                    this._buttons[intNewValue - 1].removeAttribute('disabled');
                    this.arrived = null;
                }
        }
    }
}
