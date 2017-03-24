import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
try {
    injectTapEventPlugin();
} catch (e) {}
