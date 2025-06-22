export interface Product {
  id: string;
  name: string;
  brand: string;
  features: string[];
  specifications: string[];
  categoryId: string;
}

export const productsByCategory: Record<string, Product[]> = {
  // Televisions
  tvs: [
    {
      id: 'tv-1',
      name: 'Samsung 55" 4K Smart LED TV',
      brand: 'Samsung',
      features: ['4K Ultra HD Resolution', 'Smart TV with Tizen OS', 'HDR10+ Support', 'Voice Remote Control'],
      specifications: ['55 inch Display', '3840 x 2160 Resolution', '3 HDMI Ports', '2 USB Ports'],
      categoryId: 'tvs'
    },
    {
      id: 'tv-2',
      name: 'LG 43" Full HD Smart TV',
      brand: 'LG',
      features: ['Full HD Display', 'WebOS Smart Platform', 'AI ThinQ', 'Magic Remote'],
      specifications: ['43 inch Display', '1920 x 1080 Resolution', '2 HDMI Ports', '1 USB Port'],
      categoryId: 'tvs'
    },
    {
      id: 'tv-3',
      name: 'Sony 65" OLED 4K TV',
      brand: 'Sony',
      features: ['OLED Display', 'Google TV', 'Dolby Vision', 'Acoustic Surface Audio'],
      specifications: ['65 inch Display', '4K HDR Resolution', '4 HDMI Ports', '3 USB Ports'],
      categoryId: 'tvs'
    },
    {
      id: 'tv-4',
      name: 'Samsung 32" HD Ready TV',
      brand: 'Samsung',
      features: ['HD Ready Display', 'Wide Color Enhancer', 'ConnectShare Movie', 'Eco Sensor'],
      specifications: ['32 inch Display', '1366 x 768 Resolution', '2 HDMI Ports', '1 USB Port'],
      categoryId: 'tvs'
    }
  ],

  // Refrigerators
  fridges: [
    {
      id: 'fridge-1',
      name: 'Double Door Refrigerator',
      brand: 'LG',
      features: ['Smart Inverter Compressor', 'Multi Air Flow', 'Moist Balance Crisper', 'Door Cooling+'],
      specifications: ['260 Liters Capacity', 'Double Door', '3 Star Rating', 'Frost Free'],
      categoryId: 'fridges'
    },
    {
      id: 'fridge-2',
      name: ' Side by Side Refrigerator',
      brand: 'Samsung',
      features: ['Digital Inverter Technology', 'All Around Cooling', 'Power Cool & Power Freeze', 'LED Lighting'],
      specifications: ['530 Liters Capacity', 'Side by Side', '3 Star Rating', 'No Frost'],
      categoryId: 'fridges'
    },
    {
      id: 'fridge-3',
      name: 'Single Door Refrigerator',
      brand: 'Whirlpool',
      features: ['Intellisense Inverter Technology', 'Zeolite Technology', 'Honey Comb Moisture Lock', 'Stabilizer Free'],
      specifications: ['190 Liters Capacity', 'Single Door', '3 Star Rating', 'Direct Cool'],
      categoryId: 'fridges'
    },
    {
      id: 'fridge-4',
      name: 'Triple Door Refrigerator',
      brand: 'Godrej',
      features: ['Inverter Technology', 'Fresh Zone', 'Anti-Bacterial Gasket', 'Turbo Cooling'],
      specifications: ['630 Liters Capacity', 'Triple Door', '3 Star Rating', 'Frost Free'],
      categoryId: 'fridges'
    }
  ],

  // Air Conditioners
  acs: [
    {
      id: 'ac-1',
      name: 'LG 1.5 Ton Inverter Split AC',
      brand: 'LG',
      features: ['Dual Inverter Compressor', 'Copper Condenser', '4-Way Swing', 'Wi-Fi Control'],
      specifications: ['1.5 Ton Capacity', '5 Star Rating', 'Split Type', 'R32 Refrigerant'],
      categoryId: 'acs'
    },
    {
      id: 'ac-2',
      name: 'Samsung 1 Ton Window AC',
      brand: 'Samsung',
      features: ['Digital Inverter Technology', 'Anti-Bacterial Filter', 'Auto Restart', 'Sleep Mode'],
      specifications: ['1 Ton Capacity', '3 Star Rating', 'Window Type', 'R32 Refrigerant'],
      categoryId: 'acs'
    },
    {
      id: 'ac-3',
      name: 'Voltas 2 Ton Split AC',
      brand: 'Voltas',
      features: ['Copper Condenser Coil', 'Turbo Mode', 'Self Diagnosis', 'Stabilizer Free Operation'],
      specifications: ['2 Ton Capacity', '3 Star Rating', 'Split Type', 'R410A Refrigerant'],
      categoryId: 'acs'
    },
    {
      id: 'ac-4',
      name: 'LG 1.5 Ton Dual Inverter AC',
      brand: 'LG',
      features: ['Dual Inverter Compressor', 'Ocean Black Protection', 'Smart Diagnosis', 'Low Gas Detection'],
      specifications: ['1.5 Ton Capacity', '5 Star Rating', 'Split Type', 'R32 Refrigerant'],
      categoryId: 'acs'
    }
  ],

  // Mobile Phones
  mobiles: [
    {
      id: 'mobile-1',
      name: 'Samsung Galaxy A54 5G',
      brand: 'Samsung',
      features: ['50MP Triple Camera', '6.4" Super AMOLED Display', '5000mAh Battery', '25W Fast Charging'],
      specifications: ['8GB RAM + 128GB Storage', 'Exynos 1380 Processor', 'Android 13', '5G Ready'],
      categoryId: 'mobiles'
    },
    {
      id: 'mobile-2',
      name: 'iPhone 14',
      brand: 'Apple',
      features: ['12MP Dual Camera System', '6.1" Super Retina XDR Display', 'A15 Bionic Chip', 'Face ID'],
      specifications: ['128GB Storage', 'iOS 16', 'Lightning Connector', 'Ceramic Shield'],
      categoryId: 'mobiles'
    },
    {
      id: 'mobile-3',
      name: 'OnePlus Nord CE 3 Lite',
      brand: 'OnePlus',
      features: ['108MP Triple Camera', '6.72" FHD+ Display', '5000mAh Battery', '67W SuperVOOC Charging'],
      specifications: ['8GB RAM + 128GB Storage', 'Snapdragon 695 5G', 'OxygenOS 13', '5G Ready'],
      categoryId: 'mobiles'
    },
    {
      id: 'mobile-4',
      name: 'Xiaomi Redmi Note 12 Pro',
      brand: 'Xiaomi',
      features: ['50MP Triple Camera', '6.67" AMOLED Display', '5000mAh Battery', '67W Turbo Charging'],
      specifications: ['6GB RAM + 128GB Storage', 'MediaTek Dimensity 1080', 'MIUI 14', '5G Ready'],
      categoryId: 'mobiles'
    }
  ],

  // Fans
  fans: [
    {
      id: 'fan-1',
      name: 'Bajaj Maxima 1200mm Ceiling Fan',
      brand: 'Bajaj',
      features: ['High Speed Motor', 'Rust Proof Coating', 'Aerodynamically Balanced', '2 Year Warranty'],
      specifications: ['1200mm Sweep', '390 RPM', '75 Watts', 'Double Ball Bearing'],
      categoryId: 'fans'
    },
    {
      id: 'fan-2',
      name: 'Orient Electric Aeroquiet 1200mm',
      brand: 'Orient',
      features: ['Silent Operation', 'High Air Delivery', 'Dust Resistant Coating', 'Reversible Motor'],
      specifications: ['1200mm Sweep', '350 RPM', '70 Watts', 'Double Ball Bearing'],
      categoryId: 'fans'
    },
    {
      id: 'fan-3',
      name: 'Crompton Hill Briz 1200mm',
      brand: 'Crompton',
      features: ['High Speed Performance', 'Weather Resistant', 'Decorative Design', '3 Year Warranty'],
      specifications: ['1200mm Sweep', '380 RPM', '75 Watts', 'Double Ball Bearing'],
      categoryId: 'fans'
    },
    {
      id: 'fan-4',
      name: 'Havells Stealth Air 1200mm',
      brand: 'Havells',
      features: ['BLDC Motor', 'Remote Control', 'LED Indicator', 'Energy Efficient'],
      specifications: ['1200mm Sweep', '1000 RPM', '28 Watts', 'BLDC Technology'],
      categoryId: 'fans'
    }
  ],

  // Lighting
  lights: [
    {
      id: 'light-1',
      name: 'Philips 9W LED Bulb',
      brand: 'Philips',
      features: ['Energy Saving', 'Cool Daylight', 'Long Lasting', 'Instant On'],
      specifications: ['9 Watts Power', '6500K Color Temperature', 'B22 Base', '15000 Hours Life'],
      categoryId: 'lights'
    },
    {
      id: 'light-2',
      name: 'Havells 20W LED Panel Light',
      brand: 'Havells',
      features: ['Slim Design', 'Uniform Light Distribution', 'Flicker Free', 'Easy Installation'],
      specifications: ['20 Watts Power', '4000K Neutral White', '300x300mm Size', '25000 Hours Life'],
      categoryId: 'lights'
    },
    {
      id: 'light-3',
      name: 'Syska 12W LED Tube Light',
      brand: 'Syska',
      features: ['Mercury Free', 'High Lumen Output', 'Shock Proof', 'Wide Beam Angle'],
      specifications: ['12 Watts Power', '6500K Cool White', '4 Feet Length', '20000 Hours Life'],
      categoryId: 'lights'
    },
    {
      id: 'light-4',
      name: 'Crompton 50W LED Flood Light',
      brand: 'Crompton',
      features: ['Weather Resistant', 'High Brightness', 'Wide Coverage', 'Heat Sink Design'],
      specifications: ['50 Watts Power', '6500K Daylight', 'IP65 Rating', '30000 Hours Life'],
      categoryId: 'lights'
    }
  ],

  // Induction Cooktops
  inductions: [
    {
      id: 'induction-1',
      name: 'Prestige PIC 6.0 V3 Induction Cooktop',
      brand: 'Prestige',
      features: ['Push Button Control', 'Automatic Voltage Regulator', 'Over Heating Protection', 'Timer Function'],
      specifications: ['2000 Watts Power', '7 Power Levels', 'Digital Display', 'Indian Menu Options'],
      categoryId: 'inductions'
    },
    {
      id: 'induction-2',
      name: 'Bajaj Majesty ICX 7 Plus',
      brand: 'Bajaj',
      features: ['Touch Control Panel', 'Keep Warm Function', 'Child Safety Lock', 'Auto Pan Detection'],
      specifications: ['1900 Watts Power', '8 Power Levels', 'LED Display', 'Preset Menu'],
      categoryId: 'inductions'
    },
    {
      id: 'induction-3',
      name: 'Pigeon Favourite IC 1800W',
      brand: 'Pigeon',
      features: ['Feather Touch Buttons', 'Automatic Shut Off', 'Over Voltage Protection', 'Easy to Clean'],
      specifications: ['1800 Watts Power', '6 Power Levels', 'Digital Timer', 'Compact Design'],
      categoryId: 'inductions'
    },
    {
      id: 'induction-4',
      name: 'Havells Insta Cook PT 1600W',
      brand: 'Havells',
      features: ['Push Button Control', 'Preset Cooking Menus', 'Auto Cut Off', 'Overheat Protection'],
      specifications: ['1600 Watts Power', '7 Power Settings', 'Digital Display', 'Portable Design'],
      categoryId: 'inductions'
    }
  ],

  // Almirahs & Wardrobes
  almirahs: [
    {
      id: 'almirah-1',
      name: 'Godrej Interio Slimline 3 Door Wardrobe',
      brand: 'Godrej Interio',
      features: ['3 Door Design', 'Mirror on Center Door', 'Hanging Rod', 'Multiple Shelves'],
      specifications: ['Engineered Wood', '120cm Width', '180cm Height', 'Wenge Finish'],
      categoryId: 'almirahs'
    },
    {
      id: 'almirah-2',
      name: 'Nilkamal Freedom 2 Door Wardrobe',
      brand: 'Nilkamal',
      features: ['2 Door Design', 'Spacious Interior', 'Easy Assembly', 'Durable Build'],
      specifications: ['Engineered Wood', '81cm Width', '180cm Height', 'Walnut Finish'],
      categoryId: 'almirahs'
    },
    {
      id: 'almirah-3',
      name: 'HomeTown Engineered Wood Wardrobe',
      brand: 'HomeTown',
      features: ['4 Door Design', 'Drawer Storage', 'Hanging Space', 'Modern Design'],
      specifications: ['Engineered Wood', '160cm Width', '200cm Height', 'Oak Finish'],
      categoryId: 'almirahs'
    },
    {
      id: 'almirah-4',
      name: 'Perfect Homes Studio Pascal Wardrobe',
      brand: 'Perfect Homes',
      features: ['Sliding Doors', 'Mirror Panel', 'Soft Close Hinges', 'Anti-Sag Technology'],
      specifications: ['Engineered Wood', '150cm Width', '210cm Height', 'Mahogany Finish'],
      categoryId: 'almirahs'
    }
  ],

  // Beds
  beds: [
    {
      id: 'bed-1',
      name: 'Wakefit Orthopaedic Memory Foam Mattress',
      brand: 'Wakefit',
      features: ['Memory Foam', 'Orthopaedic Support', 'Breathable Fabric', '10 Year Warranty'],
      specifications: ['Queen Size', '6 Inch Thickness', 'Medium Firm', 'Removable Cover'],
      categoryId: 'beds'
    },
    {
      id: 'bed-2',
      name: 'Nilkamal Wooden Bed Frame',
      brand: 'Nilkamal',
      features: ['Solid Wood Construction', 'Storage Drawers', 'Headboard Design', 'Easy Assembly'],
      specifications: ['King Size', 'Sheesham Wood', 'Natural Finish', 'Box Storage'],
      categoryId: 'beds'
    },
    {
      id: 'bed-3',
      name: 'Urban Ladder Valencia Bed',
      brand: 'Urban Ladder',
      features: ['Upholstered Headboard', 'Fabric Finish', 'Modern Design', 'Sturdy Frame'],
      specifications: ['Queen Size', 'Engineered Wood', 'Grey Upholstery', 'Platform Bed'],
      categoryId: 'beds'
    },
    {
      id: 'bed-4',
      name: 'Perfect Homes Studio Wooden Bed',
      brand: 'Perfect Homes',
      features: ['Minimalist Design', 'Solid Wood', 'Natural Grain', 'Eco-Friendly'],
      specifications: ['Double Size', 'Mango Wood', 'Honey Finish', 'Platform Style'],
      categoryId: 'beds'
    }
  ]
};
