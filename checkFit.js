function checkFit() {
    const A = parseInt(document.getElementById("boxA").value);
    const B = parseInt(document.getElementById("boxB").value);
    const C = parseInt(document.getElementById("boxC").value);
    const M = parseInt(document.getElementById("doorM").value);
    const K = parseInt(document.getElementById("doorK").value);

    const doorMin = Math.min(M, K);
    const doorMax = Math.max(M, K);
    
    for (let value of [A,B,C,M,K]) {
        if (value <= 0) {
            document.getElementById("result").textContent = "Размер не может быть отрицательным или равным нулю.";
            return;    
        } 
        if (isNaN(value)) {
            document.getElementById("result").textContent = "Введены не все параметры";
            return;
        }
    }
        
    const boxMinValues = [A, B, C].sort((a,b) => a - b); 
    const result = (boxMinValues[0] <= doorMin && boxMinValues[1] <= doorMax);
    
    if (result) {
        resultText = "Коробка пройдёт в дверь";
    } else {
        resultText = "Коробка не пройдёт в дверь";
    }
    document.getElementById("result").textContent = resultText;
        
}   


function openSearch() {
    const boxA = document.getElementById("boxA").value;
    const boxB = document.getElementById("boxB").value;
    const boxC = document.getElementById("boxC").value;
    const doorM = document.getElementById("doorM").value;
    const doorK = document.getElementById("doorK").value;
    const resultText = document.getElementById("result").innerText;

    
    const condition = `Пройдёт ли коробка со сторонами ${boxA} × ${boxB} × ${boxC} через дверь размером ${doorM} × ${doorK}? Результат: ${resultText}`;

    const query = document.getElementById("searchQuery").value.trim();
    if (query) {
        const bingUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}&taskData=${encodeURIComponent(condition)}`;
        window.open(bingUrl, '_blank');
    } else {
        alert("Пожалуйста, введите текст для поиска.");
    }
}