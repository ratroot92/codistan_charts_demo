const express = require('express')
var cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/AnyChart.html'));
});
app.get('/barchart', function (req, res) {
  res.sendFile(path.join(__dirname + '/BarChart.html'));
});
app.get('/highchart', function (req, res) {
  res.sendFile(path.join(__dirname + '/HighChart2.html'));
});

app.get('/api', (req, res) => {
  const data = [

    {
      name: "United States",
      id: "US",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "100",
      color:"#6279c5"
    },
    {
      name: "Russia",
      id: "RU",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "150"
    },
    {
      name: "Canada",
      id: "CA",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "200"
    },
    {
      name: "Brazil",
      id: "BR",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "250"
    },
    {
      name: "South Africa",
      id: "ZA",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "350",
      color:"#b37faf"
    },
    {
      name: "Netherlands",
      id: "NL",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "450",
      color:"#95004f"

    },
    {
      name: "India",
      id: "IN",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "560",
      color: "#b4de00",
    },
    {
      name: "Italy",
      id: "IT",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "660"
    },
    {
      name: "Switzerland",
      id: "CH",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "770"
    },
    {
      name: "Ireland",
      id: "IE",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "880"
    },
    {
      name: "United Kingdom",
      id: "GB",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "999"
    },


    {
      name: "Germany",
      id: "DE",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "500"
    },


    {
      name: "Denmark",
      id: "DK",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "400"
    },


    {
      name: "Japan",
      id: "JP",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "700"
    },



    {
      name: "Australia",
      id: "AU",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "800"
    },





  ]
  res.json(data)
})



app.get('/api2', (req, res) => {
  var Data = [

    {
      code3: "AFG",
      name: "Afghanistan",
      public: 350,
      philanthropic: 150,
      commercial: 250,
      total: 750,
      code: "AF",
      color: "#ffce0a"
    },
    {
      code3: "IND",
      name: "India",
      public: 400,
      philanthropic: 800,
      commercial: 100,
      total: 1300,
      code: "IN",
      color: "#b4de00",
    }
    ,
    {
      code3: "RUS",
      name: "Russian Federation",
      public: 100,
      philanthropic: 150,
      commercial: 200,
      total: 450,
      code: "RU",
      color: "#ff0000"
    },
    {
      code3: "USA",
      name: "United States",
      public: 50,
      philanthropic: 100,
      commercial: 25,
      total: 175,
      code: "US",
      color:"#6279c5"
    },

    {
      code3: "ZAF",
      name: "South Africa",
      public: 20,
      philanthropic: 30,
      commercial: 10,
      total: 60,
      code: "ZA",
      color:"#b37faf"
    
    },

    {
      code3: "NLD",
      name: "Netherlands",
      public: 20,
      philanthropic: 30,
      commercial: 10,
      total: 60,
      code: "Nl",
      color:"#95004f"
    
    },


    {
      code3: "POL",
      name: "Poland",
      public: 20,
      philanthropic: 30,
      commercial: 10,
      total: 60,
      code: "PL",
      color:"#95004f"
    
    },


    {
      code3: "FRA",
      name: "France",
      public: 20,
      philanthropic: 30,
      commercial: 10,
      total: 60,
      code: "FR",
      color:"#95004f"
    
    },


    {
      code3: "DEU",
      name: "Germany",
      public: 20,
      philanthropic: 30,
      commercial: 10,
      total: 60,
      code: "DE",
      color:"#95004f"
    
    },


    {
      code3: "AUS",
      name: "Australia",
      public: 10,
      philanthropic: 40,
      commercial: 90,
      total: 140,
      code: "AU",
      color:"#f57b0d",
    },


    {
      code3: "BRA",
      name: "Brazil",
      public: 125,
      philanthropic: 50,
      commercial: 0,
      total: 175,
      code: "BR",
      color:"#37cc9a",
    },
  ]
  res.json(Data)
})



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`));