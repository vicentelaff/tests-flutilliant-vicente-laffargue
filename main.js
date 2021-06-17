// Quelques infos générales!
// 1. En JS je préfère ne pas mettre de ";" non seulement parce que ce n'est pas obligatoire mais aussi parce que je sais que je vais
//    forcémment en oublier un quelque part (et je n'aurais pas d'erreur) - donc je préfère n'en mettre nulle part. Bien évidemment je m'adapterais à vos standards et si
//    vous codez avec des ";" je le ferais sans aucun soucis.
// 2. J'ai mis des console.log un peu partour pour que je puisse vérifier en même temps que je code.
// 3. J'ai rajouté les questions ici et dans le fichier index.html pour faciliter les choses.

// ============================ EXO 1 ============================
// Smaller Primes: Déterminer tous les nombres premiers plus petits qu’une valeur d’entrée donnée (< N).
// Input : N entier > 0.
// Output : le tableau avec les nombres premiers.
// Exemple : pour N = 10
// Output : 2 3 5 7

/**
 * 
 * @param int N 
 * @returns prime numbers inferior to input
 */
function smallerPrimes(N) {
  // Initializing an array containing the numbers we will use as dividends to check if the input is a prime number or not.
  let primeNums = [2, 3, 5, 7, 11]

  // Check if input is an integer:
  if (typeof N === typeof 1) {

    // Iterate from 2 until N and if i is a prime number, push it to our array:
    for (let i = 2; i < N; ++i) {
      if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0) {
        primeNums.push(i)
      }
    }

  } else {
    return 'Erreur, vous devez saisir un entier'
  }

  console.log(primeNums)

  return primeNums
}


// ============================ EXO 2 ============================
// Avec une chaîne de caractères donnée, vérifier si les caractères peuvent
// être réordonnés pour former une séquence palindromique.
// Un palindrome est un mot, une phrase, un nombre ou toute autre
// séquence de caractères qui se lit de la même façon de gauche à droite et
// de droite à gauche.
// Il n’est pas nécessaire de vérifier les majuscules, les caractères spéciaux,
// les accents, les espaces, la ponctuation ou les séparateurs de mots.
// Input : chaîne de caractères.
// Output : valeur booléenne
// Exemple :
// Pour « nssnoo » => 1 (Vicente: Je pense que c'est censé être 0 pour cet exemple, non ?)
// Pour « abctpm » => 0

// P.S.: Vu qu'il n'est pas nécessaire de vérifier les caractères spéciaux, les accents, les espaces, la ponctuation ou les séparateurs de mots, je suppose que les
// valeurs entrées en paramètre seront toujours des chaînes de caractère en minuscule, comme dans les 2 exemples.

/**
 * 
 * @param {string} paramString 
 * @returns boolean
 * 
 * Function returns true if the input string is the same when read from left to right and right to left.
 */
function palindromeCheck(paramString) {
  // Splitting the input string to make a new array, then reversing the array's order, and joining the array's elements into a new string
  let newString = paramString.split("").reverse().join("")

  // Return true if the input string is a palindrome, otherwise return false
  console.log(newString === paramString ? true : false)
  return newString === paramString ? true : false
}

// ============================ EXO 3 ============================
// Un groupe de N escargots participe à un concours en escaladant chacun un nombre de pôles donné. La hauteur de ces pôles et la vitesse de chaque escargot sont différentes. À la base de chaque pôle, chaque escargot est prêt à commencer le concours. Chaque escargot est codé avec le nombre du pôle qu’il doit escalader. Chaque escargot i escalade daySpeed (i) mètres pendant la journée et descend nightSpeed (i) mètres pendant la nuit (daySpeed (i) > nightSpeed (i)). Affichez l’ordre dans lequel les escargots atteignent le sommet des pôles.

// Travelling Snails

// Rappelez-vous que : - si 2 ou plusieurs escargots arrivent en même temps pendant le dernier jour, ils doivent être ordonnés par leur index. - si un escargot atteint le sommet du pôle pendant la journée, il termine la course.

// Input : N, tableau avec hauteurs = heights[N], tableau avec des mètres ascendants = daySpeed [N] et des mètres descendants = nightSpeed [N].
// Output : tableau avec l’ordre dans lequel les escargots atteignent le sommet des pôles.
// Exemple : Pour N = 7, heights = [10,5,8,3,25,7,9], daySpeed = [2,3,2,4,5,3,2], nightSpeed = [1,2,1,3,1,2,0], la sortie est [4,2,6,7,5,3,1].

// Si j'ai bien compris, pendant la journée ils font la course et pendant la nuit ils dorment et donc redescendent à cause de la gravité.

let heights = []
let Snail = {
  snailPoleHeight: 0,
  snailDaySpeed: 0,
  snailNightSpeed: 0,
  snailTravelTime: 0,
}

function travelingSnails(N) {
  let arrivalOrder = []
  let daySpeed = []
  let nightSpeed = []
  let snails = []

  for (let i = 0; i < N; ++i) {
    // Creating a new snail
    snails.push(Snail)
    
    // Filling our arrays with random integers between 1 and 10 (for simplicity's sake):
    heights.push(Math.round(Math.random() * 10) + 1)
    daySpeed.push(Math.round(Math.random() * 10) + 1)
    nightSpeed.push(Math.round(Math.random() * -10) - 1) // Since the snails are "falling down" during the night, we'll use negative speeds
  
    // Assigning the heights, dayspeed and nightspeed to our new snail:
    snails[i].snailPoleHeight = heights[i]
    snails[i].snailDaySpeed = daySpeed[i]
    snails[i].snailNightSpeed = nightSpeed[i]
  }

  console.log(snails)

  // Calculating how many days it takes each snail to arrive to the top of its pole:
  for (let i = 0; i < snails.length; ++i) {
    snails[i].snailTravelTime = -snailPoleHeight + snailDaySpeed + snailNightSpeed
  }

  // Ordering the arrivalOrder array according to each snail's travel time:
  snails.sort((a, b) => a.snailTravelTime - b.snailTravelTime)

}