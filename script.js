const quotes = [
    { quote: "ንሓቂ ዝፈርሕ መንግስቲ ኣብ ሓሶት ዝተሃንጸ መንግስቲ እዩ ።",}, //author: "ካብ ምስላ ኣቦታት" },
    { quote: "ኣብቲ ደረት ኣልቦ ስፍሓት ሰማያዊ ሰማይ፡ ኣኽናፍ ናጽነት በረራ ይገብራ ናብ ሓድሽ ጥርዚ ተኽእሎታት ይድይባ ።", },//author: "ካብ ምስላ ኣቦታት" },
    { quote: "ዝኽሪ የፍርሕ’ዩ ምስ ሰማዕኩ ምርሳዕ እምበኣር ዑቕባ ምንባር’ዩ ኢለ።", author: "በየነ ሃይለ" },
    { quote: "ድምጺ እንተ በዚሑ ተኽእሎ ምሕሳብ ይንኪ ኢዩ።", author: "በየነ ሃይለ" },
    { quote: "ግዱድ ምምዝባል ማለት ካብ ሓደ ቦታ ምውጻእ ጥራይ ኣይኮነን ሓደ ክፋል መንነትካ ምጥፋእ'ዩ ።",},
    { quote: "እቶም ንካልኦት ናጽነት ዝከልኡ ንርእሶም ኣይግብኦምን እዩ።", author: "ኣብርሃም ሊንከን" },
    { quote: "ሓቢርካ ምምጻእ መጀመርታ'ዩ ፡ ሓቢርካ ምጽናሕ ምዕባለ እዩ፡ ብሓባር ምስራሕ ዓወት እዩ።", author: "ሄንሪ ፎርድ" },
    { quote: "እቲ ንክነብር ዝኮነ ምክንያት ዘለዎ ሰብ ዝኮነ ኩነታት ክጸውር ይክእል እዩ ።",},
    { quote: "ኣፍደገካ ከይጽረካ ብዛዕባ ኣፍደገ ጎረቤትካ ኣይተማርር ።",},
    { quote: "ልጓም ቀደም ሒዞም ንናይ ሕጂ ፈረስ ክቅይዱ ዝጽዕሩ ጓሂ እዩ መክሰቦም።", author: "በየነ ሃይለ" },
    { quote: "ኣንጭዋ ስዋ ጾሚቓ ስትይ ዊዕላ ፡ በትሪ ኣቀብሉኒ ኢላ ንድሙ ክትስሃላ ።",},
    { quote: "ውሱን ተስፋ ምቑራጽ ክንቅበል ኣለና ደረት ኣልቦ ተስፋ ግን ፈጺምና ኣይንስእንን ኢና።", author: "ማርቲን ሉተር ኪንግ" },
    { quote: "ፍቕሪ ንጸላኢ ናብ ፈታዊ ክቕይር ዝኽእል እንኮ ሓይሊ እዩ ።",},
    { quote: "ድኹም ፈጺሙ ይቕረ ክብል  ኣይክእልን እዩ። ይቕረ ምባል ናይ ሓያላት ባህሪ እዩ።", author: "ማሃትማ ጋንዲ" },
    { quote: "ኲናት ኣብ መንገዱ ንዘሎ ኩሉ ዝበልዕ ዘይሕለል ኣራዊት እዩ ።",},
    { quote: "ሰለስተ ነገራት ነዊሕ ክሕባእ ኣይክእልን እዩ፡ ጸሓይን ወርሕን ሓቅን ።",},
    { quote: "ሙዚቃ ብድምጽታት ናይ ምሕሳብ ስነ-ጥበብ እዩ።", author: "ጁልስ ኮምባሪዮ" },
    { quote: "ናፍቖት ካብቲ ጽቡቕ ናይ ቀደም እዋን ረሳሕ ወሰናት ዘወግድ ፋይል እዩ።",},
    { quote: "ፍቕሪ ኣቦ ልክዕ ከም ጸሓይ ዘለኣለማዊ’ዩ።",},
    { quote: "ፍቕሪ ኣቦ ዋላ ብሞት ፈጺሙ ዘይብተኽ ማእሰር እዩ።።",},
    { quote: "ፍቕሪ ኣደ ቅድመ ኩነት ዘይብሉን ደረት ዘይብሉን እዩ። እቲ ዝጸረየ መልክዕ ፍቕሪ እዩ።",},
    { quote: "ፍቕሪ ኣደ ኣብ ምድሪ እቲ ዝሓየለ ሓይሊ እዩ። ደረት ዘይፈልጥን ዝኾነ ጸገም ክጻወር ዝኽእልን እዩ።",},
    { quote: "ዓርኪ ማለት ነቲ ዝተሰብረ ሓጹርካ ዕሽሽ ኢሉ ኣብ ጀርዲንካ ንዘሎ ዕምባባታት ዘድንቕ እዩ።",},
  ];
  
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote-btn");
  
  let currentQuoteIndex = 0;
  
  function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = randomQuote.quote;
    authorEl.textContent = randomQuote.author;
  }
  
  generateQuote();  // Generate a quote on page load
  
  newQuoteBtn.addEventListener("click", () => {
    currentQuoteIndex++;
  
    // Check if reached the end of quotes array
    if (currentQuoteIndex >= quotes.length) {
      currentQuoteIndex = 0;
    }
  
    generateQuote();
  });