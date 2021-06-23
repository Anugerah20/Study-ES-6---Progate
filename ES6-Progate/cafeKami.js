const cafe = {
    name: "Cafe Kami",
    businessHours: { 
      opening: "13:00",
      closing: "21:30"
    },
    // Tambahkan property menu dan berikan array yang sudah disediakan
    menu: ["Coffe mocca", "Coffe Aceh", "Coffe Susu", "Teh Hijau", "Teh Melati", "Spageti brulle", "Roti Panggang", "Sate Taican"]
  };
  
  console.log(`Nama: ${cafe.name}`);
  console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
  console.log(`====================================`);
  console.log("Menu Rekomendasi");
  
  // Gunakan loop for untuk mem-print nilai array menu 
  for(let i = 0; i < cafe.menu.length; i++) {
    console.log(cafe.menu[i]);