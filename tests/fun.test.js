const {
    guarantee,
    check,
    group
} = require('@gnarwall19/nymeria');

group('Does it work', () => {
    check('Something simple', () => {
        guarantee(123 === 123);
    });
});