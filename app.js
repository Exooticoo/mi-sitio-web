/* =============================================
   MIXOLOGÍA PREMIUM - APPLICATION LOGIC
   Drinks & Cocktails Pricing System
   ============================================= */

// ============= DATA =============
let drinks = [
    {
        id: 1,
        name: "Mojito Clásico",
        category: "Cóctel Clásico",
        base: "Ron Blanco",
        ingredients: "Ron blanco, hierba buena, limón, azúcar, soda",
        alcohol: 12.0,
        size: 350,
        cost: 2200,
        price: 6500,
        garnish: "Ramita de menta, rodaja de limón",
        glass: "Highball",
        preparation: "Muddled",
        status: "Disponible",
        notes: "El mojito más pedido de la casa. Preparado con ron cubano premium y hierba buena fresca del huerto."
    },
    {
        id: 2,
        name: "Margarita Frozen",
        category: "Cóctel Clásico",
        base: "Tequila",
        ingredients: "Tequila reposado, triple sec, jugo de lima, sal",
        alcohol: 13.5,
        size: 300,
        cost: 2800,
        price: 7500,
        garnish: "Borde de sal, rodaja de lima",
        glass: "Copa Margarita",
        preparation: "Licuado",
        status: "Disponible",
        notes: "Versión frozen del clásico mexicano. Se utiliza tequila reposado 100% agave."
    },
    {
        id: 3,
        name: "Old Fashioned",
        category: "Cóctel Premium",
        base: "Bourbon",
        ingredients: "Bourbon, angostura bitters, azúcar, cáscara de naranja",
        alcohol: 32.0,
        size: 200,
        cost: 3500,
        price: 12000,
        garnish: "Cáscara de naranja flameada, cereza maraschino",
        glass: "Rocks / Old Fashioned",
        preparation: "Revuelto",
        status: "Disponible",
        notes: "Cóctel clásico desde 1880. Preparado con bourbon premium Maker's Mark y bitters Angostura artesanales."
    },
    {
        id: 4,
        name: "Piña Colada",
        category: "Cóctel Tropical",
        base: "Ron",
        ingredients: "Ron blanco, crema de coco, jugo de piña, piña fresca",
        alcohol: 10.0,
        size: 400,
        cost: 2500,
        price: 7000,
        garnish: "Rodaja de piña, cereza, sombrillita",
        glass: "Hurricane",
        preparation: "Licuado",
        status: "Disponible",
        notes: "Cóctel tropical con crema de coco natural. Servido frozen para refrescar en los días calurosos."
    },
    {
        id: 5,
        name: "Negroni",
        category: "Cóctel Premium",
        base: "Gin",
        ingredients: "Gin, Campari, Vermouth rojo",
        alcohol: 24.0,
        size: 180,
        cost: 3200,
        price: 10500,
        garnish: "Rodaja de naranja",
        glass: "Rocks",
        preparation: "Revuelto",
        status: "Nuevo",
        notes: "El equilibrio perfecto entre amargo, dulce y herbal. Gin Tanqueray, Campari original y Cinzano Rosso."
    },
    {
        id: 6,
        name: "Tequila Sunrise",
        category: "Cóctel Tropical",
        base: "Tequila",
        ingredients: "Tequila, jugo de naranja, granadina",
        alcohol: 11.0,
        size: 350,
        cost: 2000,
        price: 6000,
        garnish: "Rodaja de naranja, cereza",
        glass: "Highball",
        preparation: "Directo",
        status: "Disponible",
        notes: "Visual espectacular con degradé de colores. Jugo de naranja natural recién exprimido."
    },
    {
        id: 7,
        name: "Espresso Martini",
        category: "Cóctel Premium",
        base: "Vodka",
        ingredients: "Vodka, licor de café, espresso fresco, jarabe simple",
        alcohol: 18.0,
        size: 220,
        cost: 3000,
        price: 11000,
        garnish: "3 granos de café",
        glass: "Copa Martini",
        preparation: "Agitado",
        status: "Promoción",
        notes: "Espresso recién preparado con café de especialidad colombiano. La combinación perfecta de energía y elegancia."
    },
    {
        id: 8,
        name: "Whiskey Sour",
        category: "Cóctel Clásico",
        base: "Whiskey",
        ingredients: "Whiskey bourbon, jugo de limón, jarabe de goma, clara de huevo",
        alcohol: 15.0,
        size: 250,
        cost: 2600,
        price: 8500,
        garnish: "Espuma de clara, gotitas de angostura, cereza",
        glass: "Coupe",
        preparation: "Agitado",
        status: "Disponible",
        notes: "Técnica de doble agitado (dry shake + wet shake) para lograr espuma perfecta. Bourbon premium."
    },
    {
        id: 9,
        name: "Daiquirí de Fresa",
        category: "Cóctel Tropical",
        base: "Ron",
        ingredients: "Ron blanco, frutillas frescas, jugo de lima, jarabe simple",
        alcohol: 11.5,
        size: 300,
        cost: 2400,
        price: 7000,
        garnish: "Frutilla en el borde, hoja de menta",
        glass: "Copa Martini",
        preparation: "Licuado",
        status: "Disponible",
        notes: "Frutillas frescas de temporada. Versión frozen suave y refrescante, ideal para el verano."
    },
    {
        id: 10,
        name: "Gin & Tonic Premium",
        category: "Cóctel Premium",
        base: "Gin",
        ingredients: "Gin premium, tónica Fever-Tree, pepino, enebro, pimienta rosa",
        alcohol: 8.5,
        size: 400,
        cost: 3800,
        price: 12500,
        garnish: "Pepino, romero, pimienta rosa, enebro",
        glass: "Copa Balón",
        preparation: "Directo",
        status: "Disponible",
        notes: "Servido en copa balón con abundante hielo. Gin Hendrick's o Monkey 47 a elección. Tónica premium."
    },
    {
        id: 11,
        name: "Caipirinha",
        category: "Cóctel Clásico",
        base: "Cachaça",
        ingredients: "Cachaça, lima, azúcar, hielo picado",
        alcohol: 14.0,
        size: 300,
        cost: 2100,
        price: 6500,
        garnish: "Rodajas de lima",
        glass: "Rocks",
        preparation: "Muddled",
        status: "Disponible",
        notes: "Cóctel brasileño por excelencia. Cachaça importada de calidad. Lima machacada para extraer los aceites esenciales."
    },
    {
        id: 12,
        name: "Aperol Spritz",
        category: "Cóctel Clásico",
        base: "Aperol",
        ingredients: "Aperol, Prosecco, soda, hielo",
        alcohol: 8.0,
        size: 350,
        cost: 3000,
        price: 9000,
        garnish: "Rodaja de naranja grande",
        glass: "Copa de vino grande",
        preparation: "Directo",
        status: "Disponible",
        notes: "El clásico italiano para el aperitivo. Prosecco importado de la región del Veneto."
    },
    {
        id: 13,
        name: "Cosmopolitan",
        category: "Cóctel Clásico",
        base: "Vodka",
        ingredients: "Vodka citrus, Cointreau, jugo de arándano, jugo de lima",
        alcohol: 16.0,
        size: 220,
        cost: 2700,
        price: 8000,
        garnish: "Cáscara de naranja flameada",
        glass: "Copa Martini",
        preparation: "Agitado",
        status: "Disponible",
        notes: "Icónico cóctel de los 90s. Vodka premium con toque cítrico. Jugo de arándano natural."
    },
    {
        id: 14,
        name: "Mai Tai",
        category: "Cóctel Tropical",
        base: "Ron",
        ingredients: "Ron dorado, ron oscuro, Curaçao, orgeat, jugo de lima",
        alcohol: 17.0,
        size: 350,
        cost: 3100,
        price: 9500,
        garnish: "Ramita de menta, rodaja de lima, piña deshidratada",
        glass: "Tiki mug / Rocks doble",
        preparation: "Agitado",
        status: "Nuevo",
        notes: "Cóctel tiki legendario. Mezcla de dos rones de calidad con jarabe de orgeat artesanal."
    },
    {
        id: 15,
        name: "Shot Tequila Premium",
        category: "Shot",
        base: "Tequila",
        ingredients: "Tequila reposado 100% agave",
        alcohol: 38.0,
        size: 45,
        cost: 1500,
        price: 4500,
        garnish: "Limón, sal",
        glass: "Caballito / Shot glass",
        preparation: "Directo",
        status: "Disponible",
        notes: "Tequila reposado 100% agave. Servido con limón fresco y sal de mar."
    },
    {
        id: 16,
        name: "Shot Jägermeister",
        category: "Shot",
        base: "Jägermeister",
        ingredients: "Jägermeister helado",
        alcohol: 35.0,
        size: 45,
        cost: 1200,
        price: 3500,
        garnish: "Ninguna",
        glass: "Shot glass",
        preparation: "Directo",
        status: "Disponible",
        notes: "Servido directo del freezer a -18°C para máxima suavidad. Licor de hierbas alemán."
    },
    {
        id: 17,
        name: "Whisky Johnnie Walker Black",
        category: "Destilado Puro",
        base: "Whisky Escocés",
        ingredients: "Whisky blend 12 años",
        alcohol: 40.0,
        size: 60,
        cost: 3200,
        price: 9000,
        garnish: "Hielo opcional",
        glass: "Rocks / Glencairn",
        preparation: "Directo",
        status: "Disponible",
        notes: "Whisky escocés blended de 12 años. Servido puro, con hielo o con un splash de agua a elección."
    },
    {
        id: 18,
        name: "Vodka Grey Goose",
        category: "Destilado Puro",
        base: "Vodka",
        ingredients: "Vodka francés premium",
        alcohol: 40.0,
        size: 60,
        cost: 2800,
        price: 8000,
        garnish: "Hielo",
        glass: "Rocks",
        preparation: "Directo",
        status: "Disponible",
        notes: "Vodka francés ultra premium destilado de trigo de invierno de Picardy. Suavidad excepcional."
    },
    {
        id: 19,
        name: "Cerveza Artesanal IPA",
        category: "Cerveza",
        base: "Cerveza",
        ingredients: "Malta, lúpulo Citra/Mosaic, levadura, agua",
        alcohol: 6.5,
        size: 473,
        cost: 1800,
        price: 5000,
        garnish: "Ninguna",
        glass: "Pinta / Vaso IPA",
        preparation: "Directo",
        status: "Disponible",
        notes: "IPA de cervecería artesanal local. Notas cítricas y tropicales. Amargor balanceado 55 IBU."
    },
    {
        id: 20,
        name: "Cerveza Artesanal Stout",
        category: "Cerveza",
        base: "Cerveza",
        ingredients: "Malta tostada, lúpulo, avena, levadura, agua",
        alcohol: 7.2,
        size: 473,
        cost: 2000,
        price: 5500,
        garnish: "Ninguna",
        glass: "Pinta / Snifter",
        preparation: "Directo",
        status: "Nuevo",
        notes: "Stout cremosa con notas de chocolate y café. Cuerpo robusto. Cervecería local colaboración especial."
    },
    {
        id: 21,
        name: "Vino Tinto Malbec Reserva",
        category: "Vino",
        base: "Vino Tinto",
        ingredients: "Uva Malbec, roble francés 12 meses",
        alcohol: 14.5,
        size: 180,
        cost: 2500,
        price: 7500,
        garnish: "Ninguna",
        glass: "Copa Burdeos",
        preparation: "Directo",
        status: "Disponible",
        notes: "Malbec reserva de Mendoza, Argentina. 12 meses en barrica de roble francés. Copa servida."
    },
    {
        id: 22,
        name: "Vino Blanco Sauvignon Blanc",
        category: "Vino",
        base: "Vino Blanco",
        ingredients: "Uva Sauvignon Blanc, valle central",
        alcohol: 13.0,
        size: 180,
        cost: 2200,
        price: 6500,
        garnish: "Ninguna",
        glass: "Copa de vino blanco",
        preparation: "Directo",
        status: "Disponible",
        notes: "Sauvignon Blanc del Valle Central de Chile. Fresco, cítrico y mineral. Temperatura ideal: 8-10°C."
    },
    {
        id: 23,
        name: "Limonada de Jengibre",
        category: "Sin Alcohol",
        base: "Sin Alcohol",
        ingredients: "Jengibre fresco, limón, miel de abeja, soda, menta",
        alcohol: 0,
        size: 400,
        cost: 1200,
        price: 4000,
        garnish: "Rodaja de limón, jengibre confitado, menta",
        glass: "Highball",
        preparation: "Muddled",
        status: "Disponible",
        notes: "Bebida artesanal sin alcohol. Jengibre machacado fresco con miel orgánica y limones naturales."
    },
    {
        id: 24,
        name: "Virgin Mojito",
        category: "Sin Alcohol",
        base: "Sin Alcohol",
        ingredients: "Hierba buena, limón, azúcar, soda, hielo",
        alcohol: 0,
        size: 350,
        cost: 1000,
        price: 3500,
        garnish: "Ramita de menta, rodaja de limón",
        glass: "Highball",
        preparation: "Muddled",
        status: "Disponible",
        notes: "Versión sin alcohol del clásico mojito. Misma frescura, mismo sabor, cero alcohol."
    },
    {
        id: 25,
        name: "Sunset Boulevard",
        category: "Especial de la Casa",
        base: "Vodka + Licor de Maracuyá",
        ingredients: "Vodka premium, licor de maracuyá, jugo de naranja, granadina, champagne",
        alcohol: 14.0,
        size: 300,
        cost: 3500,
        price: 13000,
        garnish: "Espiral de naranja, flor comestible, escarcha dorada",
        glass: "Copa Flauta",
        preparation: "Agitado",
        status: "Disponible",
        notes: "Creación exclusiva del bartender principal. Presentación espectacular con degradé de colores y toque de champagne."
    },
    {
        id: 26,
        name: "Fuego Latino",
        category: "Especial de la Casa",
        base: "Tequila + Mezcal",
        ingredients: "Tequila blanco, mezcal ahumado, jalapeño, mango, lima, sal de gusano",
        alcohol: 16.0,
        size: 280,
        cost: 3800,
        price: 14000,
        garnish: "Chile deshidratado, borde de sal de gusano, mango fresco",
        glass: "Rocks doble",
        preparation: "Agitado",
        status: "Nuevo",
        notes: "Picante y ahumado. Fusión de tequila y mezcal con jalapeño infusionado y mango fresco. Experiencia sensorial completa."
    },
    {
        id: 27,
        name: "Jardín Nocturno",
        category: "Especial de la Casa",
        base: "Gin + Elderflower",
        ingredients: "Gin premium, St-Germain, pepino, albahaca, tónica, jugo de limón",
        alcohol: 10.0,
        size: 350,
        cost: 4000,
        price: 15000,
        garnish: "Flor de saúco, hoja de albahaca, lámina de pepino",
        glass: "Copa Balón",
        preparation: "Directo",
        status: "Promoción",
        notes: "Elegancia botánica en copa. Gin Hendrick's con licor de flor de saúco St-Germain. Decoración artística con flores comestibles."
    },
    {
        id: 28,
        name: "Dark & Stormy",
        category: "Cóctel Clásico",
        base: "Ron Oscuro",
        ingredients: "Ron oscuro, cerveza de jengibre, jugo de lima",
        alcohol: 12.0,
        size: 350,
        cost: 2300,
        price: 7000,
        garnish: "Rodaja de lima, jengibre cristalizado",
        glass: "Highball",
        preparation: "Directo",
        status: "Disponible",
        notes: "Ron oscuro premium de las Bermudas con ginger beer artesanal. Refrescante y especiado."
    },
    {
        id: 29,
        name: "Moscow Mule",
        category: "Cóctel Clásico",
        base: "Vodka",
        ingredients: "Vodka, ginger beer, jugo de lima fresco",
        alcohol: 11.0,
        size: 350,
        cost: 2200,
        price: 7500,
        garnish: "Rodaja de lima, ramita de menta",
        glass: "Taza de cobre",
        preparation: "Directo",
        status: "Disponible",
        notes: "Servido en la icónica taza de cobre helada. Ginger beer premium artesanal."
    },
    {
        id: 30,
        name: "Boulevardier",
        category: "Cóctel Premium",
        base: "Bourbon",
        ingredients: "Bourbon, Campari, Vermouth rojo",
        alcohol: 25.0,
        size: 180,
        cost: 3300,
        price: 11000,
        garnish: "Cáscara de naranja, cereza Luxardo",
        glass: "Coupe / Nick & Nora",
        preparation: "Revuelto",
        status: "Disponible",
        notes: "La versión americana del Negroni. Bourbon en lugar de gin. Más robusto y cálido. Perfecto para noches frías."
    },
    {
        id: 31,
        name: "Pisco Sour",
        category: "Cóctel Clásico",
        base: "Pisco",
        ingredients: "Pisco quebranta, jugo de limón, jarabe de goma, clara de huevo, amargo de Angostura",
        alcohol: 15.0,
        size: 220,
        cost: 2500,
        price: 8000,
        garnish: "Gotitas de Angostura sobre la espuma",
        glass: "Coupe",
        preparation: "Agitado",
        status: "Disponible",
        notes: "Pisco peruano quebranta de alta calidad. Doble agitado para espuma sedosa. El rey de los sours sudamericanos."
    },
    {
        id: 32,
        name: "Paloma",
        category: "Cóctel Clásico",
        base: "Tequila",
        ingredients: "Tequila blanco, jugo de toronja, soda de toronja, jugo de lima, sal",
        alcohol: 10.0,
        size: 350,
        cost: 2100,
        price: 6500,
        garnish: "Borde de sal, gajo de toronja",
        glass: "Highball",
        preparation: "Directo",
        status: "Disponible",
        notes: "El cóctel más popular de México, incluso más que la Margarita. Toronja rosada fresca y tequila 100% agave."
    },
    {
        id: 33,
        name: "Long Island Iced Tea",
        category: "Cóctel Clásico",
        base: "Multi-espirituoso",
        ingredients: "Vodka, gin, ron, tequila, Cointreau, jugo de limón, cola",
        alcohol: 22.0,
        size: 400,
        cost: 3000,
        price: 9500,
        garnish: "Rodaja de limón",
        glass: "Highball alto",
        preparation: "Directo",
        status: "Disponible",
        notes: "Cinco espirituosos en un solo vaso. Potente pero sorprendentemente suave. Servido en vaso alto con abundante hielo."
    },
    {
        id: 34,
        name: "Amaretto Sour",
        category: "Cóctel Clásico",
        base: "Amaretto",
        ingredients: "Amaretto Disaronno, bourbon, jugo de limón, jarabe simple, clara de huevo",
        alcohol: 13.0,
        size: 220,
        cost: 2400,
        price: 7500,
        garnish: "Cereza amarasca, cáscara de limón",
        glass: "Rocks",
        preparation: "Agitado",
        status: "Disponible",
        notes: "La versión moderna con un toque de bourbon para dar estructura. Espuma perfecta de clara de huevo."
    },
    {
        id: 35,
        name: "Sangría Premium",
        category: "Especial de la Casa",
        base: "Vino Tinto",
        ingredients: "Vino tinto Malbec, brandy, Cointreau, frutas frescas, jugo de naranja, canela",
        alcohol: 12.0,
        size: 450,
        cost: 2800,
        price: 8500,
        garnish: "Frutas de estación, canela en rama",
        glass: "Copa de vino grande / Jarra individual",
        preparation: "Mezclado",
        status: "Disponible",
        notes: "Preparada con Malbec reserva y frutas frescas de estación. Maceración mínima de 4 horas. Servida bien fría."
    }
];

let editingId = null;
let sortColumn = -1;
let sortDirection = 'asc';

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    updateStats();
    updateDate();
    setupFormListeners();

    // Animate stats on load
    setTimeout(() => {
        document.querySelectorAll('.stat-card').forEach((card, i) => {
            card.style.animation = `rowFadeIn 0.5s ease ${i * 0.1}s forwards`;
            card.style.opacity = '0';
        });
    }, 100);
});

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('es-ES', options);
}

// ============= RENDER TABLE =============
function renderTable() {
    const tbody = document.getElementById('tableBody');
    const filteredDrinks = getFilteredDrinks();

    tbody.innerHTML = filteredDrinks.map((drink, index) => `
        <tr style="animation-delay: ${index * 0.03}s">
            <td>${index + 1}</td>
            <td>
                <span class="drink-name" onclick="showDetail(${drink.id})">${drink.name}</span>
            </td>
            <td>
                <span class="category-badge ${getCategoryClass(drink.category)}">
                    ${getCategoryIcon(drink.category)} ${drink.category}
                </span>
            </td>
            <td>${drink.base}</td>
            <td>${drink.ingredients}</td>
            <td>${drink.alcohol}%</td>
            <td>${drink.size} ml</td>
            <td class="cost-cell">${formatPrice(drink.cost)}</td>
            <td class="price-cell">${formatPrice(drink.price)}</td>
            <td class="margin-cell ${getMarginClass(calcMargin(drink))}">${calcMargin(drink).toFixed(1)}%</td>
            <td class="profit-cell">${formatPrice(drink.price - drink.cost)}</td>
            <td>
                <span class="status-badge ${getStatusClass(drink.status)}">
                    ${getStatusIcon(drink.status)} ${drink.status}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action-sm btn-view" onclick="showDetail(${drink.id})" title="Ver detalle">👁️</button>
                    <button class="btn-action-sm btn-edit" onclick="editDrink(${drink.id})" title="Editar">✏️</button>
                    <button class="btn-action-sm btn-delete" onclick="deleteDrink(${drink.id})" title="Eliminar">🗑️</button>
                </div>
            </td>
        </tr>
    `).join('');

    document.getElementById('visibleCount').textContent = filteredDrinks.length;
    document.getElementById('totalCount').textContent = drinks.length;

    // Total profit
    const totalProfit = filteredDrinks.reduce((sum, d) => sum + (d.price - d.cost), 0);
    document.getElementById('totalProfit').textContent = formatPrice(totalProfit);
}

// ============= STATS =============
function updateStats() {
    document.getElementById('totalProducts').textContent = drinks.length;

    const avgPrice = drinks.reduce((sum, d) => sum + d.price, 0) / drinks.length;
    document.getElementById('avgPrice').textContent = formatPrice(Math.round(avgPrice));

    const maxPrice = Math.max(...drinks.map(d => d.price));
    document.getElementById('maxPrice').textContent = formatPrice(maxPrice);

    const categories = new Set(drinks.map(d => d.category));
    document.getElementById('totalCategories').textContent = categories.size;

    const avgMargin = drinks.reduce((sum, d) => sum + calcMargin(d), 0) / drinks.length;
    document.getElementById('marginAvg').textContent = avgMargin.toFixed(1) + '%';
}

// ============= FILTERING =============
function getFilteredDrinks() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;

    return drinks.filter(drink => {
        // Search filter
        const matchSearch = !search ||
            drink.name.toLowerCase().includes(search) ||
            drink.ingredients.toLowerCase().includes(search) ||
            drink.category.toLowerCase().includes(search) ||
            drink.base.toLowerCase().includes(search);

        // Category filter
        const matchCategory = !category || drink.category === category;

        // Price filter
        let matchPrice = true;
        if (priceRange) {
            if (priceRange === '15000+') {
                matchPrice = drink.price >= 15000;
            } else {
                const [min, max] = priceRange.split('-').map(Number);
                matchPrice = drink.price >= min && drink.price < max;
            }
        }

        return matchSearch && matchCategory && matchPrice;
    });
}

function filterTable() {
    renderTable();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceFilter').value = '';
    renderTable();
    showToast('🔄 Filtros limpiados', 'info');
}

// ============= SORTING =============
function sortTable(colIndex) {
    if (sortColumn === colIndex) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = colIndex;
        sortDirection = 'asc';
    }

    const keys = ['id', 'name', 'category', 'base', 'ingredients', 'alcohol', 'size', 'cost', 'price', null, null, 'status'];

    if (colIndex === 9) {
        // Margin
        drinks.sort((a, b) => {
            const mA = calcMargin(a), mB = calcMargin(b);
            return sortDirection === 'asc' ? mA - mB : mB - mA;
        });
    } else if (colIndex === 10) {
        // Profit
        drinks.sort((a, b) => {
            const pA = a.price - a.cost, pB = b.price - b.cost;
            return sortDirection === 'asc' ? pA - pB : pB - pA;
        });
    } else {
        const key = keys[colIndex];
        if (!key) return;

        drinks.sort((a, b) => {
            let vA = a[key], vB = b[key];
            if (typeof vA === 'string') {
                vA = vA.toLowerCase();
                vB = vB.toLowerCase();
                return sortDirection === 'asc' ? vA.localeCompare(vB) : vB.localeCompare(vA);
            }
            return sortDirection === 'asc' ? vA - vB : vB - vA;
        });
    }

    renderTable();
}

// ============= MODAL (Add/Edit) =============
function openModal(id = null) {
    editingId = id;
    const modal = document.getElementById('modalOverlay');
    const form = document.getElementById('drinkForm');
    form.reset();

    if (id) {
        const drink = drinks.find(d => d.id === id);
        if (!drink) return;
        document.getElementById('modalTitle').textContent = '✏️ Editar Trago';
        document.getElementById('drinkName').value = drink.name;
        document.getElementById('drinkCategory').value = drink.category;
        document.getElementById('drinkBase').value = drink.base;
        document.getElementById('drinkIngredients').value = drink.ingredients;
        document.getElementById('drinkAlcohol').value = drink.alcohol;
        document.getElementById('drinkSize').value = drink.size;
        document.getElementById('drinkCost').value = drink.cost;
        document.getElementById('drinkPrice').value = drink.price;
        document.getElementById('drinkGarnish').value = drink.garnish || '';
        document.getElementById('drinkGlass').value = drink.glass || '';
        document.getElementById('drinkPrep').value = drink.preparation || 'Mezclado';
        document.getElementById('drinkStatus').value = drink.status;
        document.getElementById('drinkNotes').value = drink.notes || '';
        updatePreview();
    } else {
        document.getElementById('modalTitle').textContent = '➕ Agregar Nuevo Trago';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close') && !event.target.classList.contains('btn-cancel')) return;
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    editingId = null;
}

function saveDrink(event) {
    event.preventDefault();

    const drinkData = {
        name: document.getElementById('drinkName').value.trim(),
        category: document.getElementById('drinkCategory').value,
        base: document.getElementById('drinkBase').value.trim(),
        ingredients: document.getElementById('drinkIngredients').value.trim(),
        alcohol: parseFloat(document.getElementById('drinkAlcohol').value) || 0,
        size: parseInt(document.getElementById('drinkSize').value),
        cost: parseInt(document.getElementById('drinkCost').value),
        price: parseInt(document.getElementById('drinkPrice').value),
        garnish: document.getElementById('drinkGarnish').value.trim(),
        glass: document.getElementById('drinkGlass').value.trim(),
        preparation: document.getElementById('drinkPrep').value,
        status: document.getElementById('drinkStatus').value,
        notes: document.getElementById('drinkNotes').value.trim()
    };

    if (editingId) {
        const index = drinks.findIndex(d => d.id === editingId);
        if (index !== -1) {
            drinks[index] = { ...drinks[index], ...drinkData };
            showToast(`✏️ "${drinkData.name}" actualizado correctamente`, 'success');
        }
    } else {
        drinkData.id = Math.max(0, ...drinks.map(d => d.id)) + 1;
        drinks.push(drinkData);
        showToast(`✅ "${drinkData.name}" agregado correctamente`, 'success');
    }

    closeModal();
    renderTable();
    updateStats();
}

function editDrink(id) {
    openModal(id);
}

function deleteDrink(id) {
    const drink = drinks.find(d => d.id === id);
    if (!drink) return;

    if (confirm(`¿Estás seguro de eliminar "${drink.name}"?\n\nEsta acción no se puede deshacer.`)) {
        drinks = drinks.filter(d => d.id !== id);
        renderTable();
        updateStats();
        closeDetail();
        showToast(`🗑️ "${drink.name}" eliminado`, 'error');
    }
}

// ============= DETAIL PANEL =============
function showDetail(id) {
    const drink = drinks.find(d => d.id === id);
    if (!drink) return;

    const panel = document.getElementById('detailPanel');
    const content = document.getElementById('detailContent');
    document.getElementById('detailTitle').textContent = drink.name;

    const margin = calcMargin(drink);
    const profit = drink.price - drink.cost;

    let marginColor = '#34d399';
    if (margin < 50) marginColor = '#fb7185';
    else if (margin < 65) marginColor = '#fbbf24';

    const ingredientTags = drink.ingredients.split(',').map(i =>
        `<span class="ingredient-tag">${i.trim()}</span>`
    ).join('');

    content.innerHTML = `
        <div class="detail-big-price">
            <div class="price-label">Precio de Venta</div>
            <div class="price-value">${formatPrice(drink.price)}</div>
        </div>

        <div class="detail-section">
            <h4>📋 Información General</h4>
            <div class="detail-row">
                <span class="label">Categoría</span>
                <span class="value">
                    <span class="category-badge ${getCategoryClass(drink.category)}">
                        ${getCategoryIcon(drink.category)} ${drink.category}
                    </span>
                </span>
            </div>
            <div class="detail-row">
                <span class="label">Base Alcohólica</span>
                <span class="value">${drink.base}</span>
            </div>
            <div class="detail-row">
                <span class="label">Vol. Alcohol</span>
                <span class="value">${drink.alcohol}%</span>
            </div>
            <div class="detail-row">
                <span class="label">Tamaño</span>
                <span class="value">${drink.size} ml</span>
            </div>
            <div class="detail-row">
                <span class="label">Estado</span>
                <span class="value">
                    <span class="status-badge ${getStatusClass(drink.status)}">
                        ${getStatusIcon(drink.status)} ${drink.status}
                    </span>
                </span>
            </div>
        </div>

        <div class="detail-section">
            <h4>🧪 Ingredientes</h4>
            <div class="detail-ingredients">${ingredientTags}</div>
        </div>

        <div class="detail-section">
            <h4>🍹 Presentación</h4>
            <div class="detail-row">
                <span class="label">Tipo de Vaso</span>
                <span class="value">${drink.glass || 'No especificado'}</span>
            </div>
            <div class="detail-row">
                <span class="label">Preparación</span>
                <span class="value">${drink.preparation || 'No especificado'}</span>
            </div>
            <div class="detail-row">
                <span class="label">Decoración</span>
                <span class="value">${drink.garnish || 'Sin decoración'}</span>
            </div>
        </div>

        <div class="detail-section">
            <h4>💰 Análisis Financiero</h4>
            <div class="detail-row">
                <span class="label">Costo Unitario</span>
                <span class="value">${formatPrice(drink.cost)}</span>
            </div>
            <div class="detail-row">
                <span class="label">Precio de Venta</span>
                <span class="value" style="color: var(--accent-emerald); font-weight: 700;">${formatPrice(drink.price)}</span>
            </div>
            <div class="detail-row">
                <span class="label">Ganancia</span>
                <span class="value" style="color: var(--accent-cyan); font-weight: 700;">${formatPrice(profit)}</span>
            </div>
            <div class="detail-row">
                <span class="label">Margen</span>
                <span class="value" style="color: ${marginColor}; font-weight: 700;">${margin.toFixed(1)}%</span>
            </div>
            <div class="margin-bar">
                <div class="margin-bar-fill" style="width: ${Math.min(margin, 100)}%; background: ${marginColor};"></div>
            </div>
        </div>

        ${drink.notes ? `
        <div class="detail-section">
            <h4>📝 Notas</h4>
            <div class="detail-notes">${drink.notes}</div>
        </div>
        ` : ''}
    `;

    panel.classList.add('active');
}

function closeDetail() {
    document.getElementById('detailPanel').classList.remove('active');
}

// ============= EXPORT =============
function exportToCSV() {
    const headers = [
        'ID', 'Nombre', 'Categoría', 'Base Alcohólica', 'Ingredientes',
        'Vol. Alcohol (%)', 'Tamaño (ml)', 'Costo Unitario', 'Precio Venta',
        'Margen %', 'Ganancia', 'Decoración', 'Tipo de Vaso',
        'Método Preparación', 'Estado', 'Notas'
    ];

    const rows = drinks.map(d => [
        d.id,
        `"${d.name}"`,
        `"${d.category}"`,
        `"${d.base}"`,
        `"${d.ingredients}"`,
        d.alcohol,
        d.size,
        d.cost,
        d.price,
        calcMargin(d).toFixed(1),
        d.price - d.cost,
        `"${d.garnish || ''}"`,
        `"${d.glass || ''}"`,
        `"${d.preparation || ''}"`,
        `"${d.status}"`,
        `"${(d.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `carta_tragos_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('📊 Archivo CSV exportado exitosamente. Ábrelo con Excel.', 'success');
}

// ============= FORM LISTENERS =============
function setupFormListeners() {
    const costInput = document.getElementById('drinkCost');
    const priceInput = document.getElementById('drinkPrice');

    costInput.addEventListener('input', updatePreview);
    priceInput.addEventListener('input', updatePreview);
}

function updatePreview() {
    const cost = parseInt(document.getElementById('drinkCost').value) || 0;
    const price = parseInt(document.getElementById('drinkPrice').value) || 0;

    if (price > 0 && cost > 0) {
        const margin = ((price - cost) / price) * 100;
        const profit = price - cost;
        document.getElementById('previewMargin').textContent = margin.toFixed(1) + '%';
        document.getElementById('previewProfit').textContent = formatPrice(profit);
    } else {
        document.getElementById('previewMargin').textContent = '0%';
        document.getElementById('previewProfit').textContent = '$0';
    }
}

// ============= UTILITY FUNCTIONS =============
function formatPrice(value) {
    return '$' + value.toLocaleString('es-CL');
}

function calcMargin(drink) {
    if (drink.price === 0) return 0;
    return ((drink.price - drink.cost) / drink.price) * 100;
}

function getCategoryClass(category) {
    const map = {
        'Cóctel Clásico': 'cat-clasico',
        'Cóctel Premium': 'cat-premium',
        'Cóctel Tropical': 'cat-tropical',
        'Shot': 'cat-shot',
        'Destilado Puro': 'cat-destilado',
        'Cerveza': 'cat-cerveza',
        'Vino': 'cat-vino',
        'Sin Alcohol': 'cat-sin-alcohol',
        'Especial de la Casa': 'cat-especial'
    };
    return map[category] || '';
}

function getCategoryIcon(category) {
    const map = {
        'Cóctel Clásico': '🍸',
        'Cóctel Premium': '✨',
        'Cóctel Tropical': '🌴',
        'Shot': '🥃',
        'Destilado Puro': '🥃',
        'Cerveza': '🍺',
        'Vino': '🍷',
        'Sin Alcohol': '🧃',
        'Especial de la Casa': '🌟'
    };
    return map[category] || '🍹';
}

function getStatusClass(status) {
    const map = {
        'Disponible': 'status-disponible',
        'Agotado': 'status-agotado',
        'Nuevo': 'status-nuevo',
        'Promoción': 'status-promocion'
    };
    return map[status] || '';
}

function getStatusIcon(status) {
    const map = {
        'Disponible': '✅',
        'Agotado': '❌',
        'Nuevo': '🆕',
        'Promoción': '🔥'
    };
    return map[status] || '';
}

function getMarginClass(margin) {
    if (margin >= 65) return 'margin-high';
    if (margin >= 50) return 'margin-mid';
    return 'margin-low';
}

// ============= TOAST NOTIFICATIONS =============
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ============= KEYBOARD SHORTCUTS =============
document.addEventListener('keydown', (e) => {
    // Escape to close modals/panels
    if (e.key === 'Escape') {
        closeModal();
        closeDetail();
    }
    // Ctrl+N to add new drink
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        openModal();
    }
    // Ctrl+E to export
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        exportToCSV();
    }
    // Ctrl+F to focus search
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
