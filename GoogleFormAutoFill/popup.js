function fillGoogleForm() {
    // Handle grid-style radio button questions
    const radioGroups = document.querySelectorAll('div[role="radiogroup"]');
    
    radioGroups.forEach(group => {
        const radioButtons = group.querySelectorAll('div[role="radio"]:not([data-other-checkbox="true"])');
        if (radioButtons.length > 0) {
            const randomIndex = Math.floor(Math.random() * 3) + 2;
            const selectedRadio = radioButtons[randomIndex];
            
            if (selectedRadio) {
                selectedRadio.click();
            }
        }
    });

    // Handle regular radio buttons
    const regularRadioGroups = document.querySelectorAll('div[role="radiogroup"]');
    
    regularRadioGroups.forEach(group => {
        const regularRadios = group.querySelectorAll('div[role="radio"]:not([data-other-checkbox="true"])');
        if (regularRadios.length > 0) {
            const randomIndex = Math.floor(Math.random() * regularRadios.length);
            const selectedRadio = regularRadios[randomIndex];
            if (selectedRadio) {
                selectedRadio.click();
            }
        }
    });

    // Handle checkboxes (excluding "other" options)
    const checkboxGroups = document.querySelectorAll('div[role="list"]');
    checkboxGroups.forEach(group => {
        const checkboxes = group.querySelectorAll('div[role="checkbox"]:not([data-other-checkbox="true"])');
        if (checkboxes.length > 0) {
            // Always check one random checkbox
            const randomIndex = Math.floor(Math.random() * checkboxes.length);
            checkboxes[randomIndex].click();
            // Randomly check other checkboxes
            checkboxes.forEach((checkbox, index) => {
                if (index !== randomIndex && Math.random() > 0.5) {
                    checkbox.click();
                }
            });
        }
    });
    alert("Form has been auto-filled with random positive answers!");
}

document.getElementById("fill").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: fillGoogleForm
        });
    });
});
