//Bildirimler Yapılıyor
let Number1, Number2, Operator, result, answer, True = 0,
    False = 0;

//HTML Nesnelerine Ulaşma
Number1 = document.getElementById('Number1');
Number2 = document.getElementById('Number2');
Operator = document.getElementById("Operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
True = document.getElementById("True");
False = document.getElementById("False");


//Rastgele sayı üretme fonksiyonu
function RandomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    return number;

    //Math.floor()=en yakın integere yuvarlar

}

//Oyun başlangıcında vaya soru tahmini sonrası yeni soru oluşturma fonksiyonu
function newQuestion() {
    let operation = ["+", "-", "*", "/"];
    Operator.textContent = operation[RandomNumber(0, 4)]; //operator seçimi
    Number1.textContent = RandomNumber(0, 50);
    Number2.textContent = RandomNumber(0, 50);

    //Kalansız Bölme İşlemi
    if (Operator.textContent == "/") {
        while (true) {
            Number2.textContent = RandomNumber(0, 50);
            if (Number1.textContent % Number2.textContent == 0) {
                break;

            }
        }


    }
}

//Sayfa Yüklendiğinde yenii soru soran fonksiyon (newQuestion()) çalıştırılacak

window.onload = function() {
    newQuestion();
}

//cevapla butonuna basıldığında değerlendirme işlemi yapma
answer.onclick = function() {
    let ans, n1, n2;
    n1 = Number(Number1.textContent);
    n2 = Number(Number2.textContent);
    switch (Operator.textContent) {
        case "+":
            ans = n1 + n2;
            break;
        case "-":
            ans = n1 - n2;
            break;
        case "*":
            ans = n1 * n2;
            break;
        case "/":
            ans = n1 / n2;
            break;
        default:
            break;

    }
    if (result.value == ans) {
        True.textContent = Number(True.textContent) + 1;
    } else {
        False.textContent = Number(False.textContent) + 1;

    }
    //butona basılınca yeni soru getirir
    newQuestion();
    //inputu temizler
    clear = document.getElementById('result').value = "";

}