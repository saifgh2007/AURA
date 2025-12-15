function measure() {
    const textBlock = document.querySelector('.about-us-text');
    console.log('Language:', document.documentElement.lang);
    if (textBlock) {
        console.log('Height:', textBlock.offsetHeight);
        console.log('LineHeight:', window.getComputedStyle(textBlock.querySelector('p')).lineHeight);
    }
}

// Measure current (should be EN or AR)
measure();

// Switch and measure
const toggleKey = document.documentElement.lang === 'en' ? 'ar' : 'en';
// Trigger existing setLanguage if accessible, or just manual
// Accessing the function might be hard since it's scope-bound in DOMContentLoaded.
// I will just rely on the user (me) interpreting the current state log.
