function script_01()
{
  answer = prompt("Comment tu t'intitules ?");
  console.log("Bonjour, " + answer + " !")
}

function script_02()
{
  let answer = -1;
  while(answer < 0)
  {
    console.log("Seulement un nombre positif entier")
    answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
  }

  function factorial(number)
  {
    let value = 1;
    while(number > 1)
    {
      value = value * number;
      number = number - 1;
    }
    return value
  }
  value = factorial(number)
  console.log(value)
}

function script_03()
{
  let answer = -1;
  while(answer < 0) {
    answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    if (answer < 0)
    {
      console.log("Seulement un nombre positif entier")
    }
  }

  function pyramid(height)
  {
    let tmp = 1;

    while (tmp !== height + 1)
    {
      console.log(" ".repeat(height - tmp) + "#".repeat(height - (height - tmp)));

      tmp = tmp + 1;
    }
  }

  pyramid(parseInt(answer));
}

function script_04()
{
  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  function from_seventies()
  {
    let array_from_70s = [];
    console.log("Entrepreneurs des années 70 par ordre alphabétique");
    for(let index in entrepreneurs) {
      if (entrepreneurs[index].year >= 1970 && entrepreneurs[index].year <= 1979)
      {
        array_from_70s.push({first_name: entrepreneurs[index].first, last_name: entrepreneurs[index].last, age: (2021 - entrepreneurs[index].year) });
      }
    }
    array_from_70s.sort(function (a, b) {
      return a.last_name.localeCompare(b.last_name);
    });
    array_from_70s.forEach(function(entry) {
      console.log(entry.last_name + " " + entry.first_name + " Age: " + entry.age);
    });
  }
  from_seventies();
}

function script_05()
{
  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  function borrowed()
  {
    console.log("Tous les livres ont-ils été emprunté ?")
    for(let index in books)
    {
      if (books[index].rented == 0)
      {
        console.log("Non")
      }
    }
    console.log("Oui")
  }

  function most_borrowed()
  {
    console.log("Quel est livre le plus emprunté ?")
    let rent_times = 0;
    let index_return = 0;
    for(let index in books)
    {
      if (books[index].rented > rent_times)
      {
        rent_times = books[index].rented
        index_return = index;
      }
    }
    console.log("Le Livre le plus emprunté est " + books[index_return].title)
  }

  function least_borrowed()
  {
    console.log("Quel est livre le moins emprunté ?")
    let rent_times = books[0].rented;
    let index_return = 0;
    for(let index in books)
    {
      if (books[index].rented < rent_times)
      {
        rent_times = books[index].rented
        index_return = index;
      }
    }
    console.log("Le Livre le moins emprunté est " + books[index_return].title)
  }

  function sort_display()
  {
    console.log("Trie par ordre alphabétique des livres !")
    books.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    books.forEach(function(entry) {
      console.log(entry.title);
    });
  }

  function find_and_delete()
  {
    console.log("Trouve le livre avec l'ID: 873495")
    console.log("Livre : " + books.find(book => book.id === 873495).title)
    console.log("Suppression du livre à l'id 133712")
    console.log("Livre : " + books.find(book => book.id === 133712).title)
    books.splice(books.indexOf(books.find(book => book.id === 133712)), 1);
  }

  borrowed();
  most_borrowed();
  least_borrowed();
  find_and_delete();
  sort_display();
}

function script_06()
{
  let answer = "";
  let codons = [];

  function input_user()
  {
    while(!answer || answer.length % 3 !== 0)
    {
      answer = prompt("Azy balance moi ta séquence d'ARN bruh !");
      if (answer.length % 3 !== 0)
      {
        console.log("La sequence d'ARN ne contient pas le bon nombre de nucléotides")
      }
    }
  }
  
  function parsing()
  {

    for (var i = 0, charsLength = answer.length; i < charsLength; i += 3)
    {
      codons.push(answer.substring(i, i + 3));
    }
    // console.log
    // codons.forEach(function(entry) {
    //   console.log(entry);
    // });

  }

  function amino_acid_conversion()
  {
    for (let index in codons)
    {
      codon_name = codons[index];
      switch(codon_name)
      {
        case "UCU":
          codons[index] = "Sérine" ;
          break;
        case "UCC":
          codons[index] =  "Sérine" ;
          break;
        case "UCA":
          codons[index] =  "Sérine" ;
          break;
        case "UCG":
          codons[index] =  "Sérine" ;
          break;
        case "AGU":
          codons[index] =  "Sérine" ;
          break;
        case "AGC":
          codons[index] =  "Sérine" ;
          break;
        case "CCU":
          codons[index] =  "Proline" ;
          break;
        case "CCC":
          codons[index] =  "Proline" ;
          break;
        case "CCA":
          codons[index] =  "Proline" ;
          break;
        case "CCG":
          codons[index] =  "Proline" ;
          break;
        case "UUA":
          codons[index] =  "Leucine" ;
          break;
        case "UUG":
          codons[index] =  "Leucine" ;
          break;
        case "UUU":
          codons[index] =  "Phénylalanine" ;
          break;
        case "UUC":
          codons[index] =  "Phénylalanine" ;
          break;
        case "CGU":
          codons[index] =  "Arginine" ;
          break;
        case "CGC":
          codons[index] =  "Arginine" ;
          break;
        case "CGA":
          codons[index] =  "Arginine" ;
          break;
        case "CGG":
          codons[index] =  "Arginine" ;
          break;
        case "AGA":
          codons[index] =  "Arginine" ;
          break;
        case "AGG":
          codons[index] =  "Arginine" ;
          break;
        case "UAU":
          codons[index] =  "Tyrosine" ;
          break;
        case "UAC":
          codons[index] =  "Tyrosine" ;
          break;

        default:
          codons[index] = "NotACodonBruh";
          break;
        
      }
    }
    // codons.forEach(function(entry) {
    //   console.log(entry);
    // });
  }

  input_user();
  parsing();
  amino_acid_conversion();
  console.log(codons.join("-"));
}

function script_07()
{
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }

  function input_user()
  {
    
    answer = prompt("Azy keskia là ?? (Indice: Pour te casser de cette conversation pense à maitre Gims)");
    while (answer.toLowerCase().includes("j'me tire") === false && answer.toLowerCase().includes("je me tire") === false)
    {
      if (answer.charAt(answer.length - 1) === '?')
      {
        console.log("Ouais Ouais...")
      }
      else if (answer === "")
      {
        console.log("t'es en PLS ?");

      }
      else if (isUpperCase(answer) === true)
      {
        console.log("Pwa, calme-toi...");
      }
      else if (answer.includes("fortnite") || answer.includes("Fortnite"))
      {
        console.log( "on s' fait une partie soum-soum ?" );

      }
      else
      {
        console.log("balek.");

      }
      answer = prompt("Quoi encore ?? (Maitre Gims...)")
    }
    console.log("Ok staiv...")
  }
  input_user();
}