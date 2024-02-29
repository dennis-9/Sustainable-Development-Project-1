function checkAnswer(questionName) {
    const selectedOption = document.querySelector(`input[name=${questionName}]:checked`);

    if (selectedOption) {
        alert(`Selected answer: ${selectedOption.value}`);
    } else {
        alert("Please select an answer before submitting.");
    }
}