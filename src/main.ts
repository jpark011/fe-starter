// Custom Element Registration
(async () => {
    const { KakaoAppElevator } = await import(/* webpackChunkName: "kakao-app-elevator" */ './components/kakao-app-elevator');
    const { KakaoElevatorButtons } = await import(/* webpackChunkName: "kakao-elevator-buttons" */ './components/kakao-elevator-buttons');
    const { KakaoElevatorCells } = await import(/* webpackChunkName: "kakao-elevator-cells" */ './components/kakao-elevator-cells');

    customElements.get('kakao-app-elevator') ?? customElements.define('kakao-app-elevator', KakaoAppElevator);
    customElements.get('kakao-elevator-cells') ?? customElements.define('kakao-elevator-cells', KakaoElevatorCells);
    customElements.get('kakao-elevator-buttons') ?? customElements.define('kakao-elevator-buttons', KakaoElevatorButtons);
})();

// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log(`SW registered: ${registration}`);
            })
            .catch((regError) => {
                console.error(`SW register failed: ${regError}`);
            });
    });
}
