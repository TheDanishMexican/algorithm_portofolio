# Bubble sort algoritme

## Beskrivelse:

Bubble sort sammenligner to "naboelementer" ad gangen og bytter rundt på dem, hvis det første element er større end det efterfølgende. Denne process gentages for alle elementer i den givne liste og resulterer i at de "største" elementer placers til sidst i listen. For hver gennemgang af listen formindskes størrelsen af gennemgangen, da man kan gå ud fra at det "sidste" element fra den forrige gennemgang altid vil være det største element.

## Pesudokode:

```Pseudo

function bubbleSort(arr):
// Ydre loop: styrer antallet af passes
log("Starter iteration i+1 af det ydre loop")

        // Indre loop: sammenligner naboelementer i den usorterede liste
            keyValue = array[j]
            element2 = array[j + 1]

            print("Starter iteration j+1 af det indre loop, sammenligner keyValue")

            if keyValue > element2:
                print("Swap keyValue med element2, da det er større")
                // Swap elementerne
                array[j] = element2
                array[j + 1] = keyValue

            // Simuler delay for visualisering
            delay 500 ms

    return arr
```

## Big-O:

I det værste tilfælde, når listen er helt usorteret, skal algoritmen gennemgå hele listen mange gange. Hver gang den kører igennem listen, sammenlignes de fleste af elementerne og byttes rundt. Det betyder, at algoritmen kigger på næsten hvert element i flere omgange, hvilket resulterer i, at antallet af operationer stiger hurtigt, jo længere listen er.

Derfor, i værste tilfælde, har Bubble Sort en tidskompleksitet på O(n²), hvilket betyder, at køretiden vokser hurtigt, når listen bliver længere.

## Links

[Wikipedia - Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
