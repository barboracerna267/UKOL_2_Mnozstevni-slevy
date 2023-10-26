
///Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

///Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.///

const amount=Number(prompt('Kolik kusů si přejete objednat?'));

const PriceUnderFifty= 300;
const PriceOverFifty= 250;
const PriceOverTwoHundred= 200;
const PriceOverFiveHundred= 150;
const PriceOverThousand=120;
const currency= ' Kč';

if (amount< 50) {
    document.body.innerHTML = amount*PriceUnderFifty + currency
}

if (amount>= 50 ) {
    document.body.innerHTML = amount*PriceOverFifty + currency
}

if (amount>= 200) {
    document.body.innerHTML = amount*PriceOverTwoHundred + currency
}

if (amount>= 500) {
    document.body.innerHTML = amount*PriceOverFiveHundred + currency
}

if (amount>= 1000) {
    document.body.innerHTML = amount*PriceOverThousand + currency
}