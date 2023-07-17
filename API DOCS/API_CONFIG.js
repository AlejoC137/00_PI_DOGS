`File name = API_CONFIG.txt
We will be making request to thedogapi , using next endpoits:`

const API_KEY = 'api_key=live_Atpr3dgVcvha9yaChF7McRy50n5vL7PkmPqW74E4vtjfq9VZrnLtbXSQbGcsUzMc'; // Replace with your actual API key
const BASE_URL = 'https://api.thedogapi.com/v1';

`1.`



    const response = await axios.get(`${BASE_URL}/breeds`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

`in this example, response.data would look like :`

response.data = [
  
    {
    "weight": {
    "imperial": "6 - 13",
    "metric": "3 - 6"
    },
    "height": {
    "imperial": "9 - 11.5",
    "metric": "23 - 29"
    },
    "id": 1,
    "name": "Affenpinscher",
    "bred_for": "Small rodent hunting, lapdog",
    "breed_group": "Toy",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "origin": "Germany, France",
    "reference_image_id": "BJa4kxc4X",
    "image": {
    "id": "BJa4kxc4X",
    "width": 1600,
    "height": 1199,
    "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    }
    },
    {
    "weight": {
    "imperial": "50 - 60",
    "metric": "23 - 27"
    },
    "height": {
    "imperial": "25 - 27",
    "metric": "64 - 69"
    },
    "id": 2,
    "name": "Afghan Hound",
    "country_code": "AG",
    "bred_for": "Coursing and hunting",
    "breed_group": "Hound",
    "life_span": "10 - 13 years",
    "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
    "origin": "Afghanistan, Iran, Pakistan",
    "reference_image_id": "hMyT4CDXR",
    "image": {
    "id": "hMyT4CDXR",
    "width": 606,
    "height": 380,
    "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
    }
    },
    {
    "weight": {
    "imperial": "44 - 66",
    "metric": "20 - 30"
    },
    "height": {
    "imperial": "30",
    "metric": "76"
    },
    "id": 3,
    "name": "African Hunting Dog",
    "bred_for": "A wild pack animal",
    "life_span": "11 years",
    "temperament": "Wild, Hardworking, Dutiful",
    "origin": "",
    "reference_image_id": "rkiByec47",
    "image": {
    "id": "rkiByec47",
    "width": 500,
    "height": 335,
    "url": "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
    }
    },
    {
    "weight": {
    "imperial": "40 - 65",
    "metric": "18 - 29"
    },
    "height": {
    "imperial": "21 - 23",
    "metric": "53 - 58"
    },
    "id": 4,
    "name": "Airedale Terrier",
    "bred_for": "Badger, otter hunting",
    "breed_group": "Terrier",
    "life_span": "10 - 13 years",
    "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
    "origin": "United Kingdom, England",
    "reference_image_id": "1-7cgoZSh",
    "image": {
    "id": "1-7cgoZSh",
    "width": 645,
    "height": 430,
    "url": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
    }
    },
    {
    "weight": {
    "imperial": "90 - 120",
    "metric": "41 - 54"
    },
    "height": {
    "imperial": "28 - 34",
    "metric": "71 - 86"
    },
    "id": 5,
    "name": "Akbash Dog",
    "bred_for": "Sheep guarding",
    "breed_group": "Working",
    "life_span": "10 - 12 years",
    "temperament": "Loyal, Independent, Intelligent, Brave",
    "origin": "",
    "reference_image_id": "26pHT3Qk7",
    "image": {
    "id": "26pHT3Qk7",
    "width": 600,
    "height": 471,
    "url": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
    }
    } ]


`2.in a real use case, name will be provided by req.query.name ,but for these example name would be a string`

    const name = "American"
   
      const response = await axios.get(`${BASE_URL}/breeds/search?q=${name}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

`in this example, response.data would look like :`

response.data = [
{
"weight": {
"imperial": "60 - 120",
"metric": "27 - 54"
},
"height": {
"imperial": "22 - 27",
"metric": "56 - 69"
},
"id": 10,
"name": "American Bulldog",
"breed_group": "Working",
"life_span": "10 - 12 years",
"temperament": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
"reference_image_id": "pk1AAdloG"
},
{
"weight": {
"imperial": "30 - 150",
"metric": "14 - 68"
},
"height": {
"imperial": "14 - 17",
"metric": "36 - 43"
},
"id": 11,
"name": "American Bully",
"country_code": "US",
"bred_for": "Family companion dog",
"breed_group": "",
"life_span": "8 – 15 years",
"temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
"reference_image_id": "sqQJDtbpY"
},
{
"weight": {
"imperial": "20 - 40",
"metric": "9 - 18"
},
"height": {
"imperial": "15 - 19",
"metric": "38 - 48"
},
"id": 12,
"name": "American Eskimo Dog",
"country_code": "US",
"bred_for": "Circus performer",
"breed_group": "Non-Sporting",
"life_span": "12 - 15 years",
"temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
"reference_image_id": "Bymjyec4m"
},
{
"weight": {
"imperial": "7 - 10",
"metric": "3 - 5"
},
"height": {
"imperial": "9 - 12",
"metric": "23 - 30"
},
"id": 13,
"name": "American Eskimo Dog (Miniature)",
"country_code": "US",
"bred_for": "Companionship",
"life_span": "13 – 15 years",
"temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
"reference_image_id": "_gn8GLrE6"
},
{
"weight": {
"imperial": "65 - 75",
"metric": "29 - 34"
},
"height": {
"imperial": "21 - 28",
"metric": "53 - 71"
},
"id": 14,
"name": "American Foxhound",
"country_code": "US",
"bred_for": "Fox hunting, scent hound",
"breed_group": "Hound",
"life_span": "8 - 15 years",
"temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
"reference_image_id": "S14n1x9NQ"
},
{
"weight": {
"imperial": "30 - 60",
"metric": "14 - 27"
},
"height": {
"imperial": "17 - 21",
"metric": "43 - 53"
},
"id": 15,
"name": "American Pit Bull Terrier",
"country_code": "US",
"bred_for": "Fighting",
"breed_group": "Terrier",
"life_span": "10 - 15 years",
"temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
"reference_image_id": "HkC31gcNm"
},
{
"weight": {
"imperial": "50 - 60",
"metric": "23 - 27"
},
"height": {
"imperial": "17 - 19",
"metric": "43 - 48"
},
"id": 16,
"name": "American Staffordshire Terrier",
"country_code": "US",
"bred_for": "",
"breed_group": "Terrier",
"life_span": "12 - 15 years",
"temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
"reference_image_id": "rJIakgc4m"
},
{
"weight": {
"imperial": "25 - 45",
"metric": "11 - 20"
},
"height": {
"imperial": "15 - 18",
"metric": "38 - 46"
},
"id": 17,
"name": "American Water Spaniel",
"country_code": "US",
"bred_for": "Bird flushing and retrieving",
"breed_group": "Sporting",
"life_span": "10 - 12 years",
"temperament": "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
"reference_image_id": "SkmRJl9VQ"
},
{
"weight": {
"imperial": "20 - 30",
"metric": "9 - 14"
},
"height": {
"imperial": "14 - 15",
"metric": "36 - 38"
},
"id": 87,
"name": "Cocker Spaniel (American)",
"bred_for": "Hunting the American woodcock",
"breed_group": "Sporting",
"life_span": "12 - 15 years",
"temperament": "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
"reference_image_id": "HkRcZe547"
},
{
"weight": {
"imperial": "20 - 40",
"metric": "9 - 18"
},
"height": {
"imperial": "13 - 18",
"metric": "33 - 46"
},
"id": 165,
"name": "Miniature American Shepherd",
"breed_group": "Herding",
"life_span": "12 - 15 years",
"temperament": "Energetic, Loyal, Intelligent, Trainable",
"reference_image_id": "BkHHQgcN7"
}
]
`--------------
IF YOU UNDERSTAND SAY 'YES' AND NOTHING ELSE `