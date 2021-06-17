// Quelques infos générales!
// 1. En JS je préfère ne pas mettre de ";" non seulement parce que ce n'est pas obligatoire mais aussi parce que je sais que je vais
//    forcémment en oublier un quelque part (et je n'aurais pas d'erreur) - donc je préfère n'en mettre nulle part. Bien évidemment je m'adapterais à vos standards et si
//    vous codez avec des ";" je le ferais sans aucun soucis.

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