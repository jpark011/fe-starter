import htmlContent from './app-sample.html';
import cssContent from './app-sample.css';

/******************** Build HTML/CSS ********************/
const templateElement = document.createElement('template');
templateElement.innerHTML = htmlContent;
const styleElement = document.createElement('style');
styleElement.innerHTML = cssContent;
templateElement.content.insertBefore(styleElement, templateElement.content.firstChild);
/********************************************************/

export const enum AppSampleAttr {}

export class AppSample extends HTMLElement {
  static get observedAttributes(): AppSampleAttr[] {
    return [];
  }
  private _themeSwitchElement: HTMLInputElement;

  private _onThemeSwitch = () => {
    const switchOn = this._themeSwitchElement.checked;

    if (switchOn) {
      document.body.classList.replace('light', 'dark');
    } else {
      document.body.classList.replace('dark', 'light');
    }
  };

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateElement.content.cloneNode(true));

    this._themeSwitchElement = shadowRoot.querySelector<HTMLInputElement>('input[name=theme-switch]') as HTMLInputElement;
  }

  connectedCallback(): void {
    this._themeSwitchElement.onchange = this._onThemeSwitch;
  }

  disconnectedCallback(): void {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    // switch (name) {
    //     case:
    // }
  }
}
