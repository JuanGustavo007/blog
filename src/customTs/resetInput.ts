export default function resetInput() {
    const arrayInput = document.querySelectorAll("input");
    arrayInput.forEach((input) => {
        input.value = "";
    });
}
