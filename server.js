const express = require('express')
var cors = require('cors')
const path=require('path')
const app = express()
const port = 80
app.use(cors())


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/AnyChart.html'));
});
app.get('/barchart', function(req, res) {
  res.sendFile(path.join(__dirname + '/BarChart.html'));
});
app.get('/highchart', function(req, res) {
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
      total: "100"
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
      total: "350"
    },
    {
      name: "Netherlands",
      id: "NL",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "450"
    },
    {
      name: "India",
      id: "IN",
      public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "560"
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
 var Data=[
    
    {
    code3: "AFG",
    name: "Afghanistan",
    public: "8.9",
      philanthropic: "829",
      commercial: "0.1",
      total: "250",
    code: "AF"
    },
    {
      code3: "CHN",
      name: "China",

      public: "8.9",
        philanthropic: "829",
        commercial: "0.1",
        total: "250",
      code: "CN"
      }
    ,
    {
      code3: "RUS",
      name: "Russian Federation",
      public: "8.9",
        philanthropic: "829",
        commercial: "0.1",
        total: "250",
        code: "RU"
      },
      {
        code3: "USA",
        name: "United States",
        public: "8.9",
          philanthropic: "829",
          commercial: "0.1",
          total: "250",
          code: "US"
        },

        {
          code3: "ZAF",
          name: "South Africa",
          public: "8.9",
            philanthropic: "829",
            commercial: "0.1",
            total: "250",
            code: "ZA"
          },


          {
            code3: "IND",
            name: "India",
            public: "8.9",
              philanthropic: "829",
              commercial: "0.1",
              total: "250",
              code: "IN"
            },


            {
              code3: "DEU",
              name: "Germany",
              public: "8.9",
                philanthropic: "829",
                commercial: "0.1",
                total: "250",
                code: "DE"
              },
      ]
    res.json(Data)
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
