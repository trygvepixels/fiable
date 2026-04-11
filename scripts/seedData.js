import { connectDB } from '@/lib/mongodb';
import Location from '@/models/Location';
import mongoose from 'mongoose';
 
const fiableSeedData = [
  // 1. HEAD OFFICE (Primary Location)
  {
    name: "Fiable Building Solutions - Head Office",
    type: "head-office",
    address: {
      street: "728/21, Gudamba BKT, Kursi Road",
      area: "Gudamba",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226021",
      country: "India"
    },
    contact: {
      phone: ["+91-8069648411", "+91-9044072226"],
      email: ["sales@fiablebuildingsolutions.com", "admin@fiableprojects.com"],
      whatsapp: "+91-8069648411"
    },
    coordinates: {
      latitude: 26.8467,
      longitude: 81.0152
    },
    services: [
      "waterproofing",
      "structural-retrofitting",
      "industrial-flooring",
      "grouting",
      "civil-construction",
      "consulting",
      "project-management"
    ],
    operatingHours: {
      monday: { open: "09:00", close: "18:00", closed: false },
      tuesday: { open: "09:00", close: "18:00", closed: false },
      wednesday: { open: "09:00", close: "18:00", closed: false },
      thursday: { open: "09:00", close: "18:00", closed: false },
      friday: { open: "09:00", close: "18:00", closed: false },
      saturday: { open: "09:00", close: "17:00", closed: false },
      sunday: { open: "10:00", close: "16:00", closed: true }
    },
    facilities: [
      "office-space",
      "meeting-room",
      "reception",
      "parking",
      "warehouse",
      "laboratory"
    ],
    manager: {
      name: "Harshit Rao",
      phone: "+91-8069648411",
      email: "harshit@fiablebuildingsolutions.com"
    },
    status: "active",
    established: new Date("2019-07-11"),
    area: 2500,
    capacity: 25,
    description: "Fiable Building Solutions headquarters. Specializing in structural retrofitting and waterproofing works since 2019. 'Trust and Honesty is our mantra'.",
    displayOrder: 1,
    showOnWebsite: true,
    featured: true
  },



  // 3. SHALIMAR PROJECT OFFICE
  {
    name: "Shalimar Industrial Project Office",
    type: "project-office",
    address: {
      street: "Shalimar Industrial Complex",
      area: "Industrial Area",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226012",
      country: "India"
    },
    contact: {
      phone: ["+91-8069648411"],
      email: ["shalimar@fiablebuildingsolutions.com"],
      whatsapp: "+91-8069648411"
    },
    coordinates: {
      latitude: 26.8205,
      longitude: 80.9419
    },
    services: [
      "waterproofing",
      "structural-retrofitting",
      "industrial-flooring"
    ],
    operatingHours: {
      monday: { open: "08:00", close: "17:00", closed: false },
      tuesday: { open: "08:00", close: "17:00", closed: false },
      wednesday: { open: "08:00", close: "17:00", closed: false },
      thursday: { open: "08:00", close: "17:00", closed: false },
      friday: { open: "08:00", close: "17:00", closed: false },
      saturday: { open: "08:00", close: "15:00", closed: false },
      sunday: { open: "09:00", close: "14:00", closed: true }
    },
    facilities: [
      "office-space",
      "warehouse",
      "parking",
      "security"
    ],
    manager: {
      name: "Site Manager - Shalimar",
      phone: "+91-9044072226",
      email: "shalimar@fiablebuildingsolutions.com"
    },
    status: "active",
    established: new Date("2020-03-15"),
    area: 800,
    capacity: 8,
    description: "On-site project office for Shalimar Industrial waterproofing and structural retrofitting works. One of our featured clients.",
    displayOrder: 3,
    showOnWebsite: true,
    featured: false
  },

  // 4. BISWAN SUGAR MILL SERVICE CENTER
  {
    name: "Biswan Sugar Mill Service Center",
    type: "service-center",
    address: {
      street: "Biswan Sugar Mill Complex",
      area: "Industrial Zone",
      city: "Sitapur",
      state: "Uttar Pradesh",
      pincode: "261201",
      country: "India"
    },
    contact: {
      phone: ["+91-8069648411"],
      email: ["biswan@fiablebuildingsolutions.com"],
      whatsapp: "+91-8069648411"
    },
    coordinates: {
      latitude: 27.4924,
      longitude: 80.6851
    },
    services: [
      "structural-retrofitting",
      "grouting",
      "civil-construction"
    ],
    operatingHours: {
      monday: { open: "07:00", close: "19:00", closed: false },
      tuesday: { open: "07:00", close: "19:00", closed: false },
      wednesday: { open: "07:00", close: "19:00", closed: false },
      thursday: { open: "07:00", close: "19:00", closed: false },
      friday: { open: "07:00", close: "19:00", closed: false },
      saturday: { open: "07:00", close: "17:00", closed: false },
      sunday: { open: "08:00", close: "16:00", closed: true }
    },
    facilities: [
      "office-space",
      "warehouse",
      "parking",
      "security",
      "laboratory"
    ],
    manager: {
      name: "Industrial Services Manager",
      phone: "+91-9044072226",
      email: "biswan@fiablebuildingsolutions.com"
    },
    status: "active",
    established: new Date("2020-08-01"),
    area: 600,
    capacity: 6,
    description: "Dedicated service center for Biswan Sugar Mill industrial complex. Providing structural repair and grouting services.",
    displayOrder: 4,
    showOnWebsite: true,
    featured: false
  },

  // 5. TANISHA INFRA BRANCH OFFICE
  {
    name: "Tanisha Infra Projects Branch",
    type: "branch",
    address: {
      street: "Tanisha Construction Site Office",
      area: "Gomti Nagar Extension",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226010",
      country: "India"
    },
    contact: {
      phone: ["+91-8069648411"],
      email: ["tanisha@fiablebuildingsolutions.com"],
      whatsapp: "+91-8069648411"
    },
    coordinates: {
      latitude: 26.8467,
      longitude: 81.0582
    },
    services: [
      "waterproofing",
      "structural-retrofitting",
      "civil-construction"
    ],
    operatingHours: {
      monday: { open: "09:00", close: "18:00", closed: false },
      tuesday: { open: "09:00", close: "18:00", closed: false },
      wednesday: { open: "09:00", close: "18:00", closed: false },
      thursday: { open: "09:00", close: "18:00", closed: false },
      friday: { open: "09:00", close: "18:00", closed: false },
      saturday: { open: "09:00", close: "16:00", closed: false },
      sunday: { open: "10:00", close: "14:00", closed: true }
    },
    facilities: [
      "office-space",
      "meeting-room",
      "parking"
    ],
    manager: {
      name: "Branch Manager - Tanisha",
      phone: "+91-9044072226",
      email: "tanisha@fiablebuildingsolutions.com"
    },
    status: "active",
    established: new Date("2021-01-15"),
    area: 400,
    capacity: 5,
    description: "Branch office serving Tanisha Infra Projects - one of our featured clients for construction and waterproofing solutions.",
    displayOrder: 5,
    showOnWebsite: true,
    featured: false
  },

  // 6. DELHI NCR EXPANSION OFFICE (Future)
  {
    name: "Fiable Delhi NCR Office",
    type: "branch",
    address: {
      street: "Plot 45, Sector 18",
      area: "Industrial Area",
      city: "Gurgaon",
      state: "Haryana",
      pincode: "122015",
      country: "India"
    },
    contact: {
      phone: ["+91-8069648411"],
      email: ["delhi@fiablebuildingsolutions.com"],
      whatsapp: "+91-8069648411"
    },
    coordinates: {
      latitude: 28.4595,
      longitude: 77.0266
    },
    services: [
      "waterproofing",
      "structural-retrofitting",
      "consulting"
    ],
    operatingHours: {
      monday: { open: "09:00", close: "18:00", closed: false },
      tuesday: { open: "09:00", close: "18:00", closed: false },
      wednesday: { open: "09:00", close: "18:00", closed: false },
      thursday: { open: "09:00", close: "18:00", closed: false },
      friday: { open: "09:00", close: "18:00", closed: false },
      saturday: { open: "09:00", close: "17:00", closed: false },
      sunday: { open: "10:00", close: "16:00", closed: true }
    },
    facilities: [
      "office-space",
      "conference-room",
      "meeting-room",
      "parking",
      "reception"
    ],
    manager: {
      name: "Regional Manager - NCR",
      phone: "+91-8069648411",
      email: "delhi@fiablebuildingsolutions.com"
    },
    status: "under-construction",
    established: new Date("2024-01-01"),
    area: 1000,
    capacity: 10,
    description: "Upcoming Delhi NCR branch office to serve North India region. Expanding our reach in waterproofing and structural retrofitting services.",
    displayOrder: 6,
    showOnWebsite: true,
    featured: false
  },

  // 7. TRAINING & CHEMICAL STORAGE FACILITY
  {
    name: "Fiable Training & Chemical Storage Facility",
    type: "service-center",
    address: {
      street: "Industrial Plot 12B",
      area: "Transport Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226012",
      country: "India"
    },
    contact: {
      phone: ["+91-9044072226"],
      email: ["training@fiablebuildingsolutions.com"],
      whatsapp: "+91-9044072226"
    },
    coordinates: {
      latitude: 26.8084,
      longitude: 80.9455
    },
    services: [
      "consulting",
      "project-management"
    ],
    operatingHours: {
      monday: { open: "08:00", close: "17:00", closed: false },
      tuesday: { open: "08:00", close: "17:00", closed: false },
      wednesday: { open: "08:00", close: "17:00", closed: false },
      thursday: { open: "08:00", close: "17:00", closed: false },
      friday: { open: "08:00", close: "17:00", closed: false },
      saturday: { open: "08:00", close: "15:00", closed: false },
      sunday: { open: "09:00", close: "14:00", closed: true }
    },
    facilities: [
      "warehouse",
      "laboratory",
      "conference-room",
      "parking",
      "security"
    ],
    manager: {
      name: "Training Coordinator",
      phone: "+91-9044072226",
      email: "training@fiablebuildingsolutions.com"
    },
    status: "active",
    established: new Date("2020-05-01"),
    area: 1500,
    capacity: 12,
    description: "Dedicated facility for quarterly training programs at chemical factory. Storage for trusted chemicals and latest machinery. Our supervisors attend regular training here.",
    displayOrder: 7,
    showOnWebsite: false,
    featured: false
  },

  // 8. PUNE EXPANSION PROJECT OFFICE
  {
    name: "Fiable Pune Project Office",
    type: "project-office",
    address: {
      street: "Office 301, Tech Park",
      area: "Hinjewadi Phase 2",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411057",
      country: "India"
    },
    contact: {
      phone: ["+91-8069648411"],
      email: ["pune@fiablebuildingsolutions.com"],
      whatsapp: "+91-8069648411"
    },
    coordinates: {
      latitude: 18.5679,
      longitude: 73.7143
    },
    services: [
      "waterproofing",
      "structural-retrofitting",
      "industrial-flooring"
    ],
    operatingHours: {
      monday: { open: "09:00", close: "18:00", closed: false },
      tuesday: { open: "09:00", close: "18:00", closed: false },
      wednesday: { open: "09:00", close: "18:00", closed: false },
      thursday: { open: "09:00", close: "18:00", closed: false },
      friday: { open: "09:00", close: "18:00", closed: false },
      saturday: { open: "09:00", close: "17:00", closed: false },
      sunday: { open: "10:00", close: "16:00", closed: true }
    },
    facilities: [
      "office-space",
      "meeting-room",
      "parking"
    ],
    manager: {
      name: "Regional Manager - West",
      phone: "+91-8069648411",
      email: "pune@fiablebuildingsolutions.com"
    },
    status: "active",
    established: new Date("2023-06-01"),
    area: 600,
    capacity: 7,
    description: "Western India project office serving Maharashtra region. Expanding our structural retrofitting and waterproofing services to industrial clients.",
    displayOrder: 8,
    showOnWebsite: true,
    featured: false
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting Fiable Building Solutions seed data...');
    
    await connectDB();
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Location.deleteMany({});
    console.log('🗑️  Cleared existing location data');

    // Insert seed data
    const insertedLocations = await Location.insertMany(fiableSeedData);
    console.log(`✅ Inserted ${insertedLocations.length} locations`);

    // Display summary
    const summary = await Location.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
          active: { $sum: { $cond: [{ $eq: ['$status', 'active'] }, 1, 0] } }
        }
      }
    ]);

    console.log('\n📊 Seed Data Summary:');
    summary.forEach(item => {
      console.log(`   ${item._id}: ${item.count} total (${item.active} active)`);
    });

    console.log('\n🏢 Featured Locations:');
    const featured = await Location.find({ featured: true }).select('name type status');
    featured.forEach(loc => {
      console.log(`   • ${loc.name} (${loc.type}) - ${loc.status}`);
    });

    console.log('\n🎯 Client Project Offices:');
    const clientOffices = await Location.find({ 
      type: { $in: ['project-office', 'service-center'] },
      name: { $regex: /(Shalimar|Biswan|Tanisha)/ }
    }).select('name status');
    clientOffices.forEach(office => {
      console.log(`   • ${office.name} - ${office.status}`);
    });

    console.log('\n✅ Fiable Building Solutions seed data completed successfully!');
    console.log('🏗️  Ready to manage your construction locations!');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔐 Database connection closed');
  }
}

// Run the seed function
seedDatabase();
