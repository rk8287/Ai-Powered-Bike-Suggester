const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

// Dummy bike data
const bikes = [
  {
    id: 1,
    name: "Pulsar N250",
    company: "Bajaj",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Bajaj_logo.svg",
    image: "https://i.pinimg.com/736x/58/9c/4d/589c4db8f454ecd59ad6ea9a4e791184.jpg",
    price: "₹1.49 L",
    engine: "249cc Single Cylinder",
    mileage: "37 km/l",
    topSpeed: "135 km/h",
    power: "24.5 PS",
  },
  {
    id: 2,
    name: "Hunter 350",
    company: "Royal Enfield",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Royal_Enfield_logo.svg",
    image: "https://images.pexels.com/photos/17944593/pexels-photo-17944593.jpeg?cs=srgb&dl=pexels-venkatganta-17944593.jpg&fm=jpg",
    price: "₹1.60 L",
    engine: "346cc Single Cylinder",
    mileage: "35 km/l",
    topSpeed: "130 km/h",
    power: "20 PS",
  },
  {
    id: 3,
    name: "Apache RTR 200",
    company: "TVS",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/TVS_Motor_Company_logo.svg",
    image: "https://i.pinimg.com/736x/77/d1/a9/77d1a9cacb387a45d1f7947430af94e9.jpg",
    price: "₹1.45 L",
    engine: "197cc Single Cylinder",
    mileage: "40 km/l",
    topSpeed: "138 km/h",
    power: "20.5 PS",
  },
  {
    id: 4,
    name: "Yamaha R15 V4",
    company: "Yamaha",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Yamaha_logo.svg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2UPLdHkpV7TMYD8rqdUisl_TKhYeSsegRw&s",
    price: "₹1.80 L",
    engine: "155cc Liquid Cooled",
    mileage: "40 km/l",
    topSpeed: "150 km/h",
    power: "18.6 PS",
  },
  {
    id: 5,
    name: "KTM Duke 390",
    company: "KTM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/85/KTM_logo.svg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf73t-W1HiX4WkB6rMQF1ujQ-gGVwwzuXg6A&s",
    price: "₹2.20 L",
    engine: "373cc Single Cylinder",
    mileage: "30 km/l",
    topSpeed: "167 km/h",
    power: "44 PS",
  },
   {
    id: 6,
    name: "BMW 390",
    company: "KTM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/85/KTM_logo.svg",
    image: "data:image/jpeg;base64,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",
    price: "₹2.20 L",
    engine: "373cc Single Cylinder",
    mileage: "30 km/l",
    topSpeed: "167 km/h",
    power: "44 PS",
  }
];

// GET all bikes
app.get('/api/bikes', (req, res) => {
  res.json(bikes);
});

// GET bike by ID
app.get('/api/bikes/:id', (req, res) => {
  const bike = bikes.find(b => b.id === parseInt(req.params.id));
  if (!bike) return res.status(404).json({ message: "Bike not found" });
  res.json(bike);
});

// SEARCH bikes by name or company (query params)
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.json(bikes);

  const result = bikes.filter(b =>
    b.name.toLowerCase().includes(q.toLowerCase()) ||
    b.company.toLowerCase().includes(q.toLowerCase())
  );

  res.json(result);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
