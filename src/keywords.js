const allStatesKeywords = {
  "Andhra Pradesh": [
    "Andhra Pradesh wedding photography", "Visakhapatnam wedding photographer", "Vijayawada candid photography",
    "Guntur bridal photoshoot", "Tirupati engagement photography", "Andhra Pradesh wedding photo album",
    "Amaravati wedding videography", "Rajahmundry pre-wedding shoot", "Kakinada destination wedding photography",
    "Nellore traditional wedding photography"
  ],
  "Arunachal Pradesh": [
    "Arunachal Pradesh wedding photography", "Itanagar wedding photographer", "Tawang candid photography",
    "Ziro Valley bridal photoshoot", "Pasighat engagement photography", "Arunachal Pradesh wedding photo album",
    "Bomdila wedding videography", "Roing pre-wedding shoot", "Aalo destination wedding photography",
    "Dirang traditional wedding photography"
  ],
  "Assam": [
    "Assam wedding photography", "Guwahati wedding photographer", "Silchar candid photography",
    "Dibrugarh bridal photoshoot", "Jorhat engagement photography", "Assam wedding photo album",
    "Tezpur wedding videography", "Tinsukia pre-wedding shoot", "Nagaon destination wedding photography",
    "Bongaigaon traditional wedding photography"
  ],
  "Bihar": [
    "Bihar wedding photography", "Patna wedding photographer", "Gaya candid photography",
    "Bhagalpur bridal photoshoot", "Muzaffarpur engagement photography", "Bihar wedding photo album",
    "Purnia wedding videography", "Darbhanga pre-wedding shoot", "Arrah destination wedding photography",
    "Begusarai traditional wedding photography"
  ],
  "Chhattisgarh": [
    "Chhattisgarh wedding photography", "Raipur wedding photographer", "Bhilai candid photography",
    "Bilaspur bridal photoshoot", "Korba engagement photography", "Chhattisgarh wedding photo album",
    "Durg wedding videography", "Rajnandgaon pre-wedding shoot", "Jagdalpur destination wedding photography",
    "Raigarh traditional wedding photography"
  ],
  "Goa": [
    "Goa wedding photography", "Panaji wedding photographer", "Margao candid photography",
    "Vasco da Gama bridal photoshoot", "Mapusa engagement photography", "Goa wedding photo album",
    "Ponda wedding videography", "Bicholim pre-wedding shoot", "Pernem destination wedding photography",
    "Canacona traditional wedding photography"
  ],
  "Gujarat": [
    "Gujarat wedding photography", "Ahmedabad wedding photographer", "Surat candid photography",
    "Vadodara bridal photoshoot", "Rajkot engagement photography", "Gujarat wedding photo album",
    "Bhavnagar wedding videography", "Jamnagar pre-wedding shoot", "Junagadh destination wedding photography",
    "Gandhinagar traditional wedding photography"
  ],
  "Haryana": [
    "Haryana wedding photography", "Gurgaon wedding photographer", "Faridabad candid photography",
    "Panipat bridal photoshoot", "Ambala engagement photography", "Haryana wedding photo album",
    "Hisar wedding videography", "Karnal pre-wedding shoot", "Sonipat destination wedding photography",
    "Rohtak traditional wedding photography"
  ],
  "Himachal Pradesh": [
    "Himachal Pradesh wedding photography", "Shimla wedding photographer", "Manali candid photography",
    "Dharamshala bridal photoshoot", "Kullu engagement photography", "Himachal Pradesh wedding photo album",
    "Solan wedding videography", "Mandi pre-wedding shoot", "Una destination wedding photography",
    "Chamba traditional wedding photography"
  ],
  "Jharkhand": [
    "Jharkhand wedding photography", "Ranchi wedding photographer", "Jamshedpur candid photography",
    "Dhanbad bridal photoshoot", "Bokaro engagement photography", "Jharkhand wedding photo album",
    "Hazaribagh wedding videography", "Deoghar pre-wedding shoot", "Giridih destination wedding photography",
    "Ramgarh traditional wedding photography"
  ],
  "Karnataka": [
    "Karnataka wedding photography", "Bangalore wedding photographer", "Mysore candid photography",
    "Hubli bridal photoshoot", "Mangalore engagement photography", "Karnataka wedding photo album",
    "Belgaum wedding videography", "Shimoga pre-wedding shoot", "Davangere destination wedding photography",
    "Bellary traditional wedding photography"
  ],
  "Kerala": [
    "Kerala wedding photography", "Kochi wedding photographer", "Thiruvananthapuram candid photography",
    "Kozhikode bridal photoshoot", "Thrissur engagement photography", "Kerala wedding photo album",
    "Kannur wedding videography", "Kollam pre-wedding shoot", "Alappuzha destination wedding photography",
    "Palakkad traditional wedding photography"
  ],
  "Madhya Pradesh": [
    "Madhya Pradesh wedding photography", "Indore wedding photographer", "Bhopal candid photography",
    "Jabalpur bridal photoshoot", "Gwalior engagement photography", "Madhya Pradesh wedding photo album",
    "Ujjain wedding videography", "Sagar pre-wedding shoot", "Ratlam destination wedding photography",
    "Rewa traditional wedding photography"
  ],
  "Maharashtra": [
    "Maharashtra wedding photography", "Mumbai wedding photographer", "Pune candid photography",
    "Nagpur bridal photoshoot", "Nashik engagement photography", "Maharashtra wedding photo album",
    "Aurangabad wedding videography", "Solapur pre-wedding shoot", "Amravati destination wedding photography",
    "Kolhapur traditional wedding photography"
  ],
  "Manipur": [
    "Manipur wedding photography", "Imphal wedding photographer", "Churachandpur candid photography",
    "Thoubal bridal photoshoot", "Bishnupur engagement photography", "Manipur wedding photo album",
    "Ukhrul wedding videography", "Senapati pre-wedding shoot", "Tamenglong destination wedding photography",
    "Jiribam traditional wedding photography"
  ],
  "Meghalaya": [
    "Meghalaya wedding photography", "Shillong wedding photographer", "Tura candid photography",
    "Jowai bridal photoshoot", "Nongstoin engagement photography", "Meghalaya wedding photo album",
    "Cherrapunji wedding videography", "Mawlynnong pre-wedding shoot", "Baghmara destination wedding photography",
    "Resubelpara traditional wedding photography"
  ],
  "Mizoram": [
    "Mizoram wedding photography", "Aizawl wedding photographer", "Lunglei candid photography",
    "Saiha bridal photoshoot", "Champhai engagement photography", "Mizoram wedding photo album",
    "Serchhip wedding videography", "Kolasib pre-wedding shoot", "Mamit destination wedding photography",
    "Lawngtlai traditional wedding photography"
  ],
  "Nagaland": [
    "Nagaland wedding photography", "Kohima wedding photographer", "Dimapur candid photography",
    "Mokokchung bridal photoshoot", "Wokha engagement photography", "Nagaland wedding photo album",
    "Mon wedding videography", "Tuensang pre-wedding shoot", "Zunheboto destination wedding photography",
    "Phek traditional wedding photography"
  ],
  "Odisha": [
    "Odisha wedding photography", "Bhubaneswar wedding photographer", "Cuttack candid photography",
    "Rourkela bridal photoshoot", "Berhampur engagement photography", "Odisha wedding photo album",
    "Sambalpur wedding videography", "Balasore pre-wedding shoot", "Puri destination wedding photography",
    "Bargarh traditional wedding photography"
  ],
  "Punjab": [
    "Punjab wedding photography", "Amritsar wedding photographer", "Ludhiana candid photography",
    "Jalandhar bridal photoshoot", "Patiala engagement photography", "Punjab wedding photo album",
    "Bathinda wedding videography", "Hoshiarpur pre-wedding shoot", "Mohali destination wedding photography",
    "Pathankot traditional wedding photography"
  ],
  "Rajasthan": [
    "Rajasthan wedding photography", "Jaipur wedding photographer", "Jodhpur candid photography",
    "Udaipur bridal photoshoot", "Bikaner engagement photography", "Rajasthan wedding photo album",
    "Ajmer wedding videography", "Kota pre-wedding shoot", "Pushkar destination wedding photography",
    "Alwar traditional wedding photography"
  ],
  "Sikkim": [
    "Sikkim wedding photography", "Gangtok wedding photographer", "Pelling candid photography",
    "Namchi bridal photoshoot", "Geyzing engagement photography", "Sikkim wedding photo album",
    "Ravangla wedding videography", "Yuksom pre-wedding shoot", "Lachen destination wedding photography",
    "Mangan traditional wedding photography"
  ],
  "Tamil Nadu": [
    "Tamil Nadu wedding photography", "Chennai wedding photographer", "Coimbatore candid photography",
    "Madurai bridal photoshoot", "Tiruchirappalli engagement photography", "Tamil Nadu wedding photo album",
    "Salem wedding videography", "Tirunelveli pre-wedding shoot", "Vellore destination wedding photography",
    "Thoothukudi traditional wedding photography"
  ],
  "Telangana": [
    "Telangana wedding photography", "Hyderabad wedding photographer", "Warangal candid photography",
    "Nizamabad bridal photoshoot", "Khammam engagement photography", "Telangana wedding photo album",
    "Karimnagar wedding videography", "Mahbubnagar pre-wedding shoot", "Ramagundam destination wedding photography",
    "Nalgonda traditional wedding photography"
  ],
  "Tripura": [
    "Tripura wedding photography", "Agartala wedding photographer", "Udaipur candid photography",
    "Dharmanagar bridal photoshoot", "Kailashahar engagement photography", "Tripura wedding photo album",
    "Belonia wedding videography", "Khowai pre-wedding shoot", "Melaghar destination wedding photography",
    "Amarpur traditional wedding photography"
  ],
  "Uttar Pradesh": [
    "Uttar Pradesh wedding photography", "Lucknow wedding photographer", "Kanpur candid photography",
    "Varanasi bridal photoshoot", "Agra engagement photography", "Uttar Pradesh wedding photo album",
    "Meerut wedding videography", "Allahabad pre-wedding shoot", "Bareilly destination wedding photography",
    "Aligarh traditional wedding photography"
  ],
  "Uttarakhand": [
    "Uttarakhand wedding photography", "Dehradun wedding photographer", "Nainital candid photography",
    "Haridwar bridal photoshoot", "Rishikesh engagement photography", "Uttarakhand wedding photo album",
    "Haldwani wedding videography", "Rudrapur pre-wedding shoot", "Mussoorie destination wedding photography",
    "Almora traditional wedding photography"
  ],
  "West Bengal": [
    "West Bengal wedding photography", "Kolkata wedding photographer", "Darjeeling candid photography",
    "Siliguri bridal photoshoot", "Durgapur engagement photography", "West Bengal wedding photo album",
    "Asansol wedding videography", "Howrah pre-wedding shoot", "Kharagpur destination wedding photography",
    "Malda traditional wedding photography"
  ]
};

const generalKeywords = [
  "wedding photography", "wedding photographer", "pre-wedding shoot", "candid wedding photography",
  "destination wedding photography", "wedding photo album", "bridal photoshoot", "engagement photography",
  "traditional wedding photography", "photojournalistic wedding photography", "documentary wedding photography",
  "artistic wedding photography", "luxury wedding photography", "affordable wedding photographer",
  "top wedding photographers", "best wedding photography", "professional wedding photographer",
  "creative wedding photography", "modern wedding photography", "unique wedding photography",
  "wedding photography packages", "wedding photography services", "wedding photo session",
  "Indian wedding photography", "wedding photography in India", "best wedding photographers in India",
  "Indian bridal photoshoot", "Indian wedding photo album", "Indian engagement photography",
  "wedding photographer near me", "local wedding photographers", "wedding photography deals",
  "outdoor wedding photography", "indoor wedding photography", "wedding moments captured",
  "portrait photography", "cinematography", "event photography", "family photography", "professional headshots",
  "lifestyle photography", "fashion photography", "fine art photography", "editorial photography"
];

const serviceSpecificKeywords = [
  "bridal portrait photography", "couple photoshoot", "family wedding portraits", "reception photography",
  "haldi ceremony photography", "mehndi ceremony photography", "sangeet ceremony photography",
  "engagement photography", "ring ceremony photography", "wedding day photography", "wedding candid photography",
  "wedding videography", "wedding cinematography", "wedding film", "wedding highlights video",
  "pre-wedding video shoot", "drone wedding photography", "wedding photo editing", "wedding photo retouching",
  "destination wedding videography", "traditional wedding videography", "cinematic wedding video",
  "same day edit wedding video", "highlight reel wedding video", "full-length wedding film",
  "romantic wedding video shoot", "creative wedding videography", "aerial wedding videography",
  "portrait photography services", "fashion photoshoot", "commercial photography", "event videography",
  "birthday party photography", "corporate event photography", "concert photography", "real estate photography",
  "product photography", "advertising photography", "architectural photography", "landscape photography"
];

export { allStatesKeywords, generalKeywords, serviceSpecificKeywords };
