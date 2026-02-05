/**
 * Database Seeder for Hospedaje Venezuela
 * This script adds a collection of hotels to the Firestore database.
 * Run this from the browser console while index2.html is open.
 */

window.bulkAddHotels = async (hotels) => {
    if (!hotels || !Array.isArray(hotels)) {
        console.error("Please provide an array of hotel objects.");
        return;
    }

    let successCount = 0;
    let errorCount = 0;

    for (const hotel of hotels) {
        try {
            await window.savePointToCloud(hotel);
            successCount++;
            console.log(`✅ Added: ${hotel.name}`);
        } catch (e) {
            errorCount++;
            console.error(`❌ Error adding ${hotel.name}:`, e);
        }
    }

    console.log(`--- Seeding Complete ---`);
    console.log(`Added: ${successCount}`);
    console.log(`Errors: ${errorCount}`);
    window.showToast(`✅ Seeding completado: ${successCount} agregados`);
};

// Example usage:
// window.bulkAddHotels([
//   { name: "Hotel Ejemplo", category: "Hotel 5★", state: "Miranda", city: "Caracas (Chacao)", parish: "Chacao", zone: "El Rosal", lat: 10.4892, lng: -66.8572 }
// ]);
