function editElement(ref,matcher,replacer) {

    const regex = new RegExp(matcher,'g');

    const result = ref.textContent.replace(regex,replacer);

    ref.textContent = result;
}