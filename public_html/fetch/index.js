/**
 * fetches result
 * @param {string} url - url page to fetch from
 * @returns {Promise<string|null>}
 */

const getResult = async (url) => {
    //console.log(url);

    const resp = await fetch(`${url}`).catch(err => console.log(err));
    if (resp.ok) {
        return await resp.text();
    }
    //console.log(`Error fetch: ${resp.status}`);
    return null;
}

/**
 * updates target input value with fetched result
 * @param {string} input - input value
 */
const updateInputValue = async (input) => {
    //console.log(input.value);
    if (input.value) {
        const newInputValue = await getResult(input.value);
        //console.log(newInputValue);
        input.value = newInputValue;
    }
    return;
}

document.getElementById('bt').addEventListener('click', () => updateInputValue(document.getElementById('inp')));


// По маршруту /fetch/ должна располагаться (выдаваться клиенту) веб-страница.
// К ней предъявляются следующие требования:
// А. Должна содержать одно поле ввода input с идентификатором (id) inp
// Б. Должна содержать одну кнопку button с идентификатором (id) bt
// В. При щелчке по этой кнопке сценарий на этой странице должен с помощью fetch обратиться к адресу, который к моменту щелчка введён в поле ввода (адрес будет вводить автоматический тестер)
// Г. Получив результат, возвращённый этим адресом, сценарий должен поместить этот результат в поле inp вместо того значения, что в нём было ранее.