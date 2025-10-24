const foodPrices = {
    Oyo1: {
        Grains: { Rice: 90000, Beans: 110000, Garri: 37000, Wheat: 46000, Maize: 53000 },
        Protein: { Fish: 7000, Chicken: 4500, Beef: 4000, Eggs: 6000, GoatMeat: 3500 },
        Oil: { PalmOil: 3500, GroundnutOil: 4500, OliveOil: 7500 },
        Tuber: { Yam: 5000, Cassava: 3300, Cocoyam: 2500, Potato: 2100 },
    },
    Lagos2: {
        Grains: { Rice: 92000, Beans: 117000, Garri: 34000, Wheat: 40000, Maize: 60000 },
        Protein: { Fish: 7400, Chicken: 5000, Beef: 6000, Eggs: 6500, GoatMeat: 5000 },
        Oil: { PalmOil: 3000, GroundnutOil: 5000, OliveOil: 6000 },
        Tuber: { Yam: 5500, Cassava: 3000, Cocoyam: 3000, Potato: 1500 },
    },
    Abuja3: {
        Grains: { Rice: 101000, Beans: 90000, Garri: 35000, Wheat: 35000, Maize: 55000 },
        Protein: { Fish: 7500, Chicken: 5000, Beef: 6000, Eggs: 6500, GoatMeat: 5000 },
        Oil: { PalmOil: 4000, GroundnutOil: 4500, OliveOil: 6500 },
        Tuber: { Yam: 5000, Cassava: 3000, Cocoyam: 2500, Potato: 1300 },
    },
    Abia4: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Adamawa5: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Akwa_Ibom6: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Anambra7: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Bauchi8: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Bayelsa9: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Benue10: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Borno11: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Cross_River12: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Delta13: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Ebonyi14: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Edo15: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Ekiti16: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Enugu17: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Gombe18: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Imo19: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Jigawa20: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Kaduna21: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Kano22: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Katsina23: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Kebbi24: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Kogi25: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Kwara26: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Nasarawa27: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Niger28: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Ogun37: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Ondo29: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Osun30: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Plateau31: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Rivers32: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Sokoto33: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Taraba34: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Yobe35: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    },
    Zamfara36: {
        Grains: { Rice: 2500, Beans: 2000, Garri: 1500, Wheat: 1800, Maize: 2200 },
        Protein: { Fish: 5000, Chicken: 4000, Beef: 6000, Eggs: 3000, GoatMeat: 7000 },
        Oil: { PalmOil: 3500, GroundnutOil: 3000, OliveOil: 4500 },
        Tuber: { Yam: 2000, Cassava: 1500, Cocoyam: 1800, Potato: 2200 },
    }
}

const myBtn = () => {
    const selectedState = stateSelect.value;
    const selectedCategory = categorySelect.value;

    if (!selectedState && !selectedCategory) {
        alert("Select a state and a food category!")
        return;
    }

    if (!selectedState) {
        alert("Select a state!")
    }
    if (!selectedCategory) {
        alert("Select a food category!")
    }

    const items = foodPrices[selectedState][selectedCategory];

    emptyState.innerHTML =
        `   <tr>
            <th>Item(s)</th>
            <th>Price(s)</th>
        </tr>`

    for (const [item, price] of Object.entries(items)) {
        emptyState.innerHTML +=
            `<tr>
                <td>${item}</td>
                <td>${price.toLocaleString()}</td>
            </tr>`
    }
}